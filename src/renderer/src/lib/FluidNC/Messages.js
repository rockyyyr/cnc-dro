const STATUS = '<';
const MSG = '[MSG';
const PROBE = '[PRB';

export const MessageType = {
    STATUS: 'status',
    INFO: 'info',
    GENERIC: 'generic',
    PROBE: 'probe',
    ACK: 'acknowledge',
};

export const MessageLevels = {
    INFO: 'INFO',
    ALARM: 'ALARM',
    ERROR: 'ERR',
};

const roundTo = (value, precision) => {
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
};

const parsePosition = positionString => {
    if (!positionString) {
        return null;
    }
    const [x, y, z] = positionString
        .split(',')
        .map(coord => parseFloat(coord));

    return { x, y, z };
};

const parseSpeeds = speedsString => {
    if (!speedsString) {
        return null;
    }
    const [feedrate, spindleSpeed] = speedsString
        .replace(/\r\n$/, '')
        .split(',')
        .map(speed => parseFloat(speed));
    return { feedrate, spindleSpeed };
};

const parseStateMessage = message => {
    const data = message
        .replaceAll('<', '')
        .replaceAll('>', '')
        .split('|');

    const state = data[0]?.split(':');

    const status = {
        state: state[0],
        substate: state[1],
    };

    for (const item of data) {
        const [key, value] = item.split(':');

        if (key && value) {
            if (['WPos', 'MPos', 'WCO'].includes(key)) {
                status[key] = parsePosition(value);
            } else if (key === 'FS') {
                status[key] = parseSpeeds(value);
            } else if (key === 'Pn') {
                status[key] = value;
            }
        }
    }

    return {
        type: MessageType.STATUS,
        state: status.state,
        substate: status.substate,
        workPosition: !status.WPos ? null : {
            x: status.WPos.x,
            y: status.WPos.y,
            z: status.WPos.z,
        },
        machinePosition: (!status.WPos || !status.WCO) ? null : {
            x: roundTo(status.WPos.x + status.WCO.x, 3),
            y: roundTo(status.WPos.y + status.WCO.y, 3),
            z: roundTo(status.WPos.z + status.WCO.z, 3),
        },
        limits: !status.Pn ? null : {
            x: status.Pn.includes('X'),
            y: status.Pn.includes('Y'),
            z: status.Pn.includes('Z'),
        },
        feedrate: status.FS?.feedrate,
        spindleSpeed: status.FS?.spindleSpeed,
    };
};

const parseInfoMessage = message => {
    const data = message
        .replaceAll('[MSG:', '')
        .replaceAll(']', '')
        .split(':');

    return {
        type: MessageType.INFO,
        level: data[0]?.trim(),
        value: (data[1] + (data[2] || '')).trim(),
    };
};

const parseProbeMessage = message => {
    const data = message
        .replaceAll('[PRB:', '')
        .replaceAll(']', '')
        .split(':');

    return {
        type: MessageType.PROBE,
        level: MessageLevels.INFO,
        value: parsePosition(data[0]),
        success: data[1] && !!parseInt(data[1]),
    };
};

const parseGeneric = message => {
    const formatted = message.replace(/\r\n$/, '');
    const type = formatted === 'ok' ? MessageType.ACK : MessageType.GENERIC;
    return {
        type,
        value: formatted
    };
};

const parseMessage = message => {
    if (message.startsWith(STATUS)) {
        return parseStateMessage(message);

    } else if (message.startsWith(MSG)) {
        return parseInfoMessage(message);

    } else if (message.startsWith(PROBE)) {
        return parseProbeMessage(message);

    } else {
        return parseGeneric(message);
    }
};


export const parseSerialMessage = message => {
    return parseMessage(message);
};

export const parseWebsocketMessage = async event => {
    if (typeof event.data === 'string') {
        return parseGeneric(event.data);

    } else {
        const buffer = await event.data.arrayBuffer();
        const text = new TextDecoder('utf-8').decode(buffer);
        return parseMessage(text);
    }
};


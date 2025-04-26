const STATE = '<';
const MSG = '[';

export const MessageType = {
    STATE: 'state',
    INFO: 'info',
    GENERIC: 'generic',
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

    const status = {
        state: data[0]
    };

    for (const item of data) {
        const [key, value] = item.split(':');

        if (key && value) {
            if (['WPos', 'MPos', 'WCO'].includes(key)) {
                status[key] = parsePosition(value);
            } else if (key === 'FS') {
                status[key] = parseSpeeds(value);
            }
        }
    }

    return {
        type: MessageType.STATE,
        state: status.state,
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
        feedrate: status.FS.feedrate || null,
        spindleSpeed: status.FS.spindleSpeed || null,
    };
};

const parseInfoMessage = message => {
    const data = message
        .replaceAll('[', '')
        .replaceAll(']', '')
        .split(':');

    return {
        type: MessageType.INFO,
        level: data[0],
        value: data[1],
    };
};

const parseMessage = message => {
    if (message.startsWith(STATE)) {
        return parseStateMessage(message);

    } else if (message.startsWith(MSG)) {
        return parseInfoMessage(message);
    }
};

export const parseSerialMessage = message => {
    return parseMessage(message);
};

export const parseWebSocketMessage = async event => {
    if (typeof event.data === 'string') {
        return {
            type: MessageType.GENERIC,
            message: event.data,
        };

    } else {
        const buffer = await event.data.arrayBuffer();
        const text = new TextDecoder('utf-8').decode(buffer);
        return parseMessage(text);
    }
};


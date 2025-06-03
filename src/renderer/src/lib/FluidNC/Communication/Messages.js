const STATUS = '<';
const INFO = '[MSG';
const PROBE = '[PRB';

export const isStatusMessage = message => message?.startsWith(STATUS);
export const isInfoMessage = message => message?.startsWith(INFO);
export const isProbeMessage = message => message?.startsWith(PROBE);

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

const LINE_TERMINATION = /\r$|\n$|\r\n$/g;

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
        .split(',')
        .map(speed => parseFloat(speed));
    return { feedrate, spindleSpeed };
};

const parseOverrides = overridesString => {
    if (!overridesString) {
        return null;
    }
    const [feedrate, rapid, spindleSpeed] = overridesString
        .split(',')
        .map(override => parseFloat(override));
    return { feedrate, rapid, spindleSpeed };
};

const parseStatusMessage = message => {
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

            } else if (key === 'Ln') {
                status[key] = parseInt(value);

            } else if (key === 'Ov') {
                status[key] = parseOverrides(value);

            } else if (['Pn', 'A'].includes(key)) {
                status[key] = value;
            }
        }
    }

    return {
        type: MessageType.STATUS,
        state: status.state,
        substate: status.substate,
        line: status.Ln,
        feedrate: status.FS?.feedrate,
        spindleSpeed: status.FS?.spindleSpeed,
        workPosition: !status.WPos ? null : {
            x: status.WPos.x,
            y: status.WPos.y,
            z: status.WPos.z,
        },
        workOffset: !status.WCO ? null : {
            x: status.WCO.x,
            y: status.WCO.y,
            z: status.WCO.z,
        },
        limits: !status.Pn ? null : {
            x: status.Pn.includes('X'),
            y: status.Pn.includes('Y'),
            z: status.Pn.includes('Z'),
            probe: status.Pn.includes('P'),
        },
        accessories: status.A
            ? {
                air: status.A.includes('F'),
                mist: status.A.includes('M'),
                spindle: status.A.includes('S'),
            }
            : status.Ov
                ? {
                    air: false,
                    mist: false,
                    spindle: false,
                }
                : null,
        overrides: !status.Ov ? null : {
            feedrate: status.Ov.feedrate || 0,
            spindleSpeed: status.Ov.spindleSpeed || 0,
            rapid: status.Ov.rapid || 0,
        }
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
        value: data[1] ? (data[1] + (data[2] || '')).trim() : data[0]?.trim(),
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
    const type = message === 'ok' ? MessageType.ACK : MessageType.GENERIC;
    return {
        type,
        value: message
    };
};

const parseMessage = rawMessage => {
    const message = rawMessage?.replace(LINE_TERMINATION, '');
    if (isStatusMessage(message)) {
        return parseStatusMessage(message);

    } else if (isInfoMessage(message)) {
        return parseInfoMessage(message);

    } else if (isProbeMessage(message)) {
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
        return parseGeneric(event?.data?.replace(LINE_TERMINATION, ''));

    } else {
        const buffer = await event.data.arrayBuffer();
        const text = new TextDecoder('utf-8').decode(buffer);
        return parseMessage(text);
    }
};


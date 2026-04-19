import * as Api from './Communication/Api';
import Comms from './Communication';

export const REPORT_INTERVAL = '$ri=';
export const UNLOCK = '$x';
export const HOME = '$h';
export const STATUS = '?';
export const RESET = '\x18';
export const HOLD = '!';
export const RESUME = '~';
export const RUN = '$sd/run=/';
export const LIST_FILES = '$sd/list';
export const DELETE_FILE = '$sd/delete=/';
export const JOG = '$J=';
export const WAIT_FOR_JOG = '\x10';
export const E_STOP = '\x84';
export const MOTOR_ENABLE = '$me';
export const MOTOR_DISABLE = '$md';

export const FEEDRATE_OVERRIDE_RESET = '\x90';
export const FEEDRATE_OVERRIDE_PLUS = '\x91';
export const FEEDRATE_OVERRIDE_MINUS = '\x92';

export const SPINDLE_OVERRIDE_RESET = '\x99';
export const SPINDLE_OVERRIDE_PLUS = '\x9A';
export const SPINDLE_OVERRIDE_MINUS = '\x9B';
export const SPINDLE_OVERRIDE_STOP = '\x9E';

export const AIR_OVERRIDE = '\xA0';
export const MIST_OVERRIDE = '\xA1';

export const clearFault = () => {
    const send = window.env.COMMS === 'serial'
        ? Comms.send
        : Api.command;

    setTimeout(() => send(MOTOR_DISABLE), 0);
    setTimeout(() => send(MOTOR_DISABLE), 100);
    setTimeout(() => send(MOTOR_ENABLE), 500);
    setTimeout(() => send(MOTOR_ENABLE), 1000);
};

export const deleteFile = filename => {
    return Comms.sendAndWait(DELETE_FILE + filename);
};

export const listFiles = () => {
    return Comms.sendAndWait(LIST_FILES);
};

export const runFile = filename => {
    return Comms.sendAndWait(RUN + filename);
};

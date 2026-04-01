import * as Api from './Communication/Api';

export const UNLOCK = '$X';
export const HOME = '$H';
export const STATUS = '?';
export const RESET = '\x18';
export const HOLD = '!';
export const RESUME = '~';
export const RUN = '$SD/Run=/';
export const JOG = '$J=';
export const WAIT_FOR_JOG = '\x10';
export const E_STOP = '\x84';
export const MOTOR_ENABLE = '$ME';
export const MOTOR_DISABLE = '$MD';

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
    setTimeout(() => Api.command(MOTOR_DISABLE), 1000);
    setTimeout(() => Api.command(MOTOR_ENABLE), 3000);
}

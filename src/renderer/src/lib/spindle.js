import { SPINDLE_CLOCKWISE, SPINDLE_COUNTERCLOCKWISE, SPINDLE_OFF } from './Gcode/Commands';
import { Comms, Commands } from './FluidNC';

export const clockwise = (rpm, override) => (rpm || override) && Comms.send(
    override
        ? Commands.SPINDLE_OVERRIDE_RESET
        : `${SPINDLE_CLOCKWISE} S${rpm}`
);

export const counterClockwise = (rpm, override) => (rpm || override) && Comms.send(
    override
        ? Commands.SPINDLE_OVERRIDE_RESET
        : `${SPINDLE_COUNTERCLOCKWISE} S${rpm}`
);

export const off = override => Comms.send(
    override
        ? Commands.SPINDLE_OVERRIDE_STOP
        : SPINDLE_OFF
);

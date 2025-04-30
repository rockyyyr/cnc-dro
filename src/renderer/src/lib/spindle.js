import { SPINDLE_CLOCKWISE, SPINDLE_COUNTERCLOCKWISE, SPINDLE_OFF } from './Gcode/Commands';
import { Comms } from './FluidNC';

export const clockwise = rpm => rpm && Comms.send(`${SPINDLE_CLOCKWISE} S${rpm}`);
export const counterClockwise = rpm => rpm && Comms.send(`${SPINDLE_COUNTERCLOCKWISE} S${rpm}`);
export const off = () => Comms.send(SPINDLE_OFF);

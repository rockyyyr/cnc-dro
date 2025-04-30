import { Comms } from './FluidNC';
import { OFFSET, SET_COORDS } from './Gcode/Commands';

export const zeroAxis = axis => Comms.send(`${OFFSET} ${SET_COORDS} P0 ${axis.toUpperCase()}0`);

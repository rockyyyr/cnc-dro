import { Api } from './FluidNC';
import { OFFSET, SET_COORDS } from './Gcode/Commands';

export const zeroAxis = axis => Api.command(`${OFFSET} ${SET_COORDS} P0 ${axis}0`);

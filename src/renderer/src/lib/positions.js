import { Comms } from './FluidNC';
import { OFFSET, SET_COORDS } from './Gcode/Commands';

export const zeroWorkAxis = axis => Comms.send(`${OFFSET} ${SET_COORDS} P0 ${axis.toUpperCase()}0`);

export const constrainPosition = ({ min, max }, mPos, callback) => {
    if (mPos.x < min.x || mPos.x > max.x) {
        return callback(`X position out of bounds: ${mPos.x} (min: ${min.x}, max: ${max.x})`);
    }

    if (mPos.y < min.y || mPos.y > max.y) {
        return callback(`Y position out of bounds: ${mPos.y} (min: ${min.y}, max: ${max.y})`);
    }
};
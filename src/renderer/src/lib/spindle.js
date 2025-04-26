import { SPINDLE_CLOCKWISE, SPINDLE_COUNTERCLOCKWISE, SPINDLE_OFF } from './Gcode/Commands';
import { Api } from './FluidNC';

export const clockwise = rpm => rpm && Api.command(`${SPINDLE_CLOCKWISE} S${rpm}`);
export const counterClockwise = rpm => rpm && Api.command(`${SPINDLE_COUNTERCLOCKWISE} S${rpm}`);
export const off = () => Api.command(SPINDLE_OFF);

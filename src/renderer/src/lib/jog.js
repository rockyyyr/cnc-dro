import { MM, REL, ABS, RAPID } from './Gcode/Commands';
import { Api } from './FluidNC';

const jog = (directions, distance) => {
    if (!distance) {
        return;
    }

    const keys = Object.keys(directions);
    const command = [REL, RAPID, MM];

    for (const key of keys) {
        command.push(`${key.toUpperCase()}+${directions[key] * distance}`);
    }
    return command.join(' ');
};

const goTo = axes => {
    const command = [MM, ABS, RAPID];
    const keys = Object.keys(axes);

    for (const key of keys) {
        command.push(`${key.toUpperCase()}${axes[key]}`);
    }
    return command.join(' ');
};

export const left = distance => Api.command(jog({ x: -1 }, distance));
export const right = distance => Api.command(jog({ x: 1 }, distance));
export const up = distance => Api.command(jog({ y: 1 }, distance));
export const down = distance => Api.command(jog({ y: -1 }, distance));
export const leftUp = distance => Api.command(jog({ x: -1, y: 1 }, distance));
export const leftDown = distance => Api.command(jog({ x: -1, y: -1 }, distance));
export const rightUp = distance => Api.command(jog({ x: 1, y: 1 }, distance));
export const rightDown = distance => Api.command(jog({ x: 1, y: -1 }, distance));
export const zUp = distance => Api.command(jog({ z: 1 }, distance));
export const zDown = distance => Api.command(jog({ z: -1 }, distance));
export const xyZero = () => Api.command(goTo({ x: 0, y: 0 }));

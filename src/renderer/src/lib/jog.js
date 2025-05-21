import { MM, ABS, FEEDRATE, REL } from './Gcode/Commands';
import { Commands, Comms } from './FluidNC';

const jog = (directions, distance) => {
    if (!distance) {
        return;
    }

    const command = [REL, MM];

    const keys = Object.keys(directions);

    for (const key of keys) {
        command.push(`${key.toUpperCase()}${directions[key] * distance}`);
    }

    command.push(`${FEEDRATE}3000`);

    return Commands.JOG + command.join(' ');
};

const goToPosition = axes => {
    const command = [MM, ABS];
    const keys = Object.keys(axes);

    for (const key of keys) {
        command.push(`${key.toUpperCase()}${axes[key]}`);
    }
    command.push(`${FEEDRATE}3000`);
    return Commands.JOG + command.join(' ');
};

export const left = distance => Comms.send(jog({ x: -1 }, distance));
export const right = distance => Comms.send(jog({ x: 1 }, distance));
export const up = distance => Comms.send(jog({ y: 1 }, distance));
export const down = distance => Comms.send(jog({ y: -1 }, distance));
export const leftUp = distance => Comms.send(jog({ x: -1, y: 1 }, distance));
export const leftDown = distance => Comms.send(jog({ x: -1, y: -1 }, distance));
export const rightUp = distance => Comms.send(jog({ x: 1, y: 1 }, distance));
export const rightDown = distance => Comms.send(jog({ x: 1, y: -1 }, distance));
export const zUp = distance => Comms.send(jog({ z: 1 }, distance));
export const zDown = distance => Comms.send(jog({ z: -1 }, distance));
export const xyZero = () => Comms.send(goToPosition({ x: 0, y: 0 }));
export const goTo = axes => Comms.send(goToPosition(axes));

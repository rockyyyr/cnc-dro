import { MM, ABS, FEEDRATE, REL, MACHINE_COORD } from './Gcode/Commands';
import { Commands, Comms, Constants } from './FluidNC';
import * as Storage from '../util/storage';

export const StorageNames = {
    JogFeedrate: 'jog/feedrate'
};

let feedrate = Number(Storage.get(StorageNames.JogFeedrate));
const listeners = new Set();

export const getFeedrate = () => feedrate;
export const setFeedrate = value => {
    feedrate = value;
    Storage.save(value, StorageNames.JogFeedrate);
    listeners.forEach(listener => listener());
};

export const subscribeFeedrate = listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

const f = feedrate => `${FEEDRATE}${feedrate || Constants.MAX_RAPID}`;
const MACHINE_POSITION = true;

const jog = (directions, distance) => {
    if (!distance) {
        return;
    }

    const command = [REL, MM];

    for (const key of Object.keys(directions)) {
        command.push(`${key.toUpperCase()}${directions[key] * distance}`);
    }

    command.push(f(feedrate));
    return Commands.JOG + command.join(' ');
};

const goToPosition = (axes, machinePosition) => {
    const command = [];

    if (machinePosition) {
        command.push(MACHINE_COORD);
    }

    command.push(ABS, MM);

    for (const key of Object.keys(axes)) {
        command.push(`${key.toUpperCase()}${axes[key]}`);
    }

    command.push(f(feedrate));
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
export const goToMachine = axes => Comms.send(goToPosition(axes, MACHINE_POSITION));

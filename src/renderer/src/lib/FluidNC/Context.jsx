import { createContext } from 'react';

const FluidNCContext = createContext({
    state: null,
    substate: null,
    limits: null,
    workPosition: null,
    machinePostion: null,
    workOffset: null,
    feedrate: null,
    spindleSpeed: null,
    message: null,
    notification: null,
    probeResults: null,
    accessories: null,
    line: null,
    overrides: null
});

export default FluidNCContext;

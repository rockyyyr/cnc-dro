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
    probeResults: null
});

export default FluidNCContext;

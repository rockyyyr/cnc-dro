import { createContext } from 'react';

const FluidNCContext = createContext({
    state: null,
    alarm: null,
    workPosition: null,
    machinePostion: null,
    feedrate: null,
    spindleSpeed: null
});

export default FluidNCContext;

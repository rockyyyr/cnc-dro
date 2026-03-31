import { createContext } from 'react';

const FluidNCContext = createContext({
    state: null,
    substate: null,
    message: null,
    notification: null,
    probeResults: null,
    limits: null,
    inputs: null,
    feedrate: null,
    spindleSpeed: null,
    line: null,
    overrides: null,
    accessories: null,
    workPosition: null,
    machinePostion: null,
    workOffset: null,
    vacuumMode: null,
    enableVacuumMode: false,
    setAir: null,
    setMist: null,
    disableMovement: false,
    hasFault: false
});

export default FluidNCContext;

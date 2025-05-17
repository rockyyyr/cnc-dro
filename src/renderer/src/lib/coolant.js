import { Comms } from './FluidNC';

export const enableAir = () => Comms.send('M8');
export const disableAir = () => Comms.send('M9');

export const toggleAir = () => Comms.send('#T-FLOODCOOLANT#');
export const toggleMist = () => Comms.send('#T-MISTCOOLANT#');

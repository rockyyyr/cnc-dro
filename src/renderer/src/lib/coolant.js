import { Comms } from './FluidNC';

export const enableAir = () => Comms.send('M62 P0');
export const disableAir = () => Comms.send('M63 P0');

export const toggleAir = () => Comms.send('#T-FLOODCOOLANT#');
export const toggleMist = () => Comms.send('#T-MISTCOOLANT#');

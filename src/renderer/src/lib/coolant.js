import { Comms } from './FluidNC';

export const toggleAir = () => Comms.send('#T-FLOODCOOLANT#');
export const toggleMist = () => Comms.send('#T-MISTCOOLANT#');

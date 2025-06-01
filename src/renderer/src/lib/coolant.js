import { Comms, Commands } from './FluidNC';

export const enableAir = override => Comms.send(override ? Commands.AIR_OVERRIDE : 'M8');
export const disableAir = override => Comms.send(override ? Commands.AIR_OVERRIDE : 'M9');

export const toggleAir = () => Comms.send('#T-FLOODCOOLANT#');
export const toggleMist = () => Comms.send('#T-MISTCOOLANT#');

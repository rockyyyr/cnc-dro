import { Comms, Commands } from './FluidNC';

export const run = filename => Comms.send(Commands.RUN + filename);

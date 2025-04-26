import { Api, Commands } from './FluidNC';

export const run = filename => Api.command(Commands.RUN + filename);
export const abort = () => Api.command(Commands.RESET);
import { Comms, Commands } from './FluidNC';

export const run = filename => Comms.send(Commands.RUN + filename);
export const abort = setters => {
    Comms.send(Commands.AIR_OVERRIDE);
    Comms.send(Commands.MIST_OVERRIDE);

    if (setters) {
        setters.forEach(setter => setter(false));
    }

    Comms.send(Commands.RESET);
};

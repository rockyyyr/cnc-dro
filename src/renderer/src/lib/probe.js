import { FEEDRATE, PROBE, PROBE_HEIGHT, REL } from './Gcode/Commands';

export const probeZ = probeHeight => {
    return `${PROBE} ${REL} Z-20 ${FEEDRATE}80 ${PROBE_HEIGHT}${probeHeight}`;
};

export const probeXY = (probeWidth, direction) => {
};

export const probeX = (probeWidth, direction) => {
};

export const probeY = (probeWidth, direction) => {
};

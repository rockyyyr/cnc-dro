import { FEEDRATE, PROBE, REL, ABS, OFFSET, SET_COORDS } from './Gcode/Commands';
import { Comms } from './FluidNC';
import { JOG, WAIT_FOR_JOG } from './FluidNC/Commands';

export const probeZ = probeHeight => {
    const command = [
        REL,
        `${PROBE} Z-20 ${FEEDRATE}20`,
        ABS,
        `${OFFSET} ${SET_COORDS} P1 Z${probeHeight}`,
        `${JOG}${REL} Z5 F1500`
    ];

    return Comms.send(command);
};

export const probeXY = (probeWidth, direction) => {

};

export const probeX = (probeWidth, direction) => {
    const command = [
        `${JOG}${REL} Z15 ${FEEDRATE}2500`,
        `${JOG}${REL} X${15 * direction.x} ${FEEDRATE}2500`,
        `${JOG}${REL} Z-15 ${FEEDRATE}2500`,
        WAIT_FOR_JOG,
        REL,
        `${PROBE} X${20 * -direction.x} ${FEEDRATE}20`,
        ABS,
        `${OFFSET} ${SET_COORDS} P1 X${probeWidth * direction.x}`,
        `${JOG}${REL} X${5 * direction.x} ${FEEDRATE}2500`,
    ];
    return Comms.send(command);
};

export const probeY = (probeWidth, direction) => {
    const command = [
        `${JOG}${REL} Z15 ${FEEDRATE}2500`,
        `${JOG}${REL} Y${15 * direction.y} ${FEEDRATE}2500`,
        `${JOG}${REL} Z-15 ${FEEDRATE}2500`,
        WAIT_FOR_JOG,
        REL,
        `${PROBE} Y${20 * -direction.y} ${FEEDRATE}20`,
        ABS,
        `${OFFSET} ${SET_COORDS} P1 Y${probeWidth * direction.y}`,
        `${JOG}${REL} Y${5 * direction.y} ${FEEDRATE}2500`
    ];
    return Comms.send(command);
};

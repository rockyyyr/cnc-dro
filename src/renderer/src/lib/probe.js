import { FEEDRATE, PROBE, REL, ABS, OFFSET, SET_COORDS, RAPID } from './Gcode/Commands';
import { Comms } from './FluidNC';

const seekProbeSpeed = 300;

export const probeZ = probeHeight => {
    return Comms.send(`
        REL
        ${PROBE} Z-20 ${FEEDRATE}${seekProbeSpeed}
        ${RAPID} Z2
        ${PROBE} Z-3 ${FEEDRATE}50
        ${OFFSET} ${SET_COORDS} P1 Z${probeHeight}
        ${RAPID} Z5
        ABS
    `);
};

const probeHorizontal = (probeWidth, toolDiameter, direction, axis) => {
    const toolRadius = toolDiameter / 2;
    const offset = probeWidth + toolRadius;
    const pos = amount => `${axis}${amount * direction}`;

    return Comms.send([
        REL,
        `${RAPID} Z15`,
        `${RAPID} ${pos(15)}`,
        `${RAPID} Z-15`,
        `${PROBE} ${pos(-20)} F${seekProbeSpeed}`,
        `${RAPID} ${pos(2)}`,
        `${PROBE} ${pos(-3)} F50`,
        `${OFFSET} ${SET_COORDS} P1 ${pos(offset)}`,
        `${RAPID} ${pos(5)}`,
        ABS,
    ]);
};

export const probeX = (probeWidth, toolDiameter, directions) => {
    return probeHorizontal(probeWidth, toolDiameter, directions.x, 'X');
};

export const probeY = (probeWidth, toolDiameter, directions) => {
    return probeHorizontal(probeWidth, toolDiameter, directions.y, 'Y');
};

export const probeXY = (probeWidth, toolDiameter, directions) => {
    probeX(probeWidth, toolDiameter, directions);

    Comms.send(`
        ${REL}
        ${RAPID} Z15
        ${RAPID} X${10 * directions.x}
    `);

    probeY(probeWidth, toolDiameter, directions);
};

export const probeWithTouchProbe = direction => {
    return probeXY(0, 2, direction);
};

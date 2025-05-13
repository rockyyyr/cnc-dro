import { PROBE, REL, ABS, OFFSET, SET_COORDS, RAPID, MACHINE_COORD, WORK_COORD } from './Gcode/Commands';
import { Comms } from './FluidNC';

const seekProbeSpeed = 300;
const feedProbeSpeed = 50;
const ToolSetterPosition = {
    x: 25,
    y: 350,
    z: -2
};

export const probeZ = (probeHeight, retract) => {
    return Comms.send(`
        ${REL}
        ${PROBE} Z-20 F${seekProbeSpeed}
        ${RAPID} Z2
        ${PROBE} Z-3 F${feedProbeSpeed}
        ${OFFSET} ${SET_COORDS} P1 Z${probeHeight}
        ${RAPID} Z${retract || 5}
        ${ABS}
    `);
};

const probeHorizontal = (probeWidth, toolDiameter, direction, axis) => {
    const toolRadius = toolDiameter / 2;
    const offset = probeWidth + toolRadius;
    const pos = amount => `${axis}${amount * direction}`;

    return Comms.send([
        REL,
        // `${RAPID} Z15`,
        // `${RAPID} ${pos(15)}`,
        // `${RAPID} Z-15`,
        `${PROBE} ${pos(-40)} F${seekProbeSpeed}`,
        `${RAPID} ${pos(2)}`,
        `${PROBE} ${pos(-3)} F${feedProbeSpeed}`,
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
    Comms.send(`
        ${REL}
        ${RAPID} Z10
        ${RAPID} X${30 * directions.x}
        ${RAPID} Z-15
    `);

    probeX(probeWidth, toolDiameter, directions);

    Comms.send(`
        ${REL}
        ${RAPID} Z15
        ${RAPID} X${22.5 * -directions.x}
    `);

    probeY(probeWidth, toolDiameter, directions);
};

export const probeWithTouchProbe = direction => {
    return probeXY(0, 2, direction);
};

export const probeWithToolSetter = () => {
    Comms.send(`
        ${ABS}
        ${MACHINE_COORD}
        ${RAPID} Z15
        ${RAPID} X${ToolSetterPosition.x} Y${ToolSetterPosition.y}
        ${RAPID} Z-100
        ${WORK_COORD}
    `);

    const retract = 50;
    return probeZ(ToolSetterPosition.z, retract);
};
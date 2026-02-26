import { PROBE, REL, ABS, OFFSET, SET_COORDS, RAPID, MACHINE_COORD, WORK_COORD } from './Gcode/Commands';
import { Comms } from './FluidNC';

const seekProbeSpeed = 150;
const feedProbeSpeed = 30;
const ToolSetterPosition = {
    x: 25,
    y: 350,
    z: -2
};

const CORRECTION = 0.12;

export const probeZ = (probeHeight, retract, setCoords = true) => {
    return Comms.send(`
        ${REL}
        ${PROBE} Z-20 F${seekProbeSpeed}
        ${RAPID} Z2
        ${PROBE} Z-3 F${feedProbeSpeed}
        ${setCoords
            ? `${OFFSET} ${SET_COORDS} P1 Z${probeHeight - CORRECTION}`
            : ''
        }
        ${RAPID} Z${retract || 5}
        ${ABS}
    `);
};

const probeHorizontal = (toolDiameter, direction, axis, setCoords = true) => {
    const toolRadius = toolDiameter / 2;
    const offset = toolRadius;
    const pos = amount => `${axis}${amount * direction}`;

    return Comms.send(`
        ${REL}
        ${PROBE} ${pos(-40)} F${seekProbeSpeed}
        ${RAPID} ${pos(2)}
        ${PROBE} ${pos(-3)} F${feedProbeSpeed}
        ${setCoords
            ? `${OFFSET} ${SET_COORDS} P1 ${pos(offset)}`
            : ''
        }
        ${RAPID} ${pos(5)}
        ${ABS}
    `);
};

export const probeX = (toolDiameter, direction) => {
    return probeHorizontal(toolDiameter, direction, 'X');
};

export const probeY = (toolDiameter, direction) => {
    return probeHorizontal(toolDiameter, direction, 'Y');
};

export const probeXY = (toolDiameter, directions) => {
    Comms.send(`
        ${REL}
        ${RAPID} Z10
        ${RAPID} X${30 * directions.x}
        ${RAPID} Z-15
    `);

    probeX(toolDiameter, directions);

    Comms.send(`
        ${REL}
        ${RAPID} Z15
        ${RAPID} X${22.5 * -directions.x}
        ${RAPID} Y${30 * directions.y}
        ${RAPID} Z-15
    `);

    probeY(toolDiameter, directions);
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

export const measureX = (toolDiameter, direction) => {
    return probeHorizontal(toolDiameter, direction, 'X', false);
};

export const measureY = (toolDiameter, direction) => {
    return probeHorizontal(toolDiameter, direction, 'Y', false);
};

export const measureZ = () => {
    return probeZ(0, 3, false);
};
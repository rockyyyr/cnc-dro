import { setIfExists } from "../../util/helpers";

const FLUIDNC_IP = window.env.FLUIDNC_IP;
export const WS = `ws://${FLUIDNC_IP}:${window.env.FLUIDNC_WEBSOCKET_PORT}`;
export const URL = `http://${FLUIDNC_IP}:80`;
export const REPORT_INTERVAL = 75;
export const PING_INTERVAL = 1000;

const Config = await window.config.load();
const { dimensions, positions } = Config;

export const ConfigLevels = {
    DEFAULT: 'default',
    USER: 'user',
    FLUIDNC: 'fluidnc'
};

export const CONFIG_LEVEL = Config.configLevel;

export const RAPID_X = setIfExists(Config.rapidX, 3200);
export const RAPID_Y = setIfExists(Config.rapidY, 3200);
export const RAPID_Z = setIfExists(Config.rapidZ, 3200);
export const MAX_RAPID = Math.max(RAPID_X, RAPID_Y, RAPID_Z);

export const Dimensions = {
    Machine: {
        x: setIfExists(dimensions.machine.x, 300),
        y: setIfExists(dimensions.machine.y, 300),
        z: setIfExists(dimensions.machine.z, 100),
    },
    TouchProbe: {
        diameter: setIfExists(dimensions.touchProbe.diameter, 2),
        width: setIfExists(dimensions.touchProbe.width, 0),
        height: setIfExists(dimensions.touchProbe.height, 0)
    },
    TouchPlate: {
        diameter: setIfExists(dimensions.touchPlate.diameter, 0),
        width: setIfExists(dimensions.touchPlate.width, 10),
        height: setIfExists(dimensions.touchPlate.height, 10)
    }
};

export const Directions = {
    Up: 1,
    Down: -1,
    Left: -1,
    Right: 1
};

export const ParkPosition = {
    x: Dimensions.Machine.x / 2,
    y: Dimensions.Machine.y,
    z: -5,
};

export const ToolChangePosition = {
    x: Dimensions.Machine.x / 2,
    y: setIfExists(positions.toolChangePosition.y, 50),
    z: -5
};

export const VacuumMode = {
    min: {
        x: 55,
        y: 85,
    },
    max: {
        x: 353,
        y: 420,
    }
};

export const ToolSetterPosition = {
    x: setIfExists(positions.toolSetterPosition.x, 0),
    y: setIfExists(positions.toolSetterPosition.y, 0)
};

export const StorageNames = {

};
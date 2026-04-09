import { setIfExists } from "../../util/helpers";

const FLUIDNC_IP = window.env.FLUIDNC_IP;
export const WS = `ws://${FLUIDNC_IP}:${window.env.FLUIDNC_WEBSOCKET_PORT}`;
export const URL = `http://${FLUIDNC_IP}:80`;
export const REPORT_INTERVAL = 75;
export const PING_INTERVAL = 1000;

const Config = window.config.load() || {};

export const RAPID_SPEED = setIfExists(Config.rapidSpeed, 100000);

export const Dimensions = {
    Machine: {
        x: setIfExists(Config.dimensions?.machine?.x, 300),
        y: setIfExists(Config.dimensions?.machine?.y, 300),
        z: setIfExists(Config.dimensions?.machine?.z, 100),
    },
    TouchProbe: {
        diameter: setIfExists(Config.dimensions?.touchProbe?.diameter, 2),
        width: setIfExists(Config.dimensions?.touchProbe.width, 0),
        height: setIfExists(Config.dimensions?.touchProbe?.height, 0)
    },
    TouchPlate: {
        diameter: setIfExists(Config.dimensions?.touchPlate?.diameter, 0),
        width: setIfExists(Config.dimensions?.touchPlate?.width, 10),
        height: setIfExists(Config.dimensions?.touchPlate?.height, 10)
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
    y: setIfExists(Config.positions?.toolChangePosition?.y, 50),
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
    x: setIfExists(Config.positions?.toolSetterPosition?.x, 0),
    y: setIfExists(Config.positions?.toolSetterPosition?.y, 0)
};

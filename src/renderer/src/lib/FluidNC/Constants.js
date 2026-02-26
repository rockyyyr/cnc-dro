export const WS = 'ws://10.0.0.178:81';
export const URL = 'http://10.0.0.178:80';
export const REPORT_INTERVAL = 75;
export const PING_INTERVAL = 100;

export const RAPID_SPEED = 3200;

export const Dimensions = {
    Machine: {
        x: 408,
        y: 420,
        z: 148,
    },
    TouchProbe: {
        diameter: 2,
        width: 0,
        height: 0,
    },
    TouchPlate: {
        diameter: 0,
        width: 10,
        height: 10,
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
    y: 50,
    z: -5,
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
    x: 0,
    y: 0,
};

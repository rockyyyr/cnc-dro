import rpio from 'rpio';

class DriverFaults {

    constructor() {
        this.X_PIN = 1;
        this.Y_PIN = 2;
        this.A_PIN = 3;
        this.Z_PIN = 4;

        this.pins = {
            [this.X_PIN]: 'x',
            [this.Y_PIN]: 'y',
            [this.A_PIN]: 'a',
            [this.Z_PIN]: 'z'
        };

        this.faults = {
            x: 0,
            y: 0,
            a: 0,
            z: 0
        };
    }

    init() {
        Object.keys(this.pins).forEach(pin => {
            rpio.open(pin, rpio.INPUT, rpio.PULL_UP);
        });
    }

    poll() {
        this.pins.forEach(pin => {
            rpio.poll(pin, this.updatePinState, rpio.POLL_BOTH);
        });
    }

    updatePinState(pin) {
        const state = rpio.read(pin);
        this.faults[this.pins[pin]] = !state;
        console.log(this.faults);
    }
}

const driverFaults = new DriverFaults();
driverFaults.init();
driverFaults.poll();

export default driverFaults;

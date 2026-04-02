import rpio from 'rpio';
import { EventEmitter } from 'events';

class DriverFaults {

    constructor() {
        this.events = new EventEmitter();
        this.X_PIN = 11; //gpio.17
        this.Y_PIN = 13; //gpio.27
        this.A_PIN = 15; //gpio.22
        this.Z_PIN = 16; //gpoi.23

        this.pins = {
            [this.X_PIN]: 'x',
            [this.Y_PIN]: 'y',
            [this.A_PIN]: 'a',
            [this.Z_PIN]: 'z'
        };

        this.faults = {
            x: false,
            y: false,
            a: false,
            z: false
        };
    }

    getState() {
        return this.faults;
    }

    onChange(callback) {
        this.events.on('change', callback);
        return () => this.events.off('change', callback);
    }

    init() {
        Object.keys(this.pins).forEach(pin => {
            rpio.open(pin, rpio.INPUT, rpio.PULL_UP);
        });
    }

    poll() {
        Object.keys(this.pins).forEach(pin => {
            rpio.poll(pin, this.updatePinState.bind(this), rpio.POLL_BOTH);
        });
    }

    updatePinState(pin) {
        const state = rpio.read(pin);
        const axis = this.pins[pin];

        const nextFault = !state;

        if (this.faults[axis] === nextFault) {
            return;
        }

        this.faults[axis] = nextFault;
        this.events.emit('change', this.getState());
    }
}

const driverFaults = new DriverFaults();
driverFaults.init();
driverFaults.poll();

export default driverFaults;

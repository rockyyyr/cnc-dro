import { Constants } from '../lib/FluidNC';
import * as Jog from '../lib/jog';
import * as Probe from '../lib/probe';

export default class ExternalNumpad {

    constructor() {
        this.distance = 5;

        this.commands = {
            'NumpadSubtract': () => Jog.zUp(this.distance),
            'NumpadAdd': () => Jog.zDown(this.distance),
            'Numpad4': () => Jog.left(this.distance),
            'Numpad6': () => Jog.right(this.distance),
            'Numpad8': () => Jog.up(this.distance),
            'Numpad2': () => Jog.down(this.distance),
            'Numpad1': () => Jog.leftDown(this.distance),
            'Numpad7': () => Jog.leftUp(this.distance),
            'Numpad3': () => Jog.rightDown(this.distance),
            'Numpad9': () => Jog.rightUp(this.distance),
            'Numpad5': () => Jog.xyZero(),
            'Numpad0': () => Jog.goToMachine(Constants.ToolChangePosition),
            'NumpadDecimal': () => Probe.probeZ(10),
            'NumLock': () => this.distance = 0.1,
            'NumpadDivide': () => this.distance = 1,
            'NumpadMultiply': () => this.distance = 5,
            'Backspace': () => this.distance = 10
        };
    }

    async open() {
        window.addEventListener('keyup', event => {
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD || ['Backspace', 'NumLock'].includes(event.code)) {
                this.createCommand(event.code);
            }
        });
    }

    createCommand(key) {
        const command = this.commands[key];
        if (command) {
            command();
        }
    }
}


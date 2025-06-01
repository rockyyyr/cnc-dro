const { NUMPAD_VENDOR_ID, NUMPAD_PRODUCT_ID } = window.env;

import * as Jog from '../lib/jog';
import * as Probe from '../lib/probe';

export default class ExternalNumpad {

    constructor() {
        this.distance = 5;

        // this.commands = {
        //     87: () => this.move('Z', -this.distance), // +
        //     86: () => this.move('Z', this.distance), // -
        //     92: () => this.move('X', -this.distance), // arrow: left
        //     94: () => this.move('X', this.distance), // arrow: right
        //     96: () => this.move('Y', -this.distance), // arrow: up
        //     90: () => this.move('Y', this.distance), // arrow: down
        //     89: () => this.move('X', -this.distance, 'Y', -this.distance), // arrow: End
        //     97: () => this.move('X', this.distance, 'Y', this.distance), // arrow: Page up
        //     91: () => this.move('X', this.distance, 'Y', -this.distance), // arrow: Page Down
        //     95: () => this.move('X', -this.distance, 'Y', this.distance), // arrow: home
        //     93: () => this.goTo('X', 0, 'Y', 0), // Key: 5
        //     99: () => '', // .
        //     98: () => '', // key: Backspace
        //     84: () => this.distance = 1, // key: /
        //     85: () => this.distance = 5, // key: *
        //     42: () => this.distance = 10, // key: Backspace
        //     88: () => '' // Key: OK or Enter
        // };

        this.commands = {
            '-': () => Jog.zUp(this.distance),
            '+': () => Jog.zDown(this.distance),
            '4': () => Jog.left(this.distance),
            '6': () => Jog.right(this.distance),
            '8': () => Jog.up(this.distance),
            '2': () => Jog.down(this.distance),
            '1': () => Jog.leftDown(this.distance),
            '7': () => Jog.leftUp(this.distance),
            '3': () => Jog.rightDown(this.distance),
            '9': () => Jog.rightUp(this.distance),
            '5': () => Jog.xyZero(),
            '.': () => Probe.probeWithToolSetter(),
            'NumLock': () => this.distance = 0.1,
            '/': () => this.distance = 1,
            '*': () => this.distance = 5,
            'Backspace': () => this.distance = 10,
        };
    }

    async open() {
        window.addEventListener('keyup', event => {
            console.log(event);
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD || ['Backspace', 'NumLock'].includes(event.key)) {
                this.createCommand(event.key);
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


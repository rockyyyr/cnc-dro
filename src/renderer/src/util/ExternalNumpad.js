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
            86: () => Jog.zUp(this.distance), // -
            87: () => Jog.zDown(this.distance), // +
            92: () => Jog.left(this.distance), // arrow: left
            94: () => Jog.right(this.distance), // arrow: right
            96: () => Jog.up(this.distance), // arrow: up
            90: () => Jog.down(this.distance), // arrow: down
            89: () => Jog.leftDown(this.distance), // arrow: End
            95: () => Jog.leftUp(this.distance), // arrow: home
            91: () => Jog.rightDown(this.distance), // arrow: Page Down
            97: () => Jog.rightUp(this.distance), // arrow: Page up
            93: () => Jog.xyZero(), // Key: 5
            99: () => Probe.probeWithToolSetter(), // .
            98: () => '', // key: Backspace
            84: () => this.distance = 1, // key: /
            85: () => this.distance = 5, // key: *
            42: () => this.distance = 10, // key: Backspace
            88: () => '' // Key: OK or Enter
        };
    }

    async open() {
        if (!NUMPAD_VENDOR_ID || !NUMPAD_PRODUCT_ID) {
            throw new Error('NUMPAD_VENDOR_ID and NUMPAD_PRODUCT_ID environment variables must be set');
        }

        const [device] = await navigator.hid.requestDevice({
            filters: []
        });

        if (device) {
            console.log(device);

            await device.open();

            device.oninputreport(event => {
                console.log('hello', event);
            });

        } else {
            throw new Error('No HID device found');
        }
    }

    parseKeyStroke(dataRaw) {
        const data = dataRaw.getUint8Array(0);
        console.log(data);


        // try {
        //     if (Serial.port) {
        //         const key = data[2];
        //         this.createCommand(key);
        //     }

        // } catch (error) {
        //     console.error('Error parsing key stroke:\n', error);
        // }
    }

    createCommand(key) {
        const command = this.commands[key];

        if (command) {
            command();
        }
    }
}


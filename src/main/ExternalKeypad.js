import { HID } from 'node-hid';
import Serial from './Serial';

const VENDOR_ID = 12625;
const PRODUCT_ID = 12288;

export default class Keypad {

    constructor() {
        this.distance = 5;

        this.device = new HID(VENDOR_ID, PRODUCT_ID);

        this.device.on('data', () => {
            console.log('hello');
            // try {
            //     this.parseKeyStroke(data);
            // } catch (error) {
            //     console.error('Error parsing key stroke:\n', error);
            // }
        });

        this.device.on('error', (err) => {
            console.error('HID device error:', err);
        });

        this.commands = {
            87: () => this.move('Z', -this.distance), // +
            86: () => this.move('Z', this.distance), // -
            92: () => this.move('X', -this.distance), // arrow: left
            94: () => this.move('X', this.distance), // arrow: right
            96: () => this.move('Y', -this.distance), // arrow: up
            90: () => this.move('Y', this.distance), // arrow: down
            89: () => this.move('X', -this.distance, 'Y', -this.distance), // arrow: End
            97: () => this.move('X', this.distance, 'Y', this.distance), // arrow: Page up
            91: () => this.move('X', this.distance, 'Y', -this.distance), // arrow: Page Down
            95: () => this.move('X', -this.distance, 'Y', this.distance), // arrow: home
            93: () => this.goTo('X', 0, 'Y', 0), // Key: 5
            99: () => '', // .
            98: () => '', // key: Backspace
            84: () => this.distance = 1, // key: /
            85: () => this.distance = 5, // key: *
            42: () => this.distance = 10, // key: Backspace
            88: () => '' // Key: OK or Enter
        };
    }

    parseKeyStroke(data) {
        console.log('hello', data);

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

    move(axis, amount, axis2 = '', amount2 = '') {
        const command = `G91 G0 ${axis}${amount} ${axis2}${amount2}`.trim();
        this.send(command);
    }

    goTo(axis, position, axis2 = '', position2 = '') {
        const command = `G90 G0 ${axis}${position} ${axis2}${position2}`.trim();
        this.send(command);
    }

    probeZ() {
        this.send(`
            G91
            G38.2 Z-20 F150
            G0 Z2
            G38.2 Z-3 F30
            G10 L20 P1 Z10
            G0 Z5
            G90
        `);
    }

    send(command) {
        Serial.send(command);
    }

}


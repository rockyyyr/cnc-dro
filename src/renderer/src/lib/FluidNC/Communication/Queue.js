import * as Messages from './Messages';
import States from '../States';
import {
    WAIT_FOR_JOG, RESET, STATUS, HOLD, RESUME,
    FEEDRATE_OVERRIDE_MINUS, FEEDRATE_OVERRIDE_PLUS, FEEDRATE_OVERRIDE_RESET,
    SPINDLE_OVERRIDE_MINUS, SPINDLE_OVERRIDE_PLUS, SPINDLE_OVERRIDE_RESET, SPINDLE_OVERRIDE_STOP,
    AIR_OVERRIDE, MIST_OVERRIDE
} from '../Commands';

export default class Queue {

    IMMEDIATE = [
        WAIT_FOR_JOG, RESET, STATUS, HOLD, RESUME,
        FEEDRATE_OVERRIDE_MINUS, FEEDRATE_OVERRIDE_PLUS, FEEDRATE_OVERRIDE_RESET,
        SPINDLE_OVERRIDE_MINUS, SPINDLE_OVERRIDE_PLUS, SPINDLE_OVERRIDE_RESET, SPINDLE_OVERRIDE_STOP,
        AIR_OVERRIDE, MIST_OVERRIDE
    ];

    constructor(comm) {
        this.queue = [];
        this.comm = comm;

        this.processing = false;
        this.state = null;
        this.resetCallbacks = [];

        this.setMessageListener();
    }

    setMessageListener = () => {
        this.comm.onmessage(message => {
            this.acknowledge(message);
            this.setState(message);
            this.ready = true;

            if (this.isWelcomeMessage(message)) {
                this.comm.forceSend(STATUS);
            }
        });
    };

    onReset = callback => {
        if (callback) {
            this.resetCallbacks.push(callback);
        }
    };

    add = message => {
        if (typeof message === 'string') {
            this._queue(message);

        } else if (Array.isArray(message)) {
            message.forEach(m => this._queue(m));
        }
    };

    _queue = message => {
        if (this.IMMEDIATE.includes(message)) {
            this.comm.forceSend(message);

            if (message === RESET) {
                this.clear();

                if (this.resetCallbacks.length > 0) {
                    for (const callback of this.resetCallbacks) {
                        callback();
                    }
                }
            }

        } else {
            this.queue.push(message);
            this.process();
        }
    };

    process = async () => {
        if (this.processing) return;
        if (this.queue.length === 0) return;

        if (this.queue[0] === WAIT_FOR_JOG) {
            this.shouldWaitForJog = true;
            await this.waitForJog();
            this.queue.shift();
        }

        this.comm.forceSend(this.queue[0]);
        this.processing = true;
    };

    acknowledge = message => {
        if (message.type === Messages.MessageType.ACK) {
            this.queue.shift();
            this.processing = false;
            this.process();
        }
    };

    setState = message => {
        if (message.type === Messages.MessageType.STATUS) {
            this.state = message.state;

            if (this.shouldWaitForJog && this.state === States.JOG) {
                this.startedJogging = true;
            }
        }
    };

    clear = () => {
        this.queue = [];
        this.processing = false;
        this.shouldWaitForJog = false;
        this.startedJogging = false;
        this.state = null;
    };

    size = () => {
        return this.queue.length;
    };

    async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    waitForJog = async () => {
        while (!(this.startedJogging && this.state === States.IDLE) && this.queue.length > 0) {
            await this.wait(100);
        }
        this.shouldWaitForJog = false;
        this.startedJogging = false;
    };

    isWelcomeMessage = message => {
        return message?.type === Messages.MessageType.GENERIC && message.value?.includes('Grbl');
    };

};
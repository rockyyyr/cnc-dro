import * as Messages from '../Messages';
import States from '../States';
import { WAIT_FOR_JOG, RESET, STATUS, HOLD, RESUME } from '../Commands';

export default class Queue {

    IMMEDIATE = [STATUS, RESET, HOLD, RESUME];

    constructor(comm) {
        this.queue = [];
        this.comm = comm;
        this.ready = false;

        this.processing = false;
        this.state = null;

        this.setMessageListener();
    }

    setMessageListener = () => {
        console.log('setting message listener');
        this.comm.onmessage(message => {
            this.acknowledge(message);
            this.setState(message);
            this.ready = true;
        });
    };

    add = message => {
        // if (!this.ready) {
        //     this.setMessageListener();
        // }
        if (typeof message === 'string') {
            this._queue(message);

        } else if (Array.isArray(message)) {
            message.forEach(m => this._queue(m));
        }
    };

    _queue = message => {
        console.log(`Queueing message: ${message}`);

        if (this.IMMEDIATE.includes(message)) {
            this.comm.forceSend(message);

            if (message === RESET) {
                this.clear();
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
            console.log('waiting for jog to complete');

            this.shouldWaitForJog = true;
            await this.waitForJog();
            this.queue.shift();
        }

        console.log(`Processing message: ${this.queue[0]}`);
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

};
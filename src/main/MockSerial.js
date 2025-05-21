import CNCBoardSimulator from './CNCBoardSimulator';

class MockSerial {
    constructor() {
        this.onDataCallbacks = [];
        this.onOpenCallbacks = [];
        this.onErrorCallbacks = [];
        this.onCloseCallbacks = [];

        this.sim = new CNCBoardSimulator();
    }

    open() {
        console.log('Opening mock serial port');

        for (const callback of this.onOpenCallbacks) {
            callback();
        }
    }

    send(cmd) {
        console.log('Sending command to mock serial port:', cmd);

        const response = this._respondToMessage(cmd);

        if (response) {
            setTimeout(() => this._broadcastMessage(response), 200);
        }
    }

    onOpen(callback) {
        if (callback) {
            this.onOpenCallbacks.push(callback);
        }
    }

    onError(callback) {
        if (callback) {
            this.onErrorCallbacks.push(callback);
        }
    }

    onClose(callback) {
        if (callback) {
            this.onCloseCallbacks.push(callback);
        }
    }

    onData(callback) {
        if (callback) {
            this.onDataCallbacks.push(callback);
        }
    }

    close() {
        console.log('Closing mock serial port');
        this.onDataCallbacks = [];
    }

    _broadcastMessage(message) {
        for (const callback of this.onDataCallbacks) {
            callback(message);
        }
    }

    _respondToMessage(messageRaw) {
        const message = messageRaw?.replace(/\n/g, '').replace(/\r/g, '');

        if (message.startsWith('$Report/Interval=')) {
            this.autoReportIntervalTime = message.split('=')[1];
            this.sim.startAutoReport(this._broadcastMessage.bind(this));
            setTimeout(() => this._broadcastMessage(`[MSG:info:AutoReport Interval set to ${this.autoReportIntervalTime}ms]`), 1000);
        }

        if (message === '\x18') {
            this.sim.stopAutoReport();
            setTimeout(() => this.sim.startAutoReport(this._broadcastMessage.bind(this)), 4000);
        }

        if (['$J=', 'G0', 'G1'].some(cmd => message.startsWith(cmd))) {
            const coords = this.getMessageCoords(message);
            this.sim.moveTo(coords);
        }

        return 'ok';
    }

    getMessageCoords(message) {
        const parts = message.split(' ');
        const parsePart = part => parseFloat(part.substring(1));
        const result = {};

        for (const part of parts) {
            if (part === '') continue;
            if (['X', 'Y', 'Z', 'F'].some(prefix => part.startsWith(prefix))) {
                const key = part[0].toLowerCase();
                const value = parsePart(part);
                result[key] = value;
            }
        }

        return result;
    }
}
const serialport = new MockSerial();

export default serialport;

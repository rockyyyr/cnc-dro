import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

class Serial {

    constructor() {
        this.port = null;
        this.parser = null;
        this.options = {
            path: '/dev/serial0',
            baudRate: 115200,
            lock: false,
            autoOpen: true
        };
    }

    open() {
        this.port = new SerialPort(this.options);

        return new Promise((resolve, reject) => {
            this.port.on('open', () => {
                this.parser = this.port.pipe(new ReadlineParser({ delimiter: '\n' }));
                this.port.write('?\r\n', err => err && console.log('Error requesting initial status: ', err));
                resolve();
            });
            this.port.on('error', err => reject(err));
        });
    }

    send(cmd) {
        if (!this.port) console.log('Port is not ready yet');
        this.port?.write(cmd);
    }

    onOpen(callback) {
        this.port?.on('open', () => callback());
    }

    onError(callback) {
        this.port?.on('error', error => callback(error));
    }

    onClose(callback) {
        this.port?.on('close', () => callback());
    }

    onData(callback) {
        if (!this.parser) console.log('Parser is not ready yet');
        this.parser?.on('data', line => callback(line));
    }

    close() {
        this.port?.close();
    }
}

const serial = new Serial();
export default serial;

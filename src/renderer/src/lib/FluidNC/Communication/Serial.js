import * as Messages from '../Messages';
import { REPORT_INTERVAL } from '../Constants';

export default class Serial {

    constructor() {
        this.ready = false;
        this.reconnectInterval = null;
        this.message = null;
    }

    addQueue = queue => {
        this.queue = queue;
    };

    open = () => {
        this.port = window.serial;
        this.port.open();
        this.port.onOpen(() => {
            this.ready = true;

        });
    };

    autoReport = () => {
        if (this.port) {
            this.forceSend(`$Report/Interval=${REPORT_INTERVAL}`);
        }
    };

    onopen = callback => {
        if (this.port) {
            this.port.onOpen(callback);
        }
    };

    onclose = callback => {
        if (this.port) {
            this.ready = false;
            this.port.onClose(callback);
        }
    };

    onerror = callback => {
        if (this.port) {
            this.port.onError(callback);
        }
    };

    onmessage = callback => {
        if (this.port) {
            this.port.onData(line => {
                const message = Messages.parseSerialMessage(line);
                callback(message);
                this.message = message;
            });
        }
    };

    send = data => {
        if (this.port) {
            this.queue.add(data);
        }
    };

    forceSend = data => {
        if (this.port) {
            this.port.send(`${data}\r\n`, console.error);
        }
    };

    close = () => {
        if (this.port) {
            this.port.close();
        }
    };
}

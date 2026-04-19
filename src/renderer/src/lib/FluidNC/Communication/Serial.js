import * as Messages from './Messages';
import * as Constants from '../Constants';
import * as Commands from '../Commands';


export default class Serial {

    constructor() {
        this.ready = false;
        this.reconnectInterval = null;
        this.messageCount = 0;
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
            this.forceSend(Commands.REPORT_INTERVAL + Constants.REPORT_INTERVAL);
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

                if (window.env.LOG_COMMS) {
                    if (message.type !== Messages.MessageType.STATUS || window.env.LOG_STATUS) {
                        console.log(window.env.LOG_RAW_COMMS ? line : message);
                    }
                }
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

            if (window.env.LOG_COMMS) {
                console.log(data);
            }
        }
    };

    sendAndWait = data => {
        const ONCE = true;

        if (this.port) {
            this.forceSend(data);

            return new Promise(resolve => {
                this.port.onData(line => {
                    const message = Messages.parseSerialMessage(line);
                    resolve(message);

                    if (window.env.LOG_COMMS) {
                        console.log(line);
                    }
                }, ONCE);
            });
        }
    };

    close = () => {
        if (this.port) {
            this.port.close();
        }
    };
}

import * as Messages from '../Messages';

export default class Serial {

    open = () => {
        this.port = window.serial;
        this.port.open();
        this.port.onOpen(() => {
            this.isOpen = true;
        });
    };

    onopen = callback => {
        if (this.port) {
            this.port.onOpen(callback);
        }
    };

    onclose = callback => {
        if (this.port) {
            this.isOpen = false;
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
                console.log(message);
                callback(message);
            });
        }
    };

    send = data => {
        if (this.port && this.isOpen) {
            this.port.send(`$${data}\r\n`, console.error);
        }
    };

    close = () => {
        if (this.port) {
            this.port.close();
        }
    };
}

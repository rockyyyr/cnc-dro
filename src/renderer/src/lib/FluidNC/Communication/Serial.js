
export default class Serial {

    open = () => {
        this.port = window.serial.open();
    };

    onopen = callback => {
        if (this.port) {
            this.port.onOpen(callback);
        }
    };

    onclose = callback => {
        if (this.port) {
            this.port.onClose(callback);
        }
    };

    onerror = callback => {
        if (this.port) {
            this.port.onError(callback);
        }
    };

    onmessage = callback => {
        if (this.parser) {
            this.parser.onData(callback);
        }
    };

    send = data => {
        if (this.port) {
            this.port.send(`$${data}\r\n`, console.error);
        }
    };

    close = () => {
        if (this.port) {
            this.port.close();
        }
    };
}

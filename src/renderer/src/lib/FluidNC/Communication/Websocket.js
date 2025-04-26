import { WS } from '../Constants';

export default class Websocket {

    open = () => {
        this.socket = new WebSocket(WS);
    };

    onopen = callback => {
        if (this.socket) {
            this.socket.onopen = callback;
        }
    };

    onclose = callback => {
        if (this.socket) {
            this.socket.onclose = callback;
        }
    };

    onerror = callback => {
        if (this.socket) {
            this.socket.onerror = callback;
        }
    };

    onmessage = callback => {
        if (this.socket) {
            this.socket.onmessage = callback;
        }
    };

    send = data => {
        if (this.socket) {
            this.socket.send(data);
        }
    };
    close = () => {
        if (this.socket) {
            this.socket.close();
        }
    };
}

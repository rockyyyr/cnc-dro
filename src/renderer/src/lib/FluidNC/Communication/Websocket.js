import { WS, PING_INTERVAL } from '../Constants';
import * as Messages from '../Messages';
import Queue from './Queue';

export default class Websocket {

    constructor() {
        this.ready = false;
        this.invterval = null;
    }

    open = () => {
        this.socket = new WebSocket(WS);
        this.queue = new Queue(this);
    };

    autoReport = () => {
        if (this.socket) {
            this.invterval = setInterval(() => {
                this.socket.send(`?`);
            }, PING_INTERVAL);
        }
    };

    onopen = callback => {
        if (this.socket) {
            this.socket.addEventListener('open', () => {
                this.ready = true;
                callback();
            });
        }
    };

    onclose = callback => {
        if (this.socket) {
            this.socket.addEventListener('close', () => {
                this.ready = false;
                clearInterval(this.invterval);
                callback();
            });
        }
    };

    onerror = callback => {
        if (this.socket) {
            this.socket.addEventListener('error', callback);
        }
    };

    onmessage = callback => {
        if (this.socket) {
            this.socket.addEventListener('message', async message => {
                const newMessage = await Messages.parseWebsocketMessage(message);
                callback(newMessage);
            });
        }
    };

    send = data => {
        if (this.socket) {
            this.queue.add(data);
        }
    };

    forceSend = data => {
        if (this.socket && this.ready) {
            console.log({ message: data });
            this.socket.send(data + '\n');
        }
    };

    close = () => {
        if (this.socket) {
            this.socket.close();
        }
    };
}

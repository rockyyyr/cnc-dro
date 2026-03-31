import { WS, PING_INTERVAL } from '../Constants';
import * as Messages from './Messages';

export default class Websocket {

    constructor() {
        this.ready = false;
        this.interval = null;
    }

    addQueue = queue => {
        this.queue = queue;
    };

    open = () => {
        this.socket = new WebSocket(WS);
    };

    autoReport = () => {
        if (this.socket) {
            this.interval = setInterval(() => {
                this.forceSend(`?`);
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
                callback();
                clearInterval(this.interval);
                setTimeout(() => this.open(), 2000);
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

                if (window.env.LOG_COMMS) {
                    console.log(message);
                }
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
            this.socket.send(data + '\n');
        }
    };

    close = () => {
        if (this.socket) {
            this.socket.close();
        }
    };
}

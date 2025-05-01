import { WS, PING_INTERVAL } from '../Constants';
import * as Messages from '../Messages';
import Queue from './Queue';

export default class Websocket {

    init = () => {
        this.ready = false;
        this.invterval = null;
        this.queue = new Queue(this);
    };

    open = () => {
        this.socket = new WebSocket(WS);
    };

    autoReport = () => {
        if (this.socket) {
            console.log('Auto reporting enabled');
            this.invterval = setInterval(() => {
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
            this.socket.send(data + '\n');
        }
    };

    close = () => {
        if (this.socket) {
            this.socket.close();
        }
    };
}

import Serial from './Serial';
import Websocket from './Websocket';

const comms = window.env.COMMS === 'serial'
    ? new Serial()
    : new Websocket();

window.api.onMenuCommand((cmd) => {
    if (cmd === '$BYE') {
        comms.send('$BYE');
        setTimeout(() => window.location.reload(), 8000);
    }
});

export default comms;
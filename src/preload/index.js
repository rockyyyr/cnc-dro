import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI);
        contextBridge.exposeInMainWorld('env', {
            COMMS: process.env.COMMS,
        });

        let port, parser;

        contextBridge.exposeInMainWorld('serial', {
            open: () => {
                port = new SerialPort({
                    path: '/dev/serial0',
                    baudRate: 115200,
                    lock: false,
                    autoOpen: true
                });
                parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

                return new Promise((resolve, reject) => {
                    port.on('open', () => resolve());
                    port.on('error', err => reject(err));
                });
            },

            send: cmd => {
                if (!port) throw new Error('Port not opened');
                port.write(cmd);
            },
            onOpen: callback => port.on('open', () => callback()),
            onError: callback => port.on('error', error => callback(error)),
            onClose: callback => port.on('close', () => callback()),
            onData: callback => {
                if (!parser) throw new Error('Port not opened');
                parser.on('data', line => callback(line));
            },
            close: () => port && port.close()
        });

    } catch (error) {
        console.error(error);
    }


} else {
    window.electron = electronAPI;
    window.serial = {
        open: () => { },
        send: () => { },
        onData: () => { },
        close: () => { }
    };
    window.env = {
        COMMS: process.env.COMMS,
    };
}

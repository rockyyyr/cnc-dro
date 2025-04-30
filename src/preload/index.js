import { contextBridge, ipcRenderer } from 'electron';
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

        contextBridge.exposeInMainWorld('api', {
            onMenuCommand: (callback) => {
                ipcRenderer.on('restart-board', (_, cmd) => callback(cmd));
            }
        });

        contextBridge.exposeInMainWorld('serial', {
            open: () => {
                port = new SerialPort({
                    path: '/dev/serial0',
                    baudRate: 115200,
                    lock: false,
                    autoOpen: true
                });

                return new Promise((resolve, reject) => {
                    port.on('open', () => {
                        parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
                        port.write('?\r\n', err => err && console.log('Error requesting initial status: ', err));
                        resolve();
                    });
                    port.on('error', err => reject(err));
                });
            },

            send: cmd => {
                if (!port) console.log('Port is not ready yet');
                port?.write(cmd);
            },
            onOpen: callback => port?.on('open', () => callback()),
            onError: callback => port?.on('error', error => callback(error)),
            onClose: callback => port?.on('close', () => callback()),
            onData: callback => {
                if (!parser) console.log('Parser is not ready yet');
                parser?.on('data', line => callback(line));
            },
            close: () => port?.close()
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

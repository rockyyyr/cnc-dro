import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import Serial from '../main/Serial';


if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI);
        contextBridge.exposeInMainWorld('env', {
            COMMS: process.env.COMMS,
        });

        contextBridge.exposeInMainWorld('api', {
            onMenuCommand: (callback) => {
                ipcRenderer.on('restart-board', (_, cmd) => callback(cmd));
            }
        });

        contextBridge.exposeInMainWorld('serial', {
            open: () => Serial.open(),
            send: cmd => Serial.send(cmd),
            onOpen: callback => Serial.onOpen(callback),
            onError: callback => Serial.onError(callback),
            onClose: callback => Serial.onClose(callback),
            onData: data => Serial.onData(data),
            close: () => Serial.close()
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

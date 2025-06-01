import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import SerialPort from '../main/Serial';
import MockSerial from '../main/MockSerial';

const Serial = process.env.MOCK_SERIAL ? MockSerial : SerialPort;

if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI);
        contextBridge.exposeInMainWorld('env', {
            ...process.env
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

}

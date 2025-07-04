import dotenv from 'dotenv';
dotenv.config();

const { NUMPAD_VENDOR_ID, NUMPAD_PRODUCT_ID, FULLSCREEN } = process.env;

import { app, shell, BrowserWindow, ipcMain, Menu, dialog } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';

if (process.env.DEVICE === 'pi') {
    app.commandLine.appendSwitch('ignore-gpu-blacklist');
    app.commandLine.appendSwitch('enable-gpu');
    app.commandLine.appendSwitch('enable-webgl');
    app.commandLine.appendSwitch('enable-unsafe-swiftshader');
    app.commandLine.appendSwitch('use-angle', 'egl');
    app.commandLine.appendSwitch('disable-hid-blocklist');
}

const isMac = process.platform === 'darwin';

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 550,
        show: false,
        fullscreen: FULLSCREEN,
        autoHideMenuBar: true,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
            preload: join(__dirname, '../preload/index.js'),
            sandbox: false,
            webSecurity: false,
            contextIsolation: true,
            nodeIntegration: false,
            enableBlinkFeatures: 'WebHID',          // turn on WebHID
            experimentalFeatures: true,
        }
    });

    if (process.env.DEVTOOLS) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();

        mainWindow.webContents.executeJavaScript(
            `document.querySelector("#autoload-external-numpad")?.click();`,
            true,
        );
    });

    mainWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url);
        return { action: 'deny' };
    });

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
    } else {
        mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
    }

    mainWindow.webContents.session.setPermissionCheckHandler(() => true);
    mainWindow.webContents.session.setDevicePermissionHandler(() => true);
    mainWindow.webContents.session.on('select-hid-device', (event, details, callback) => {
        event.preventDefault();

        if (!NUMPAD_VENDOR_ID || !NUMPAD_PRODUCT_ID) {
            return callback(null);
        }

        const selectedDevice = details.deviceList.find(({ vendorId, productId }) => {
            return vendorId === parseInt(NUMPAD_VENDOR_ID) && productId === parseInt(NUMPAD_PRODUCT_ID);
        });

        callback(selectedDevice?.deviceId);
    });
}

app.whenReady().then(() => {
    electronApp.setAppUserModelId('com.electron');

    app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window);
        const menu = Menu.buildFromTemplate([
            {
                label: 'Reload',
                click: () => window.webContents.reload(),
            },
            {
                label: 'Toggle Fullscreen',
                role: 'togglefullscreen'
            },
            {
                label: 'Inspect Element',
                click: () => window.webContents.openDevTools(),
            },
            {
                label: 'Restart Board',
                click: async (menuItem, browserWindow) => {
                    const result = await dialog.showMessageBox(browserWindow, {
                        type: 'warning',
                        buttons: ['Restart', 'Cancel'],
                        defaultId: 1,
                        cancelId: 1,
                        title: 'Confirm Restart',
                        message: 'Are you sure you want to restart the board?'
                    });

                    if (result.response === 0) {
                        window.webContents.send('restart-board', '$BYE');
                    }
                }
            },
            {
                label: 'Exit',
                accelerator: isMac ? 'Cmd+Q' : 'Ctrl+Q',
                click: async (menuItem, browserWindow) => {
                    const result = await dialog.showMessageBox(browserWindow, {
                        type: 'warning',
                        buttons: ['Exit', 'Cancel'],
                        defaultId: 1,
                        cancelId: 1,
                        title: 'Confirm Exit',
                        message: 'Are you sure you want to exit?'
                    });

                    if (result.response === 0) {
                        app.quit();
                    }
                }
            }
        ]);

        window.webContents.on('context-menu', () => {
            menu.popup();
        });
    });

    ipcMain.on('ping', () => console.log('pong'));

    createWindow();


    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

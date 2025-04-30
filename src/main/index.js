import dotenv from 'dotenv';
dotenv.config();

import { app, shell, BrowserWindow, ipcMain, Menu } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';

if (process.env.DEVICE === 'pi') {
    app.commandLine.appendSwitch('ignore-gpu-blacklist');
    app.commandLine.appendSwitch('enable-gpu');
    app.commandLine.appendSwitch('enable-webgl');
    app.commandLine.appendSwitch('use-angle', 'egl');
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 550,
        show: false,
        fullscreen: process.env.FULLSCREEN,
        autoHideMenuBar: true,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
            preload: join(__dirname, '../preload/index.js'),
            sandbox: false,
            webSecurity: false,
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
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
                click: () => window.webContents.send('restart-board', '$BYE')
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

import { resolve } from 'path';
import { defineConfig, defineViteConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()]
    },
    preload: {
        plugins: [externalizeDepsPlugin()]
    },
    renderer: defineViteConfig(() => ({
        resolve: {
            alias: {
                '@renderer': resolve('src/renderer/src')
            }
        },
        plugins: [react()],
        // server: {
        //     host: '0.0.0.0',
        //     port: 3333,
        //     cors: false,
        //     allowedHosts: 'all',
        // }
    }))
});

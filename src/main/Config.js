import { existsSync, readFileSync } from "fs";
import OS from 'os';
import * as Path from 'path';

export const load = () => {
    const path = Path.join(OS.homedir(), '.cnc.json');

    try {
        if (existsSync(path)) {

            const config = JSON.parse(readFileSync(path, 'utf8'));

            if (config) {
                console.log('Config loaded from file.');
                return config;
            } else {
                console.log('Config empty.');
                return null;
            }

        } else {
            console.log('Config file not found.');
            return null;
        }

    } catch (error) {
        console.error(`Config not loaded from ${path}`);
        console.error(error);

        return false;
    }
};

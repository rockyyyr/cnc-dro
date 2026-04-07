import { existsSync, readFileSync } from "fs";
import OS from 'os';
import * as Path from 'path';

export const load = () => {
    const path = Path.join(OS.homedir(), '.cnc.json');

    try {
        return existsSync(path)
            ? JSON.parse(readFileSync(path, 'utf8'))
            : null;

    } catch (error) {
        console.error(`Config not loaded from ${path}`);
        console.error(error);

        return false;
    }
};

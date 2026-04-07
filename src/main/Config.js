import { existsSync, readFileSync } from "fs";

export const load = () => {
    const path = '~/.cnc.json';

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

import { existsSync, readFileSync } from "fs";
import OS from 'os';
import * as Path from 'path';
import { app } from 'electron';
import axios from 'axios';
import { parse as parseYaml } from 'yaml';

const resourcesPath = app.isPackaged
    ? process.resourcesPath
    : Path.join(__dirname, '../../resources');

const defaultConfigPath = Path.join(resourcesPath, 'default.config.json');
const userConfigPath = Path.join(OS.homedir(), '.cnc.json');
const fluidNCConfigUrl = `http://${process.env.FLUIDNC_IP}/config.yaml`;

function deepMerge(defaults, overrides) {
    const result = structuredClone(defaults);
    for (const key of Object.keys(overrides)) {
        if (
            typeof overrides[key] === 'object' &&
            overrides[key] !== null &&
            !Array.isArray(overrides[key]) &&
            typeof result[key] === 'object' &&
            result[key] !== null
        ) {
            result[key] = deepMerge(result[key], overrides[key]);
        } else {
            result[key] = overrides[key];
        }
    }
    return result;
}

function loadDefault() {
    return JSON.parse(readFileSync(defaultConfigPath, 'utf-8'));
}

function loadUser() {
    if (!existsSync(userConfigPath)) {
        return {};
    }
    try {
        return {
            configLevel: 'user',
            ...JSON.parse(readFileSync(userConfigPath, 'utf-8'))
        };
    } catch (e) {
        console.warn(`Failed to load user config from ${userConfigPath}:`, e.message);
        return {};
    }
}

async function loadFluidNC() {
    try {
        const response = await axios.get(fluidNCConfigUrl);
        const yaml = parseYaml(response.data);

        return !yaml ? {} : {
            configLevel: 'fluidnc',
            rapidX: yaml.axes?.x?.max_rate_mm_per_min,
            rapidY: yaml.axes?.y?.max_rate_mm_per_min,
            rapidZ: yaml.axes?.z?.max_rate_mm_per_min,
            dimensions: {
                machine: {
                    x: yaml.axes?.x?.max_travel_mm,
                    y: yaml.axes?.y?.max_travel_mm,
                    z: yaml.axes?.z?.max_travel_mm,
                }
            }
        };

    } catch (e) {
        console.warn(`Failed to load FluidNC config from ${fluidNCConfigUrl}:`, e.message);
        return {};
    }
}

export async function load() {
    const defaultConfig = loadDefault();
    const userConfig = loadUser();

    if (!userConfig.useFluidncConfig) {
        return deepMerge(defaultConfig, userConfig);
    }

    const fluidNCConfig = await loadFluidNC();
    return deepMerge(deepMerge(defaultConfig, userConfig), fluidNCConfig);
}

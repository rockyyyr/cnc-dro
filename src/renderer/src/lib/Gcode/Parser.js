import { roundTo } from '../../util/numbers';
import { Constants } from '../FluidNC';
import { isMovement, isSectionEnd, displayMovement } from './Comments';

export const Commands = {
    G0: 'G0',
    G1: 'G1',
    G2: 'G2',
    G3: 'G3'
};

const TOOLTABLE = /(?<=\( Tools Table:\)\s*\()[\s\S]+?(?=\)\s*\(\s*\))/gm;

export default class Gcode {

    constructor(gcode, workOffset, initialPosition) {
        this.initialPosition = initialPosition;
        this.firstX;
        this.firstY;
        this.firstZ;
        this.prevX;
        this.prevY;
        this.prevZ;
        this.prevFeedrate;
        this.currentCommand;
        this.firstCommand;
        this.spindleSpeed;
        this.air;
        this.airEnableLine;
        this.mist;
        this.mistEnableLine;
        this.coolantDisableLine;
        this.minZ = Number.MAX_SAFE_INTEGER;
        this.accelerationCompensation = 0.2777;

        this.workOffset = workOffset;
        this.gcode = gcode;

        this.tools = this._parseTools(gcode);
        this.lines = this._format(gcode);
        this.length = this.lines.length;
        this.minLineNumber = this.lines[0]?.line || -1;
        this.maxLineNumber = this.lines[this.lines.length - 1]?.line || -1;
        this.durationMinutes = this.lines.reduce((acc, line) => acc + line.duration, 0);
        this.durationMinutes = this.durationMinutes + (this.durationMinutes * this.accelerationCompensation);
    }

    updateWorkOffset(workOffset) {
        this.workOffset = workOffset;
        this.firstX = undefined;
        this.firstY = undefined;
        this.firstZ = undefined;
        this.minZ = Number.MAX_SAFE_INTEGER;
        this.lines = this._format(this.gcode);
    }

    _parseTools(gcode) {
        const matches = gcode.match(TOOLTABLE);
        if (matches) {
            return matches[0]
                .replace(/\(|\)/g, '')
                .split('\n')
                .map(x => x.trim().split(' '))
                .map(d => ({
                    diameter: d[1]?.replace(/D=/g, ''),
                    name: d.slice(6).join(' ')
                }));
        }
    }

    _format(gcode) {
        const lines = gcode.split('\n');
        const result = [];

        for (const line of lines) {
            const strippedLine = this._stripCommentsFromLine(line);

            if (strippedLine === '') {
                continue;
            }
            result.push(this._toObject(strippedLine));
        }
        return result;
    }

    _stripCommentsFromLine(line) {
        if (line.includes(';')) {
            return line.split(';')[0].trim();
        }
        if (line.includes('(') && !isMovement(line) && !isSectionEnd(line)) {
            return line.split('(')[0].trim();
        }
        if (line.includes('%')) {
            return line.split('%')[0].trim();
        }
        return line.trim();
    }

    _toObject(line) {
        const result = {};

        if (isMovement(line)) {
            this.movement = displayMovement(line);
            return { duration: 0 };
        }

        if (isSectionEnd(line)) {
            this.movement = null;
            return { duration: 0 };
        }

        const parts = line
            .split(' ')
            .filter(part => part.trim() !== '');

        for (const part of parts) {
            if (part.startsWith('N')) {
                result.line = parseInt(part.substring(1));
            }

            if (part.startsWith('M')) {
                result.m = parseInt(part.substring(1));

                if (result.m === 7) {
                    this.mist = true;
                    this.mistEnableLine = result.line;

                } else if (result.m === 8) {
                    this.air = true;
                    this.airEnableLine = result.line;

                } else if (result.m === 9) {
                    this.coolantDisableLine = result.line;
                }
            }

            if (part.startsWith('G')) {
                result.command = part;
                if (this.firstCommand === undefined) {
                    this.firstCommand = result.command;
                }

            } else if (part.startsWith('X')) {
                const x = parseFloat(part.substring(1));
                result.x = roundTo(x + (this.workOffset?.x || 0), 3);

                if (this.firstX === undefined) {
                    this.firstX = result.x;
                }

            } else if (part.startsWith('Y')) {
                const y = parseFloat(part.substring(1));
                result.y = roundTo(y + (this.workOffset?.y || 0), 3);

                if (this.firstY === undefined) {
                    this.firstY = result.y;
                }

            } else if (part.startsWith('Z')) {
                const z = parseFloat(part.substring(1));
                result.z = roundTo(z, 3);

                if (this.firstZ === undefined) {
                    this.firstZ = result.z;
                }
                if (result.z < this.minZ) {
                    this.minZ = result.z;
                }

            } else if (part.startsWith('F')) {
                result.f = parseFloat(part.substring(1));
                if (result.f) {
                    this.prevFeedrate = result.f;
                }

            } else if (part.startsWith('S')) {
                result.s = parseFloat(part.substring(1));
                if (this.spindleSpeed === undefined) {
                    this.spindleSpeed = result.s;
                }

            } else if (part.startsWith('T')) {
                result.t = parseFloat(part.substring(1));

            } else if (part.startsWith('I')) {
                result.i = parseFloat(part.substring(1));

            } else if (part.startsWith('J')) {
                result.j = parseFloat(part.substring(1));
            }
        }

        result.duration = this.computeTimePerLine(result);

        return result;
    }

    computeTimePerLine(line) {
        const cmd = line.command || this.currentCommand;

        if (!Object.values(Commands).includes(cmd)) {
            return 0;
        }

        let feed;

        if (cmd === Commands.G0) {
            feed = Constants.RAPID_SPEED;

        } else {
            feed = line.f || this.prevFeedrate;
        }

        if (!feed || feed <= 0) {
            return 0;
        }

        const x0 = this.prevX != null ? this.prevX : this.initialPosition.x;
        const y0 = this.prevY != null ? this.prevY : this.initialPosition.y;
        const z0 = this.prevZ != null ? this.prevZ : this.initialPosition.z;

        const x1 = line.x != null ? line.x : x0;
        const y1 = line.y != null ? line.y : y0;
        const z1 = line.z != null ? line.z : z0;

        if (x1 === x0 && y1 === y0 && z1 === z0) {
            return 0;
        }

        let length = 0;

        if (cmd === Commands.G0 || cmd === Commands.G1) {
            const dx = x1 - x0;
            const dy = y1 - y0;
            const dz = z1 - z0;
            length = Math.hypot(dx, dy, dz);

        } else {
            if (line.i === undefined || line.j === undefined) {
                return 0;
            }

            const cx = x0 + line.i;
            const cy = y0 + line.j;
            const r = Math.hypot(line.i, line.j);

            const theta0 = Math.atan2(y0 - cy, x0 - cx);
            const theta1 = Math.atan2(y1 - cy, x1 - cx);
            let dTheta = theta1 - theta0;

            if (cmd === Commands.G2) {
                if (dTheta > 0) dTheta -= 2 * Math.PI;
            } else {
                if (dTheta < 0) dTheta += 2 * Math.PI;
            }

            length = Math.abs(r * dTheta);
        }

        this._updateState(x1, y1, z1, feed, cmd);

        const timeInMinutes = length / feed;
        return timeInMinutes;
    }

    _updateState(x, y, z, feedrate, command) {
        this.prevX = x;
        this.prevY = y;
        this.prevZ = z;
        this.prevFeedrate = feedrate;
        this.currentCommand = command;
    }
}

import { roundTo } from '../../util/numbers';

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
        this.mist;
        this.minZ = Number.MAX_SAFE_INTEGER;

        this.workOffset = workOffset;
        this.gcode = gcode;

        this.tools = this._parseTools(gcode);
        this.lines = this._format(gcode);
        this.length = this.lines.length;
        this.minLineNumber = this.lines[0]?.line || -1;
        this.maxLineNumber = this.lines[this.lines.length - 1]?.line || -1;
        this.durationMinutes = this.lines.reduce((acc, line) => acc + line.duration, 0);
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
        if (line.includes('(')) {
            return line.split('(')[0].trim();
        }
        if (line.includes('%')) {
            return line.split('%')[0].trim();
        }
        return line.trim();
    }

    _toObject(line) {
        const parts = line.split(' ');
        const result = {};

        for (const part of parts) {
            if (part === '') {
                continue;
            }

            if (part.startsWith('N')) {
                result.line = parseInt(part.substring(1));
            }

            if (part.startsWith('M')) {
                result.m = parseInt(part.substring(1));

                if (result.m === 7) {
                    this.mist = true;
                } else if (result.m === 8) {
                    this.air = true;
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
        // only handle G0, G1, G2, G3
        if (!['G0', 'G1', 'G2', 'G3'].includes(cmd)) {
            return 0;
        }

        // determine feedrate (mm/min)
        let feed;
        if (cmd === 'G0') {
            feed = 3000;
        } else {
            feed = line.f || this.prevFeedrate;
        }
        if (!feed || feed <= 0) {
            return 0;
        }

        // starting position
        const x0 = this.prevX != null ? this.prevX : this.initialPosition.x;
        const y0 = this.prevY != null ? this.prevY : this.initialPosition.y;
        const z0 = this.prevZ != null ? this.prevZ : this.initialPosition.z;

        // ending position (if not specified, no move)
        const x1 = line.x != null ? line.x : x0;
        const y1 = line.y != null ? line.y : y0;
        const z1 = line.z != null ? line.z : z0;

        if (x1 === x0 && y1 === y0 && z1 === z0) {
            // no motion
            return 0;
        }

        let length = 0;

        if (cmd === 'G0' || cmd === 'G1') {
            // straight-line move
            const dx = x1 - x0;
            const dy = y1 - y0;
            const dz = z1 - z0;
            length = Math.hypot(dx, dy, dz);
        } else {
            // G2/G3 arc move in XY plane; needs i,j offsets
            if (line.i === undefined || line.j === undefined) {
                // can't compute arc without center offsets
                return 0;
            }
            const cx = x0 + line.i;
            const cy = y0 + line.j;
            const r = Math.hypot(line.i, line.j);

            let theta0 = Math.atan2(y0 - cy, x0 - cx);
            let theta1 = Math.atan2(y1 - cy, x1 - cx);
            let dTheta = theta1 - theta0;

            if (cmd === 'G2') {
                // clockwise — ensure negative sweep
                if (dTheta > 0) dTheta -= 2 * Math.PI;
            } else {
                // G3: counter-clockwise — ensure positive sweep
                if (dTheta < 0) dTheta += 2 * Math.PI;
            }

            length = Math.abs(r * dTheta);
        }

        // time in minutes = length (mm) / feedrate (mm/min)
        const timeMin = length / feed;

        // update state for next line
        this._updateState(x1, y1, z1, feed, cmd);

        return timeMin;
    }

    _updateState(x, y, z, feedrate, command) {
        this.prevX = x;
        this.prevY = y;
        this.prevZ = z;
        this.prevFeedrate = feedrate;
        this.currentCommand = command;
    }

    _computeTimeOfSegment(line) {
        if (line.command) {
            this.currentCommand = line.command;
        }

        if (![Commands.G0, Commands.G1, Commands.G2, Commands.G3].includes(this.currentCommand)) {
            return 0;
        }

        if (line.x === undefined && line.y === undefined && line.z === undefined) {
            return 0;
        }

        let feedrate;

        if (this.currentCommand === Commands.G0) {
            feedrate = 3000;

        } else {
            feedrate = line.f || this.prevFeedrate;
        }

        const prev = {
            x: this.prevX === undefined ? this.initialPosition.x : this.prevX,
            y: this.prevY === undefined ? this.initialPosition.y : this.prevY,
            z: this.prevZ === undefined ? this.initialPosition.z : this.prevZ
        };

        const cur = {
            x: line.x === undefined ? prev.x : line.x,
            y: line.y === undefined ? prev.y : line.y,
            z: line.z === undefined ? prev.z : line.z
        };

        const dX = Math.pow(cur.x - prev.x, 2);
        const dY = Math.pow(cur.y - prev.y, 2);
        const dZ = Math.pow(cur.z - prev.z, 2);

        const distance = Math.sqrt(dX + dY + dZ);

        if (line.line === 16) {
            console.log(feedrate);
            console.log(prev);
            console.log(cur);
        }

        this.prevX = cur.x;
        this.prevY = cur.y;
        this.prevZ = cur.z;

        if (feedrate && !isNaN(distance)) {
            return distance / feedrate;

        } else {
            return 0;
        }

    }
}

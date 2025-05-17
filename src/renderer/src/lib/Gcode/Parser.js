import { roundTo } from '../../util/numbers';

export const Commands = {
    G0: 'G0',
    G1: 'G1',
    G2: 'G2',
    G3: 'G3'
};

const TOOLTABLE = /(?<=\( Tools Table:\)\s*\()[\s\S]+?(?=\)\s*\(\s*\))/gm;

export default class Gcode {

    constructor(gcode, workOffset) {
        this.firstX;
        this.firstY;
        this.firstZ;
        this.prevX;
        this.prevY;
        this.prevZ;
        this.prevFeedrate;
        this.firstCommand;
        this.spindleSpeed;
        this.minZ = Number.MAX_SAFE_INTEGER;

        this.workOffset = workOffset;
        this.gcode = gcode;

        this.tools = this._parseTools(gcode);
        this.lines = this._format(gcode);
        this.length = this.lines.length;
        this.durationMinutes = this.lines.reduce((acc, line) => acc + line.duration, 0);

        console.log(this.durationMinutes);

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
                result.lineNumber = parseInt(part.substring(1));
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
                result.z = roundTo(z + (this.workOffset?.z || 0), 3);

                if (this.firstZ === undefined) {
                    this.firstZ = result.z;
                }
                if (result.z < this.minZ) {
                    this.minZ = result.z;
                }

            } else if (part.startsWith('F')) {
                result.f = parseFloat(part.substring(1));
                this.prevFeedrate = result.f;

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

        result.duration = this._computeTimeOfSegment(result);

        return result;
    }

    _computeTimeOfSegment(line) {
        if (![Commands.G0, Commands.G1, Commands.G2, Commands.G3].includes(line.command)) {
            return 0;
        }

        if (line.x === undefined && line.y === undefined && line.z === undefined) {
            return 0;
        }

        let feedrate;

        if (line.command === Commands.G0) {
            feedrate = 3000;

        } else {
            feedrate = line.f || this.prevFeedrate;
        }


        const prev = {
            x: this.prevX === undefined ? this.firstX : this.prevX,
            y: this.prevY === undefined ? this.firstY : this.prevY,
            z: this.prevZ === undefined ? this.firstZ : this.prevZ
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

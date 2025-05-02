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
        this.firstCommand;
        this.spindleSpeed;
        this.minZ = Number.MAX_SAFE_INTEGER;

        this.workOffset = workOffset;
        this.gcode = gcode;

        this.tools = this._parseTools(gcode);
        this.lines = this._format(gcode);
        this.length = this.lines.length;
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
        return result;
    }
}

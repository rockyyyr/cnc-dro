export const Commands = {
    G0: 'G0',
    G1: 'G1',
    G2: 'G2',
    G3: 'G3'
};

export default class Gcode {

    constructor(gcode) {
        this.firstX;
        this.firstY;
        this.firstZ;
        this.firstCommand;

        this.minZ = Number.MAX_SAFE_INTEGER;

        this.lines = this._format(gcode);
        console.log({ gcode: this.lines });
    }

    _format(gcode) {
        return gcode
            .split('\n')
            .map(this._stripCommentsFromLine)
            .filter(this._filterEmpty)
            .map(line => this._toObject(line));
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

    _filterEmpty(line) {
        return line !== '';
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
                result.x = parseFloat(part.substring(1));
                if (this.firstX === undefined) {
                    this.firstX = result.x;
                }
            } else if (part.startsWith('Y')) {
                result.y = parseFloat(part.substring(1));
                if (this.firstY === undefined) {
                    this.firstY = result.y;
                }
            } else if (part.startsWith('Z')) {
                result.z = parseFloat(part.substring(1));
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

export const Commands = {
    G0: 'G0',
    G1: 'G1',
    G2: 'G2',
    G3: 'G3'
};

const TOOLTABLE = /(?<=\( Tools Table:\)\s*\()[\s\S]+?(?=\)\s*\(\s*\))/gm;

export default class Gcode {

    constructor(gcode) {
        this.firstX;
        this.firstY;
        this.firstZ;
        this.firstCommand;
        this.spindleSpeed;
        this.tools = this._parseTools(gcode);

        this.minZ = Number.MAX_SAFE_INTEGER;

        this.lines = this._format(gcode);
        `  T2 D=6.35 CR=0 - ZMIN=0 - flat end mill )
    (  T2 D=6.35 CR=0 - ZMIN=0 - flat end mill `;
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

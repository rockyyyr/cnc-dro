export default class CNCBoardSimulator {
    constructor() {
        this.autoReportIntervalTime = 75;
        this.autoReportInterval = null;
        this.fps = 30;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.f = 0;
        this.feedrate = 3000;
        this.acceleration = 200;
        this.dt = 1000 / this.fps;
        this.state = 'Idle';
    }

    // called when you parse a G0/G1 command
    moveTo({ x, y, z }) {
        this.targetX = x;
        this.targetY = y;

        const distance = Math.hypot(x - this.x, y - this.y);
        if (distance === 0) return;

        this.moveVector = {
            x: (x - this.x) / distance,
            y: (y - this.y) / distance
        };

        this.maxSpeed = this.feedrate / 60;
        this.velocity = 0;
        this._startMovement();
    }

    // internal tick: advance position by dt (ms)
    _step() {
        if (!this.moving) return;

        const dtSeconds = this.dt / 1000;
        const distRemaining = Math.hypot(this.targetX - this.x, this.targetY - this.y);

        // simple accel/decel: if we're further than stopping distance, accelerate, else decelerate
        const stoppingDist = (this.velocity ** 2) / (2 * this.acceleration);
        if (distRemaining > stoppingDist) {
            // accelerate up to maxSpeed
            this.velocity = Math.min(this.velocity + this.acceleration * dtSeconds, this.maxSpeed);
        } else {
            // decelerate to stop exactly at target
            this.velocity = Math.max(this.velocity - this.acceleration * dtSeconds, 0);
        }

        // how far to move this tick?
        const moveDist = this.velocity * dtSeconds;

        if (moveDist >= distRemaining) {
            // we’ve arrived!
            this.x = this.targetX;
            this.y = this.targetY;
            this._stopMovement();
        } else {
            // step along the unit vector
            this.x += this.moveVector.x * moveDist;
            this.y += this.moveVector.y * moveDist;
        }
    }

    _startMovement() {
        this.moving = true;
        this.state = 'Jog';
        this._timer = setInterval(() => this._step(), this.dt);
    }

    _stopMovement() {
        clearInterval(this._timer);
        this._timer = null;
        this.velocity = 0;
        this.moving = false;
        this.state = 'Idle';
    }

    startAutoReport(broadcast) {
        this.autoReportInterval = setInterval(() => {
            const autoReport = `<${this.state}|WPos:${this.roundTo(this.x, 3)},${this.roundTo(this.y, 3)},${this.roundTo(this.z, 3)}|WCO:0,0,0|FS:${this.roundTo(this.velocity * 60, 1)},0>`;
            console.log(autoReport);

            broadcast(autoReport);

        }, this.autoReportIntervalTime);
    }

    stopAutoReport() {
        clearInterval(this.autoReportInterval);
        this.autoReportInterval = null;
    }

    roundTo(value, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(value * factor) / factor;
    };
}
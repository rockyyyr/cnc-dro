import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

import { Commands } from './Gcode';

export default class Scene {
    constructor(ref, options = {}) {
        this.lastTime = 0;
        this.needsRender = true;

        this.cameraPadding = options.cameraPadding || 15;
        this.subjectBoundingBox;

        this.height = ref.current.getBoundingClientRect().height;
        this.width = ref.current.getBoundingClientRect().width;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.domElement = this.renderer.domElement;
        ref.current.appendChild(this.domElement);
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 500);
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', () => this.needsRender = true);
    }

    init() {
        this.renderer.setSize(this.width, this.height);

        this.camera.up.set(0, 0, -1);
        this.camera.lookAt(0, 0, 0);

        this.controls.target.set(0, 0, 0);
        this.controls.noPan = false;
        this.controls.panSpeed = 1.0;
        this.controls.rotateSpeed = 4.0;
        this.controls.zoomSpeed = 50;
        this.controls.panSpeed = 0.8;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.update();
    }

    drawPlane() {
        const gridHelper = new THREE.GridHelper(200, 20);
        this.scene.add(gridHelper);
    }

    draw(gcode) {
        let x = gcode.firstX;
        let y = gcode.firstZ;
        let z = gcode.firstY;
        let currentCommand = gcode.firstCommand;

        const colorMap = {
            G0: new THREE.Color(0xff0000), // Red for G0
            G1: new THREE.Color(0x00ff00), // Green for G1
            G2: new THREE.Color(0xffff00), // Blue for G2
            G3: new THREE.Color(0xffff00), // Yellow for G3
        };

        const group = new THREE.Group();

        for (const line of gcode.lines) {
            const startX = x;
            const startY = y;
            const startZ = z;

            if (line.x) {
                x = line.x;
            }
            if (line.y) {
                z = line.y;
            }
            if (line.z) {
                y = line.z;
            }

            if (line.command) {
                currentCommand = line.command;
            }

            const color = colorMap[currentCommand] || new THREE.Color(0xffffff);

            if ([Commands.G0, Commands.G1].includes(currentCommand)) {
                const geometry = new THREE.BufferGeometry();
                const positions = [startX, startY, startZ, x, y, z];
                geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
                const material = new THREE.LineBasicMaterial({ color });
                const line = new THREE.Line(geometry, material);
                group.add(line);

            } else if ([Commands.G2, Commands.G3].includes(currentCommand)) {
                const isClockwise = currentCommand === Commands.G2;
                const centerX = line.i !== undefined ? startX + line.i : startX; // I is the X distance to the center
                const centerY = line.j !== undefined ? startZ + line.j : startZ; // J is the Z distance to the center
                const radius = Math.sqrt((startX - centerX) ** 2 + (startZ - centerY) ** 2);

                const startAngle = Math.atan2(startZ - centerY, startX - centerX);
                const endAngle = Math.atan2(z - centerY, x - centerX);

                const curve = new THREE.EllipseCurve(
                    centerX,
                    centerY,
                    radius,
                    radius,
                    startAngle,
                    endAngle,
                    isClockwise
                );

                const points = curve.getPoints(50);
                const positions = [];
                for (const point of points) {
                    positions.push(point.x, startY, point.y);
                }

                const geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
                const material = new THREE.LineBasicMaterial({ color });
                const arc = new THREE.Line(geometry, material);
                group.add(arc);
            }

            const box = new THREE.Box3().setFromObject(group);
            this.subjectBoundingBox = box;

            const center = new THREE.Vector3();
            box.getCenter(center);
            group.position.sub(new THREE.Vector3(center.x, 0, center.z));

            this.scene.add(group);
            this.positionCamera(box);
        }
    }

    positionCamera(boundingBox) {
        const box = boundingBox || this.subjectBoundingBox;
        const size = new THREE.Vector3();
        box.getSize(size);

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        const cameraDistance = maxDim / (2 * Math.tan(fov / 2));

        this.camera.position.set(0, cameraDistance + this.cameraPadding, 0);
        this.controls.update();
    }

    animate(t) {
        this.animationFrame = requestAnimationFrame(() => this.animate());

        if (t - this.lastTime < 33) {
            return;
        }

        this.lastTime = t;

        if (this.needsRender) {
            this.renderer.render(this.scene, this.camera);
            this.needsRender = false;
        }
        this.controls.update();
    }

    cleanUp() {
        console.log('cleaning up');
        cancelAnimationFrame(this.animationFrame);

        if (this.domElement && this.domElement.parentNode) {
            this.domElement.parentNode.removeChild(this.domElement);
        }

        this.animationFrame = null;
        this.renderer.dispose();
        this.scene.clear();
        this.controls.dispose();
    }
}
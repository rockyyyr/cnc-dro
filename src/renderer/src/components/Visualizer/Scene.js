import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

import { Commands } from './Gcode';

export default class Scene {
    constructor(ref, options = {}) {
        this.lastTime = 0;
        this.needsRender = true;

        this.size = 200;

        this.colorMap = {
            G0: new THREE.Color(0xff0000), // Red for G0
            G1: new THREE.Color(0x00ff00), // Green for G1
            G2: new THREE.Color(0xffff00), // Yellow for G2
            G3: new THREE.Color(0xffff00), // Yellow for G3
        };

        this.cncGroup = new THREE.Group();
        this.cncGroup.rotation.x = -(Math.PI / 2);
        this.cncGroup.scale.set(1, 1, 1);
        this.gcodeGroup = null;
        this.plane = null;
        this.tool = null;
        this.toolHeight = 15;
        this.toolBottom = this.toolHeight / 2;

        this.cameraPadding = options.cameraPadding || 15;
        this.subjectBoundingBox;

        this.height = ref.current.getBoundingClientRect().height;
        this.width = ref.current.getBoundingClientRect().width;
        this.scene = new THREE.Scene();
        this.scene.add(this.cncGroup);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.domElement = this.renderer.domElement;
        ref.current.appendChild(this.domElement);
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', () => this.needsRender = true);
    }

    init() {
        this.renderer.setSize(this.width, this.height);

        const center = this.size / 2;

        this.camera.up.set(0, 0, -1);
        this.camera.position.set(center, this.size - 70, center);
        this.camera.lookAt(0, 0, 0);

        this.controls.target.set(center, -5, -center);
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
        this.plane = new THREE.GridHelper(this.size, 20);
        this.plane.position.set((this.size / 2), 0, -(this.size / 2));
        const box = new THREE.Box3().setFromObject(this.plane);
        this.subjectBoundingBox = box;
        this.scene.add(this.plane);
    }

    drawAxes() {
        const axesHelper = new THREE.AxesHelper(50);
        this.cncGroup.add(axesHelper);
    }

    drawTool(position) {
        const geometry = new THREE.CylinderGeometry(1, 1, this.toolHeight, 32);
        const material = new THREE.MeshBasicMaterial({ color: '#00FFFF' });
        this.tool = new THREE.Mesh(geometry, material);
        this.tool.rotation.x = Math.PI / 2;
        this.tool.position.set(position.x, position.y, position.z + this.toolBottom);
        this.cncGroup.add(this.tool);
    }

    updateTool(position) {
        if (this.tool) {
            this.tool.position.set(position.x, position.y, position.z + this.toolBottom);
            this.tool.updateMatrixWorld();
        }
    }

    draw(gcode) {
        this.disposeGcode();
        this.gcodeGroup = new THREE.Group();

        if (gcode.length === 0) {
            return;
        }

        const { positions, colors } = this.calculatePositions(gcode.lines, {
            firstX: gcode.firstX,
            firstY: gcode.firstY,
            firstZ: gcode.firstZ,
            firstCommand: gcode.firstCommand
        });

        const geom = new THREE.BufferGeometry();
        geom.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
        geom.setAttribute(
            'color',
            new THREE.Float32BufferAttribute(colors, 3)
        );

        const mat = new THREE.LineBasicMaterial({ vertexColors: true });
        const lines = new THREE.LineSegments(geom, mat);

        this.gcodeGroup.add(lines);
        this.cncGroup.add(this.gcodeGroup);
        this.renderer.render(this.scene, this.camera);
    }

    calculatePositions(lines, start) {
        const positions = [];
        const colors = [];

        let x = start.firstX;
        let y = start.firstY;
        let z = start.firstZ;
        let currentCommand = start.firstCommand;

        for (const line of lines) {
            const startX = x;
            const startY = y;
            const startZ = z;

            if (line.x) {
                x = line.x;
            }
            if (line.y) {
                y = line.y;
            }
            if (line.z) {
                z = line.z;
            }

            if (line.command) {
                currentCommand = line.command;
            }

            const color = this.colorMap[currentCommand] || new THREE.Color(0xffffff);

            if ([Commands.G0, Commands.G1].includes(currentCommand)) {
                positions.push(startX, startY, startZ, x, y, z);
                colors.push(color.r, color.g, color.b, color.r, color.g, color.b);

            } else if ([Commands.G2, Commands.G3].includes(currentCommand)) {
                const isClockwise = currentCommand === Commands.G2;
                const centerX = line.i !== undefined ? startX + line.i : startX; // I is the X distance to the center
                const centerY = line.j !== undefined ? startY + line.j : startY; // J is the Y distance to the center
                const radius = Math.sqrt((startX - centerX) ** 2 + (startY - centerY) ** 2);

                const startAngle = Math.atan2(startY - centerY, startX - centerX);
                const endAngle = Math.atan2(y - centerY, x - centerX);

                const curve = new THREE.EllipseCurve(
                    centerX,
                    centerY,
                    radius,
                    radius,
                    startAngle,
                    endAngle,
                    isClockwise
                );

                const points = curve.getPoints(12);

                for (let i = 0; i < points.length - 1; i++) {
                    const p1 = points[i], p2 = points[i + 1];
                    positions.push(p1.x, p1.y, startZ, p2.x, p2.y, startZ);
                    colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
                }
            }
        }

        return { positions, colors };
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
        this.cncGroup?.clear();
        this.gcodeGroup?.clear();
        this.scene?.clear();
        this.renderer.dispose();
        this.controls.dispose();
    }

    disposeGcode() {
        if (this.gcodeGroup) {
            this.gcodeGroup.clear();
            this.cncGroup.remove(this.gcodeGroup);
            this.gcodeGroup = null;
            this.renderer.render(this.scene, this.camera);
        }
    }
}
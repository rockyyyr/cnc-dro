import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { Constants } from '../../lib/FluidNC';
import { Commands } from '../../lib/Gcode/Parser';

export default class Scene {
    constructor(ref, options = {}) {
        this.lastTime = 0;
        this.needsRender = true;

        this.size = Math.max(Constants.Dimensions.Machine.x, Constants.Dimensions.Machine.y);
        this.divisions = 20;

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
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
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
        this.plane = new THREE.GridHelper(this.size, this.divisions);
        this.plane.position.set((this.size / 2), 0, -(this.size / 2));
        const box = new THREE.Box3().setFromObject(this.plane);
        this.subjectBoundingBox = box;
        this.scene.add(this.plane);
        // this.drawPlaneLabels();
    }

    drawAxes() {
        const axesHelper = new THREE.AxesHelper(50);
        this.cncGroup.add(axesHelper);
    }

    drawPlaneLabels() {
        function makeNumberSprite(text) {
            const size = 64;
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.font = '28px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, size / 2, size / 2);

            const tex = new THREE.CanvasTexture(canvas);
            const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false });
            const sprite = new THREE.Sprite(mat);
            sprite.scale.set(10, 10, 1);
            return sprite;
        }

        // const step = this.size / this.divisions;
        const step = 50;

        for (let i = 0; i < this.size; i += step) {
            const x = i;
            const sprite = makeNumberSprite(Math.round(x));
            sprite.position.set(x, 0.1, 0);     // slight lift in Y so it’s above the grid
            this.scene.add(sprite);
        }

        const finalX = makeNumberSprite(Math.round(this.size));
        finalX.position.set(this.size, 0.1, 0);
        this.scene.add(finalX);

        for (let j = 0; j < this.size; j += step) {
            const z = j;
            const sprite = makeNumberSprite(Math.round(z));
            sprite.position.set(0, 0.1, -z);
            this.scene.add(sprite);
        }

        const finalY = makeNumberSprite(Math.round(this.size));
        finalY.position.set(0, 0.1, -this.size);
        this.scene.add(finalY);
    }

    drawTool(position) {
        const geometry = new THREE.CylinderGeometry(1, 1, this.toolHeight, 32);
        const material = new THREE.MeshBasicMaterial({ color: '#00FFFF' });
        this.tool = new THREE.Mesh(geometry, material);
        this.tool.rotation.x = Math.PI / 2;
        this.tool.position.set(position.x, position.y, position.z + this.toolBottom);
        this.cncGroup.add(this.tool);
    }

    updateTool(position, follow = false) {
        if (this.tool) {
            this.tool.position.set(position.x, position.y, position.z + this.toolBottom);
            this.tool.updateMatrixWorld();

            if (follow) {
                const cameraOffset = new THREE.Vector3(0, 150, 150);
                const toolPosition = new THREE.Vector3(position.x, 0, -position.y);

                this.camera.position.copy(toolPosition).add(cameraOffset);
                this.camera.lookAt(toolPosition);
                this.controls.target.copy(toolPosition);
                this.controls.update();

                this.needsRender = true;
            }
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

            if (line.x !== undefined) {
                x = line.x;
            }
            if (line.y !== undefined) {
                y = line.y;
            }
            if (line.z !== undefined) {
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
                const centerX = line.i != null ? startX + line.i : startX;
                const centerY = line.j != null ? startY + line.j : startY;
                const radius = Math.hypot(startX - centerX, startY - centerY);
                const startAngle = Math.atan2(startY - centerY, startX - centerX);
                const endAngle = Math.atan2(y - centerY, x - centerX);

                const deltaZ = z - startZ;

                const curve = new THREE.EllipseCurve(
                    centerX, centerY, radius, radius,
                    startAngle, endAngle, isClockwise
                );

                const N = 12;
                const pts2D = curve.getPoints(N);

                for (let i = 0; i < pts2D.length - 1; i++) {
                    const p1 = pts2D[i];
                    const p2 = pts2D[i + 1];

                    const t1 = i / (pts2D.length - 1);
                    const t2 = (i + 1) / (pts2D.length - 1);

                    const z1 = startZ + deltaZ * t1;
                    const z2 = startZ + deltaZ * t2;

                    positions.push(
                        p1.x, p1.y, z1,
                        p2.x, p2.y, z2
                    );
                    colors.push(
                        color.r, color.g, color.b,
                        color.r, color.g, color.b
                    );
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
            this.disposeGroup(this.gcodeGroup);
            this.cncGroup.remove(this.gcodeGroup);
            this.renderer.render(this.scene, this.camera);
            this.gcodeGroup = null;
        }
    }

    disposeGroup(group) {
        group.traverse((obj) => {
            if (obj.isMesh || obj.isLine || obj.isPoints) {
                if (obj.geometry) {
                    obj.geometry.dispose();
                }
                if (obj.material) {
                    const disposeMaterial = (material) => {
                        for (const key in material) {
                            const value = material[key];
                            if (value && value.isTexture) {
                                value.dispose();
                            }
                        }
                        material.dispose();
                    };

                    if (Array.isArray(obj.material)) {
                        obj.material.forEach(disposeMaterial);
                    } else {
                        disposeMaterial(obj.material);
                    }
                }
            }
        });

        while (group.children.length > 0) {
            const child = group.children[0];
            group.remove(child);
        }
    }
}
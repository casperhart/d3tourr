import * as THREE from 'three';
import { ProjectionMatrix, ScatterInputData, Config, Dataset } from './data';
import { multiply, max, mean } from 'mathjs';

export class ScatterWidget {
    private container: HTMLElement;
    private canvas: HTMLCanvasElement = document.createElement("canvas");
    private scene: THREE.Scene;
    private camera: THREE.Camera;
    private renderer: THREE.WebGLRenderer;
    private config: Config;
    private dataset: Dataset;
    private projectionMatrices: Array<ProjectionMatrix>;
    private clock = new THREE.Clock();
    private time: number;
    private oldFrame: number;
    private frameBuffers: THREE.BufferAttribute[] = [];
    private points: THREE.Points;
    private minPointSize: number = 0.02;

    constructor(containerElement: HTMLElement, width: number, height: number) {

        this.scene = new THREE.Scene()

        const light = new THREE.AmbientLight(0x404040); // soft white light
        this.scene.add(light);

        this.canvas.width = width;
        this.canvas.height = height;

        this.container = containerElement;
        this.container.appendChild(this.canvas)

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });

        this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
        this.camera.position.setZ(4);

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.renderer.render(this.scene, this.camera);
    }

    private constructPlot() {

        let geometry = new THREE.BufferGeometry();
        let material = new THREE.PointsMaterial()

        // TODO: calculate size dynamically based on number of points
        let pointSize: number = 0.5 * this.dataset.length ** (-1 / 3)
        material.size = max(pointSize, this.minPointSize)

        let frameBuffer = this.getFrameBuffer(0, this.config.center)
        geometry.setAttribute('position', frameBuffer);
        if (this.config.cacheFrames) {
            this.frameBuffers.push(frameBuffer)
        }

        this.points = new THREE.Points(geometry, material)
        this.scene.add(this.points)

        this.clock = new THREE.Clock();
        this.time = 0;
        this.oldFrame = -1;
    }

    public resize(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    public renderValue(inputData: ScatterInputData) {
        this.config = inputData.config;
        this.dataset = inputData.dataset;
        this.projectionMatrices = inputData.projectionMatrices;

        this.constructPlot();
        this.animate();
    }

    private getFrameBuffer(i: number, center: boolean): THREE.BufferAttribute {
        let positionMatrix: Dataset = multiply(this.dataset, this.projectionMatrices[i]);

        if (center) {
            positionMatrix = this.center(positionMatrix)
        }

        let flattenedPositionMatrix = new Float32Array([].concat(...positionMatrix));
        return new THREE.BufferAttribute(flattenedPositionMatrix, 3)
    }

    private center(X: Dataset): Dataset {
        let colMeans = mean(X, 0)
        let centered = X.map(function (row: number[]) {
            return row.map((element, index) => element - colMeans[index])
        });
        return centered
    }

    private animate() {
        let delta = this.clock.getDelta();
        this.time += delta;

        if (this.time >= this.config.duration) this.time = 0;

        let currentFrame = Math.floor(this.time * this.config.fps);

        if (currentFrame != this.oldFrame) {
            let frameBuffer: THREE.BufferAttribute

            if (this.frameBuffers[currentFrame] == undefined) {
                frameBuffer = this.getFrameBuffer(currentFrame, this.config.center)
                if (this.config.cacheFrames) {
                    this.frameBuffers[currentFrame] = frameBuffer
                }
            }
            else {
                frameBuffer = this.frameBuffers[currentFrame]
            }
            this.points.geometry.setAttribute('position', frameBuffer);
            this.points.geometry.attributes.position.needsUpdate = true;
            this.oldFrame = currentFrame;
        }

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => this.animate());
    }

}
export interface ScatterInputData {
    config: Config;
    dataset: Matrix;
    projectionMatrices: Array<ProjectionMatrix>;
}

export interface Config { fps: number, duration: number, cacheFrames: boolean, center: boolean };

export type Matrix = Array<Array<number>>;

export type ProjectionMatrix = Array<[number, number, number]>
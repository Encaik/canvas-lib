import { CanvasOptions } from './index';
import { Entity, Rect } from "./shape";
export declare class Canvas {
    private _ctx;
    constructor(container: string, options?: CanvasOptions);
    initCanvas(container: string, options?: CanvasOptions): this;
    addEntity(entity: Entity): void;
    addRect(rect: Rect): void;
}

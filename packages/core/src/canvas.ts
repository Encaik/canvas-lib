import { Point } from ".";
import { CanvasOptions } from "../types";
import { Detection } from "./detection";
import { Scene } from "./scene";
import { Entity, Rect } from "./shape";


export class Canvas {
    private _ctx: CanvasRenderingContext2D;
    private _canvas: HTMLCanvasElement;
    private _scene: Scene;
    private _detection:Detection;
    public options:CanvasOptions;

    constructor(container: string, scene:Scene,options?: CanvasOptions) {
        this._scene = scene;
        this.options = options;
        this._detection = new Detection(options);
        this.initCanvas(container, options);
    }

    public initCanvas(container: string, options?: CanvasOptions) {
        if (!container) return;
        this._canvas = document.getElementById(container) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d");
        
        if (options) {
            if (options.width) this._canvas.width= options.width;
            if (options.height) this._canvas.height= options.height;
            if (options.bgColor) {
                this._ctx.fillStyle = options.bgColor.hex;
                this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            }
        }
        return this;
    }

    public addEntity(entity: Entity,addScene=true) {
        this._detection.addEntity(entity);
        if (entity.type === "rect") {
            this.addRect(<Rect>entity);
            if(addScene){
                this._scene.entityList.push(entity);
            }
      
        }
    }

    public addRect(rect: Rect) {
        this._ctx.fillStyle = rect.fillColor.hex;
        this._ctx.fillRect(rect.center.x, rect.center.y, rect.width, rect.height);
        if(rect.strokeColor){
            this._ctx.strokeStyle = rect.strokeColor.hex;
            this._ctx.lineWidth = rect.strokeWidth;
            this._ctx.strokeRect(rect.center.x, rect.center.y, rect.width, rect.height);
        }
    }

    public fillBgStyle(){
        this._ctx.fillStyle = this.options.bgColor.hex;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    public update(){
        this._detection.update();
        this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height);
        this.fillBgStyle();
        this._scene.entityList.forEach(entity => this.addEntity(entity,false));
    }

    public detectionShape(point:Point):Entity{
        return this._detection.detectionShape(point);
    }
} 
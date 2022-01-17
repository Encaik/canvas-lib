import { Point } from ".";
import { CanvasOptions,CanvasTransform } from "../types";
import { Detection } from "./detection";
import { drawReact } from "./draw";
import { Scene } from "./scene";
import { Entity, Rect } from "./shape";


export class Canvas {
    private _ctx: CanvasRenderingContext2D;
    private _canvas: HTMLCanvasElement;
    private _scene: Scene;
    private _detection:Detection;
    private _transform:CanvasTransform = {
        translate: {
            x:0,
            y:0
        }
    };
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
        this._ctx = this._canvas.getContext("2d", { alpha: false });
        
        if (options) {
            if (options.width) this._canvas.width= options.width;
            if (options.height) this._canvas.height= options.height;
            if (options.bgColor) {
                this.fillBgStyle();
            }
        }
        return this;
    }

    public addEntity(entity: Entity,addScene=true) {
        this._detection.addEntity(entity);
        if (entity.type === "rect") {
            drawReact(this._ctx,this._transform,<Rect>entity);
            if(addScene){
                this._scene.entityList.push(entity);
            }
        }
    }

    public fillBgStyle(){
        //绘制背景
        this._ctx.fillStyle = this.options.bgColor.hex;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        //绘制网格
        const span = 100;
        this._ctx.beginPath();
        this._ctx.lineWidth = 0.1;
        for(let x=this._transform.translate.x%span;x<this._canvas.width;x+=span){
            this._ctx.moveTo(x,0);
            this._ctx.lineTo(x,this._canvas.height);
        }
        for(let y=this._transform.translate.y%span;y<this._canvas.height;y+=span){
            this._ctx.moveTo(0,y);
            this._ctx.lineTo(this._canvas.width,y);
        }
        this._ctx.strokeStyle="#000";
        this._ctx.stroke();
    }

    public update(){
        this._detection.update();
        this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height);
        if (this.options&&this.options.bgColor) {
            this.fillBgStyle();
        }
        this._scene.entityList.forEach(entity => this.addEntity(entity,false));
    }

    public translate(offsetX:number,offsetY:number){
        const x = this._transform.translate.x+offsetX;
        const y = this._transform.translate.y+offsetY;
        this._transform.translate = {x,y};
        this._detection.translate(x,y);
    }

    public detectionShape(point:Point):Entity{
        return this._detection.detectionShape(point);
    }
} 
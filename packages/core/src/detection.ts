import { Circle, Entity, Point, Rect } from ".";
import { CanvasOptions,CanvasTransform } from "..";
import { Color } from "./color";
import { drawCircle, drawReact } from "./draw";

export class Detection {
    private _detectionCtx: CanvasRenderingContext2D;
    private _detectionCanvas: HTMLCanvasElement;
    private _shapeMap:Map<string,Entity>;
    private _colorMap:Map<Entity,number[]>;
    private _transform:CanvasTransform = {
        translate: {
            x:0,
            y:0
        }
    };
    

    constructor(options?: CanvasOptions){
        this._detectionCanvas = document.createElement("canvas");
        this._detectionCtx = this._detectionCanvas.getContext("2d", { alpha: false });
        // document.body.appendChild(this._detectionCanvas);
        if (options.width) this._detectionCanvas.width= options.width;
        if (options.height) this._detectionCanvas.height= options.height;
        this._shapeMap = new Map();
        this._colorMap = new Map();

    }

    addEntity(entity:Entity){
        const _e = {...entity};
        let color = [0,0,0];
        if(this._colorMap.has(entity)){
            color = this._colorMap.get(entity);
        }else{
            color = this.randomColor();
            this._shapeMap.set(color.join(","),entity);
            this._colorMap.set(entity,color);
        }
        _e.fillColor = new Color(`rgb(${color[0]},${color[1]},${color[2]})`);
        if(entity.strokeColor){
            _e["strokeColor"] = new Color(`rgb(${color[0]},${color[1]},${color[2]})`);
        }
        switch (entity.type) {
        case "rect":
            drawReact(this._detectionCtx,this._transform,<Rect>_e);
            break;
        case "circle":
            drawCircle(this._detectionCtx,this._transform,<Circle>_e);
            break;
        default:
            break;
        }
    }

    public update(){
        this._detectionCtx.clearRect(0,0,this._detectionCanvas.width,this._detectionCanvas.height);
    }

    private randomColor():number[]{
        let color = [Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)];
        if(this._shapeMap.has(color.join(","))){
            color = [Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)];
        }else{
            return color;
        }
    }

    public detectionShape(point:Point):Entity{
        const imgData = this._detectionCtx.getImageData(point.x,point.y,1,1);
        const color = [imgData.data[0],imgData.data[1],imgData.data[2]].join(",");
        if(this._shapeMap.has(color)){
            return this._shapeMap.get(color);
        }
    }

    public translate(x:number,y:number){
        this._transform.translate = {x,y};
    }
}
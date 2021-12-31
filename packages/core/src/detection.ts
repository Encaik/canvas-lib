import { Entity, Point, Rect } from ".";
import { CanvasOptions } from "..";

export class Detection {
    private _detectionCtx: CanvasRenderingContext2D;
    private _detectionCanvas: HTMLCanvasElement;
    private _shapeMap:Map<string,Entity>;
    private _colorMap:Map<Entity,number[]>;

    constructor(options?: CanvasOptions){
        this._detectionCanvas = document.createElement("canvas");
        this._detectionCtx = this._detectionCanvas.getContext("2d");
        // document.body.appendChild(this._detectionCanvas);
        if (options.width) this._detectionCanvas.width= options.width;
        if (options.height) this._detectionCanvas.height= options.height;
        this._shapeMap = new Map();
        this._colorMap = new Map();

    }

    addEntity(entity:Entity){
        if(this._colorMap.has(entity)){
            const color = this._colorMap.get(entity);
            this.addRect(<Rect>entity,color);
        }else{
            const color = this.randomColor();
            this._shapeMap.set(color.join(","),entity);
            this._colorMap.set(entity,color);
            if (entity.type === "rect") {
                this.addRect(<Rect>entity,color);
            }
        } 
    }

    addRect(rect: Rect,color:number[]) {
        this._detectionCtx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
        this._detectionCtx.fillRect(rect.center.x, rect.center.y, rect.width, rect.height);
        if(rect.strokeColor){
            this._detectionCtx.strokeStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
            this._detectionCtx.lineWidth = rect.strokeWidth;
            this._detectionCtx.strokeRect(rect.center.x, rect.center.y, rect.width, rect.height);
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
}
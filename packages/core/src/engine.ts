import { Scene } from "./scene";
import { Canvas } from "./canvas";
import { CanvasOptions } from "../types";
import { Render } from "./render";
import { EventDispatch } from "./event-dispatch";
import { Event } from "./event";

export class Engine {
    public scene: Scene;
    public canvas: Canvas;
    public render: Render;
    public dispatcher:EventDispatch;

    constructor(container: string, canvasOptions?: CanvasOptions){
        this.initEngine(container,canvasOptions);
    }

    initEngine(container: string, canvasOptions?: CanvasOptions){
        this.scene = new Scene();
        this.canvas = new Canvas(container,this.scene,canvasOptions);
        this.render = new Render(this);
        this.dispatcher = new EventDispatch();
    }

    on(type:string,fn:(event: Event)=>void){
        this.dispatcher.on(type,fn);
    }
}
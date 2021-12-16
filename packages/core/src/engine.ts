import { Scene } from "./scene";
import { Canvas } from "./canvas";
import { CanvasOptions } from "../types";
import { Render } from "./render";
import { EventDispatch } from "./event-dispatch";
import { Event } from "./event";
import { EventType } from "..";
import { Behavior } from "./behavior";

export class Engine {
    public scene: Scene;
    public canvas: Canvas;
    public dispatcher:EventDispatch;

    constructor(container: string, canvasOptions?: CanvasOptions){
        this.initEngine(container,canvasOptions);
    }

    initEngine(container: string, canvasOptions?: CanvasOptions){
        this.scene = new Scene();
        this.canvas = new Canvas(container,this.scene,canvasOptions);
        new Render(this);
        this.dispatcher = new EventDispatch();
        new Behavior(this);
    }

    on(type:EventType,fn:(event: Event)=>void){
        this.dispatcher.on(new Event(type,this,{}),fn);
    }

    off(type:EventType,fn:(event: Event)=>void){
        this.dispatcher.off(type,fn);
    }
}
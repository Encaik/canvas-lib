import { Scene } from "./scene";
import { Canvas } from './canvas';
import { CanvasOptions } from "../types";
import { Render } from "./render";

export class Engine {
  public scene: Scene;
  public canvas: Canvas;
  public render: Render;

  constructor(container: string, canvasOptions?: CanvasOptions){
    this.initEngine(container,canvasOptions);
  }

  initEngine(container: string, canvasOptions?: CanvasOptions){
    this.scene = new Scene();
    this.canvas = new Canvas(container,this.scene,canvasOptions);
    this.render = new Render(this);
  }
}
import { CanvasOptions } from "./type";
import { Entity, Rect } from "./shape";


export class Canvas {
  private _ctx: CanvasRenderingContext2D;

  constructor(container: string, options?: CanvasOptions) {
    this.initCanvas(container, options);
  }

  public initCanvas(container: string, options?: CanvasOptions) {
    if (!container) return;
    let canvas = document.getElementById(container) as HTMLCanvasElement;
    this._ctx = canvas.getContext("2d");
    if (options) {
      if (options.width) canvas.width = options.width;
      if (options.height) canvas.height = options.height;
      if (options.bgColor) {
        this._ctx.fillStyle = options.bgColor.hex;
        this._ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
    return this;
  }

  public addEntity(entity: Entity) {
    console.log(entity);
    if (entity.type === "rect") {
      this.addRect(<Rect>entity);
    }
  }

  public addRect(rect: Rect) {
    this._ctx.fillStyle = rect.fillColor.hex;
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    this._ctx.fillRect(rect.center.x - halfWidth, rect.center.y - halfHeight, rect.center.x + halfWidth, rect.center.y + halfHeight);
  }
} 
import { Point } from "..";
import { EntityOptions } from "../..";
import { Entity } from "./entity";

export class Rect extends Entity {
  public width: number;
  public height: number;

  constructor(options: { width: number, height: number } & EntityOptions) {
    super({ ...options, type: "rect" });
    this.height = options.height;
    this.width = options.width;
  }

  isContains(point:Point):boolean{
    return point.x<this.center.x+this.width&&point.x>this.center.x&&point.y<this.center.y+this.height&&point.y>this.center.y;
  }
}
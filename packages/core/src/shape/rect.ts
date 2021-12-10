import { EntityOptions } from "../type";
import { Entity } from "./entity";

export class Rect extends Entity {
  public width: number;
  public height: number;

  constructor(options: { width: number, height: number } & EntityOptions) {
    super({ ...options, type: "rect" });
    this.height = options.height;
    this.width = options.width;
  }
}
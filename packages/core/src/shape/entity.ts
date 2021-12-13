import { EntityOptions } from "../..";
import { Color } from "../color";
import { Point } from "../point";

export class Entity {
  public id: string | number | symbol;
  public center: Point;
  public fillColor: Color;
  public strokeColor: Color;
  public type: string;

  constructor(options: EntityOptions) {
    if (!options) return;
    this.id = options.id;
    this.center = options.center;
    if (options.type) this.type = options.type;
    if (options.fillColor) this.fillColor = options.fillColor;
    if (options.strokeColor) this.strokeColor = options.strokeColor;
  }
}
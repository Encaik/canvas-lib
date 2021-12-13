import { Color } from "./src/color";
import { Point } from "./src/point";

export interface CanvasOptions {
  width?: number,
  height?: number,
  bgColor?: Color
}

export interface EntityOptions {
  id: string | number | symbol;
  center: Point;
  type?: string;
  fillColor?: Color;
  strokeColor?: Color;
}
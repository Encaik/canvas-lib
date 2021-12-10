import { Color } from "./color";
import { Point } from "./point";

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
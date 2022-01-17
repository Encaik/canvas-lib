import { Color } from "./src/color";
import { Point } from "./src/point";

export interface CanvasOptions {
  width?: number,
  height?: number,
  bgColor?: Color
}

export interface EntityOptions {
  id?: string | number | symbol;
  center?: Point;
  type?: string;
  fillColor?: Color;
  strokeColor?: Color;
  strokeWidth?: number;
}

export interface CanvasTransform {
  translate:CanvasTranslate
}

export interface CanvasTranslate {
  x:number;
  y:number;
}

export type EventType = "click"|"mousemove"|"shapehover"|"mousedown"|"mouseup"|"shapein"|"shapeout";
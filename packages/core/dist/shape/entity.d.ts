import { EntityOptions } from "../..";
import { Color } from "../color";
import { Point } from "../point";
export declare class Entity {
    id: string | number | symbol;
    center: Point;
    fillColor: Color;
    strokeColor: Color;
    type: string;
    constructor(options: EntityOptions);
}

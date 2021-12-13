import { EntityOptions } from "../..";
import { Entity } from "./entity";
export declare class Rect extends Entity {
    width: number;
    height: number;
    constructor(options: {
        width: number;
        height: number;
    } & EntityOptions);
}

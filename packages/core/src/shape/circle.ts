import { Point } from "..";
import { EntityOptions } from "../..";
import { Entity } from "./entity";

export class Circle extends Entity {
    public radius: number;

    constructor(options: { width?: number, height?: number,radius?:number } & EntityOptions) {
        super({ ...options, type: "circle" });
        this.radius = options.radius||10;
    }

    
    // TODO:待添加逻辑判断
    isContains(point:Point):boolean{
        return false;
    }
}
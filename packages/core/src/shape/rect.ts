import { Point } from "..";
import { EntityOptions } from "../..";
import { Entity } from "./entity";

export class Rect extends Entity {
    public width: number;
    public height: number;
    public radius: number;

    constructor(options: { width?: number, height?: number,radius?:number } & EntityOptions) {
        super({ ...options, type: "rect" });
        this.height = options.height||50;
        this.width = options.width||50;
        this.radius = options.radius||0;
    }

    

    isContains(point:Point):boolean{
        return point.x<this.center.x+this.width&&point.x>this.center.x&&point.y<this.center.y+this.height&&point.y>this.center.y;
    }
}
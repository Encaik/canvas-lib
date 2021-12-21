import { EntityOptions } from "../..";
import { Color } from "../color";
import { Point } from "../point";

export class Entity {
    public id: string | number | symbol;
    public center: Point;
    public fillColor: Color;
    public strokeColor: Color;
    public strokeWidth: number;
    public type: string;

    constructor(options: EntityOptions) {
        if (!options) return;
        this.id = options.id||`${new Date().getMilliseconds()}${Math.round(Math.random()*10)}`;
        this.center = options.center||new Point(0, 0);
        this.type = options.type||"rect";
        this.fillColor = options.fillColor||new Color("#55f");
        this.strokeColor = options.strokeColor;
        this.strokeWidth = options.strokeWidth||1;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isContains(point: Point):boolean {
        throw new Error("Method not implemented.");
    }
}
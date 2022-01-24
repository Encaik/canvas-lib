import { Point } from "..";
import { EntityOptions } from "../..";
import { Entity } from "./entity";

export class Text extends Entity {
    public content: string;
    public fontStyle: string;
    public fontVariant: string;
    public fontWeight: string;
    public fontSize: number;
    public fontFamily: string;
    public maxWidth: number;

    constructor(options: { content?: string,fontStyle?: string,fontVariant?: string,fontWeight?: string,fontSize?: number,fontFamily?: string, maxWidth?: number } & EntityOptions) {
        super({ ...options, type: "text" });
        this.content = options.content || "无文本内容";
        this.fontStyle = options.fontStyle||"normal";
        this.fontVariant = options.fontVariant||"normal";
        this.fontWeight = options.fontWeight||"normal";
        this.fontSize = options.fontSize||24;
        this.fontFamily = options.fontFamily||"Microsoft YaHei";
        this.maxWidth = options.maxWidth;
    }


    // TODO:待添加逻辑判断
    isContains(point: Point): boolean {
        return false;
    }
}
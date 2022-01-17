import { Rect } from "./shape";
import { CanvasTransform } from "../types";

export function drawReact(ctx,transform:CanvasTransform,rect: Rect,options:Partial<Rect> = {}) {
    if(options.fillColor){
        ctx.fillStyle = options.fillColor.hex||options.fillColor.rgb;
    }else{
        ctx.fillStyle =rect.fillColor.hex||rect.fillColor.rgb;
    }
    ctx.fillRect(rect.center.x+transform.translate.x, rect.center.y+transform.translate.y, rect.width, rect.height);
    if(options.strokeColor){
        ctx.strokeStyle = options.strokeColor.hex||options.strokeColor.rgb;
        ctx.lineWidth = rect.strokeWidth;
        ctx.strokeRect(rect.center.x+transform.translate.x, rect.center.y+transform.translate.y, rect.width, rect.height);
    }else if(rect.strokeColor){
        ctx.strokeStyle = rect.strokeColor.hex||rect.strokeColor.rgb;
        ctx.lineWidth = rect.strokeWidth;
        ctx.strokeRect(rect.center.x+transform.translate.x, rect.center.y+transform.translate.y, rect.width, rect.height);
    }
}
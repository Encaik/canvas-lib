import { Circle, Rect } from "./shape";
import { CanvasTransform } from "../types";

export function fillRect(ctx:any,x:number,y:number,w:number,h:number){
    ctx.fillRect(x, y, w, h);
}

export function strokeRect(ctx:any,x:number,y:number,w:number,h:number){
    ctx.strokeRect(x, y, w, h);
}

export function roundRectPath(ctx:any,x:number,y:number,r:number,w:number,h:number){
    ctx.beginPath();
    ctx.moveTo(r+x, y);
    ctx.lineTo(w+x-r, y);
    ctx.arc(w+x-r, y+r, r, 1.5 * Math.PI, 0, false);
    ctx.lineTo(w+x, h+y-r);
    ctx.arc(w+x-r,  h+y-r, r, 0, 0.5 * Math.PI, false);
    ctx.lineTo(w+x-r, h+y);
    ctx.arc(x+r, h+y-r, r, 0.5 * Math.PI, Math.PI, false);
    ctx.lineTo(x, y+r);
    ctx.arc(x+r, y+r, r, Math.PI, 1.5 * Math.PI, false);
}

export function fillRoundRect(ctx:any,x:number,y:number,r:number,w:number,h:number){
    roundRectPath(ctx,x,y,r,w,h);
    ctx.fill();
}

export function strokeRoundRect(ctx:any,x:number,y:number,r:number,w:number,h:number){
    roundRectPath(ctx,x,y,r,w,h);
    ctx.stroke();
}

export function drawReact(ctx:any,transform:CanvasTransform,rect: Rect) {
    ctx.save();
    const x = rect.center.x+transform.translate.x;
    const y = rect.center.y+transform.translate.y;
    const w = rect.width;
    const h = rect.height;
    const r = rect.radius;
    ctx.fillStyle =rect.fillColor.hex||rect.fillColor.rgb;
    if(rect.radius){
        fillRoundRect(ctx,x,y,r,w,h);
    }else{
        fillRect(ctx,x,y,w,h);
    }
    if(rect.strokeColor){
        ctx.strokeStyle = rect.strokeColor.hex||rect.strokeColor.rgb;
        ctx.lineWidth = rect.strokeWidth;
        if(rect.radius){
            strokeRoundRect(ctx,x,y,r,w,h);
        }else{
            strokeRect(ctx,x,y,w,h);
        } 
    }
    ctx.restore();
}

export function drawCircle(ctx:any,transform:CanvasTransform,circle: Circle){
    ctx.save();
    const x = circle.center.x+transform.translate.x;
    const y = circle.center.y+transform.translate.y;
    const r = circle.radius;
    ctx.fillStyle =circle.fillColor.hex||circle.fillColor.rgb;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
    if(circle.strokeColor){
        ctx.strokeStyle = circle.strokeColor.hex||circle.strokeColor.rgb;
        ctx.lineWidth = circle.strokeWidth;
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.stroke();
    }
    ctx.restore();
}
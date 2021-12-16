import { EventType } from "../types";

export class Listener {
    public addEventListener(type:EventType,fn:any){
        window.addEventListener(type,fn);
    }

    public removeEventListener(type:EventType,fn:any){
        window.removeEventListener(type,fn);
    }
}
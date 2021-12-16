import { EventType } from "../types";

export class Listener {
    public addEventListener(type:EventType,fn:any){
        switch (type) {
        case "click":
            window.addEventListener("click",fn);
            break;
        default:
            break;
        }
    }

    public removeEventListener(type:EventType,fn:any){
        switch (type) {
        case "click":
            window.removeEventListener("click",fn);
            break;
        default:
            break;
        }
    }
}
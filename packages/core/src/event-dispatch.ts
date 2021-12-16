import { EventType } from "../types";
import { Event } from "./event";
import { Listener } from "./listener";

export class EventDispatch {
    private _events:{[key in EventType]:((Event)=>void)[]};
    private _listener:Listener;

    constructor(listener:Listener){
        this._events = Object.create(null);
        this._listener = listener;
    }

    on(type:EventType,fn:(event: Event)=>void){
        if(this._events[type]){
            this._events[type].push(fn);
        }else{
            this._events[type] = [fn];
            this._listener.addEventListener(type,this.mouseEvent);
        } 
    }

    off(type:EventType,fn:(event: Event)=>void){
        if(this._events[type]){
            const idx = this._events[type].findIndex(i=>i===fn);
            const len = this._events[type].length;
            if(len<2&&idx<1){
                delete this._events[type];
                this._listener.removeEventListener(type,this.mouseEvent);
            }else{
                this._events[type][idx] = this._events[type][len-1];
                this._events[type].pop();
            }
        }
    }

    dispatch(type:string,data:any){
        if(this._events[type]){
            this._events[type].forEach(fn => {
                fn(new Event(<EventType>type,data));
            });
        }
    }

    mouseEvent(e){
        console.log(e);
    }
}
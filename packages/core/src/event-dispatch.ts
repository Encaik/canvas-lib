import { EventType } from "../types";
import { Event } from "./event";
import { Listener } from "./listener";

export class EventDispatch {
    private _events:any;
    private _listener:Listener;

    constructor(listener:Listener){
        this._events = Object.create(null);
        this._listener = listener;
    }

    on(type:EventType,target:any,fn:(event: Event)=>void){
        if(this._events[type]){
            this._events[type].push({
                fn,
                target
            });
        }else{
            this._events[type] = [{
                fn,
                target
            }];
            this._listener.addEventListener(type,this.mouseEvent.bind(this));
        } 
    }

    off(type:EventType,fn:(event: Event)=>void){
        if(this._events[type]){
            const idx = this._events[type].findIndex(i=>i===fn);
            const len = this._events[type].length;
            if(len<2&&idx<1){
                delete this._events[type];
                this._listener.removeEventListener(type,this.mouseEvent.bind(this));
            }else{
                this._events[type][idx] = this._events[type][len-1];
                this._events[type].pop();
            }
        }
    }

    dispatch(type:string,event:MouseEvent){
        if(this._events[type]){
            this._events[type].forEach(_event => {
                _event.fn(new Event(<EventType>type,{
                    event,
                    target:_event.target
                }));
            });
        }
    }

    mouseEvent(event:MouseEvent){
        this.dispatch(<EventType>event.type,event);
    }
}
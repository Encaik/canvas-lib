import { EventType } from "../types";
import { Event } from "./event";
import { Listener } from "./listener";

export class EventDispatch {
    private _events:any;
    private _listener:Listener;

    constructor(){
        this._events = Object.create(null);
        this._listener = new Listener();
    }

    on(event:Event,fn:(event: Event)=>void){
        if(this._events[event.type]){
            this._events[event.type].push({
                fn,
                event
            });
        }else{
            this._events[event.type] = [{
                fn,
                event
            }];
            this._listener.addEventListener(event.type,this.mouseEvent.bind(this));
        } 
    }

    off(type:EventType,fn:(event: Event)=>void){
        if(this._events[type]){
            const idx = this._events[type].findIndex(i=>i.fn===fn);
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

    dispatch(type:string,data:any){
        if(this._events[type]){
            this._events[type].forEach(_event => {
                _event.event.data = {..._event.event.data,...data};
                _event.fn(_event.event);
            });
        }
    }

    mouseEvent(event:MouseEvent){
        this.dispatch(<EventType>event.type,{event});
    }
}
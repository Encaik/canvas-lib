import { EventType } from "../types";
import { Event } from "./event";

export class EventDispatch {
    private _events:{[key in EventType]:Event[]};

    constructor(){
        this._events = Object.create(null);
    }

    on(type:string,fn:(event: Event)=>void){
        console.log(type,fn);
        if(this._events[type]){
            this._events[type].push(fn);
        }else{
            this._events[type] = [fn];
        }
        this.dispatch(type);
    }

    off(type:string,fn:(event: Event)=>void){
        if(this._events[type]){
            const idx = this._events[type].findIndex(i=>i===fn);
            const len = this._events[type].length;
            if(len<2&&idx<1){
                delete this._events[type];
            }else{
                this._events[type][idx] = this._events[type][len-1];
                this._events[type].pop();
            }
        }
    }

    dispatch(type:string){
        if(this._events[type]){
            this._events[type].forEach(fn => {
                fn(new Event(<EventType>type,{aaa:"111"}));
            });
        }
    }
}
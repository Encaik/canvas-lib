import { EventDispatch } from "./event-dispatch";

export class Listener {
    private _target:any;
    private _dispatch:EventDispatch;

    constructor(dispatch:EventDispatch,target:any){
        this._dispatch = dispatch;
        this._target = target;
        this.initListener();
    }

    private initListener(){
        // Object.keys(this._dispatch.events).forEach(key=>{
        //     this[key]();
        // });
        this.click();
        this.mousemove();
    }

    private click(){
        window.addEventListener("click",(event)=>{
            this._dispatch.dispatch("click",{event,target:this._target});
        });
    }

    private mousemove(){
        window.addEventListener("mousemove",(event)=>{
            this._dispatch.dispatch("mousemove",{event,target:this._target});
        });
    }
}
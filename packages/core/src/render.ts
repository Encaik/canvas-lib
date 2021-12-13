import { Engine } from "./engine";

export class Render{
  private _engine:Engine;
  private _lastTime:number;
  private _nowTime:number;
  private _fps:number;

  constructor(engine:Engine){
    this._engine = engine;
    this.renderer();
    return this;
  }

  renderer(){
    this._engine.canvas.update();
    this._lastTime = this._nowTime;
    this._nowTime = performance.now();
    this._fps = Math.round(1000/(this._nowTime-this._lastTime));
    window.requestAnimationFrame(()=>{
      this.renderer();
    })
  }
}
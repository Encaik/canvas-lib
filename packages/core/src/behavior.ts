import { Engine, Point } from ".";

export class Behavior {
    private _engine:Engine;

    constructor(engine:Engine){
        this._engine = engine;
        window.addEventListener("mousemove",this.onMouseMove.bind(this));
    }

    onMouseMove(e:MouseEvent){
        console.log(this._engine.scene.getContainsShapes(new Point(e.x,e.y)));
    }
}
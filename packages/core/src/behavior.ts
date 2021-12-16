import { Engine, Event, Point } from ".";

export class Behavior {
    private _engine:Engine;

    constructor(engine:Engine){
        this._engine = engine;
        this._engine.dispatcher.on(
            new Event("mousemove",this._engine,{}),
            this.onMouseMove.bind(this)
        );
    }

    onMouseMove(e:Event){
        const shapes = this._engine.scene.getContainsShapes(new Point(e.data.event.x,e.data.event.y));
        shapes.forEach(shape=>{
            this._engine.dispatcher.dispatch("shapehover",{
                event:e.data.event,
                shape
            });
        });
    }
}
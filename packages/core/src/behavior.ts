import { Engine, Entity, Event, Point } from ".";

export class Behavior {
    private _engine:Engine;
    private _isDrag:boolean;
    private _dragBeforePointer:Point;
    private _hoverShapes:Entity[];
    private _dragShapes:Entity[];

    constructor(engine:Engine){
        this._engine = engine;
        this._hoverShapes = [];
        this._engine.dispatcher.on(
            new Event("mousemove",this._engine,{}),
            this.onMouseMove.bind(this)
        );
        this._engine.dispatcher.on(
            new Event("mousedown",this._engine,{}),
            this.onMouseDown.bind(this)
        );
        this._engine.dispatcher.on(
            new Event("mouseup",this._engine,{}),
            this.onMouseUp.bind(this)
        );
    }

    onMouseMove(e:Event){
        const pointer = new Point(e.data.event.x,e.data.event.y);
        const offset = [0,0];
        if(this._isDrag&&this._dragShapes){
            if(this._dragBeforePointer){
                offset[0] = pointer.x-this._dragBeforePointer.x;
                offset[1] = pointer.y-this._dragBeforePointer.y;
            }
            this._dragBeforePointer = pointer;
            this._dragShapes.forEach(shape=>{
                shape.center.x += offset[0];
                shape.center.y += offset[1];
                this._engine.dispatcher.dispatch("shapedrag",{
                    event:e.data.event,
                    shape
                });
            });
        }
        const shapes = this._engine.scene.getContainsShapes(pointer);
        shapes.forEach(shape=>{
            if(this._hoverShapes.indexOf(shape)===-1){
                this._engine.dispatcher.dispatch("shapein",{
                    event:e.data.event,
                    shape
                });
            }
        });
        this._hoverShapes.forEach(shape=>{
            if(shapes.indexOf(shape)===-1){
                this._engine.dispatcher.dispatch("shapeout",{
                    event:e.data.event,
                    shape
                });
            }
        });
        this._hoverShapes = shapes;
        this._hoverShapes.forEach(shape=>{
            this._engine.dispatcher.dispatch("shapehover",{
                event:e.data.event,
                shape
            });
        });
        this._engine.update();
    }

    onMouseDown(e:Event){
        const pointer = new Point(e.data.event.x,e.data.event.y);
        this._isDrag=true;
        this._dragBeforePointer = null;
        this._dragShapes = this._engine.scene.getContainsShapes(pointer);
    }

    onMouseUp(e:Event){
        this._isDrag=false;
        this._dragBeforePointer = null;
        this._dragShapes = null;
    }
}
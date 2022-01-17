import { Engine, Entity, Event, Point } from ".";

export class Behavior {
    private _engine:Engine;
    private _isDrag:boolean;
    private _dragBeforePointer:Point;
    private _hoverShape:Entity;
    private _dragShape:Entity;

    constructor(engine:Engine){
        this._engine = engine;
        this._hoverShape = null;
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
        if(this._isDrag){
            if(this._dragBeforePointer){
                offset[0] = pointer.x-this._dragBeforePointer.x;
                offset[1] = pointer.y-this._dragBeforePointer.y;
            }
            this._dragBeforePointer = pointer;
            if(this._dragShape){
                this._dragShape.center.x += offset[0];
                this._dragShape.center.y += offset[1];
                this._engine.dispatcher.dispatch("shapedrag",{
                    event:e.data.event,
                    shape:this._dragShape
                });
                this._engine.update();
                return;
            }else{
                this._engine.canvas.translate(offset[0],offset[1]);
                this._engine.update();
                return;
            }  
        }
        //const shapes = this._engine.scene.getContainsShapes(pointer);
        const shape = this._engine.canvas.detectionShape(pointer);
        if(shape){
            //此时有图形，触发hover
            this._engine.dispatcher.dispatch("shapehover",{
                event:e.data.event,
                shape:this._hoverShape
            });
            if(this._hoverShape){
                //之前有图形
                if(shape!==this._hoverShape){
                    //前后不为同一图形，即先出后进
                    this._engine.dispatcher.dispatch("shapeout",{
                        event:e.data.event,
                        shape:this._hoverShape
                    });
                    this._engine.dispatcher.dispatch("shapein",{
                        event:e.data.event,
                        shape
                    });
                }
            }else{
                //之前无图形，即从无到有为shapein
                this._engine.dispatcher.dispatch("shapein",{
                    event:e.data.event,
                    shape
                });
            }
        }else{
            //此时无图形
            if(this._hoverShape){
                //之前有图形，即从有到无为shapeout
                this._engine.dispatcher.dispatch("shapeout",{
                    event:e.data.event,
                    shape:this._hoverShape
                });
            }
        }
        this._hoverShape = shape;
        this._engine.update();
    }

    onMouseDown(e:Event){
        const pointer = new Point(e.data.event.x,e.data.event.y);
        this._isDrag=true;
        this._dragBeforePointer = null;
        //this._dragShape = this._engine.scene.getContainsShapes(pointer);
        this._dragShape = this._engine.canvas.detectionShape(pointer);
    }

    onMouseUp(){
        this._isDrag=false;
        this._dragBeforePointer = null;
        this._dragShape = undefined;
    }
}
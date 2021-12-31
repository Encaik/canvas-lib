import * as CL from "@canvas-lib/core";

const el = document.createElement("canvas");
el.id = "canvas";
document.body.appendChild(el);

const engine = new CL.Engine("canvas", {
    width: window.innerWidth,
    height: window.innerHeight,
    bgColor: new CL.Color("#ddd")
});

engine.on("shapein",(e)=>{
    e.data.shape.strokeColor = new CL.Color("#5f5");
    e.data.shape.strokeWidth = 5;
});

engine.on("shapeout",(e)=>{
    e.data.shape.strokeColor = null;
    e.data.shape.strokeWidth = 1;
});

const rect = new CL.Rect({
    id: "1",
    center: new CL.Point(523, 150),
    type: "rect",
    width: 100,
    height: 50,
    fillColor: new CL.Color("#f55"),
});

engine.canvas.addEntity(rect);
console.log(engine);
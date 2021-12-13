import * as CL from "@canvas-lib/core";

const el = document.createElement("canvas");
el.id = "canvas";
document.body.appendChild(el);

const {canvas,scene} = new CL.Engine("canvas", {
    width: window.innerWidth,
    height: window.innerHeight,
    bgColor: new CL.Color("#000")
});

const rect = new CL.Rect({
    id: "1",
    center: new CL.Point(123, 50),
    type: "rect",
    width: 100,
    height: 50,
    fillColor: new CL.Color("#f55"),
});

canvas.addEntity(rect);
console.log(canvas,scene);
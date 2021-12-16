import * as CL from "@canvas-lib/core";

const el = document.createElement("canvas");
el.id = "canvas";
document.body.appendChild(el);

const engine = new CL.Engine("canvas", {
    width: window.innerWidth,
    height: window.innerHeight,
    bgColor: new CL.Color("#000")
});

engine.on("click",(e)=>{
    console.log(e);
});

setTimeout(() => {
    engine.off("click",(e)=>{
        console.log(e);
    });
}, 2000);

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
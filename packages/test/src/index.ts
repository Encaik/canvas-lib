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

engine.on("mousemove",(e)=>{
    console.log(e);
});

const rect = new CL.Rect({
    id: "1",
    center: new CL.Point(523, 150),
    type: "rect",
    width: 100,
    height: 50,
    fillColor: new CL.Color("#f55"),
});


// setInterval(()=>{
//     rect.center.x+=0.1;
//     rect.center.y+=0.1;
// },1);

// window.addEventListener("mousemove",(e)=>{
//     const list = engine.scene.getContainsShapes(new CL.Point(e.x,e.y));
//     if(list.length){
//         console.log(list[0]);
//         list[0]["strokeColor"] = new CL.Color("#00f");
//     }
// });

engine.canvas.addEntity(rect);
console.log(engine.canvas,engine.scene);
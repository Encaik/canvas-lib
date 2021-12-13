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

window.addEventListener("mousemove",(e)=>{
    const list = scene.getContainsShapes(new CL.Point(e.x,e.y));
    if(list.length){
        console.log(list[0]);
        list[0]["strokeColor"] = new CL.Color("#00f");
    }
});

canvas.addEntity(rect);
console.log(canvas,scene);
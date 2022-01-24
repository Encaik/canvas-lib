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
  e.data.shape.strokeWidth = 3;
});

engine.on("shapeout",(e)=>{
  e.data.shape.strokeColor = null;
  e.data.shape.strokeWidth = 1;
});

const rect = new CL.Rect({
  id: "1",
  center: new CL.Point(523, 150),
  type: "rect",
  width: 200,
  height: 120,
  radius:10,
  fillColor: new CL.Color("#f55"),
});

engine.canvas.addEntity(rect);

const circle = new CL.Circle({
  id:"2",
  center: new CL.Point(523, 350),
  type: "circle",
  radius:50,
  fillColor: new CL.Color("#55f"),
});

engine.canvas.addEntity(circle);

const text = new CL.Text({
  id:"3",
  center: new CL.Point(523, 450),
  type: "text",
  fillColor: new CL.Color("#5ff"),
  content: "123456",
  fontSize:50,
  fontWeight:"900"
});

engine.canvas.addEntity(text);

console.log(engine);
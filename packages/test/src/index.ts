import * as CL from '@canvas-lib/core';

let el = document.createElement("canvas");
el.id = "canvas";
document.body.appendChild(el);

let canvas = new CL.Canvas("canvas", {
  width: window.innerWidth,
  height: window.innerHeight,
  bgColor: new CL.Color("#000")
})

let rect = new CL.Rect({
  id: "1",
  center: new CL.Point(123, 50),
  type: "rect",
  width: 100,
  height: 50,
  fillColor: new CL.Color("#f55"),
})

canvas.addEntity(rect);
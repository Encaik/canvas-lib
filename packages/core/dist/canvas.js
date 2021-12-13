"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var Canvas = /** @class */ (function () {
    function Canvas(container, options) {
        this.initCanvas(container, options);
    }
    Canvas.prototype.initCanvas = function (container, options) {
        if (!container)
            return;
        var canvas = document.getElementById(container);
        this._ctx = canvas.getContext("2d");
        if (options) {
            if (options.width)
                canvas.width = options.width;
            if (options.height)
                canvas.height = options.height;
            if (options.bgColor) {
                this._ctx.fillStyle = options.bgColor.hex;
                this._ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
        return this;
    };
    Canvas.prototype.addEntity = function (entity) {
        console.log(entity);
        if (entity.type === "rect") {
            this.addRect(entity);
        }
    };
    Canvas.prototype.addRect = function (rect) {
        this._ctx.fillStyle = rect.fillColor.hex;
        var halfWidth = rect.width / 2;
        var halfHeight = rect.height / 2;
        this._ctx.fillRect(rect.center.x - halfWidth, rect.center.y - halfHeight, rect.center.x + halfWidth, rect.center.y + halfHeight);
    };
    return Canvas;
}());
exports.Canvas = Canvas;

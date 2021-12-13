"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color(color) {
        this.parseColor(color);
    }
    Color.prototype.parseColor = function (color) {
        var hexReg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
        var rgbaReg = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/;
        if (hexReg.test(color)) {
            this.hex = color;
        }
        else if (rgbaReg.test(color)) {
            this.rgb = color;
        }
    };
    return Color;
}());
exports.Color = Color;

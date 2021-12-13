"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(options) {
        if (!options)
            return;
        this.id = options.id;
        this.center = options.center;
        if (options.type)
            this.type = options.type;
        if (options.fillColor)
            this.fillColor = options.fillColor;
        if (options.strokeColor)
            this.strokeColor = options.strokeColor;
    }
    return Entity;
}());
exports.Entity = Entity;

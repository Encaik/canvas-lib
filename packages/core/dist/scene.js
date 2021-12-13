"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
var Scene = /** @class */ (function () {
    function Scene() {
    }
    Scene.prototype.add = function (entity) {
        this.entityList.push(entity);
    };
    Scene.prototype.remove = function (id) {
        var idx = this.entityList.findIndex(function (entity) { return entity.id === id; });
        var len = this.entityList.length;
        var temp = this.entityList[len - 1];
        this.entityList[idx] = temp;
        this.entityList.pop();
    };
    return Scene;
}());
exports.Scene = Scene;

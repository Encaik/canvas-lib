/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../core/src/canvas.ts":
/*!*****************************!*\
  !*** ../core/src/canvas.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas)
/* harmony export */ });
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
                canvas.style.width = "".concat(options.width, "px");
            if (options.height)
                canvas.style.height = "".concat(options.height, "px");
        }
        return this;
    };
    return Canvas;
}());



/***/ }),

/***/ "../core/src/color.ts":
/*!****************************!*\
  !*** ../core/src/color.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
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



/***/ }),

/***/ "../core/src/index.ts":
/*!****************************!*\
  !*** ../core/src/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.Color),
/* harmony export */   "Canvas": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_2__.Canvas)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../core/src/type.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "../core/src/color.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "../core/src/canvas.ts");





/***/ }),

/***/ "../core/src/type.ts":
/*!***************************!*\
  !*** ../core/src/type.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas-lib/core */ "../core/src/index.ts");

console.log(new _canvas_lib_core__WEBPACK_IMPORTED_MODULE_0__.Color("#fff"));
new _canvas_lib_core__WEBPACK_IMPORTED_MODULE_0__.Canvas("canvas", {
    width: 500,
    height: 300
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBO0lBR0UsZ0JBQVksU0FBaUIsRUFBRSxPQUF1QjtRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsU0FBaUIsRUFBRSxPQUF1QjtRQUMxRCxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDdkIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxPQUFPLENBQUMsS0FBSztnQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFHLE9BQU8sQ0FBQyxLQUFLLE9BQUk7WUFDNUQsSUFBSSxPQUFPLENBQUMsTUFBTTtnQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFHLE9BQU8sQ0FBQyxNQUFNLE9BQUk7U0FDaEU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRDtJQUlFLGVBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQkFBVSxHQUFWLFVBQVcsS0FBWTtRQUNyQixJQUFJLE1BQU0sR0FBRyxvQ0FBb0M7UUFDakQsSUFBSSxPQUFPLEdBQUcsb0pBQW9KO1FBQ2xLLElBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztZQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNsQjthQUFLLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztZQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnNCO0FBQ0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVRUZ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDO0FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxtREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWpDLElBQUksb0RBQVMsQ0FBQyxRQUFRLEVBQUU7SUFDdEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztDQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4uL2NvcmUvc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly90ZXN0Ly4uL2NvcmUvc3JjL2NvbG9yLnRzIiwid2VicGFjazovL3Rlc3QvLi4vY29yZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGVzdC8uLi9jb3JlL3NyYy90eXBlLnRzIiwid2VicGFjazovL3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhc09wdGlvbnMgfSBmcm9tIFwiLi90eXBlXCI7XG5cblxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gIHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogc3RyaW5nLCBvcHRpb25zPzogQ2FudmFzT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdENhbnZhcyhjb250YWluZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGluaXRDYW52YXMoY29udGFpbmVyOiBzdHJpbmcsIG9wdGlvbnM/OiBDYW52YXNPcHRpb25zKSB7XG4gICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB0aGlzLl9jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy53aWR0aCkgY2FudmFzLnN0eWxlLndpZHRoID0gYCR7b3B0aW9ucy53aWR0aH1weGBcbiAgICAgIGlmIChvcHRpb25zLmhlaWdodCkgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke29wdGlvbnMuaGVpZ2h0fXB4YFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBDb2xvciB7XG4gIHB1YmxpYyBoZXg6c3RyaW5nO1xuICBwdWJsaWMgcmdiOnN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb2xvcjpzdHJpbmcpe1xuICAgIHRoaXMucGFyc2VDb2xvcihjb2xvcik7XG4gIH1cblxuICBwYXJzZUNvbG9yKGNvbG9yOnN0cmluZyl7XG4gICAgbGV0IGhleFJlZyA9IC9eIyhbMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfSkkL1xuICAgIGxldCByZ2JhUmVnID0gL15bclJdW2dHXVtCYl1bQWFdP1tcXChdKFtcXHNdKigyWzAtNF1bMC05XXwyNVswLTVdfFswMV0/WzAtOV1bMC05XT8pLCl7Mn1bXFxzXSooMlswLTRdWzAtOV18MjVbMC01XXxbMDFdP1swLTldWzAtOV0/KSw/W1xcc10qKDBcXC5cXGR7MSwyfXwxfDApP1tcXCldezF9JC9cbiAgICBpZihoZXhSZWcudGVzdChjb2xvcikpe1xuICAgICAgdGhpcy5oZXggPSBjb2xvcjtcbiAgICB9ZWxzZSBpZihyZ2JhUmVnLnRlc3QoY29sb3IpKXtcbiAgICAgIHRoaXMucmdiID0gY29sb3I7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi90eXBlJztcbmV4cG9ydCAqIGZyb20gJy4vY29sb3InO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMnIiwiZXhwb3J0IGludGVyZmFjZSBDYW52YXNPcHRpb25zIHtcbiAgd2lkdGg/OiBudW1iZXIsXG4gIGhlaWdodD86IG51bWJlclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgQ0wgZnJvbSAnQGNhbnZhcy1saWIvY29yZSc7XG5cbmNvbnNvbGUubG9nKG5ldyBDTC5Db2xvcihcIiNmZmZcIikpXG5cbm5ldyBDTC5DYW52YXMoXCJjYW52YXNcIiwge1xuICB3aWR0aDogNTAwLFxuICBoZWlnaHQ6IDMwMFxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
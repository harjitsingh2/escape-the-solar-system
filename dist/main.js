/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_planet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/planet.js */ \"./src/scripts/planet.js\");\n/* harmony import */ var _scripts_question_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/question.js */ \"./src/scripts/question.js\");\n// import Example from './scripts/example';\n\n\n\n// document.addEventListener('DOMContentLoaded', () => {\n//     console.log('hello world')\n\n//     const main = document.getElementById('main');\n//     new Example(main)\n// })\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('planet loaded');\n  const planet = document.getElementById(\"myplanet\");\n  planet.width = 400;\n  planet.height = 600;\n  const ctx = planet.getContext(\"2d\");\n  let mercury = new _scripts_planet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  //mercury.draw(ctx);\n  mercury.make_base(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDeUM7QUFDSTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzVCLE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ2xERCxNQUFNLENBQUNFLEtBQUssR0FBRyxHQUFHO0VBQ2xCRixNQUFNLENBQUNHLE1BQU0sR0FBRyxHQUFHO0VBRW5CLE1BQU1DLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DLElBQUlDLE9BQU8sR0FBRyxJQUFJWiwwREFBTSxDQUFELENBQUM7RUFDeEI7RUFDQVksT0FBTyxDQUFDQyxTQUFTLENBQUNILEdBQUcsQ0FBQztBQUMxQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtdGhlLXNvbGFyLXN5c3RlbS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leGFtcGxlJztcbmltcG9ydCBQbGFuZXQgZnJvbSAnLi9zY3JpcHRzL3BsYW5ldC5qcyc7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9zY3JpcHRzL3F1ZXN0aW9uLmpzJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKVxuXG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbilcbi8vIH0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BsYW5ldCBsb2FkZWQnKVxuICAgIGNvbnN0IHBsYW5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlwbGFuZXRcIik7XG4gICAgcGxhbmV0LndpZHRoID0gNDAwO1xuICAgIHBsYW5ldC5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBwbGFuZXQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBtZXJjdXJ5ID0gbmV3IFBsYW5ldDtcbiAgICAvL21lcmN1cnkuZHJhdyhjdHgpO1xuICAgIG1lcmN1cnkubWFrZV9iYXNlKGN0eCk7XG59KVxuIl0sIm5hbWVzIjpbIlBsYW5ldCIsIlF1ZXN0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInBsYW5ldCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwibWVyY3VyeSIsIm1ha2VfYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/planet.js":
/*!*******************************!*\
  !*** ./src/scripts/planet.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Planet {\n  constructor(xpos, ypos, radius, color) {\n    this.xpos = xpos;\n    this.ypos = ypos;\n    this.radius = radius;\n    this.color = color;\n    // this.name = name;\n  }\n\n  // add image to canvas\n  make_base(ctx) {\n    ctx.font = \"bold 50px serif\";\n    ctx.fillText(\"Mercury\", 150, 50);\n    let base_image = new Image();\n    base_image.src = './src/images/mercury.jpg';\n    base_image.onload = function () {\n      ctx.drawImage(base_image, 0, 100, 400, 400);\n    };\n  }\n  // draw circle onto canvas\n  draw(ctx) {\n    ctx.font = \"bold 50px serif\";\n    ctx.fillText(\"Planet 1\", 150, 50);\n    // create a circle\n    ctx.beginPath();\n    ctx.arc(200, 250, 100, 0, 2 * Math.PI, true);\n    ctx.strokeStyle = \"black\"; // creates an outline\n    ctx.lineWidth = 10;\n    ctx.stroke();\n    ctx.fillStyle = \"brown\"; // creates the inside fill. inside the outline\n    ctx.fill();\n  }\n}\n\n// const planet = document.getElementById(\"myplanet\"); // we are grabbing the canvas element here\n// planet.width = 400;\n// planet.height = 600;\n\n// this allows us to draw stuff on it\n// const ctx = planet.getContext(\"2d\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGFuZXQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDbkMsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEI7RUFDSjs7RUFFQTtFQUNBQyxTQUFTQSxDQUFDQyxHQUFHLEVBQUU7SUFDWEEsR0FBRyxDQUFDQyxJQUFJLEdBQUcsaUJBQWlCO0lBQzVCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNoQyxJQUFJQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDNUJELFVBQVUsQ0FBQ0UsR0FBRyxHQUFHLDBCQUEwQjtJQUMzQ0YsVUFBVSxDQUFDRyxNQUFNLEdBQUcsWUFBVztNQUMzQk4sR0FBRyxDQUFDTyxTQUFTLENBQUNKLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDL0MsQ0FBQztFQUNMO0VBQ0E7RUFDQUssSUFBSUEsQ0FBQ1IsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLGlCQUFpQjtJQUM1QkQsR0FBRyxDQUFDRSxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDakM7SUFDQUYsR0FBRyxDQUFDUyxTQUFTLENBQUMsQ0FBQztJQUNmVCxHQUFHLENBQUNVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDNUNaLEdBQUcsQ0FBQ2EsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFFO0lBQzVCYixHQUFHLENBQUNjLFNBQVMsR0FBRyxFQUFFO0lBQ2xCZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxDQUFDO0lBQ1pmLEdBQUcsQ0FBQ2dCLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUN6QmhCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQyxDQUFDO0VBQ2Q7QUFDSjs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQSwrREFBZXhCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtdGhlLXNvbGFyLXN5c3RlbS8uL3NyYy9zY3JpcHRzL3BsYW5ldC5qcz9iODZhIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYW5ldCB7XG4gICAgY29uc3RydWN0b3IoeHBvcywgeXBvcywgcmFkaXVzLCBjb2xvcikge1xuICAgICAgICB0aGlzLnhwb3MgPSB4cG9zO1xuICAgICAgICB0aGlzLnlwb3MgPSB5cG9zO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAvLyB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH0gIFxuICAgIFxuICAgIC8vIGFkZCBpbWFnZSB0byBjYW52YXNcbiAgICBtYWtlX2Jhc2UoY3R4KSB7XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDUwcHggc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiTWVyY3VyeVwiLCAxNTAsIDUwKTtcbiAgICAgICAgbGV0IGJhc2VfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFzZV9pbWFnZS5zcmMgPSAnLi9zcmMvaW1hZ2VzL21lcmN1cnkuanBnJztcbiAgICAgICAgYmFzZV9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFzZV9pbWFnZSwgMCwgMTAwLCA0MDAsIDQwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJhdyBjaXJjbGUgb250byBjYW52YXNcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA1MHB4IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChcIlBsYW5ldCAxXCIsIDE1MCwgNTApO1xuICAgICAgICAvLyBjcmVhdGUgYSBjaXJjbGVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDIwMCwgMjUwLCAxMDAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7ICAvLyBjcmVhdGVzIGFuIG91dGxpbmVcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJyb3duXCI7IC8vIGNyZWF0ZXMgdGhlIGluc2lkZSBmaWxsLiBpbnNpZGUgdGhlIG91dGxpbmVcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG59XG4gICBcblxuXG4vLyBjb25zdCBwbGFuZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15cGxhbmV0XCIpOyAvLyB3ZSBhcmUgZ3JhYmJpbmcgdGhlIGNhbnZhcyBlbGVtZW50IGhlcmVcbi8vIHBsYW5ldC53aWR0aCA9IDQwMDtcbi8vIHBsYW5ldC5oZWlnaHQgPSA2MDA7XG5cbi8vIHRoaXMgYWxsb3dzIHVzIHRvIGRyYXcgc3R1ZmYgb24gaXRcbi8vIGNvbnN0IGN0eCA9IHBsYW5ldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQbGFuZXQ7Il0sIm5hbWVzIjpbIlBsYW5ldCIsImNvbnN0cnVjdG9yIiwieHBvcyIsInlwb3MiLCJyYWRpdXMiLCJjb2xvciIsIm1ha2VfYmFzZSIsImN0eCIsImZvbnQiLCJmaWxsVGV4dCIsImJhc2VfaW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImRyYXciLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGxTdHlsZSIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/planet.js\n");

/***/ }),

/***/ "./src/scripts/question.js":
/*!*********************************!*\
  !*** ./src/scripts/question.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Question {\n  constructor() {\n    this.htmlElement = htmlElement;\n    this.htmlElement.innerHTML = \"<h1>Questions</h1>\";\n  }\n}\nconst questions = document.getElementById(\"myquestions\");\n\n// this allows us to draw stuff on it\nconst ctx = questions.getContext(\"2d\");\nctx.font = \"bold 50px serif\";\nctx.fillText(\"Questions\", 150, 50);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9xdWVzdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxDQUFDO0VBQ1hDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxTQUFTLEdBQUcsb0JBQW9CO0VBQ3JEO0FBRUo7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQzs7QUFFeEQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztBQUV0Q0QsR0FBRyxDQUFDRSxJQUFJLEdBQUcsaUJBQWlCO0FBQzVCRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztBQU9sQywrREFBZVYsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY2FwZS10aGUtc29sYXItc3lzdGVtLy4vc3JjL3NjcmlwdHMvcXVlc3Rpb24uanM/ZmZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWVzdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudFxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiPGgxPlF1ZXN0aW9uczwvaDE+XCJcbiAgICB9ICBcbiAgICBcbn1cbmNvbnN0IHF1ZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlxdWVzdGlvbnNcIik7IFxuXG4vLyB0aGlzIGFsbG93cyB1cyB0byBkcmF3IHN0dWZmIG9uIGl0XG5jb25zdCBjdHggPSBxdWVzdGlvbnMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jdHguZm9udCA9IFwiYm9sZCA1MHB4IHNlcmlmXCI7XG5jdHguZmlsbFRleHQoXCJRdWVzdGlvbnNcIiwgMTUwLCA1MCk7XG5cbiAgICAgIFxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjsiXSwibmFtZXMiOlsiUXVlc3Rpb24iLCJjb25zdHJ1Y3RvciIsImh0bWxFbGVtZW50IiwiaW5uZXJIVE1MIiwicXVlc3Rpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/question.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtdGhlLXNvbGFyLXN5c3RlbS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
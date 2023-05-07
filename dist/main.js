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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_planet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/planet.js */ \"./src/scripts/planet.js\");\n/* harmony import */ var _scripts_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/info.js */ \"./src/scripts/info.js\");\n// import Example from './scripts/example';\n\n// import Question from './scripts/question.js';\n\n\n// document.addEventListener('DOMContentLoaded', () => {\n//     console.log('hello world')\n\n//     const main = document.getElementById('main');\n//     new Example(main)\n// })\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  //console.log('planet loaded')\n  const planet = document.getElementById(\"myplanet\");\n  planet.width = 400;\n  planet.height = 600;\n  const ctx = planet.getContext(\"2d\");\n  let mercury = new _scripts_planet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  //mercury.draw(ctx);\n  mercury.makeMercury(ctx);\n\n  // venus\n  let venus = new _scripts_planet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  //venus.makeVenus(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDeUM7QUFDekM7QUFDNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQ7RUFDQSxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFVBQVUsQ0FBQztFQUNsREQsTUFBTSxDQUFDRSxLQUFLLEdBQUcsR0FBRztFQUNsQkYsTUFBTSxDQUFDRyxNQUFNLEdBQUcsR0FBRztFQUVuQixNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztFQUNuQyxJQUFJQyxPQUFPLEdBQUcsSUFBSVYsMERBQU0sQ0FBRCxDQUFDO0VBQ3hCO0VBQ0FVLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDSCxHQUFHLENBQUM7O0VBRXhCO0VBQ0EsSUFBSUksS0FBSyxHQUFHLElBQUlaLDBEQUFNLENBQUQsQ0FBQztFQUN0QjtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY2FwZS10aGUtc29sYXItc3lzdGVtLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4YW1wbGUnO1xuaW1wb3J0IFBsYW5ldCBmcm9tICcuL3NjcmlwdHMvcGxhbmV0LmpzJztcbi8vIGltcG9ydCBRdWVzdGlvbiBmcm9tICcuL3NjcmlwdHMvcXVlc3Rpb24uanMnO1xuaW1wb3J0IEluZm9ybWF0aW9uIGZyb20gJy4vc2NyaXB0cy9pbmZvLmpzJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKVxuXG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbilcbi8vIH0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZygncGxhbmV0IGxvYWRlZCcpXG4gICAgY29uc3QgcGxhbmV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteXBsYW5ldFwiKTtcbiAgICBwbGFuZXQud2lkdGggPSA0MDA7XG4gICAgcGxhbmV0LmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IHBsYW5ldC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IG1lcmN1cnkgPSBuZXcgUGxhbmV0O1xuICAgIC8vbWVyY3VyeS5kcmF3KGN0eCk7XG4gICAgbWVyY3VyeS5tYWtlTWVyY3VyeShjdHgpO1xuXG4gICAgLy8gdmVudXNcbiAgICBsZXQgdmVudXMgPSBuZXcgUGxhbmV0O1xuICAgIC8vdmVudXMubWFrZVZlbnVzKGN0eCk7XG5cbn0pXG4iXSwibmFtZXMiOlsiUGxhbmV0IiwiSW5mb3JtYXRpb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGFuZXQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1lcmN1cnkiLCJtYWtlTWVyY3VyeSIsInZlbnVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/info.js":
/*!*****************************!*\
  !*** ./src/scripts/info.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst infoObject = __webpack_require__(/*! ../../information.json */ \"./information.json\");\nclass Information {\n  constructor() {\n    this.htmlElement = htmlElement;\n    this.htmlElement.innerHTML = \"<h1>Information</h1>\";\n  }\n}\nconst info = document.getElementById(\"myinfo\");\nconst ctx = info.getContext(\"2d\");\nctx.font = \"bold 50px serif\";\nctx.fillText(\"Information\", 50, 50);\nlet mercuryInfo = infoObject[0].information;\nctx.font = \"20px serif\";\nctx.fillText(mercuryInfo, 0, 200);\nconsole.log(\"Information loaded\");\n\n//console.log((infoObject)[0].information)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Information);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsa0RBQXdCLENBQUM7QUFFcEQsTUFBTUMsV0FBVyxDQUFDO0VBQ2RDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxTQUFTLEdBQUcsc0JBQXNCO0VBQ3ZEO0FBRUo7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUM5QyxNQUFNQyxHQUFHLEdBQUdILElBQUksQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztBQUVqQ0QsR0FBRyxDQUFDRSxJQUFJLEdBQUcsaUJBQWlCO0FBQzVCRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNuQyxJQUFJQyxXQUFXLEdBQUliLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQ2MsV0FBVztBQUM3Q0wsR0FBRyxDQUFDRSxJQUFJLEdBQUcsWUFBWTtBQUN2QkYsR0FBRyxDQUFDRyxRQUFRLENBQUNDLFdBQVcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBRWpDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFFakM7O0FBRUEsK0RBQWVkLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtdGhlLXNvbGFyLXN5c3RlbS8uL3NyYy9zY3JpcHRzL2luZm8uanM/ODM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmZvT2JqZWN0ID0gcmVxdWlyZShcIi4uLy4uL2luZm9ybWF0aW9uLmpzb25cIilcblxuY2xhc3MgSW5mb3JtYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gaHRtbEVsZW1lbnRcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIjxoMT5JbmZvcm1hdGlvbjwvaDE+XCJcbiAgICB9ICBcbiAgICBcbn1cbmNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15aW5mb1wiKTsgXG5jb25zdCBjdHggPSBpbmZvLmdldENvbnRleHQoXCIyZFwiKTtcblxuY3R4LmZvbnQgPSBcImJvbGQgNTBweCBzZXJpZlwiO1xuY3R4LmZpbGxUZXh0KFwiSW5mb3JtYXRpb25cIiwgNTAsIDUwKTtcbmxldCBtZXJjdXJ5SW5mbyA9IChpbmZvT2JqZWN0KVswXS5pbmZvcm1hdGlvblxuY3R4LmZvbnQgPSBcIjIwcHggc2VyaWZcIlxuY3R4LmZpbGxUZXh0KG1lcmN1cnlJbmZvLCAwLCAyMDApO1xuXG5jb25zb2xlLmxvZyhcIkluZm9ybWF0aW9uIGxvYWRlZFwiKVxuXG4vL2NvbnNvbGUubG9nKChpbmZvT2JqZWN0KVswXS5pbmZvcm1hdGlvbilcblxuZXhwb3J0IGRlZmF1bHQgSW5mb3JtYXRpb247Il0sIm5hbWVzIjpbImluZm9PYmplY3QiLCJyZXF1aXJlIiwiSW5mb3JtYXRpb24iLCJjb25zdHJ1Y3RvciIsImh0bWxFbGVtZW50IiwiaW5uZXJIVE1MIiwiaW5mbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxUZXh0IiwibWVyY3VyeUluZm8iLCJpbmZvcm1hdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/info.js\n");

/***/ }),

/***/ "./src/scripts/planet.js":
/*!*******************************!*\
  !*** ./src/scripts/planet.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Planet {\n  constructor(xpos, ypos, radius, color) {\n    this.xpos = xpos;\n    this.ypos = ypos;\n    this.radius = radius;\n    this.color = color;\n    // this.name = name;\n  }\n\n  // add Mercury to canvas\n  makeMercury(ctx) {\n    ctx.font = \"bold 50px serif\";\n    ctx.fillText(\"Mercury\", 150, 50);\n    let base_image = new Image();\n    base_image.src = './src/images/mercury.jpg';\n    base_image.onload = function () {\n      ctx.drawImage(base_image, 0, 100, 400, 400);\n    };\n    console.log(\"Mercury created\");\n  }\n  // add Venus to canvas\n  makeVenus(ctx) {\n    ctx.font = \"bold 50px serif\";\n    ctx.fillText(\"Venus\", 150, 50);\n    let base_image = new Image();\n    base_image.src = './src/images/venus.jpeg';\n    base_image.onload = function () {\n      ctx.drawImage(base_image, 0, 100, 400, 400);\n    };\n    console.log(\"Venus created\");\n  }\n\n  // draw circle onto canvas\n  draw(ctx) {\n    ctx.font = \"bold 50px serif\";\n    ctx.fillText(\"Planet 1\", 150, 50);\n    // create a circle\n    ctx.beginPath();\n    ctx.arc(200, 250, 100, 0, 2 * Math.PI, true);\n    ctx.strokeStyle = \"black\"; // creates an outline\n    ctx.lineWidth = 10;\n    ctx.stroke();\n    ctx.fillStyle = \"brown\"; // creates the inside fill. inside the outline\n    ctx.fill();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGFuZXQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDbkMsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEI7RUFDSjs7RUFFQTtFQUNBQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYkEsR0FBRyxDQUFDQyxJQUFJLEdBQUcsaUJBQWlCO0lBQzVCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNoQyxJQUFJQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDNUJELFVBQVUsQ0FBQ0UsR0FBRyxHQUFHLDBCQUEwQjtJQUMzQ0YsVUFBVSxDQUFDRyxNQUFNLEdBQUcsWUFBVztNQUMzQk4sR0FBRyxDQUFDTyxTQUFTLENBQUNKLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDL0MsQ0FBQztJQUNESyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUNsQztFQUNBO0VBQ0FDLFNBQVNBLENBQUNWLEdBQUcsRUFBRTtJQUNYQSxHQUFHLENBQUNDLElBQUksR0FBRyxpQkFBaUI7SUFDNUJELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQzlCLElBQUlDLFVBQVUsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUM1QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcseUJBQXlCO0lBQzFDRixVQUFVLENBQUNHLE1BQU0sR0FBRyxZQUFXO01BQzNCTixHQUFHLENBQUNPLFNBQVMsQ0FBQ0osVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMvQyxDQUFDO0lBQ0RLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUNoQzs7RUFFQTtFQUNBRSxJQUFJQSxDQUFDWCxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxJQUFJLEdBQUcsaUJBQWlCO0lBQzVCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNqQztJQUNBRixHQUFHLENBQUNZLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZaLEdBQUcsQ0FBQ2EsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsRUFBRSxFQUFFLElBQUksQ0FBQztJQUM1Q2YsR0FBRyxDQUFDZ0IsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFFO0lBQzVCaEIsR0FBRyxDQUFDaUIsU0FBUyxHQUFHLEVBQUU7SUFDbEJqQixHQUFHLENBQUNrQixNQUFNLENBQUMsQ0FBQztJQUNabEIsR0FBRyxDQUFDbUIsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCbkIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLENBQUM7RUFDZDtBQUNKO0FBR0EsK0RBQWUzQixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNjYXBlLXRoZS1zb2xhci1zeXN0ZW0vLi9zcmMvc2NyaXB0cy9wbGFuZXQuanM/Yjg2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGFuZXQge1xuICAgIGNvbnN0cnVjdG9yKHhwb3MsIHlwb3MsIHJhZGl1cywgY29sb3IpIHtcbiAgICAgICAgdGhpcy54cG9zID0geHBvcztcbiAgICAgICAgdGhpcy55cG9zID0geXBvcztcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgLy8gdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9ICBcbiAgICBcbiAgICAvLyBhZGQgTWVyY3VyeSB0byBjYW52YXNcbiAgICBtYWtlTWVyY3VyeShjdHgpIHtcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNTBweCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoXCJNZXJjdXJ5XCIsIDE1MCwgNTApO1xuICAgICAgICBsZXQgYmFzZV9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYXNlX2ltYWdlLnNyYyA9ICcuL3NyYy9pbWFnZXMvbWVyY3VyeS5qcGcnO1xuICAgICAgICBiYXNlX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiYXNlX2ltYWdlLCAwLCAxMDAsIDQwMCwgNDAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIk1lcmN1cnkgY3JlYXRlZFwiKTtcbiAgICB9XG4gICAgLy8gYWRkIFZlbnVzIHRvIGNhbnZhc1xuICAgIG1ha2VWZW51cyhjdHgpIHtcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNTBweCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoXCJWZW51c1wiLCAxNTAsIDUwKTtcbiAgICAgICAgbGV0IGJhc2VfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFzZV9pbWFnZS5zcmMgPSAnLi9zcmMvaW1hZ2VzL3ZlbnVzLmpwZWcnO1xuICAgICAgICBiYXNlX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiYXNlX2ltYWdlLCAwLCAxMDAsIDQwMCwgNDAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlZlbnVzIGNyZWF0ZWRcIik7XG4gICAgfVxuXG4gICAgLy8gZHJhdyBjaXJjbGUgb250byBjYW52YXNcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA1MHB4IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChcIlBsYW5ldCAxXCIsIDE1MCwgNTApO1xuICAgICAgICAvLyBjcmVhdGUgYSBjaXJjbGVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDIwMCwgMjUwLCAxMDAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7ICAvLyBjcmVhdGVzIGFuIG91dGxpbmVcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJyb3duXCI7IC8vIGNyZWF0ZXMgdGhlIGluc2lkZSBmaWxsLiBpbnNpZGUgdGhlIG91dGxpbmVcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxhbmV0OyJdLCJuYW1lcyI6WyJQbGFuZXQiLCJjb25zdHJ1Y3RvciIsInhwb3MiLCJ5cG9zIiwicmFkaXVzIiwiY29sb3IiLCJtYWtlTWVyY3VyeSIsImN0eCIsImZvbnQiLCJmaWxsVGV4dCIsImJhc2VfaW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlVmVudXMiLCJkcmF3IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/planet.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtdGhlLXNvbGFyLXN5c3RlbS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./information.json":
/*!**************************!*\
  !*** ./information.json ***!
  \**************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"name":"Mercury","information":"Mercury might be the smallest planet in our solar system, but it is also the fastest - traveling 29 miles per second! This is due to its proximity to the Sun. Even though it is so close to the Sun, it is not the hottest planet in our solar system. Venus is actually the hottest. Mercury has no rings or moons. The small, terestrial planet does not have an atmosphere. It does have a thin exosphere made of oxygen, sodium, hydrogen, helium, and potassium, in descending order.","questions":{"1":"Mercury is the _______ planet from the Sun","2":"What is Mercury\'s exosphere primarily composed of?","3":"How fast does Mercury travel?"},"answers":{"1":"first","2":"oxygen","3":"29 miles per second"},"choices":{"1":{"a":"first","b":"second","c":"third"},"2":{"a":"hydrogen","b":"mercury","c":"oxygen"},"3":{"a":"29 miles per second","b":"290 miles per second","c":"2900 miles per second"}}}]');

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
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-creator.js":
/*!********************************!*\
  !*** ./src/contact-creator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-creator */ \"./src/nav-creator.js\");\n/* eslint-disable import/no-cycle */\n\n/* eslint-enable import/no-cycle */\n\nlet createContactPage = () => {\n  const content = document.getElementById('content');\n\n  content.innerHTML = '';\n\n  (0,_nav_creator__WEBPACK_IMPORTED_MODULE_0__.createNavigation)();\n\n  const restaurantTitle = document.createElement('h1')\n  restaurantTitle.innerText = \"Restaurant Contact Page\"\n  content.appendChild(restaurantTitle)\n\n  const restaurantImage = document.createElement('img')\n  restaurantImage.alt = \"image of Restaurant Contact Us\"\n  content.appendChild(restaurantImage)\n\n  const restaurantDescription = document.createElement('p')\n  restaurantDescription.innerText = \"This is the contact-us page of the best restaurant in town\"\n  content.appendChild(restaurantDescription)\n\n\n  ;(0,_nav_creator__WEBPACK_IMPORTED_MODULE_0__.addAllEventListeners)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://webpack-resturant/./src/contact-creator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ \"./src/main-page.js\");\n\n\n(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://webpack-resturant/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-creator */ \"./src/nav-creator.js\");\n/* eslint-disable import/no-cycle */\n\n/* eslint-enable import/no-cycle */\n\nlet createMainPage = () => {\n  const content = document.getElementById('content');\n\n  content.innerHTML = '';\n\n  (0,_nav_creator__WEBPACK_IMPORTED_MODULE_0__.createNavigation)();\n\n  const restaurantTitle = document.createElement('h1')\n  restaurantTitle.innerText = \"Restaurant name\"\n  content.appendChild(restaurantTitle)\n\n  const restaurantImage = document.createElement('img')\n  restaurantImage.alt = \"image of Restaurant\"\n  content.appendChild(restaurantImage)\n\n  const restaurantDescription = document.createElement('p')\n  restaurantDescription.innerText = \"This is one of the best Restaurant that I had the privilege of eating in\"\n  content.appendChild(restaurantDescription)\n\n  ;(0,_nav_creator__WEBPACK_IMPORTED_MODULE_0__.addAllEventListeners)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainPage);\n\n//# sourceURL=webpack://webpack-resturant/./src/main-page.js?");

/***/ }),

/***/ "./src/menu-creator.js":
/*!*****************************!*\
  !*** ./src/menu-creator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-creator */ \"./src/nav-creator.js\");\n/* eslint-disable import/no-cycle */\n\n/* eslint-enable import/no-cycle */\n\nlet createMenuPage = () => {\n  const content = document.getElementById('content');\n\n  content.innerHTML = '';\n\n  (0,_nav_creator__WEBPACK_IMPORTED_MODULE_0__.createNavigation)();\n\n  const restaurantTitle = document.createElement('h1')\n  restaurantTitle.innerText = \"Menu of restaurant\"\n  content.appendChild(restaurantTitle)\n\n  const restaurantImage = document.createElement('img')\n  restaurantImage.alt = \"image of Restaurant Menu\"\n  content.appendChild(restaurantImage)\n\n  const restaurantDescription = document.createElement('p')\n  restaurantDescription.innerText = \"This is the menu of the best Restaurant in town\"\n  content.appendChild(restaurantDescription)\n\n  ;(0,_nav_creator__WEBPACK_IMPORTED_MODULE_0__.addAllEventListeners)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://webpack-resturant/./src/menu-creator.js?");

/***/ }),

/***/ "./src/nav-creator.js":
/*!****************************!*\
  !*** ./src/nav-creator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavigation\": () => (/* binding */ createNavigation),\n/* harmony export */   \"addAllEventListeners\": () => (/* binding */ addAllEventListeners)\n/* harmony export */ });\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ \"./src/main-page.js\");\n/* harmony import */ var _contact_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-creator */ \"./src/contact-creator.js\");\n/* harmony import */ var _menu_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-creator */ \"./src/menu-creator.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n/* eslint-enable import/no-cycle */\n\nlet createNavigation = () => {\n  const content = document.getElementById('content');\n\n  const linkMain = document.createElement('a')\n  linkMain.innerText = \"Go To Main Page \"\n  linkMain.href = \"#\"\n  linkMain.classList.add(\"main\")\n  content.appendChild(linkMain)\n\n  const linkMenu = document.createElement('a')\n  linkMenu.innerText = \"Go To Menu Page \"\n  linkMenu.href = \"#\"\n  linkMenu.classList.add(\"menu\")\n  content.appendChild(linkMenu)\n\n  const linkContact = document.createElement('a')\n  linkContact.innerText = \"Go To Contact Page \"\n  linkContact.href = \"#\"\n  linkContact.classList.add(\"contact\")\n  content.appendChild(linkContact)\n\n}\n\nlet addAllEventListeners = () => {\n  document.querySelectorAll('.main').forEach((item) => item.addEventListener('click', () => {\n    ;(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }));\n  document.querySelectorAll('.menu').forEach((item) => item.addEventListener('click', () => {\n    (0,_menu_creator__WEBPACK_IMPORTED_MODULE_2__.default)();\n  }));\n  document.querySelectorAll('.contact').forEach((item) => item.addEventListener('click', () => {\n    (0,_contact_creator__WEBPACK_IMPORTED_MODULE_1__.default)();\n  }));\n}\n\n\n\n//# sourceURL=webpack://webpack-resturant/./src/nav-creator.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
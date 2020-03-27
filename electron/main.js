/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n // const node = document.getElementById('root');\n// const github = document.getElementById('github');\n// const root = React.createElement(\n//   \"div\",\n//   {},\n//   React.createElement(\n//     \"h1\",\n//     {},\n//     \"Hello, world!\",\n//     React.createElement(\n//       \"a\",\n//       { href: \"mailto:mark@ifelse.io\" },\n//       React.createElement(\"h1\", {}, \"React In Action\"),\n//       React.createElement(\"em\", {}, \"...and now it really is!\")\n//     )\n//   )\n// );\n// class Div extends React.Component {\n//   constructor(props) {\n//     super(props)\n//   }\n//   render() {\n//     return React.createElement(\n//       'div',\n//       {\n//         className: this.props.class,\n//       },\n//       'contentDiv'\n//     )\n//   }\n// }\n// class H3 extends React.Component {\n//   constructor (props) {\n//     super(props)\n//   }\n//   render() {\n//     return React.createElement(\n//       'h3',\n//       {\n//         className: this.props.class,\n//       },\n//       React.createElement(\n//         'span',\n//         {\n//           className: 'counter'\n//         },\n//         this.props.counter\n//       )\n//     )\n//   }\n// }\n// class Group extends React.Component {\n//   constructor (props) {\n//     super(props)\n//   }\n//   render() {\n//     return React.createElement(\n//       'div',\n//       {\n//         id: this.props.id,\n//         role: 'navigation',\n//       },\n//       \"testo\",\n//       React.createElement(\n//           Div,\n//           {},\n//           'soy div inside'\n//       ),\n//       React.createElement(\n//         H3,\n//         {\n//           class: this.props.class,\n//           counter: this.props.counter,\n//         }\n//       ),\n//       React.createElement(\n//         Div,\n//         {},\n//         'aaaaaaaaaa'\n//       )\n//     )\n//   }\n// }\n// class Github extends React.Component {\n//   constructor (props) {\n//     super(props)\n//   }\n//   render() {\n//     return React.createElement(\n//       'div',\n//       {\n//         id: 'buuuuu',\n//       },\n//       React.createElement(\n//         Group,\n//         {\n//           id: this.props.id,\n//           counter: this.props.counter,\n//           class: this.props.class,\n//         }\n//       )\n//     )\n//   }44\n// }\n// ReactDOM.render(root, node);\n// const nodeGitbug = React.createElement(Github, {\n//     id: 'your_repos',\n//     counter: 100,\n//     class: 'pepe'\n// })\n// ReactDOM.render(nodeGitbug, github);\n\nvar x = 10;\n\nfunction sume(a, b) {\n  return a + b;\n}\n\nvar t = new _test__WEBPACK_IMPORTED_MODULE_0__[\"Test\"]();\nconsole.log(t.foo);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Test\", function() { return Test; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Test = function Test() {\n  _classCallCheck(this, Test);\n\n  this.foo = 'bar';\n};\n\n//# sourceURL=webpack:///./src/test.js?");

/***/ })

/******/ });
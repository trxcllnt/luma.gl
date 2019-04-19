(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("luma"));
	else if(typeof define === 'function' && define.amd)
		define(["luma"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("luma")) : factory(root["luma"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__luma_gl_core__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!************************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!******************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!************************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!************************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/get-browser.js":
/*!*************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/env/get-browser.js ***!
  \*************************************************************************************/
/*! exports provided: isMobile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBrowser; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "../../node_modules/probe.gl/dist/esm/env/globals.js");
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser */ "../../node_modules/probe.gl/dist/esm/env/is-browser.js");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-electron */ "../../node_modules/probe.gl/dist/esm/env/is-electron.js");



function isMobile() {
  return typeof _globals__WEBPACK_IMPORTED_MODULE_0__["window"].orientation !== 'undefined';
}
function getBrowser(mockUserAgent) {
  if (!mockUserAgent && !Object(_is_browser__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    return 'Node';
  }

  if (Object(_is_electron__WEBPACK_IMPORTED_MODULE_2__["default"])(mockUserAgent)) {
    return 'Electron';
  }

  var navigator_ = typeof navigator !== 'undefined' ? navigator : {};
  var userAgent = mockUserAgent || navigator_.userAgent || '';

  if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  }

  var isMSIE = userAgent.indexOf('MSIE ') !== -1;
  var isTrident = userAgent.indexOf('Trident/') !== -1;

  if (isMSIE || isTrident) {
    return 'IE';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["window"].chrome) {
    return 'Chrome';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["window"].safari) {
    return 'Safari';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["window"].mozInnerScreenX) {
    return 'Firefox';
  }

  return 'Unknown';
}
//# sourceMappingURL=get-browser.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/globals.js":
/*!*********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/env/globals.js ***!
  \*********************************************************************************/
/*! exports provided: self, window, global, document, process, console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return console_; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

var globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document,
  process: (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process)) === 'object' && process
};
var self_ = globals.self || globals.window || globals.global;
var window_ = globals.window || globals.self || globals.global;
var global_ = globals.global || globals.self || globals.window;
var document_ = globals.document || {};
var process_ = globals.process || {};
var console_ = console;

//# sourceMappingURL=globals.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/is-browser.js":
/*!************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/env/is-browser.js ***!
  \************************************************************************************/
/*! exports provided: default, isBrowserMainThread */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserMainThread", function() { return isBrowserMainThread; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-electron */ "../../node_modules/probe.gl/dist/esm/env/is-electron.js");


function isBrowser() {
  var isNode = (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process)) === 'object' && String(process) === '[object process]' && !process.browser;
  return !isNode || Object(_is_electron__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
function isBrowserMainThread() {
  return isBrowser() && typeof document !== 'undefined';
}
//# sourceMappingURL=is-browser.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/is-electron.js":
/*!*************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/env/is-electron.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isElectron; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function isElectron(mockUserAgent) {
  if (typeof window !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  }

  if (typeof process !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process.versions) === 'object' && Boolean(process.versions.electron)) {
    return true;
  }

  var realUserAgent = (typeof navigator === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent;
  var userAgent = mockUserAgent || realUserAgent;

  if (userAgent && userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}
//# sourceMappingURL=is-electron.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/index.js":
/*!***************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/index.js ***!
  \***************************************************************************/
/*! exports provided: VERSION, self, window, global, document, process, console, isBrowser, isBrowserMainThread, getBrowser, isMobile, isElectron, assert, Stats, Log, COLOR, default, addColor, leftPad, rightPad, autobind, LocalStorage, getHiResTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "../../node_modules/probe.gl/dist/esm/init.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony import */ var _env_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env/globals */ "../../node_modules/probe.gl/dist/esm/env/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "console", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["console"]; });

/* harmony import */ var _env_is_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env/is-browser */ "../../node_modules/probe.gl/dist/esm/env/is-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _env_is_browser__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowserMainThread", function() { return _env_is_browser__WEBPACK_IMPORTED_MODULE_3__["isBrowserMainThread"]; });

/* harmony import */ var _env_get_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env/get-browser */ "../../node_modules/probe.gl/dist/esm/env/get-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return _env_get_browser__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _env_get_browser__WEBPACK_IMPORTED_MODULE_4__["isMobile"]; });

/* harmony import */ var _env_is_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./env/is-electron */ "../../node_modules/probe.gl/dist/esm/env/is-electron.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return _env_is_electron__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/assert */ "../../node_modules/probe.gl/dist/esm/utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utils_assert__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _lib_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/stats */ "../../node_modules/probe.gl/dist/esm/lib/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _lib_stats__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/log */ "../../node_modules/probe.gl/dist/esm/lib/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _lib_log__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/color */ "../../node_modules/probe.gl/dist/esm/utils/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_9__["COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addColor", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_9__["addColor"]; });

/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/formatters */ "../../node_modules/probe.gl/dist/esm/utils/formatters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return _utils_formatters__WEBPACK_IMPORTED_MODULE_10__["leftPad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return _utils_formatters__WEBPACK_IMPORTED_MODULE_10__["rightPad"]; });

/* harmony import */ var _utils_autobind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/autobind */ "../../node_modules/probe.gl/dist/esm/utils/autobind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _utils_autobind__WEBPACK_IMPORTED_MODULE_11__["autobind"]; });

/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/local-storage */ "../../node_modules/probe.gl/dist/esm/utils/local-storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return _utils_local_storage__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/hi-res-timestamp */ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHiResTimestamp", function() { return _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_13__["default"]; });












/* harmony default export */ __webpack_exports__["default"] = (new _lib_log__WEBPACK_IMPORTED_MODULE_8__["default"]({
  id: 'probe.gl'
}));





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/init.js":
/*!**************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/init.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");

_utils_globals__WEBPACK_IMPORTED_MODULE_0__["global"].probe = {};
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/lib/log.js":
/*!*****************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/lib/log.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/local-storage */ "../../node_modules/probe.gl/dist/esm/utils/local-storage.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/formatters */ "../../node_modules/probe.gl/dist/esm/utils/formatters.js");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/color */ "../../node_modules/probe.gl/dist/esm/utils/color.js");
/* harmony import */ var _utils_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/autobind */ "../../node_modules/probe.gl/dist/esm/utils/autobind.js");
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/assert */ "../../node_modules/probe.gl/dist/esm/utils/assert.js");
/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/hi-res-timestamp */ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js");












var originalConsole = {
  debug: _utils_globals__WEBPACK_IMPORTED_MODULE_5__["isBrowser"] ? console.debug || console.log : console.log,
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
};
var DEFAULT_SETTINGS = {
  enabled: false,
  priority: 0
};

function noop() {}

var cache = {};

function getTableHeader(table) {
  for (var key in table) {
    for (var title in table[key]) {
      return title || 'untitled';
    }
  }

  return 'empty';
}

var Log = function () {
  function Log() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Log);

    this.id = id;
    this.VERSION = _utils_globals__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
    this._startTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this._deltaTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this.LOG_THROTTLE_TIMEOUT = 0;
    this._storage = new _utils_local_storage__WEBPACK_IMPORTED_MODULE_6__["default"]("__probe-".concat(this.id, "__"), DEFAULT_SETTINGS);
    this.userData = {};
    this.timeStamp("".concat(this.id, " started"));
    Object(_utils_autobind__WEBPACK_IMPORTED_MODULE_9__["autobind"])(this);
    Object.seal(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Log, [{
    key: "isEnabled",
    value: function isEnabled() {
      return this._storage.config.enabled;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this._storage.config.priority;
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this._storage.config.priority;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      return Number((Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])() - this._startTs).toPrecision(10));
    }
  }, {
    key: "getDelta",
    value: function getDelta() {
      return Number((Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])() - this._deltaTs).toPrecision(10));
    }
  }, {
    key: "enable",
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._storage.updateConfiguration({
        enabled: enabled
      });

      return this;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this._storage.updateConfiguration({
        priority: level
      });

      return this;
    }
  }, {
    key: "assert",
    value: function assert(condition, message) {
      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(condition, message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this._getLogFunction({
        message: message,
        args: args,
        method: originalConsole.warn,
        once: true
      });
    }
  }, {
    key: "error",
    value: function error(message) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return this._getLogFunction({
        message: message,
        args: args,
        method: originalConsole.error
      });
    }
  }, {
    key: "deprecated",
    value: function deprecated(oldUsage, newUsage) {
      return this.warn("`".concat(oldUsage, "` is deprecated and will be removed in a later version. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "removed",
    value: function removed(oldUsage, newUsage) {
      return this.error("`".concat(oldUsage, "` has been removed. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "probe",
    value: function probe(priority, message) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: originalConsole.log,
        time: true,
        once: true
      });
    }
  }, {
    key: "log",
    value: function log(priority, message) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: originalConsole.debug
      });
    }
  }, {
    key: "info",
    value: function info(priority, message) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: console.info
      });
    }
  }, {
    key: "once",
    value: function once(priority, message) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        args[_key6 - 2] = arguments[_key6];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: originalConsole.debug || originalConsole.info,
        once: true
      });
    }
  }, {
    key: "table",
    value: function table(priority, _table, columns) {
      if (_table) {
        var tag = getTableHeader(_table);
        return this._getLogFunction({
          priority: priority,
          message: _table,
          args: columns && [columns],
          tag: tag,
          method: console.table || noop
        });
      }

      return noop;
    }
  }, {
    key: "image",
    value: function image(_ref2) {
      var priority = _ref2.priority,
          _image = _ref2.image,
          _ref2$message = _ref2.message,
          message = _ref2$message === void 0 ? '' : _ref2$message,
          _ref2$scale = _ref2.scale,
          scale = _ref2$scale === void 0 ? 1 : _ref2$scale;

      if (priority > this.getPriority()) {
        return noop;
      }

      return _utils_globals__WEBPACK_IMPORTED_MODULE_5__["isBrowser"] ? this._logImageInBrowser({
        image: _image,
        message: message,
        scale: scale
      }) : this._logImageInNode({
        image: _image,
        message: message,
        scale: scale
      });
    }
  }, {
    key: "settings",
    value: function settings() {
      if (console.table) {
        console.table(this._storage.config);
      } else {
        console.log(this._storage.config);
      }
    }
  }, {
    key: "get",
    value: function get(setting) {
      return this._storage.config[setting];
    }
  }, {
    key: "set",
    value: function set(setting, value) {
      this._storage.updateConfiguration(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, setting, value));
    }
  }, {
    key: "_logImageInNode",
    value: function _logImageInNode(_ref3) {
      var image = _ref3.image,
          _ref3$message = _ref3.message,
          message = _ref3$message === void 0 ? '' : _ref3$message,
          _ref3$scale = _ref3.scale,
          scale = _ref3$scale === void 0 ? 1 : _ref3$scale;
      var asciify = null;

      try {
        asciify = __webpack_require__(/*! asciify-image */ 0);
      } catch (error) {}

      if (asciify) {
        return function () {
          return asciify(image, {
            fit: 'box',
            width: "".concat(Math.round(80 * scale), "%")
          }).then(function (data) {
            return console.log(data);
          });
        };
      }

      return noop;
    }
  }, {
    key: "_logImageInBrowser",
    value: function _logImageInBrowser(_ref4) {
      var image = _ref4.image,
          _ref4$message = _ref4.message,
          message = _ref4$message === void 0 ? '' : _ref4$message,
          _ref4$scale = _ref4.scale,
          scale = _ref4$scale === void 0 ? 1 : _ref4$scale;

      if (typeof image === 'string') {
        var img = new Image();

        img.onload = function () {
          var _console;

          var args = Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatImage"])(img, message, scale);

          (_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(args));
        };

        img.src = image;
        return noop;
      }

      var element = image.nodeName || '';

      if (element.toLowerCase() === 'img') {
        var _console2;

        (_console2 = console).log.apply(_console2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatImage"])(image, message, scale)));

        return noop;
      }

      if (element.toLowerCase() === 'canvas') {
        var _img = new Image();

        _img.onload = function () {
          var _console3;

          return (_console3 = console).log.apply(_console3, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatImage"])(_img, message, scale)));
        };

        _img.src = image.toDataURL();
        return noop;
      }

      return noop;
    }
  }, {
    key: "time",
    value: function time(priority, message) {
      return this._getLogFunction({
        priority: priority,
        message: message,
        method: console.time ? console.time : console.info
      });
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(priority, message) {
      return this._getLogFunction({
        priority: priority,
        message: message,
        method: console.timeEnd ? console.timeEnd : console.info
      });
    }
  }, {
    key: "timeStamp",
    value: function timeStamp(priority, message) {
      return this._getLogFunction({
        priority: priority,
        message: message,
        method: console.timeStamp || noop
      });
    }
  }, {
    key: "group",
    value: function group(priority, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        collapsed: false
      };
      opts = this._normalizeArguments({
        priority: priority,
        message: message,
        opts: opts
      });
      var _opts = opts,
          collapsed = _opts.collapsed;
      return this._getLogFunction({
        priority: priority,
        message: message,
        opts: opts,
        method: (collapsed ? console.groupCollapsed : console.group) || console.info
      });
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed(priority, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.group(priority, message, Object.assign({}, opts, {
        collapsed: true
      }));
    }
  }, {
    key: "groupEnd",
    value: function groupEnd(priority) {
      return this._getLogFunction({
        priority: priority,
        message: '',
        method: console.groupEnd || noop
      });
    }
  }, {
    key: "withGroup",
    value: function withGroup(priority, message, func) {
      var opts = this._normalizeArguments({
        priority: priority,
        message: message
      });

      this.group(opts);

      try {
        func();
      } finally {
        this.groupEnd(opts.message);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      if (console.trace) {
        console.trace();
      }
    }
  }, {
    key: "_shouldLog",
    value: function _shouldLog(priority) {
      priority = this._normalizePriority(priority);
      return priority === 0 || this.isEnabled() && this.getPriority() >= priority;
    }
  }, {
    key: "_getElapsedTime",
    value: function _getElapsedTime() {
      var total = this.getTotal();
      var delta = this.getDelta();
      this._deltaTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
      return {
        total: total,
        delta: delta
      };
    }
  }, {
    key: "_getLogFunction",
    value: function _getLogFunction(opts) {
      if (this._shouldLog(opts.priority)) {
        var _opts2 = opts,
            method = _opts2.method;
        opts = this._parseArguments(opts);

        Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(method);

        var _opts3 = opts,
            message = _opts3.message;
        var tag = opts.tag || opts.message;

        if (opts.once) {
          if (!cache[tag]) {
            cache[tag] = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
          } else {
            return noop;
          }
        }

        message = this._decorateMessage(message, opts);
        return method.bind.apply(method, [console, message].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(opts.args)));
      }

      return noop;
    }
  }, {
    key: "_parseArguments",
    value: function _parseArguments(options) {
      var normOpts = this._normalizeArguments(options);

      var _this$_getElapsedTime = this._getElapsedTime(),
          delta = _this$_getElapsedTime.delta,
          total = _this$_getElapsedTime.total;

      return Object.assign(options, normOpts, {
        delta: delta,
        total: total
      });
    }
  }, {
    key: "_normalizePriority",
    value: function _normalizePriority(priority) {
      var resolvedPriority;

      switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(priority)) {
        case 'number':
          resolvedPriority = priority;
          break;

        case 'object':
          resolvedPriority = priority.priority || 0;
          break;

        default:
          resolvedPriority = 0;
      }

      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(Number.isFinite(resolvedPriority) && resolvedPriority >= 0);

      return resolvedPriority;
    }
  }, {
    key: "_normalizeArguments",
    value: function _normalizeArguments(_ref5) {
      var priority = _ref5.priority,
          message = _ref5.message,
          _ref5$args = _ref5.args,
          args = _ref5$args === void 0 ? [] : _ref5$args,
          opts = _ref5.opts;
      var newOpts = {
        priority: this._normalizePriority(priority),
        message: message,
        args: args
      };

      switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(priority)) {
        case 'string':
        case 'function':
          if (message !== undefined) {
            args.unshift(message);
          }

          Object.assign(newOpts, {
            message: priority
          });
          break;

        case 'object':
          Object.assign(newOpts, priority);
          break;

        default:
      }

      if (typeof newOpts.message === 'function') {
        newOpts.message = this._shouldLog(newOpts.priority) ? newOpts.message() : '';
      }

      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(typeof newOpts.message === 'string' || Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(newOpts.message) === 'object');

      return Object.assign(newOpts, opts);
    }
  }, {
    key: "_decorateMessage",
    value: function _decorateMessage(message, opts) {
      if (typeof message === 'string') {
        var time = '';

        if (opts.time) {
          var _this$_getElapsedTime2 = this._getElapsedTime(),
              total = _this$_getElapsedTime2.total;

          time = Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["leftPad"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatTime"])(total));
        }

        message = opts.time ? "".concat(this.id, ": ").concat(time, "  ").concat(message) : "".concat(this.id, ": ").concat(message);
        message = Object(_utils_color__WEBPACK_IMPORTED_MODULE_8__["addColor"])(message, opts.color, opts.background);
      }

      return message;
    }
  }, {
    key: "priority",
    set: function set(newPriority) {
      this._storage.updateConfiguration({
        priority: newPriority
      });

      return this;
    },
    get: function get() {
      return this._storage.config.priority;
    }
  }]);

  return Log;
}();


Log.VERSION = _utils_globals__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/lib/stat.js":
/*!******************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/lib/stat.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stat; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hi-res-timestamp */ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js");




var Stat = function () {
  function Stat(name) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stat);

    this.name = name;
    this.reset();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stat, [{
    key: "incrementCount",
    value: function incrementCount() {
      this.addCount(1);
    }
  }, {
    key: "decrementCount",
    value: function decrementCount() {
      this.subtractCount(1);
    }
  }, {
    key: "addCount",
    value: function addCount(value) {
      this.count += value;
    }
  }, {
    key: "subtractCount",
    value: function subtractCount(value) {
      this.count -= value;
    }
  }, {
    key: "addTime",
    value: function addTime(time) {
      this.time += time;
      this.lastTiming = time;
      this.count++;
    }
  }, {
    key: "timeStart",
    value: function timeStart() {
      this._startTime = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this._timerPending = true;
    }
  }, {
    key: "timeEnd",
    value: function timeEnd() {
      if (!this._timerPending) {
        return;
      }

      this.addTime(Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"])() - this._startTime);
      this._timerPending = false;
    }
  }, {
    key: "getAverageTime",
    value: function getAverageTime() {
      return this.count > 0 ? this.time / this.count : 0;
    }
  }, {
    key: "getHz",
    value: function getHz() {
      return this.time > 0 ? this.count / (this.time / 1000) : 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.time = 0;
      this.count = 0;
      this.lastTiming = 0;
      this._startTime = 0;
      this._timerPending = false;
    }
  }]);

  return Stat;
}();


//# sourceMappingURL=stat.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/lib/stats.js":
/*!*******************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/lib/stats.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat */ "../../node_modules/probe.gl/dist/esm/lib/stat.js");




var Stats = function () {
  function Stats(_ref) {
    var id = _ref.id;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stats);

    this.id = id;
    this.stats = {};
    Object.seal(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stats, [{
    key: "get",
    value: function get(name) {
      this.stats[name] = this.stats[name] || new _stat__WEBPACK_IMPORTED_MODULE_2__["default"](name);
      return this.stats[name];
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var key in this.stats) {
        this.stats[key].reset();
      }

      return this;
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      for (var key in this.stats) {
        fn(this.stats[key]);
      }
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var table = {};
      this.forEach(function (stat) {
        table[stat.name] = {
          time: stat.time || 0,
          count: stat.count || 0,
          average: stat.getAverageTime() || 0,
          hz: stat.getHz() || 0
        };
      });
      return table;
    }
  }]);

  return Stats;
}();


//# sourceMappingURL=stats.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/assert.js":
/*!**********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/assert.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/autobind.js":
/*!************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/autobind.js ***!
  \************************************************************************************/
/*! exports provided: autobind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return autobind; });
function autobind(obj) {
  var predefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['constructor'];
  var proto = Object.getPrototypeOf(obj);
  var propNames = Object.getOwnPropertyNames(proto);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var key = _step.value;

      if (typeof obj[key] === 'function') {
        if (!predefined.find(function (name) {
          return key === name;
        })) {
          obj[key] = obj[key].bind(obj);
        }
      }
    };

    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
//# sourceMappingURL=autobind.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/color.js":
/*!*********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/color.js ***!
  \*********************************************************************************/
/*! exports provided: COLOR, addColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addColor", function() { return addColor; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");

var COLOR = {
  BLACK: 30,
  RED: 31,
  GREEN: 32,
  YELLOW: 33,
  BLUE: 34,
  MAGENTA: 35,
  CYAN: 36,
  WHITE: 37,
  BRIGHT_BLACK: 90,
  BRIGHT_RED: 91,
  BRIGHT_GREEN: 92,
  BRIGHT_YELLOW: 93,
  BRIGHT_BLUE: 94,
  BRIGHT_MAGENTA: 95,
  BRIGHT_CYAN: 96,
  BRIGHT_WHITE: 97
};

function getColor(color) {
  return typeof color === 'string' ? COLOR[color.toUpperCase()] || COLOR.WHITE : color;
}

function addColor(string, color, background) {
  if (!_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && typeof string === 'string') {
    if (color) {
      color = getColor(color);
      string = "\x1B[".concat(color, "m").concat(string, "\x1B[39m");
    }

    if (background) {
      color = getColor(background);
      string = "\x1B[".concat(background + 10, "m").concat(string, "\x1B[49m");
    }
  }

  return string;
}
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/formatters.js":
/*!**************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/formatters.js ***!
  \**************************************************************************************/
/*! exports provided: formatTime, leftPad, rightPad, formatValue, formatImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return leftPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return rightPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatImage", function() { return formatImage; });
function formatTime(ms) {
  var formatted;

  if (ms < 10) {
    formatted = "".concat(ms.toFixed(2), "ms");
  } else if (ms < 100) {
    formatted = "".concat(ms.toFixed(1), "ms");
  } else if (ms < 1000) {
    formatted = "".concat(ms.toFixed(0), "ms");
  } else {
    formatted = "".concat((ms / 1000).toFixed(2), "s");
  }

  return formatted;
}
function leftPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(' '.repeat(padLength)).concat(string);
}
function rightPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(string).concat(' '.repeat(padLength));
}
function formatValue(v) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var EPSILON = 1e-16;
  var _opts$isInteger = opts.isInteger,
      isInteger = _opts$isInteger === void 0 ? false : _opts$isInteger;

  if (Array.isArray(v) || ArrayBuffer.isView(v)) {
    return formatArrayValue(v, opts);
  }

  if (!Number.isFinite(v)) {
    return String(v);
  }

  if (Math.abs(v) < EPSILON) {
    return isInteger ? '0' : '0.';
  }

  if (isInteger) {
    return v.toFixed(0);
  }

  if (Math.abs(v) > 100 && Math.abs(v) < 10000) {
    return v.toFixed(0);
  }

  var string = v.toPrecision(2);
  var decimal = string.indexOf('.0');
  return decimal === string.length - 2 ? string.slice(0, -1) : string;
}

function formatArrayValue(v, opts) {
  var _opts$maxElts = opts.maxElts,
      maxElts = _opts$maxElts === void 0 ? 16 : _opts$maxElts,
      _opts$size = opts.size,
      size = _opts$size === void 0 ? 1 : _opts$size;
  var string = '[';

  for (var i = 0; i < v.length && i < maxElts; ++i) {
    if (i > 0) {
      string += ",".concat(i % size === 0 ? ' ' : '');
    }

    string += formatValue(v[i], opts);
  }

  var terminator = v.length > maxElts ? '...' : ']';
  return "".concat(string).concat(terminator);
}

function formatImage(image, message, scale) {
  var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
  var imageUrl = image.src.replace(/\(/g, '%28').replace(/\)/g, '%29');

  if (image.width > maxWidth) {
    scale = Math.min(scale, maxWidth / image.width);
  }

  var width = image.width * scale;
  var height = image.height * scale;
  var style = ['font-size:1px;', "padding:".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px;"), "line-height:".concat(height, "px;"), "background:url(".concat(imageUrl, ");"), "background-size:".concat(width, "px ").concat(height, "px;"), 'color:transparent;'].join('');
  return ["".concat(message, " %c+"), style];
}
//# sourceMappingURL=formatters.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/globals.js":
/*!***********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/globals.js ***!
  \***********************************************************************************/
/*! exports provided: self, window, global, document, process, console, VERSION, isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony import */ var _env_is_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/is-browser */ "../../node_modules/probe.gl/dist/esm/env/is-browser.js");
/* harmony import */ var _env_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env/globals */ "../../node_modules/probe.gl/dist/esm/env/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "console", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["console"]; });



var VERSION =  true ? "7.0.0-rc.3" : undefined;
var isBrowser = Object(_env_is_browser__WEBPACK_IMPORTED_MODULE_0__["default"])();
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js":
/*!********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHiResTimestamp; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");

function getHiResTimestamp() {
  var timestamp;

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && _globals__WEBPACK_IMPORTED_MODULE_0__["window"].performance) {
    timestamp = _globals__WEBPACK_IMPORTED_MODULE_0__["window"].performance.now();
  } else if (_globals__WEBPACK_IMPORTED_MODULE_0__["process"].hrtime) {
    var timeParts = _globals__WEBPACK_IMPORTED_MODULE_0__["process"].hrtime();
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}
//# sourceMappingURL=hi-res-timestamp.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/local-storage.js":
/*!*****************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/probe.gl/dist/esm/utils/local-storage.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");



function getStorage(type) {
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  } catch (e) {
    return null;
  }
}

var LocalStorage = function () {
  function LocalStorage(id, defaultSettings) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocalStorage);

    this.storage = getStorage(type);
    this.id = id;
    this.config = {};
    Object.assign(this.config, defaultSettings);

    this._loadConfiguration();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocalStorage, [{
    key: "getConfiguration",
    value: function getConfiguration() {
      return this.config;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this.config = {};
      return this.updateConfiguration(configuration);
    }
  }, {
    key: "updateConfiguration",
    value: function updateConfiguration(configuration) {
      Object.assign(this.config, configuration);

      if (this.storage) {
        var serialized = JSON.stringify(this.config);
        this.storage.setItem(this.id, serialized);
      }

      return this;
    }
  }, {
    key: "_loadConfiguration",
    value: function _loadConfiguration() {
      var configuration = {};

      if (this.storage) {
        var serializedConfiguration = this.storage.getItem(this.id);
        configuration = serializedConfiguration ? JSON.parse(serializedConfiguration) : {};
      }

      Object.assign(this.config, configuration);
      return this;
    }
  }]);

  return LocalStorage;
}();


//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!*******************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/process/browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global window, global */
const moduleExports = __webpack_require__(/*! ./index */ "./src/index.js");

const _global = typeof window === 'undefined' ? global : window;
_global.loaders = _global.luma || {};

module.exports = Object.assign(_global.luma, moduleExports);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SnapshotTestRunner, PerformanceTestRunner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snapshot_test_runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snapshot-test-runner */ "./src/snapshot-test-runner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnapshotTestRunner", function() { return _snapshot_test_runner__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _performance_test_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-test-runner */ "./src/performance-test-runner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformanceTestRunner", function() { return _performance_test_runner__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/performance-test-runner.js":
/*!****************************************!*\
  !*** ./src/performance-test-runner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerformanceTestRunner; });
/* harmony import */ var probe_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! probe.gl */ "../../node_modules/probe.gl/dist/esm/index.js");
/* harmony import */ var _test_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-runner */ "./src/test-runner.js");



class PerformanceTestRunner extends _test_runner__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(props) {
    super(props);

    Object.assign(this.testOptions, {
      maxFramesToRender: 60,
      targetFPS: 50
    });
  }

  initTestCase(testCase) {
    super.initTestCase(testCase);
    this._stats = new probe_gl__WEBPACK_IMPORTED_MODULE_0__["Stats"]({id: testCase.name});
    this._fps = this._stats.get('fps');
  }

  shouldRender(animationProps) {
    this._fps.timeEnd();
    this._fps.timeStart();

    if (this._fps.count > this.testOptions.maxFramesToRender) {
      animationProps.done();
    }

    return true;
  }

  assert(testCase) {
    const targetFPS = testCase.targetFPS || this.testOptions.targetFPS;
    const count = this._fps.count;
    const fps = this._fps.getHz();

    if (fps >= targetFPS) {
      this._pass({fps, framesRendered: count});
    } else {
      this._fail({fps, framesRendered: count});
    }
    this._next();
  }
}


/***/ }),

/***/ "./src/snapshot-test-runner.js":
/*!*************************************!*\
  !*** ./src/snapshot-test-runner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnapshotTestRunner; });
/* harmony import */ var _test_runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-runner */ "./src/test-runner.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* global window */



class SnapshotTestRunner extends _test_runner__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(props) {
    super(props);

    Object.assign(this.testOptions, {
      imageDiffOptions: {}
    });
  }

  initTestCase(testCase) {
    super.initTestCase(testCase);
    if (!testCase.goldenImage) {
      throw new Error(`Test case ${testCase.name} does not have golden image`);
    }
  }

  shouldRender() {
    // wait for the current diffing to finish
    return !this.isDiffing;
  }

  assert(testCase) {
    if (this.isDiffing) {
      // Already performing diffing
      return;
    }
    this.isDiffing = true;

    const diffOptions = Object.assign(
      {},
      this.testOptions.imageDiffOptions,
      testCase.imageDiffOptions,
      {
        goldenImage: testCase.goldenImage,
        region: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBoundingBoxInPage"])(this._animationProps.canvas)
      }
    );
    // Take screenshot and compare
    window.browserTestDriver_captureAndDiffScreen(diffOptions).then(result => {
      // invoke user callback
      if (result.success) {
        this._pass(result);
      } else {
        this._fail(result);
      }

      this.isDiffing = false;
      this._next();
    });
  }
}


/***/ }),

/***/ "./src/test-runner.js":
/*!****************************!*\
  !*** ./src/test-runner.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestRunner; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/core");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* global window, console */
/* eslint-disable no-console */



function noop() {}

const DEFAULT_TEST_CASE = {
  name: 'Unnamed test',
  onInitialize: noop,
  onRender: ({done}) => done(),
  onFinalize: noop
};

const DEFAULT_TEST_OPTIONS = {
  // test lifecycle callback
  onTestStart: testCase => console.log(`# ${testCase.name}`),
  onTestPass: testCase => console.log(`ok ${testCase.name} passed`),
  onTestFail: testCase => console.log(`not ok ${testCase.name} failed`),

  // milliseconds to wait for each test case before aborting
  timeout: 2000
};

class TestRunner {
  /**
   * props
   *   AnimationLoop props
   */
  constructor(props = {}) {
    this.props = props;
    this.isRunning = false;
    this._testCases = [];
    this._testCaseData = null;

    this.isHeadless = Boolean(window.browserTestDriver_isHeadless);

    this.testOptions = Object.assign({}, DEFAULT_TEST_OPTIONS);
  }

  /**
   * Add testCase(s)
   */
  add(testCases) {
    if (!Array.isArray(testCases)) {
      testCases = [testCases];
    }
    for (const testCase of testCases) {
      this._testCases.push(testCase);
    }
    return this;
  }

  /**
   * Returns a promise that resolves when all the test cases are done
   */
  run(options = {}) {
    Object.assign(this.testOptions, options);

    return new Promise(resolve => {
      this._animationLoop = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["AnimationLoop"](
        Object.assign({}, this.props, {
          onRender: this._onRender.bind(this),
          onFinalize: () => {
            this.isRunning = false;
            resolve();
          }
        })
      );
      this._animationLoop.start(this.props);

      this.isRunning = true;
      this.isDiffing = false;
      this._currentTestCase = null;
    }).catch(error => {
      this._fail({error: error.message});
    });
  }

  /* Lifecycle methods for subclassing */

  initTestCase(testCase) {
    const {animationLoop} = testCase;
    if (animationLoop) {
      testCase.onInitialize = animationLoop.onInitialize.bind(animationLoop);
      testCase.onRender = animationLoop.onRender.bind(animationLoop);
      testCase.onFinalize = animationLoop.onFinalize.bind(animationLoop);
    }
    for (const key in DEFAULT_TEST_CASE) {
      testCase[key] = testCase[key] || DEFAULT_TEST_CASE[key];
    }
  }

  shouldRender(animationProps) {
    return true;
  }

  assert(testCase) {
    this._pass(testCase);
    this._next();
  }

  /* Utilities */

  _pass(result) {
    this.testOptions.onTestPass(this._currentTestCase, result);
  }

  _fail(result) {
    this.testOptions.onTestFail(this._currentTestCase, result);
  }

  _next() {
    this._nextTestCase();
  }

  /* Private methods */

  _onRender(animationProps) {
    this._animationProps = animationProps;

    const testCase = this._currentTestCase || this._nextTestCase();
    if (!testCase) {
      // all test cases are done
      this._animationLoop.stop();
      return;
    }

    let isDone = false;
    const testCaseAnimationProps = Object.assign({}, animationProps, this._testCaseData, {
      // tick/time starts from 0 for each test case
      startTime: this._currentTestCaseStartTime,
      time: animationProps.time - this._currentTestCaseStartTime,
      tick: animationProps.tick - this._currentTestCaseStartTick,
      // called by the test case when it is done rendering and ready for capture and diff
      done: () => {
        isDone = true;
      }
    });

    if (this._testCaseData && this.shouldRender(testCaseAnimationProps)) {
      // test case is initialized, render frame
      testCase.onRender(testCaseAnimationProps);
    }

    const timeout = testCase.timeout || this.testOptions.timeout;
    if (timeout && testCaseAnimationProps.time > timeout) {
      isDone = true;
    }

    if (isDone) {
      this.assert(testCase);
    }
  }

  _nextTestCase() {
    const animationProps = this._animationProps;

    // finalize the current test case
    if (this._testCaseData) {
      for (const key in this._testCaseData) {
        const value = this._testCaseData[key];
        if (value && value.delete) {
          value.delete();
        }
      }
      this._currentTestCase.onFinalize(Object.assign({}, animationProps, this._testCaseData));

      // reset WebGL context
      Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["popContextState"])(animationProps.gl);

      this._currentTestCase = null;
      this._testCaseData = null;
    }

    // get the next test case
    const testCase = this._testCases.shift();
    if (testCase) {
      // start new test case
      this._currentTestCase = testCase;
      this._currentTestCaseStartTime = animationProps.time;
      this._currentTestCaseStartTick = animationProps.tick;
      this.initTestCase(testCase);

      // initialize test case

      // save WebGL context
      Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["pushContextState"])(animationProps.gl);

      // aligned with the behavior of AnimationLoop.onInitialized
      // onInitialized could return a plain object or a promise
      Promise.resolve(
        testCase.onInitialize(
          Object.assign({}, animationProps, {
            // tick/time starts from 0 for each test case
            startTime: animationProps.time,
            time: 0,
            tick: 0
          })
        )
      ).then(userData => {
        this._testCaseData = userData || {};
      });
      // invoke user callback
      this.testOptions.onTestStart(testCase);
    }
    return testCase;
  }
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getBoundingBoxInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBoxInPage", function() { return getBoundingBoxInPage; });
/* global window */

// Get the bounding box of a DOMElement relative to the page
function getBoundingBoxInPage(domElement) {
  const bbox = domElement.getBoundingClientRect();
  return {
    x: window.scrollX + bbox.x,
    y: window.scrollY + bbox.y,
    width: bbox.width,
    height: bbox.height
  };
}


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** asciify-image (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "@luma.gl/core":
/*!***********************!*\
  !*** external "luma" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__luma_gl_core__;

/***/ })

/******/ });
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

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

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!****************************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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

/***/ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!***************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
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

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!***************************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!**********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

/***/ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!********************************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!********************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/***/ "../../node_modules/gl-matrix/esm/common.js":
/*!************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/common.js ***!
  \************************************************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/mat3.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/mat3.js ***!
  \**********************************************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/mat4.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/mat4.js ***!
  \**********************************************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/quat.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/quat.js ***!
  \**********************************************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, multiply, rotateX, rotateY, rotateZ, calculateW, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "../../node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "../../node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "../../node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/vec2.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/vec2.js ***!
  \**********************************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/vec3.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/vec3.js ***!
  \**********************************************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/vec4.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/gl-matrix/esm/vec4.js ***!
  \**********************************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/addons/polygon.js":
/*!***********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/addons/polygon.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");




var Polygon = function () {
  function Polygon(points) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Polygon);

    this.points = points;
    this.isClosed = Object(_lib_common__WEBPACK_IMPORTED_MODULE_2__["equals"])(this.points[this.points.length - 1], this.points[0]);
    Object.freeze(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Polygon, [{
    key: "getSignedArea",
    value: function getSignedArea() {
      var area = 0;
      this.forEachSegment(function (p1, p2) {
        area += (p1[0] + p2[0]) * (p1[1] - p2[1]);
      });
      return area / 2;
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return Math.abs(this.getSignedArea());
    }
  }, {
    key: "getWindingDirection",
    value: function getWindingDirection() {
      return Math.sign(this.getSignedArea());
    }
  }, {
    key: "forEachSegment",
    value: function forEachSegment(visitor) {
      var length = this.points.length;

      for (var i = 0; i < length - 1; i++) {
        visitor(this.points[i], this.points[i + 1], i, i + 1);
      }

      if (this.isPolygon && !this.isClosed()) {
        visitor(this.points[length - 1], this.points[0], length - 1, 0);
      }
    }
  }]);

  return Polygon;
}();


//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/euler.js":
/*!**************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/euler.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matrix4 */ "../../node_modules/math.gl/dist/esm/matrix4.js");
/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quaternion */ "../../node_modules/math.gl/dist/esm/quaternion.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");











var ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
var ALMOST_ONE = 0.99999;

function validateOrder(value) {
  return value >= 0 && value < 6;
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }

  return value;
}

var Euler = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Euler, _MathArray);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Euler, [{
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }], [{
    key: "rotationOrder",
    value: function rotationOrder(order) {
      return Euler.RotationOrders[order];
    }
  }, {
    key: "ZYX",
    get: function get() {
      return 0;
    }
  }, {
    key: "YXZ",
    get: function get() {
      return 1;
    }
  }, {
    key: "XZY",
    get: function get() {
      return 2;
    }
  }, {
    key: "ZXY",
    get: function get() {
      return 3;
    }
  }, {
    key: "YZX",
    get: function get() {
      return 4;
    }
  }, {
    key: "XYZ",
    get: function get() {
      return 5;
    }
  }, {
    key: "RollPitchYaw",
    get: function get() {
      return 0;
    }
  }, {
    key: "DefaultOrder",
    get: function get() {
      return Euler.ZYX;
    }
  }, {
    key: "RotationOrders",
    get: function get() {
      return ['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
    }
  }]);

  function Euler() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Euler.DefaultOrder;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Euler);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Euler).call(this));

    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      var _this2;

      (_this2 = _this).fromVector3.apply(_this2, arguments);
    } else {
      _this.set(x, y, z, order);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Euler, [{
    key: "fromQuaternion",
    value: function fromQuaternion(quaternion) {
      var _quaternion = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(quaternion, 4),
          x = _quaternion[0],
          y = _quaternion[1],
          z = _quaternion[2],
          w = _quaternion[3];

      var ysqr = y * y;
      var t0 = -2.0 * (ysqr + z * z) + 1.0;
      var t1 = +2.0 * (x * y + w * z);
      var t2 = -2.0 * (x * z - w * y);
      var t3 = +2.0 * (y * z + w * x);
      var t4 = -2.0 * (x * x + ysqr) + 1.0;
      t2 = t2 > 1.0 ? 1.0 : t2;
      t2 = t2 < -1.0 ? -1.0 : t2;
      var roll = Math.atan2(t3, t4);
      var pitch = Math.asin(t2);
      var yaw = Math.atan2(t1, t0);
      return new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < 3; ++i) {
        this[i] = array[i];
      }

      this[3] = Number.isFinite(array[3]) || this.order;
      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var order = arguments.length > 3 ? arguments[3] : undefined;
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = Number.isFinite(order) ? order : this[3];
      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      return array;
    }
  }, {
    key: "toArray4",
    value: function toArray4() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      array[offset + 3] = this[3];
      return array;
    }
  }, {
    key: "toVector3",
    value: function toVector3(optionalResult) {
      if (optionalResult) {
        return optionalResult.set(this[0], this[1], this[2]);
      }

      return new _vector3__WEBPACK_IMPORTED_MODULE_10__["default"](this[0], this[1], this[2]);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v, order) {
      return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = array[0 + offset];
      this[1] = array[1 + offset];
      this[2] = array[2 + offset];

      if (array[3] !== undefined) {
        this[3] = array[3];
      }

      return this.check();
    }
  }, {
    key: "fromRollPitchYaw",
    value: function fromRollPitchYaw(roll, pitch, yaw) {
      return this.set(roll, pitch, yaw, Euler.ZYX);
    }
  }, {
    key: "fromRotationMatrix",
    value: function fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;

      this._fromRotationMatrix(m, order);

      return this.check();
    }
  }, {
    key: "getRotationMatrix",
    value: function getRotationMatrix() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _matrix4__WEBPACK_IMPORTED_MODULE_8__["default"]();

      this._getRotationMatrix(m);

      return m;
    }
  }, {
    key: "getQuaternion",
    value: function getQuaternion() {
      var q = new _quaternion__WEBPACK_IMPORTED_MODULE_9__["default"]();

      switch (this[4]) {
        case Euler.XYZ:
          return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);

        case Euler.YXZ:
          return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);

        case Euler.ZXY:
          return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);

        case Euler.ZYX:
          return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);

        case Euler.YZX:
          return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);

        case Euler.XZY:
          return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }
    }
  }, {
    key: "_fromRotationMatrix",
    value: function _fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;
      var te = m.elements;
      var m11 = te[0],
          m12 = te[4],
          m13 = te[8];
      var m21 = te[1],
          m22 = te[5],
          m23 = te[9];
      var m31 = te[2],
          m32 = te[6],
          m33 = te[10];
      order = order || this[3];

      switch (order) {
        case Euler.XYZ:
          this[1] = Math.asin(Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m13, -1, 1));

          if (Math.abs(m13) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m33);
            this[2] = Math.atan2(-m12, m11);
          } else {
            this[0] = Math.atan2(m32, m22);
            this[2] = 0;
          }

          break;

        case Euler.YXZ:
          this[0] = Math.asin(-Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m23, -1, 1));

          if (Math.abs(m23) < ALMOST_ONE) {
            this[1] = Math.atan2(m13, m33);
            this[2] = Math.atan2(m21, m22);
          } else {
            this[1] = Math.atan2(-m31, m11);
            this[2] = 0;
          }

          break;

        case Euler.ZXY:
          this[0] = Math.asin(Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m32, -1, 1));

          if (Math.abs(m32) < ALMOST_ONE) {
            this[1] = Math.atan2(-m31, m33);
            this[2] = Math.atan2(-m12, m22);
          } else {
            this[1] = 0;
            this[2] = Math.atan2(m21, m11);
          }

          break;

        case Euler.ZYX:
          this[1] = Math.asin(-Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m31, -1, 1));

          if (Math.abs(m31) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m33);
            this[2] = Math.atan2(m21, m11);
          } else {
            this[0] = 0;
            this[2] = Math.atan2(-m12, m22);
          }

          break;

        case Euler.YZX:
          this[2] = Math.asin(Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m21, -1, 1));

          if (Math.abs(m21) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m22);
            this[1] = Math.atan2(-m31, m11);
          } else {
            this[0] = 0;
            this[1] = Math.atan2(m13, m33);
          }

          break;

        case Euler.XZY:
          this[2] = Math.asin(-Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m12, -1, 1));

          if (Math.abs(m12) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m22);
            this[1] = Math.atan2(m13, m11);
          } else {
            this[0] = Math.atan2(-m23, m33);
            this[1] = 0;
          }

          break;

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      this[3] = order;
      return this;
    }
  }, {
    key: "_getRotationMatrix",
    value: function _getRotationMatrix() {
      var te = new _matrix4__WEBPACK_IMPORTED_MODULE_8__["default"]();
      var x = this.x,
          y = this.y,
          z = this.z;
      var a = Math.cos(x);
      var c = Math.cos(y);
      var e = Math.cos(z);
      var b = Math.sin(x);
      var d = Math.sin(y);
      var f = Math.sin(z);

      switch (this[3]) {
        case Euler.XYZ:
          {
            var ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
            te[0] = c * e;
            te[4] = -c * f;
            te[8] = d;
            te[1] = af + be * d;
            te[5] = ae - bf * d;
            te[9] = -b * c;
            te[2] = bf - ae * d;
            te[6] = be + af * d;
            te[10] = a * c;
            break;
          }

        case Euler.YXZ:
          {
            var ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
            te[0] = ce + df * b;
            te[4] = de * b - cf;
            te[8] = a * d;
            te[1] = a * f;
            te[5] = a * e;
            te[9] = -b;
            te[2] = cf * b - de;
            te[6] = df + ce * b;
            te[10] = a * c;
            break;
          }

        case Euler.ZXY:
          {
            var _ce = c * e,
                _cf = c * f,
                _de = d * e,
                _df = d * f;

            te[0] = _ce - _df * b;
            te[4] = -a * f;
            te[8] = _de + _cf * b;
            te[1] = _cf + _de * b;
            te[5] = a * e;
            te[9] = _df - _ce * b;
            te[2] = -a * d;
            te[6] = b;
            te[10] = a * c;
            break;
          }

        case Euler.ZYX:
          {
            var _ae = a * e,
                _af = a * f,
                _be = b * e,
                _bf = b * f;

            te[0] = c * e;
            te[4] = _be * d - _af;
            te[8] = _ae * d + _bf;
            te[1] = c * f;
            te[5] = _bf * d + _ae;
            te[9] = _af * d - _be;
            te[2] = -d;
            te[6] = b * c;
            te[10] = a * c;
            break;
          }

        case Euler.YZX:
          {
            var ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
            te[0] = c * e;
            te[4] = bd - ac * f;
            te[8] = bc * f + ad;
            te[1] = f;
            te[5] = a * e;
            te[9] = -b * e;
            te[2] = -d * e;
            te[6] = ad * f + bc;
            te[10] = ac - bd * f;
            break;
          }

        case Euler.XZY:
          {
            var _ac = a * c,
                _ad = a * d,
                _bc = b * c,
                _bd = b * d;

            te[0] = c * e;
            te[4] = -f;
            te[8] = d * e;
            te[1] = _ac * f + _bd;
            te[5] = a * e;
            te[9] = _ad * f - _bc;
            te[2] = _bc * f - _ad;
            te[6] = b * e;
            te[10] = _bd * f + _ac;
            break;
          }

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
  }, {
    key: "toQuaternion",
    value: function toQuaternion() {
      var cy = Math.cos(this.yaw * 0.5);
      var sy = Math.sin(this.yaw * 0.5);
      var cr = Math.cos(this.roll * 0.5);
      var sr = Math.sin(this.roll * 0.5);
      var cp = Math.cos(this.pitch * 0.5);
      var sp = Math.sin(this.pitch * 0.5);
      var w = cy * cr * cp + sy * sr * sp;
      var x = cy * sr * cp - sy * cr * sp;
      var y = cy * cr * sp + sy * sr * cp;
      var z = sy * cr * cp - cy * sr * sp;
      return new _quaternion__WEBPACK_IMPORTED_MODULE_9__["default"](x, y, z, w);
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "alpha",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "beta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "gamma",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "phi",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "theta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "psi",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "roll",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "pitch",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "yaw",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "order",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = checkOrder(value);
    }
  }]);

  return Euler;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_6__["default"]);


//# sourceMappingURL=euler.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/index.js":
/*!**************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/index.js ***!
  \**************************************************************************/
/*! exports provided: Vector2, Vector3, Vector4, Matrix3, Matrix4, Quaternion, config, checkNumber, configure, formatValue, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp, equals, _SphericalCoordinates, _Pose, _Euler, _Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2 */ "../../node_modules/math.gl/dist/esm/vector2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return _vector2__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return _vector3__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector4 */ "../../node_modules/math.gl/dist/esm/vector4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector4", function() { return _vector4__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matrix3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix3 */ "../../node_modules/math.gl/dist/esm/matrix3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix3", function() { return _matrix3__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matrix4 */ "../../node_modules/math.gl/dist/esm/matrix4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return _matrix4__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quaternion */ "../../node_modules/math.gl/dist/esm/quaternion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quaternion", function() { return _quaternion__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["configure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["formatValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["radians"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["degrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["sin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["cos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["tan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["asin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["acos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["atan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["lerp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["equals"]; });

/* harmony import */ var _spherical_coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spherical-coordinates */ "../../node_modules/math.gl/dist/esm/spherical-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SphericalCoordinates", function() { return _spherical_coordinates__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pose */ "../../node_modules/math.gl/dist/esm/pose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Pose", function() { return _pose__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./euler */ "../../node_modules/math.gl/dist/esm/euler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Euler", function() { return _euler__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _addons_polygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addons/polygon */ "../../node_modules/math.gl/dist/esm/addons/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Polygon", function() { return _addons_polygon__WEBPACK_IMPORTED_MODULE_10__["default"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/common.js":
/*!*******************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/lib/common.js ***!
  \*******************************************************************************/
/*! exports provided: config, configure, checkNumber, formatValue, formatAngle, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return checkNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAngle", function() { return formatAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var config = {};
config.EPSILON = 1e-12;
config.debug = true;
config.precision = 4;
config.printTypes = false;
config.printDegrees = false;
config.printRowMajor = true;

function configure(options) {
  if ('epsilon' in options) {
    config.EPSILON = options.epsilon;
  }

  if ('debug' in options) {
    config.debug = options.debug;
  }
}
function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid number ".concat(value));
  }

  return value;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function formatValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? config.precision || 4 : _ref$precision;

  value = round(value);
  return parseFloat(value.toPrecision(precision));
}
function formatAngle(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$precision = _ref2.precision,
      precision = _ref2$precision === void 0 ? config.precision || 4 : _ref2$precision,
      _ref2$printDegrees = _ref2.printDegrees,
      printDegrees = _ref2$printDegrees === void 0 ? config.printAngles : _ref2$printDegrees;

  value = printDegrees ? degrees(value) : value;
  value = round(value);
  return "".concat(parseFloat(value.toPrecision(precision))).concat(printDegrees ? '°' : '');
}
function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value) && value.length !== undefined;
}
function clone(array) {
  return array.clone ? array.clone() : new Array(array);
}

function map(value, func) {
  if (isArray(value)) {
    var result = clone(value);

    for (var i = 0; i < result.length; ++i) {
      result[i] = func(result[i], i, result);
    }

    return result;
  }

  return func(value);
}

function radians(degrees) {
  return map(degrees, function (degrees) {
    return degrees / 180 * Math.PI;
  });
}
function degrees(radians) {
  return map(radians, function (radians) {
    return radians * 180 / Math.PI;
  });
}
function sin(radians) {
  return map(radians, function (angle) {
    return Math.sin(angle);
  });
}
function cos(radians) {
  return map(radians, function (angle) {
    return Math.cos(angle);
  });
}
function tan(radians) {
  return map(radians, function (angle) {
    return Math.tan(angle);
  });
}
function asin(radians) {
  return map(radians, function (angle) {
    return Math.asin(angle);
  });
}
function acos(radians) {
  return map(radians, function (angle) {
    return Math.acos(angle);
  });
}
function atan(radians) {
  return map(radians, function (angle) {
    return Math.atan(angle);
  });
}
function clamp(value, min, max) {
  return map(value, function (value) {
    return Math.max(min, Math.min(max, value));
  });
}
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map(function (ai, i) {
      return lerp(ai, b[i], t);
    });
  }

  return t * b + (1 - t) * a;
}
function equals(a, b) {
  if (isArray(a) && isArray(b)) {
    if (a === b) {
      return true;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; ++i) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/math-array.js":
/*!***********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/lib/math-array.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathArray; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "../../node_modules/math.gl/dist/esm/lib/common.js");






function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}



var MathArray = function (_extendableBuiltin2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MathArray, _extendableBuiltin2);

  function MathArray() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MathArray);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MathArray).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MathArray, [{
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this).check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i];
      }

      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = (i < 0 || arguments.length <= i ? undefined : arguments[i]) || 0;
      }

      return this.check();
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i + offset];
      }

      return this.check();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.formatString(_common__WEBPACK_IMPORTED_MODULE_5__["config"]);
    }
  }, {
    key: "formatString",
    value: function formatString(opts) {
      var string = '';

      for (var i = 0; i < this.ELEMENTS; ++i) {
        string += (i > 0 ? ', ' : '') + Object(_common__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(this[i], opts);
      }

      return "".concat(opts.printTypes ? this.constructor.name : '', "[").concat(string, "]");
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        array[offset + i] = this[i];
      }

      return array;
    }
  }, {
    key: "toFloat32Array",
    value: function toFloat32Array() {
      return new Float32Array(this);
    }
  }, {
    key: "equals",
    value: function equals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_5__["equals"])(this[i], array[i])) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (this[i] !== array[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "negate",
    value: function negate() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = -this[i];
      }

      return this.check();
    }
  }, {
    key: "inverse",
    value: function inverse() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = 1 / this[i];
      }

      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      if (t === undefined) {
        t = b;
        b = a;
        a = this;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var ai = a[i];
        this[i] = ai + t * (b[i] - ai);
      }

      return this.check();
    }
  }, {
    key: "min",
    value: function min(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "max",
    value: function max(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.max(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "clamp",
    value: function clamp(minVector, maxVector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
      }

      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var valid = array && array.length === this.ELEMENTS;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        valid = valid && Number.isFinite(array[i]);
      }

      return valid;
    }
  }, {
    key: "check",
    value: function check() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

      if (_common__WEBPACK_IMPORTED_MODULE_5__["config"].debug && !this.validate(array)) {
        throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
      }

      return this;
    }
  }, {
    key: "sub",
    value: function sub(a) {
      return this.subtract(a);
    }
  }, {
    key: "setScalar",
    value: function setScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = a;
      }

      return this.check();
    }
  }, {
    key: "addScalar",
    value: function addScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] += a;
      }

      return this.check();
    }
  }, {
    key: "subScalar",
    value: function subScalar(a) {
      return this.addScalar(-a);
    }
  }, {
    key: "multiplyScalar",
    value: function multiplyScalar(a) {
      return this.scale(a);
    }
  }, {
    key: "divideScalar",
    value: function divideScalar(a) {
      return this.scale(1 / a);
    }
  }, {
    key: "clampScalar",
    value: function clampScalar(min, max) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], min), max);
      }

      return this.check();
    }
  }]);

  return MathArray;
}(_extendableBuiltin(Array));


//# sourceMappingURL=math-array.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/validators.js":
/*!***********************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/lib/validators.js ***!
  \***********************************************************************************/
/*! exports provided: validateVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVector", function() { return validateVector; });
function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }

  return v.every(Number.isFinite);
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/vector.js":
/*!*******************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/lib/vector.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "../../node_modules/math.gl/dist/esm/lib/common.js");








var assert = function assert(x, m) {
  if (!x) {
    throw new Error(m);
  }
};

var Vector = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector, _MathArray);

  function Vector() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector, [{
    key: "len",
    value: function len() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "lengthSquared",
    value: function lengthSquared() {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        length += this[i] * this[i];
      }

      return length;
    }
  }, {
    key: "distance",
    value: function distance(mathArray) {
      return Math.sqrt(this.distanceSquared(mathArray));
    }
  }, {
    key: "distanceSquared",
    value: function distanceSquared(mathArray) {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var dist = this[i] - mathArray[i];
        length += dist * dist;
      }

      return Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(length);
    }
  }, {
    key: "dot",
    value: function dot(mathArray) {
      var product = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        product += this[i] * mathArray[i];
      }

      return Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(product);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.magnitude();

      if (length !== 0) {
        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= length;
        }
      }

      return this.check();
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
        vectors[_key] = arguments[_key];
      }

      for (var _i = 0; _i < vectors.length; _i++) {
        var vector = vectors[_i];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] += vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "subtract",
    value: function subtract() {
      for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        vectors[_key2] = arguments[_key2];
      }

      for (var _i2 = 0; _i2 < vectors.length; _i2++) {
        var vector = vectors[_i2];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] -= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply() {
      for (var _len3 = arguments.length, vectors = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        vectors[_key3] = arguments[_key3];
      }

      for (var _i3 = 0; _i3 < vectors.length; _i3++) {
        var vector = vectors[_i3];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] *= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "divide",
    value: function divide() {
      for (var _len4 = arguments.length, vectors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        vectors[_key4] = arguments[_key4];
      }

      for (var _i4 = 0; _i4 < vectors.length; _i4++) {
        var vector = vectors[_i4];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(_scale) {
      if (Array.isArray(_scale)) {
        return this.multiply(_scale);
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= _scale;
      }

      return this.check();
    }
  }, {
    key: "scaleAndAdd",
    value: function scaleAndAdd(vector, scale) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = this[i] * scale + vector[i];
      }

      return this.check();
    }
  }, {
    key: "lengthSq",
    value: function lengthSq() {
      return this.lengthSquared();
    }
  }, {
    key: "distanceTo",
    value: function distanceTo(vector) {
      return this.distance(vector);
    }
  }, {
    key: "distanceToSquared",
    value: function distanceToSquared(vector) {
      return this.distanceSquared(vector);
    }
  }, {
    key: "getComponent",
    value: function getComponent(i) {
      assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      return Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(this[i]);
    }
  }, {
    key: "setComponent",
    value: function setComponent(i, value) {
      assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      this[i] = value;
      return this.check();
    }
  }, {
    key: "addVectors",
    value: function addVectors(a, b) {
      return this.copy(a).add(b);
    }
  }, {
    key: "subVectors",
    value: function subVectors(a, b) {
      return this.copy(a).subtract(b);
    }
  }, {
    key: "multiplyVectors",
    value: function multiplyVectors(a, b) {
      return this.copy(a).multiply(b);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(a, b) {
      return this.add(new this.constructor(a).multiplyScalar(b));
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Vector;
}(_math_array__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/matrix3.js":
/*!****************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/matrix3.js ***!
  \****************************************************************************/
/*! exports provided: validateMatrix3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMatrix3", function() { return validateMatrix3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix3; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/validators */ "../../node_modules/math.gl/dist/esm/lib/validators.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vector2 */ "../../node_modules/math.gl/dist/esm/vector2.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-matrix/mat3 */ "../../node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");














var IDENTITY = [1, 0, 0, 0, 1, 0, 0, 0, 1];
function validateMatrix3(m) {
  return m.length === 9 && Number.isFinite(m[0]) && Number.isFinite(m[1]) && Number.isFinite(m[2]) && Number.isFinite(m[3]) && Number.isFinite(m[4]) && Number.isFinite(m[5]) && Number.isFinite(m[6]) && Number.isFinite(m[7]) && Number.isFinite(m[8]);
}

var Matrix3 = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Matrix3, _MathArray);

  function Matrix3() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Matrix3);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Matrix3).call(this));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Matrix3, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m10 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m12 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m20 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m21 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m01;
      this[4] = m11;
      this[5] = m21;
      this[6] = m02;
      this[7] = m12;
      this[8] = m22;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m01 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m21 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m02 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m12 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m01;
      this[4] = m11;
      this[5] = m21;
      this[6] = m02;
      this[7] = m12;
      this[8] = m22;
      return this.check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      return this.setColumnMajor.apply(this, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array));
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i * 3 + j] : this[j * 3 + i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i * 3 + j] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      } else {
        this[j * 3 + i] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["determinant"](this);
    }
  }, {
    key: "identity",
    value: function identity() {
      for (var i = 0; i < IDENTITY.length; ++i) {
        this[i] = IDENTITY[i];
      }

      return this.check();
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["fromQuat"](this, q);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose() {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["transpose"](this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["invert"](this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["multiply"](this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["multiply"](this, this, a);
      return this.check();
    }
  }, {
    key: "rotate",
    value: function rotate(radians) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["rotate"](this, this, radians);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      if (Array.isArray(factor)) {
        gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["scale"](this, this, factor);
      } else {
        gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["scale"](this, this, [factor, factor, factor]);
      }

      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["translate"](this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new _vector2__WEBPACK_IMPORTED_MODULE_9__["default"]();
      gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_12__["transformMat3"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_7__["validateVector"])(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new _vector3__WEBPACK_IMPORTED_MODULE_10__["default"]();
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_13__["transformMat3"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_7__["validateVector"])(out, 3);
      return out;
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 9;
    }
  }]);

  return Matrix3;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_6__["default"]);


//# sourceMappingURL=matrix3.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/matrix4.js":
/*!****************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/matrix4.js ***!
  \****************************************************************************/
/*! exports provided: validateMatrix4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMatrix4", function() { return validateMatrix4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix4; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/validators */ "../../node_modules/math.gl/dist/esm/lib/validators.js");
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector2 */ "../../node_modules/math.gl/dist/esm/vector2.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vector4 */ "../../node_modules/math.gl/dist/esm/vector4.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-matrix/mat4 */ "../../node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! gl-matrix/vec4 */ "../../node_modules/gl-matrix/esm/vec4.js");

















var IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function validateMatrix4(m) {
  return m.length === 16 && Number.isFinite(m[0]) && Number.isFinite(m[1]) && Number.isFinite(m[2]) && Number.isFinite(m[3]) && Number.isFinite(m[4]) && Number.isFinite(m[5]) && Number.isFinite(m[6]) && Number.isFinite(m[7]) && Number.isFinite(m[8]) && Number.isFinite(m[9]) && Number.isFinite(m[10]) && Number.isFinite(m[11]) && Number.isFinite(m[12]) && Number.isFinite(m[13]) && Number.isFinite(m[14]) && Number.isFinite(m[15]);
}

var Matrix4 = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Matrix4, _MathArray);

  function Matrix4() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Matrix4);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Matrix4).call(this));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Matrix4, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m10 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m12 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m13 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m20 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m21 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m23 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m30 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m31 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m32 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m30 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m01 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m21 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m31 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m02 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m12 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m32 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m03 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m13 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m23 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      return this.setColumnMajor.apply(this, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array));
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i][j] : this[j][i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i][j] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      } else {
        this[j][i] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["determinant"](this);
    }
  }, {
    key: "identity",
    value: function identity() {
      return this.copy(IDENTITY);
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["fromQuat"](this, q);
      return this.check();
    }
  }, {
    key: "frustum",
    value: function frustum(_ref) {
      var left = _ref.left,
          right = _ref.right,
          bottom = _ref.bottom,
          top = _ref.top,
          near = _ref.near,
          far = _ref.far;
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["frustum"](this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "lookAt",
    value: function lookAt(_ref2) {
      var eye = _ref2.eye,
          _ref2$center = _ref2.center,
          center = _ref2$center === void 0 ? [0, 0, 0] : _ref2$center,
          _ref2$up = _ref2.up,
          up = _ref2$up === void 0 ? [0, 1, 0] : _ref2$up;
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["lookAt"](this, eye, center, up);
      return this.check();
    }
  }, {
    key: "ortho",
    value: function ortho(_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          bottom = _ref3.bottom,
          top = _ref3.top,
          _ref3$near = _ref3.near,
          near = _ref3$near === void 0 ? 0.1 : _ref3$near,
          _ref3$far = _ref3.far,
          far = _ref3$far === void 0 ? 500 : _ref3$far;
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["ortho"](this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "orthographic",
    value: function orthographic(_ref4) {
      var _ref4$fovy = _ref4.fovy,
          fovy = _ref4$fovy === void 0 ? 45 * Math.PI / 180 : _ref4$fovy,
          _ref4$aspect = _ref4.aspect,
          aspect = _ref4$aspect === void 0 ? 1 : _ref4$aspect,
          _ref4$focalDistance = _ref4.focalDistance,
          focalDistance = _ref4$focalDistance === void 0 ? 1 : _ref4$focalDistance,
          _ref4$near = _ref4.near,
          near = _ref4$near === void 0 ? 0.1 : _ref4$near,
          _ref4$far = _ref4.far,
          far = _ref4$far === void 0 ? 500 : _ref4$far;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      var halfY = fovy / 2;
      var top = focalDistance * Math.tan(halfY);
      var right = top * aspect;
      return new Matrix4().ortho({
        left: -right,
        right: right,
        bottom: -top,
        top: top,
        near: near,
        far: far
      });
    }
  }, {
    key: "perspective",
    value: function perspective() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fovy = _ref5.fovy,
          _ref5$fov = _ref5.fov,
          fov = _ref5$fov === void 0 ? 45 * Math.PI / 180 : _ref5$fov,
          _ref5$aspect = _ref5.aspect,
          aspect = _ref5$aspect === void 0 ? 1 : _ref5$aspect,
          _ref5$near = _ref5.near,
          near = _ref5$near === void 0 ? 0.1 : _ref5$near,
          _ref5$far = _ref5.far,
          far = _ref5$far === void 0 ? 500 : _ref5$far;

      fovy = fovy || fov;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["perspective"](this, fovy, aspect, near, far);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose() {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["transpose"](this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["invert"](this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["multiply"](this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["multiply"](this, this, a);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(radians) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotateX"](this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(radians) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotateY"](this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(radians) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotateZ"](this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateXYZ",
    value: function rotateXYZ(_ref6) {
      var _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 3),
          rx = _ref7[0],
          ry = _ref7[1],
          rz = _ref7[2];

      return this.rotateX(rx).rotateY(ry).rotateZ(rz);
    }
  }, {
    key: "rotateAxis",
    value: function rotateAxis(radians, axis) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotate"](this, this, radians, axis);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      if (Array.isArray(factor)) {
        gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["scale"](this, this, factor);
      } else {
        gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["scale"](this, this, [factor, factor, factor]);
      }

      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["translate"](this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new _vector2__WEBPACK_IMPORTED_MODULE_10__["default"]();
      gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_14__["transformMat4"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new _vector3__WEBPACK_IMPORTED_MODULE_11__["default"]();
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_15__["transformMat4"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 3);
      return out;
    }
  }, {
    key: "transformVector4",
    value: function transformVector4(vector, out) {
      out = out || new _vector4__WEBPACK_IMPORTED_MODULE_12__["default"]();
      gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 4);
      return out.check();
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        case 4:
          return this.transformVector4(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "transformDirection",
    value: function transformDirection(vector, out) {
      return this._transformVector(vector, out, 0);
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(vector, out) {
      return this._transformVector(vector, out, 1);
    }
  }, {
    key: "_transformVector",
    value: function _transformVector(vector, out, w) {
      switch (vector.length) {
        case 2:
          out = out || new _vector2__WEBPACK_IMPORTED_MODULE_10__["default"]();
          gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, [vector[0], vector[1], 0, w], this);
          out.length = 2;
          Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 2);
          break;

        case 3:
          out = out || new _vector3__WEBPACK_IMPORTED_MODULE_11__["default"]();
          gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, [vector[0], vector[1], vector[2], w], this);
          out.length = 3;
          Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 3);
          break;

        case 4:
          if (Boolean(w) !== Boolean(vector[3])) {
            throw new Error('math.gl: Matrix4.transformPoint - invalid vector');
          }

          out = out || new _vector4__WEBPACK_IMPORTED_MODULE_12__["default"]();
          gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, vector, this);
          Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 4);
          break;

        default:
          throw new Error('Illegal vector');
      }

      return out;
    }
  }, {
    key: "makeRotationX",
    value: function makeRotationX(radians) {
      return this.identity().rotateX(radians);
    }
  }, {
    key: "makeTranslation",
    value: function makeTranslation(x, y, z) {
      return this.identity().translate([x, y, z]);
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 16;
    }
  }]);

  return Matrix4;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_7__["default"]);


//# sourceMappingURL=matrix4.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/pose.js":
/*!*************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/pose.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pose; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix4 */ "../../node_modules/math.gl/dist/esm/matrix4.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./euler */ "../../node_modules/math.gl/dist/esm/euler.js");






var Pose = function () {
  function Pose(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === void 0 ? 0 : _ref$z,
        _ref$roll = _ref.roll,
        roll = _ref$roll === void 0 ? 0 : _ref$roll,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$yaw = _ref.yaw,
        yaw = _ref$yaw === void 0 ? 0 : _ref$yaw,
        position = _ref.position,
        orientation = _ref.orientation;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pose);

    if (Array.isArray(position) && position.length === 3) {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"](position);
    } else {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, z);
    }

    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_4__["default"](orientation, orientation[3]);
    } else {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_4__["default"](roll, pitch, yaw, _euler__WEBPACK_IMPORTED_MODULE_4__["default"].RollPitchYaw);
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pose, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return this.orientation;
    }
  }, {
    key: "equals",
    value: function equals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
    }
  }, {
    key: "getTransformationMatrix",
    value: function getTransformationMatrix() {
      var sr = Math.sin(this.roll);
      var sp = Math.sin(this.pitch);
      var sw = Math.sin(this.yaw);
      var cr = Math.cos(this.roll);
      var cp = Math.cos(this.pitch);
      var cw = Math.cos(this.yaw);
      var matrix = new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
      return matrix;
    }
  }, {
    key: "getTransformationMatrixFromPose",
    value: function getTransformationMatrixFromPose(pose) {
      return new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
    }
  }, {
    key: "getTransformationMatrixToPose",
    value: function getTransformationMatrixToPose(pose) {
      return new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
    }
  }, {
    key: "x",
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      return this.position.x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      return this.position.y = value;
    }
  }, {
    key: "z",
    get: function get() {
      return this.position.z;
    },
    set: function set(value) {
      return this.position.z = value;
    }
  }, {
    key: "roll",
    get: function get() {
      return this.orientation.roll;
    },
    set: function set(value) {
      return this.orientation.roll = value;
    }
  }, {
    key: "pitch",
    get: function get() {
      return this.orientation.pitch;
    },
    set: function set(value) {
      return this.orientation.pitch = value;
    }
  }, {
    key: "yaw",
    get: function get() {
      return this.orientation.yaw;
    },
    set: function set(value) {
      return this.orientation.yaw = value;
    }
  }]);

  return Pose;
}();


//# sourceMappingURL=pose.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/quaternion.js":
/*!*******************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/quaternion.js ***!
  \*******************************************************************************/
/*! exports provided: validateQuaternion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateQuaternion", function() { return validateQuaternion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quaternion; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix/quat */ "../../node_modules/gl-matrix/esm/quat.js");








var IDENTITY_QUATERNION = [0, 0, 0, 1];
function validateQuaternion(q) {
  return q.length === 4 && Number.isFinite(q[0]) && Number.isFinite(q[1]) && Number.isFinite(q[2]) && Number.isFinite(q[3]);
}

var Quaternion = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Quaternion, _MathArray);

  function Quaternion() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Quaternion);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Quaternion).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Quaternion, [{
    key: "fromMatrix3",
    value: function fromMatrix3(m) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["fromMat3"](this, m);
      return this.check();
    }
  }, {
    key: "fromValues",
    value: function fromValues(x, y, z, w) {
      return this.set(x, y, z, w);
    }
  }, {
    key: "identity",
    value: function identity() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["identity"](this);
      return this.check();
    }
  }, {
    key: "length",
    value: function length() {
      return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["length"](this);
    }
  }, {
    key: "squaredLength",
    value: function squaredLength(a) {
      return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["squaredLength"](this);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.dot only takes one argument');
      }

      return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["dot"](this, a);
    }
  }, {
    key: "rotationTo",
    value: function rotationTo(vectorA, vectorB) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotationTo"](this, vectorA, vectorB);
      return this.check();
    }
  }, {
    key: "add",
    value: function add(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.add only takes one argument');
      }

      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["add"](this, a);
      return this.check();
    }
  }, {
    key: "calculateW",
    value: function calculateW() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["calculateW"](this, this);
      return this.check();
    }
  }, {
    key: "conjugate",
    value: function conjugate() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["conjugate"](this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["invert"](this, this);
      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["lerp"](this, a, b, t);
      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.multiply only takes one argument');
      }

      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, a);
      return this.check();
    }
  }, {
    key: "normalize",
    value: function normalize() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["normalize"](this, this);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotateX"](this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotateY"](this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotateZ"](this, this, rad);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(b) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, b);
      return this.check();
    }
  }, {
    key: "set",
    value: function set(i, j, k, l) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["set"](this, i, j, k, l);
      return this.check();
    }
  }, {
    key: "setAxisAngle",
    value: function setAxisAngle(axis, rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["setAxisAngle"](this, axis, rad);
      return this.check();
    }
  }, {
    key: "slerp",
    value: function slerp(_ref) {
      var _ref$start = _ref.start,
          start = _ref$start === void 0 ? IDENTITY_QUATERNION : _ref$start,
          target = _ref.target,
          ratio = _ref.ratio;
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["slerp"](this, start, target, ratio);
      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Quaternion;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=quaternion.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/spherical-coordinates.js":
/*!******************************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/spherical-coordinates.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphericalCoordinates; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");







var EPSILON = 0.000001;
var EARTH_RADIUS_METERS = 6.371e6;

var SphericalCoordinates = function () {
  function SphericalCoordinates() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        phi = _ref.phi,
        theta = _ref.theta,
        radius = _ref.radius,
        bearing = _ref.bearing,
        pitch = _ref.pitch,
        altitude = _ref.altitude,
        _ref$radiusScale = _ref.radiusScale,
        radiusScale = _ref$radiusScale === void 0 ? EARTH_RADIUS_METERS : _ref$radiusScale;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SphericalCoordinates);

    if (arguments.length === 0) {
      this.phi = 0;
      this.theta = 0;
      this.radius = 1;
    } else if (Number.isFinite(phi) || Number.isFinite(theta)) {
      this.phi = phi || 0;
      this.theta = theta || 0;
    } else if (Number.isFinite(bearing) || Number.isFinite(pitch)) {
      this.bearing = bearing || 0;
      this.pitch = pitch || 0;
    }

    this.radius = radius || 1;
    this.radiusScale = radiusScale || 1;
    this.check();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SphericalCoordinates, [{
    key: "toString",
    value: function toString() {
      return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_3__["config"]);
    }
  }, {
    key: "formatString",
    value: function formatString(_ref2) {
      var printTypes = _ref2.printTypes,
          printDegrees = _ref2.printDegrees;
      var f = _lib_common__WEBPACK_IMPORTED_MODULE_3__["formatValue"];
      return "".concat(printTypes ? 'Spherical' : '', "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["equals"])(this.radius, other.radius) && Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["equals"])(this.theta, other.theta) && Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["equals"])(this.phi, other.phi);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(other) {
      return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
    }
  }, {
    key: "set",
    value: function set(radius, phi, theta) {
      this.radius = radius;
      this.phi = phi;
      this.theta = theta;
      return this.check();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function copy(other) {
      this.radius = other.radius;
      this.phi = other.phi;
      this.theta = other.theta;
      return this.check();
    }
  }, {
    key: "fromLngLatZ",
    value: function fromLngLatZ(_ref3) {
      var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 3),
          lng = _ref4[0],
          lat = _ref4[1],
          z = _ref4[2];

      this.radius = 1 + z / this.radiusScale;
      this.phi = Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(lat);
      this.theta = Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(lng);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v) {
      this.radius = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__["length"](v);

      if (this.radius === 0) {
        this.theta = 0;
        this.phi = 0;
      } else {
        this.theta = Math.atan2(v[0], v[1]);
        this.phi = Math.acos(Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["clamp"])(v[2] / this.radius, -1, 1));
      }

      return this.check();
    }
  }, {
    key: "toVector3",
    value: function toVector3() {
      return new _vector3__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0, this.radius).rotateX({
        radians: this.theta
      }).rotateZ({
        radians: this.phi
      });
    }
  }, {
    key: "makeSafe",
    value: function makeSafe() {
      this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
    }
  }, {
    key: "check",
    value: function check() {
      if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
        throw new Error('SphericalCoordinates: some fields set to invalid numbers');
      }

      return this;
    }
  }, {
    key: "bearing",
    get: function get() {
      return 180 - Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.phi);
    },
    set: function set(v) {
      this.phi = Math.PI - Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(v);
    }
  }, {
    key: "pitch",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.theta);
    },
    set: function set(v) {
      this.theta = Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(v);
    }
  }, {
    key: "longitude",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.phi);
    }
  }, {
    key: "latitude",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.theta);
    }
  }, {
    key: "lng",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.phi);
    }
  }, {
    key: "lat",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.theta);
    }
  }, {
    key: "z",
    get: function get() {
      return (this.radius - 1) * this.radiusScale;
    }
  }]);

  return SphericalCoordinates;
}();


//# sourceMappingURL=spherical-coordinates.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/vector2.js":
/*!****************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/vector2.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vector */ "../../node_modules/math.gl/dist/esm/lib/vector.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");








var Vector2 = function (_Vector) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector2, _Vector);

  function Vector2() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector2);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector2).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector2, [{
    key: "cross",
    value: function cross(vector) {
      gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_6__["cross"](this, this, vector);
      return this.check();
    }
  }, {
    key: "horizontalAngle",
    value: function horizontalAngle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "verticalAngle",
    value: function verticalAngle() {
      return Math.atan2(this.x, this.y);
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 2;
    }
  }]);

  return Vector2;
}(_lib_vector__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector2.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/vector3.js":
/*!****************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/vector3.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector3; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vector */ "../../node_modules/math.gl/dist/esm/lib/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");








var ORIGIN = [0, 0, 0];

var Vector3 = function (_Vector) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector3, _Vector);

  function Vector3() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector3);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector3).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector3, [{
    key: "angle",
    value: function angle(vector) {
      return gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["angle"](this, vector);
    }
  }, {
    key: "cross",
    value: function cross(vector) {
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["cross"](this, this, vector);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(_ref) {
      var radians = _ref.radians,
          _ref$origin = _ref.origin,
          origin = _ref$origin === void 0 ? ORIGIN : _ref$origin;
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["rotateX"](this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(_ref2) {
      var radians = _ref2.radians,
          _ref2$origin = _ref2.origin,
          origin = _ref2$origin === void 0 ? ORIGIN : _ref2$origin;
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["rotateY"](this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(_ref3) {
      var radians = _ref3.radians,
          _ref3$origin = _ref3.origin,
          origin = _ref3$origin === void 0 ? ORIGIN : _ref3$origin;
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["rotateZ"](this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 3;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Vector3;
}(_lib_vector__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector3.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/vector4.js":
/*!****************************************************************************!*\
  !*** /Users/tsherif/code/luma.gl/node_modules/math.gl/dist/esm/vector4.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector4; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vector */ "../../node_modules/math.gl/dist/esm/lib/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");








var Vector4 = function (_Vector) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector4, _Vector);

  function Vector4() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector4);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector4).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector4, [{
    key: "applyMatrix4",
    value: function applyMatrix4(m) {
      m.transformVector(this, this);
      return this;
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Vector4;
}(_lib_vector__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector4.js.map

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
/*! exports provided: registerShaderModules, setDefaultShaderModules, assembleShaders, combineInjects, normalizeShaderModule, getQualifierDetails, getPassthroughFS, typeToChannelSuffix, typeToChannelCount, convertToVec4, fp32, fp64, project, lights, dirlight, picking, diffuse, gouraudlighting, phonglighting, pbr, _transform, MODULAR_SHADERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULAR_SHADERS", function() { return MODULAR_SHADERS; });
/* harmony import */ var _shaders_modular_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/modular-vertex.glsl */ "./src/shaders/modular-vertex.glsl.js");
/* harmony import */ var _shaders_modular_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/modular-fragment.glsl */ "./src/shaders/modular-fragment.glsl.js");
/* harmony import */ var _lib_resolve_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/resolve-modules */ "./src/lib/resolve-modules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerShaderModules", function() { return _lib_resolve_modules__WEBPACK_IMPORTED_MODULE_2__["registerShaderModules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultShaderModules", function() { return _lib_resolve_modules__WEBPACK_IMPORTED_MODULE_2__["setDefaultShaderModules"]; });

/* harmony import */ var _lib_assemble_shaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/assemble-shaders */ "./src/lib/assemble-shaders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assembleShaders", function() { return _lib_assemble_shaders__WEBPACK_IMPORTED_MODULE_3__["assembleShaders"]; });

/* harmony import */ var _lib_inject_shader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/inject-shader */ "./src/lib/inject-shader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineInjects", function() { return _lib_inject_shader__WEBPACK_IMPORTED_MODULE_4__["combineInjects"]; });

/* harmony import */ var _lib_filters_normalize_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/filters/normalize-module */ "./src/lib/filters/normalize-module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeShaderModule", function() { return _lib_filters_normalize_module__WEBPACK_IMPORTED_MODULE_5__["normalizeShaderModule"]; });

/* harmony import */ var _utils_shader_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/shader-utils */ "./src/utils/shader-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQualifierDetails", function() { return _utils_shader_utils__WEBPACK_IMPORTED_MODULE_6__["getQualifierDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPassthroughFS", function() { return _utils_shader_utils__WEBPACK_IMPORTED_MODULE_6__["getPassthroughFS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeToChannelSuffix", function() { return _utils_shader_utils__WEBPACK_IMPORTED_MODULE_6__["typeToChannelSuffix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeToChannelCount", function() { return _utils_shader_utils__WEBPACK_IMPORTED_MODULE_6__["typeToChannelCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToVec4", function() { return _utils_shader_utils__WEBPACK_IMPORTED_MODULE_6__["convertToVec4"]; });

/* harmony import */ var _modules_fp32_fp32__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fp32/fp32 */ "./src/modules/fp32/fp32.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fp32", function() { return _modules_fp32_fp32__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _modules_fp64_fp64__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fp64/fp64 */ "./src/modules/fp64/fp64.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fp64", function() { return _modules_fp64_fp64__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _modules_project_project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/project/project */ "./src/modules/project/project.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "project", function() { return _modules_project_project__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _modules_lights_lights__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/lights/lights */ "./src/modules/lights/lights.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lights", function() { return _modules_lights_lights__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _modules_dirlight_dirlight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/dirlight/dirlight */ "./src/modules/dirlight/dirlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirlight", function() { return _modules_dirlight_dirlight__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _modules_picking_picking__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/picking/picking */ "./src/modules/picking/picking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "picking", function() { return _modules_picking_picking__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _modules_diffuse_diffuse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/diffuse/diffuse */ "./src/modules/diffuse/diffuse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffuse", function() { return _modules_diffuse_diffuse__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _modules_phong_lighting_phong_lighting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/phong-lighting/phong-lighting */ "./src/modules/phong-lighting/phong-lighting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gouraudlighting", function() { return _modules_phong_lighting_phong_lighting__WEBPACK_IMPORTED_MODULE_14__["gouraudlighting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "phonglighting", function() { return _modules_phong_lighting_phong_lighting__WEBPACK_IMPORTED_MODULE_14__["phonglighting"]; });

/* harmony import */ var _modules_pbr_pbr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/pbr/pbr */ "./src/modules/pbr/pbr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pbr", function() { return _modules_pbr_pbr__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _modules_transform_transform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/transform/transform */ "./src/modules/transform/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_transform", function() { return _modules_transform_transform__WEBPACK_IMPORTED_MODULE_16__["default"]; });

// shadertools exports

// DEFAULT SHADERS
// A set of base shaders that leverage the shader module system,
// dynamically enabling features depending on which modules are included



// DOCUMENTED APIS



// HELPERS



// UTILS


// SHADER MODULES










// experimental


const MODULAR_SHADERS = {
  vs: _shaders_modular_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
  fs: _shaders_modular_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
  defaultUniforms: {}
};


/***/ }),

/***/ "./src/lib/assemble-shaders.js":
/*!*************************************!*\
  !*** ./src/lib/assemble-shaders.js ***!
  \*************************************/
/*! exports provided: assembleShaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assembleShaders", function() { return assembleShaders; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/lib/constants.js");
/* harmony import */ var _resolve_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-modules */ "./src/lib/resolve-modules.js");
/* harmony import */ var _platform_defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-defines */ "./src/lib/platform-defines.js");
/* harmony import */ var _inject_shader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inject-shader */ "./src/lib/inject-shader.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






const SHADER_TYPE = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["VERTEX_SHADER"]]: 'vertex',
  [_constants__WEBPACK_IMPORTED_MODULE_0__["FRAGMENT_SHADER"]]: 'fragment'
};

// Precision prologue to inject before functions are injected in shader
// TODO - extract any existing prologue in the fragment source and move it up...
const FRAGMENT_SHADER_PROLOGUE = `\
precision highp float;

`;

// Inject a list of modules
function assembleShaders(gl, opts = {}) {
  const {vs, fs} = opts;
  const modules = Object(_resolve_modules__WEBPACK_IMPORTED_MODULE_1__["resolveModules"])(opts.modules || []);
  return {
    gl,
    vs: assembleShader(gl, Object.assign({}, opts, {source: vs, type: _constants__WEBPACK_IMPORTED_MODULE_0__["VERTEX_SHADER"], modules})),
    fs: assembleShader(gl, Object.assign({}, opts, {source: fs, type: _constants__WEBPACK_IMPORTED_MODULE_0__["FRAGMENT_SHADER"], modules})),
    getUniforms: assembleGetUniforms(modules),
    modules: assembleModuleMap(modules)
  };
}

// Pulls together complete source code for either a vertex or a fragment shader
// adding prologues, requested module chunks, and any final injections.
function assembleShader(
  gl,
  {id, source, type, modules = [], defines = {}, inject = {}, prologue = true, log}
) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(typeof source === 'string', 'shader source must be a string');

  const isVertex = type === _constants__WEBPACK_IMPORTED_MODULE_0__["VERTEX_SHADER"];

  const sourceLines = source.split('\n');
  let glslVersion = 100;
  let versionLine = '';
  let coreSource = source;
  // Extract any version directive string from source.
  // TODO : keep all pre-processor statements at the begining of the shader.
  if (sourceLines[0].indexOf('#version ') === 0) {
    glslVersion = 300; // TODO - regexp that matches atual version number
    versionLine = sourceLines[0];
    coreSource = sourceLines.slice(1).join('\n');
  }

  // Combine Module and Application Defines
  const allDefines = {};
  modules.forEach(module => {
    Object.assign(allDefines, module.getDefines());
  });
  Object.assign(allDefines, defines);

  // Add platform defines (use these to work around platform-specific bugs and limitations)
  // Add common defines (GLSL version compatibility, feature detection)
  // Add precision declaration for fragment shaders
  let assembledSource = prologue
    ? `\
${versionLine}
${getShaderName({id, source, type})}
${getShaderType({type})}
${Object(_platform_defines__WEBPACK_IMPORTED_MODULE_2__["getPlatformShaderDefines"])(gl)}
${Object(_platform_defines__WEBPACK_IMPORTED_MODULE_2__["getVersionDefines"])(gl, glslVersion, !isVertex)}
${getApplicationDefines(allDefines)}
${isVertex ? '' : FRAGMENT_SHADER_PROLOGUE}
`
    : `${versionLine}
`;

  // Add source of dependent modules in resolved order
  let injectStandardStubs = false;
  for (const module of modules) {
    switch (module.name) {
      case 'inject':
        injectStandardStubs = true;
        break;

      default:
        module.checkDeprecations(coreSource, log);
        const moduleSource = module.getModuleSource(type, glslVersion);
        // Add the module source, and a #define that declares it presence
        assembledSource += moduleSource;
    }
  }

  // Add the version directive and actual source of this shader
  assembledSource += coreSource;

  // Apply any requested shader injections
  assembledSource = Object(_inject_shader__WEBPACK_IMPORTED_MODULE_3__["default"])(assembledSource, type, inject, injectStandardStubs);

  return assembledSource;
}

// Returns a combined `getUniforms` covering the options for all the modules,
// the created function will pass on options to the inidividual `getUniforms`
// function of each shader module and combine the results into one object that
// can be passed to setUniforms.
function assembleGetUniforms(modules) {
  return function getUniforms(opts) {
    const uniforms = {};
    for (const module of modules) {
      // `modules` is already sorted by dependency level. This guarantees that
      // modules have access to the uniforms that are generated by their dependencies.
      const moduleUniforms = module.getUniforms(opts, uniforms);
      Object.assign(uniforms, moduleUniforms);
    }
    return uniforms;
  };
}

// Returns a map with module names as keys, resolving to their module definitions
// The presence of a key indicates that the module is available in this program,
// whether directly included, or through a dependency of some other module
function assembleModuleMap(modules) {
  const result = {};
  for (const moduleName of modules) {
    const shaderModule = Object(_resolve_modules__WEBPACK_IMPORTED_MODULE_1__["getShaderModule"])(moduleName);
    result[moduleName] = shaderModule;
  }
  return result;
}

function getShaderType({type}) {
  return `
#define SHADER_TYPE_${SHADER_TYPE[type].toUpperCase()}
`;
}

// Generate "glslify-compatible" SHADER_NAME defines
// These are understood by the GLSL error parsing function
// If id is provided and no SHADER_NAME constant is present in source, create one
function getShaderName({id, source, type}) {
  const injectShaderName = id && typeof id === 'string' && source.indexOf('SHADER_NAME') === -1;
  return injectShaderName
    ? `
#define SHADER_NAME ${id}_${SHADER_TYPE[type]}

`
    : '';
}

// Generates application defines from an object
function getApplicationDefines(defines = {}) {
  let count = 0;
  let sourceText = '';
  for (const define in defines) {
    if (count === 0) {
      sourceText += '\n// APPLICATION DEFINES\n';
    }
    count++;

    const value = defines[define];
    if (value || Number.isFinite(value)) {
      sourceText += `#define ${define.toUpperCase()} ${defines[define]}\n`;
    }
  }
  if (count === 0) {
    sourceText += '\n';
  }
  return sourceText;
}


/***/ }),

/***/ "./src/lib/constants.js":
/*!******************************!*\
  !*** ./src/lib/constants.js ***!
  \******************************/
/*! exports provided: VERTEX_SHADER, FRAGMENT_SHADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTEX_SHADER", function() { return VERTEX_SHADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAGMENT_SHADER", function() { return FRAGMENT_SHADER; });
const VERTEX_SHADER = 'vs';
const FRAGMENT_SHADER = 'fs';


/***/ }),

/***/ "./src/lib/filters/normalize-module.js":
/*!*********************************************!*\
  !*** ./src/lib/filters/normalize-module.js ***!
  \*********************************************/
/*! exports provided: normalizeShaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeShaderModule", function() { return normalizeShaderModule; });
/* harmony import */ var _prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prop-types */ "./src/lib/filters/prop-types.js");


function defaultGetUniforms(module, props) {
  const uniforms = {};

  if (props === undefined) {
    for (const key in module.uniforms) {
      uniforms[key] = module.uniforms[key].value;
    }
    return uniforms;
  }

  for (const key in props) {
    // TODO validate, clamp etc
    uniforms[key] = props[key];
  }

  return uniforms;
}

// Note: modifies and returns the same module
function normalizeShaderModule(module) {
  if (!module.normalized) {
    module.normalized = true;

    // Normalize uniforms
    if (module.uniforms) {
      // ocular linter gets confused
      // eslint-disable-next-line
      const {propTypes} = Object(_prop_types__WEBPACK_IMPORTED_MODULE_0__["parsePropTypes"])(module.uniforms);
      module.uniforms = propTypes;
    }

    // Build a getUniforms from the uniforms array
    if (module.uniforms && !module.getUniforms) {
      module.getUniforms = defaultGetUniforms.bind(null, module);
    }
  }

  return module;
}


/***/ }),

/***/ "./src/lib/filters/prop-types.js":
/*!***************************************!*\
  !*** ./src/lib/filters/prop-types.js ***!
  \***************************************/
/*! exports provided: parsePropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePropTypes", function() { return parsePropTypes; });
// // import assert from '../../utils'; // TODO

const TYPE_DEFINITIONS = {
  boolean: {
    validate(value, propType) {
      return true;
    }
  },
  number: {
    validateType(value, propType) {
      return (
        'value' in propType &&
        (!('max' in propType) || Number.isFinite(propType.max)) &&
        (!('min' in propType) || Number.isFinite(propType.min))
      );
    },
    validate(value, propType) {
      return (
        Number.isFinite(value) &&
        (!('max' in propType) || value <= propType.max) &&
        (!('min' in propType) || value >= propType.min)
      );
    }
  }
};

function parsePropTypes(propDefs) {
  const propTypes = {};
  const defaultProps = {};
  for (const [propName, propDef] of Object.entries(propDefs)) {
    const propType = parsePropType(propName, propDef);
    propTypes[propName] = propType;
    defaultProps[propName] = propType.value;
  }
  return {propTypes, defaultProps};
}

// Parses one property definition entry. Either contains:
// * a valid prop type object ({type, ...})
// * or just a default value, in which case type and name inference is used
function parsePropType(name, propDef) {
  switch (getTypeOf(propDef)) {
    case 'object':
      propDef = normalizePropType(name, propDef);
      return parsePropDefinition(propDef);

    case 'array':
      return guessArrayType(name, propDef);

    case 'boolean':
      return {name, type: 'boolean', value: propDef};

    case 'number':
      return guessNumberType(name, propDef);

    case 'function':
      return {name, type: 'function', value: propDef};
    // return guessFunctionType(name, propDef);

    default:
      return {name, type: 'unknown', value: propDef};
  }
}

function guessArrayType(name, array) {
  if (/color/i.test(name) && (array.length === 3 || array.length === 4)) {
    return {name, type: 'color', value: array};
  }
  return {name, type: 'array', value: array};
}

function normalizePropType(name, propDef) {
  if (!('type' in propDef)) {
    if (!('value' in propDef)) {
      // If no type and value this object is likely the value
      return {name, type: 'object', value: propDef};
    }
    return Object.assign({name, type: getTypeOf(propDef.value)}, propDef);
  }
  return Object.assign({name}, propDef);
}

function parsePropDefinition(propDef) {
  const {type} = propDef;
  const typeDefinition = TYPE_DEFINITIONS[type] || {};
  const {typeValidator} = typeDefinition;
  if (typeValidator) {
    // assert(typeValidator(propDef), 'Illegal prop type');
  }

  return propDef;
}

function guessNumberType(name, value) {
  const isKnownProp =
    /radius|scale|width|height|pixel|size|miter/i.test(name) && /^((?!scale).)*$/.test(name);
  const max = isKnownProp ? 100 : 1;
  const min = 0;
  return {
    name,
    type: 'number',
    max: Math.max(value, max),
    min: Math.min(value, min),
    value
  };
}

// improved version of javascript typeof that can distinguish arrays and null values
function getTypeOf(value) {
  if (Array.isArray(value) || ArrayBuffer.isView(value)) {
    return 'array';
  }
  if (value === null) {
    return 'null';
  }
  return typeof value;
}


/***/ }),

/***/ "./src/lib/inject-shader.js":
/*!**********************************!*\
  !*** ./src/lib/inject-shader.js ***!
  \**********************************/
/*! exports provided: default, combineInjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineInjects", function() { return combineInjects; });
/* harmony import */ var _modules_module_injectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/module-injectors */ "./src/modules/module-injectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/lib/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




// TODO - experimental
const MODULE_INJECTORS = {
  [_constants__WEBPACK_IMPORTED_MODULE_1__["VERTEX_SHADER"]]: _modules_module_injectors__WEBPACK_IMPORTED_MODULE_0__["MODULE_INJECTORS_VS"],
  [_constants__WEBPACK_IMPORTED_MODULE_1__["FRAGMENT_SHADER"]]: _modules_module_injectors__WEBPACK_IMPORTED_MODULE_0__["MODULE_INJECTORS_FS"]
};

const REGEX_START_OF_MAIN = /void main\s*\([^)]*\)\s*\{\n?/; // Beginning of main
const REGEX_END_OF_MAIN = /}\n?[^{}]*$/; // End of main, assumes main is last function

// A minimal shader injection/templating system.
// RFC: https://github.com/uber/luma.gl/blob/master/dev-docs/RFCs/v6.0/shader-injection-rfc.md
/* eslint-disable complexity */
function injectShader(source, type, inject, injectStandardStubs) {
  const isVertex = type === _constants__WEBPACK_IMPORTED_MODULE_1__["VERTEX_SHADER"];

  for (const key in inject) {
    const fragment = inject[key];
    switch (key) {
      // declarations are injected before the main function
      case 'vs:#decl':
        if (isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => `${fragment}\n${match}`);
        }
        break;
      // main code is injected at the end of main function
      case 'vs:#main-start':
        if (isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => match + fragment);
        }
        break;
      case 'vs:#main-end':
        if (isVertex) {
          source = source.replace(REGEX_END_OF_MAIN, match => fragment + match);
        }
        break;
      case 'fs:#decl':
        if (!isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => `${fragment}\n${match}`);
        }
        break;
      case 'fs:#main-start':
        if (!isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => match + fragment);
        }
        break;
      case 'fs:#main-end':
        if (!isVertex) {
          source = source.replace(REGEX_END_OF_MAIN, match => fragment + match);
        }
        break;
      default:
        // inject code after key, leaving key in place
        source = source.replace(key, match => match + fragment);
    }
  }

  // Finally, if requested, insert an automatic module injector chunk
  if (injectStandardStubs) {
    source = source.replace('}s*$', match => match + MODULE_INJECTORS[type]);
  }

  return source;
}
/* eslint-enable complexity */

// Takes an array of inject objects and combines them into one
function combineInjects(injects) {
  const result = {};
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(Array.isArray(injects) && injects.length > 1);
  injects.forEach(inject => {
    for (const key in inject) {
      result[key] = result[key] ? `${result[key]}\n${inject[key]}` : inject[key];
    }
  });
  return result;
}


/***/ }),

/***/ "./src/lib/platform-defines.js":
/*!*************************************!*\
  !*** ./src/lib/platform-defines.js ***!
  \*************************************/
/*! exports provided: getPlatformShaderDefines, getVersionDefines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatformShaderDefines", function() { return getPlatformShaderDefines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVersionDefines", function() { return getVersionDefines; });
/* harmony import */ var _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/webgl-info */ "./src/utils/webgl-info.js");


function getPlatformShaderDefines(gl) {
  const debugInfo = Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["getContextInfo"])(gl);

  switch (debugInfo.gpuVendor.toLowerCase()) {
    case 'nvidia':
      return `\
#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;

    case 'intel':
      return `\
#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;

    case 'amd':
      // AMD Does not eliminate fp64 code
      return `\
#define AMD_GPU
`;

    default:
      // We don't know what GPU it is, could be that the GPU driver or
      // browser is not implementing UNMASKED_RENDERER constant and not
      // reporting a correct name
      return `\
#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;
  }
}

function getVersionDefines(gl, glslVersion, isFragment) {
  // Add shadertools defines to let shaders portably v1/v3 check for features
  let versionDefines = `\
#if (__VERSION__ > 120)

# define FRAG_DEPTH
# define DERIVATIVES
# define DRAW_BUFFERS
# define TEXTURE_LOD

#endif // __VERSION
`;

  if (Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["hasFeatures"])(gl, _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].GLSL_FRAG_DEPTH)) {
    versionDefines += `\
// FRAG_DEPTH => gl_FragDepth is available
#ifdef GL_EXT_frag_depth
#extension GL_EXT_frag_depth : enable
# define FRAG_DEPTH
# define gl_FragDepth gl_FragDepthEXT
#endif
`;
  }
  if (
    Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["hasFeatures"])(gl, _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].GLSL_DERIVATIVES) &&
    Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["canCompileGLGSExtension"])(gl, _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].GLSL_DERIVATIVES)
  ) {
    versionDefines += `\
// DERIVATIVES => dxdF, dxdY and fwidth are available
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
# define DERIVATIVES
#endif
`;
  }
  if (
    Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["hasFeatures"])(gl, _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].GLSL_FRAG_DATA) &&
    Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["canCompileGLGSExtension"])(gl, _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].GLSL_FRAG_DATA, {behavior: 'require'})
  ) {
    versionDefines += `\
// DRAW_BUFFERS => gl_FragData[] is available
#ifdef GL_EXT_draw_buffers
#extension GL_EXT_draw_buffers : require
#define DRAW_BUFFERS
#endif
`;
  }
  if (Object(_utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["hasFeatures"])(gl, _utils_webgl_info__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].GLSL_TEXTURE_LOD)) {
    versionDefines += `\
// TEXTURE_LOD => texture2DLod etc are available
#ifdef GL_EXT_shader_texture_lod
#extension GL_EXT_shader_texture_lod : enable
# define TEXTURE_LOD
#define texture2DLod texture2DLodEXT
#define texture2DProjLod texture2DProjLodEXT
#define texture2DProjLod texture2DProjLodEXT
#define textureCubeLod textureCubeLodEXT
#define texture2DGrad texture2DGradEXT
#define texture2DProjGrad texture2DProjGradEXT
#define texture2DProjGrad texture2DProjGradEXT
#define textureCubeGrad textureCubeGradEXT
#endif
`;
  }
  return versionDefines;
}


/***/ }),

/***/ "./src/lib/resolve-modules.js":
/*!************************************!*\
  !*** ./src/lib/resolve-modules.js ***!
  \************************************/
/*! exports provided: setDefaultShaderModules, registerShaderModules, resolveModules, getShaderModule, TEST_EXPORTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultShaderModules", function() { return setDefaultShaderModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerShaderModules", function() { return registerShaderModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveModules", function() { return resolveModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShaderModule", function() { return getShaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_EXPORTS", function() { return TEST_EXPORTS; });
/* harmony import */ var _shader_module_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader-module-registry */ "./src/lib/shader-module-registry.js");


const shaderModuleRegistry = new _shader_module_registry__WEBPACK_IMPORTED_MODULE_0__["default"]();

/**
 * Registers an array of default shader modules. These will be concatenated
 * automatically at the end of any shader module list passed to
 * `assembleShaders` (plus `resolveModules` and `getShaderDependencies`)
 * @param {Object[]} modules - Array of shader modules
 */
function setDefaultShaderModules(modules) {
  shaderModuleRegistry.setDefaultShaderModules(modules);
}

/**
 * Registers an array of shader modules
 * @param {Object[]} shaderModuleList - Array of shader modules
 */
function registerShaderModules(
  shaderModuleList,
  {ignoreMultipleRegistrations = false} = {}
) {
  shaderModuleRegistry.registerShaderModules(shaderModuleList, {ignoreMultipleRegistrations});
}

// registers any supplied modules and returns a list of module names
function resolveModules(modules) {
  modules = modules.concat(shaderModuleRegistry.defaultShaderModules);
  modules = shaderModuleRegistry.resolveModules(modules);
  return getShaderDependencies(modules);
}

// Looks up a moduleName among registered modules and returns definition.
// If "inline" module, returns it directly
function getShaderModule(moduleOrName) {
  return shaderModuleRegistry.getShaderModule(moduleOrName);
}

/**
 * Takes a list of shader module names and returns a new list of
 * shader module names that includes all dependencies, sorted so
 * that modules that are dependencies of other modules come first.
 *
 * If the shader glsl code from the returned modules is concatenated
 * in the reverse order, it is guaranteed that all functions be resolved and
 * that all function and variable definitions come before use.
 *
 * @param {String[]} modules - Array of modules (inline modules or module names)
 * @return {String[]} - Array of modules
 */
function getShaderDependencies(modules) {
  const moduleMap = {};
  const moduleDepth = {};
  getDependencyGraph({modules, level: 0, moduleMap, moduleDepth});

  // Return a reverse sort so that dependencies come before the modules that use them
  return Object.keys(moduleDepth)
    .sort((a, b) => moduleDepth[b] - moduleDepth[a])
    .map(name => moduleMap[name]);
}

/**
 * Recursively checks module dpendencies to calculate dependency
 * level of each module.
 *
 * @param {String[]} modules - Array of modules
 * @param {Number} level - Current level
 * @return {result} - Map of module name to its level
 */
// Adds another level of dependencies to the result map
function getDependencyGraph({modules, level, moduleMap, moduleDepth}) {
  if (level >= 5) {
    throw new Error('Possible loop in shader dependency graph');
  }

  // Update level on all current modules
  for (const module of modules) {
    moduleMap[module.name] = module;
    if (moduleDepth[module.name] === undefined || moduleDepth[module.name] < level) {
      moduleDepth[module.name] = level;
    }
  }

  // Recurse
  for (const module of modules) {
    if (module.dependencies) {
      getDependencyGraph({modules: module.dependencies, level: level + 1, moduleMap, moduleDepth});
    }
  }
}

const TEST_EXPORTS = {
  getShaderDependencies,
  getDependencyGraph
};


/***/ }),

/***/ "./src/lib/shader-module-registry.js":
/*!*******************************************!*\
  !*** ./src/lib/shader-module-registry.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShaderModuleRegistry; });
/* harmony import */ var _shader_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader-module */ "./src/lib/shader-module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");



class ShaderModuleRegistry {
  constructor() {
    this.shaderModules = {};
    this.defaultShaderModules = [];
  }

  setDefaultShaderModules(modules) {
    this.defaultShaderModules = this.resolveModules(modules);
  }

  registerShaderModules(shaderModuleList, {ignoreMultipleRegistrations = false} = {}) {
    for (const shaderModule of shaderModuleList) {
      this._registerShaderModule(shaderModule, ignoreMultipleRegistrations);
    }
  }

  getShaderModule(moduleOrName) {
    // Check if "inline" module, return it
    if (moduleOrName instanceof _shader_module__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      return moduleOrName;
    }

    // Check if module descriptor
    if (typeof moduleOrName !== 'string') {
      return this._registerShaderModule(moduleOrName, true);
    }

    // Module name - Look up module
    const module = this.shaderModules[moduleOrName];
    if (!module) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(false, `Unknown shader module ${moduleOrName}`);
    }
    return module;
  }

  // registers any supplied modules, resolves any names into modules
  // returns a list of modules
  resolveModules(modules) {
    return modules.map(moduleOrName => this.getShaderModule(moduleOrName));
  }

  // PRIVATE API

  _registerShaderModule(module, ignoreMultipleRegistrations = false) {
    // Check if "inline" module, return it
    if (module instanceof _shader_module__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      return module;
    }

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(module.name, 'shader module has no name');

    if (!this.shaderModules[module.name] || ignoreMultipleRegistrations) {
      // if ignoreMultipleRegistrations = true, we allow module to be re-registered
      module = new _shader_module__WEBPACK_IMPORTED_MODULE_0__["default"](module);
      module.dependencies = this.resolveModules(module.dependencies);
      this.shaderModules[module.name] = module;
    } else {
      // TODO - instead verify that definition is not changing...
      throw new Error(`shader module ${module.name} already registered`);
    }

    return this.shaderModules[module.name];
  }
}


/***/ }),

/***/ "./src/lib/shader-module.js":
/*!**********************************!*\
  !*** ./src/lib/shader-module.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShaderModule; });
/* harmony import */ var _transpile_shader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpile-shader */ "./src/lib/transpile-shader.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");



const VERTEX_SHADER = 'vs';
const FRAGMENT_SHADER = 'fs';

class ShaderModule {
  constructor({
    name,
    vs,
    fs,
    dependencies = [],
    getUniforms = () => ({}),
    deprecations = [],
    defines = {},
    // DEPRECATED
    vertexShader,
    fragmentShader
  }) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(typeof name === 'string');
    this.name = name;
    this.vs = vs || vertexShader;
    this.fs = fs || fragmentShader;
    this.getModuleUniforms = getUniforms;
    this.dependencies = dependencies;
    this.deprecations = this._parseDeprecationDefinitions(deprecations);
    this.defines = defines;
  }

  // Extracts the source code chunk for the specified shader type from the named shader module
  getModuleSource(type, targetGLSLVersion) {
    let moduleSource;
    switch (type) {
      case VERTEX_SHADER:
        moduleSource = Object(_transpile_shader__WEBPACK_IMPORTED_MODULE_0__["default"])(this.vs || '', targetGLSLVersion, true);
        break;
      case FRAGMENT_SHADER:
        moduleSource = Object(_transpile_shader__WEBPACK_IMPORTED_MODULE_0__["default"])(this.fs || '', targetGLSLVersion, false);
        break;
      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(false);
    }

    if (typeof moduleSource !== 'string') {
      return '';
    }

    return `\
#define MODULE_${this.name.toUpperCase()}
${moduleSource}\
// END MODULE_${this.name}

`;
  }

  getUniforms(opts, uniforms) {
    return this.getModuleUniforms(opts, uniforms);
  }

  getDefines() {
    return this.defines;
  }

  // Warn about deprecated uniforms or functions
  checkDeprecations(shaderSource, log) {
    this.deprecations.forEach(def => {
      if (def.regex.test(shaderSource)) {
        if (def.deprecated && log) {
          log.deprecated(def.old, def.new)();
        } else if (log) {
          log.removed(def.old, def.new)();
        }
      }
    });
  }

  _parseDeprecationDefinitions(deprecations = []) {
    deprecations.forEach(def => {
      switch (def.type) {
        case 'function':
          def.regex = new RegExp(`\\b${def.old}\\(`);
          break;
        default:
          def.regex = new RegExp(`${def.type} ${def.old};`);
      }
    });

    return deprecations;
  }
}


/***/ }),

/***/ "./src/lib/transpile-shader.js":
/*!*************************************!*\
  !*** ./src/lib/transpile-shader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transpileShader; });
// Transpiles shader source code to target GLSL version
// Note: We always run transpiler even if same version e.g. 3.00 => 3.00
// RFC: https://github.com/uber/luma.gl/blob/master/dev-docs/RFCs/v6.0/portable-glsl-300-rfc.md
function transpileShader(source, targetGLSLVersion, isVertex) {
  switch (targetGLSLVersion) {
    case 300:
      return isVertex ? convertVertexShaderTo300(source) : convertFragmentShaderTo300(source);
    case 100:
      return isVertex ? convertVertexShaderTo100(source) : convertFragmentShaderTo100(source);
    default:
      throw new Error(`unknown GLSL version ${targetGLSLVersion}`);
  }
}

function convertVertexShaderTo300(source) {
  return source
    .replace(/attribute\s+/g, 'in ')
    .replace(/varying\s+/g, 'out ')
    .replace(/texture2D\(/g, 'texture(')
    .replace(/textureCube\(+/g, 'texture(')
    .replace(/texture2DLodEXT\(/g, 'textureLod(')
    .replace(/textureCubeLodEXT\(/g, 'textureLod(');
}

function convertFragmentShaderTo300(source) {
  return source
    .replace(/varying\s+/g, 'in ')
    .replace(/texture2D\(/g, 'texture(')
    .replace(/textureCube\(/g, 'texture(')
    .replace(/texture2DLodEXT\(/g, 'textureLod(')
    .replace(/textureCubeLodEXT\(/g, 'textureLod(');

  // Deal with fragColor
  // .replace(/gl_fragColor/g, 'fragColor ');
}

function convertVertexShaderTo100(source) {
  // /gm - treats each line as a string, so that ^ matches after newlines
  return source
    .replace(/^in\s+/gm, 'attribute ')
    .replace(/^out\s+/gm, 'varying ')
    .replace(/texture\(/g, 'texture2D(');
}

function convertFragmentShaderTo100(source) {
  // /gm - treats each line as a string, so that ^ matches after newlines
  return source.replace(/^in\s+/gm, 'varying ').replace(/texture\(/g, 'texture2D(');

  // Deal with fragColor
  // .replace(/^out\s+/g, 'varying ')
}


/***/ }),

/***/ "./src/modules/diffuse/diffuse.js":
/*!****************************************!*\
  !*** ./src/modules/diffuse/diffuse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Minimal texture (diffuse map) support

/* eslint-disable camelcase */
const DEFAULT_MODULE_OPTIONS = {
  diffuseTexture: null,
  diffuseColor: [0.5, 0.5, 0.5, 1]
};

function getUniforms(opts = DEFAULT_MODULE_OPTIONS) {
  const uniforms = {};
  if (opts.diffuseTexture !== undefined) {
    uniforms.diffuse_uHasTexture = Boolean(opts.diffuseTexture);
    uniforms.diffuse_uTexture = opts.diffuseTexture;
  }
  if (opts.diffuseColor !== undefined) {
    uniforms.diffuse_uColor = opts.diffuseColor;
  }
  return uniforms;
}

const vs = `\
out vec2 diffuse_vTexCoord;

/* Set the UV coordinate from attributes */
void diffuse_setTextureCoordinate(vec2 uv) {
  diffuse_vTexCoord = uv;
}
`;

const fs = `\
uniform vec4 diffuse_uColor;
uniform bool diffuse_uHasTexture;
uniform sampler2D diffuse_uTexture;

in vec2 diffuse_vTexCoord;

// Gets diffuse color of material from uniform
// If we have a standard (diffuse) texture, set color to texture
// return (vec4) - rgba
//
vec4 diffuse_getColor() {
  vec2 texCoord = diffuse_vTexCoord;
  return diffuse_uHasTexture ?
    texture2D(diffuse_uTexture, vec2(texCoord.s, texCoord.t)) :
    diffuse_uColor;
}

vec4 diffuse_filterColor(vec4 color) {
  return diffuse_getColor();
}
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'diffuse',
  getUniforms,
  vs,
  fs
});


/***/ }),

/***/ "./src/modules/dirlight/dirlight.js":
/*!******************************************!*\
  !*** ./src/modules/dirlight/dirlight.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/project */ "./src/modules/project/project.js");
// Cheap lighting - single directional light, single dot product, one uniform



/* eslint-disable camelcase */
const DEFAULT_LIGHT_DIRECTION = new Float32Array([1, 1, 2]);

const DEFAULT_MODULE_OPTIONS = {
  lightDirection: DEFAULT_LIGHT_DIRECTION
};

function getUniforms(opts = DEFAULT_MODULE_OPTIONS) {
  const uniforms = {};
  if (opts.lightDirection) {
    uniforms.dirlight_uLightDirection = opts.lightDirection;
  }
  return uniforms;
}

// TODO - reuse normal from geometry module
const vs = null;

const fs = `\
uniform vec3 dirlight_uLightDirection;

/*
 * Returns color attenuated by angle from light source
 */
vec4 dirlight_filterColor(vec4 color) {
  vec3 normal = project_getNormal_World();
  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));
  return vec4(color.rgb * d, color.a);
}
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dirlight',
  vs,
  fs,
  getUniforms,
  dependencies: [_project_project__WEBPACK_IMPORTED_MODULE_0__["default"]]
});


/***/ }),

/***/ "./src/modules/fp32/fp32.js":
/*!**********************************!*\
  !*** ./src/modules/fp32/fp32.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fp32shader = `\
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 0.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 0.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fp32',
  vs: fp32shader,
  fs: null
});


/***/ }),

/***/ "./src/modules/fp64/fp64-arithmetic.glsl.js":
/*!**************************************************!*\
  !*** ./src/modules/fp64/fp64-arithmetic.glsl.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* harmony default export */ __webpack_exports__["default"] = (`\
uniform float ONE;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' from.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  const float SPLIT = 4097.0;
  float t = a * SPLIT;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float a_hi = t * ONE - (t - a);
  float a_lo = a * ONE - a_hi;
#else
  float a_hi = t - (t - a);
  float a_lo = a - a_hi;
#endif
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * ONE;
  float err = b - (sum - a) * ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * ONE - a) * ONE;
  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * ONE - a) * ONE;
  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *
    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +
    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`);


/***/ }),

/***/ "./src/modules/fp64/fp64-functions.glsl.js":
/*!*************************************************!*\
  !*** ./src/modules/fp64/fp64-functions.glsl.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* harmony default export */ __webpack_exports__["default"] = (`\
const vec2 E_FP64 = vec2(2.7182817459106445e+00, 8.254840366817007e-08);
const vec2 LOG2_FP64 = vec2(0.6931471824645996e+00, -1.9046542121259336e-09);
const vec2 PI_FP64 = vec2(3.1415927410125732, -8.742278012618954e-8);
const vec2 TWO_PI_FP64 = vec2(6.2831854820251465, -1.7484556025237907e-7);
const vec2 PI_2_FP64 = vec2(1.5707963705062866, -4.371139006309477e-8);
const vec2 PI_4_FP64 = vec2(0.7853981852531433, -2.1855695031547384e-8);
const vec2 PI_16_FP64 = vec2(0.19634954631328583, -5.463923757886846e-9);
const vec2 PI_16_2_FP64 = vec2(0.39269909262657166, -1.0927847515773692e-8);
const vec2 PI_16_3_FP64 = vec2(0.5890486240386963, -1.4906100798128818e-9);
const vec2 PI_180_FP64 = vec2(0.01745329238474369, 1.3519960498364902e-10);

const vec2 SIN_TABLE_0_FP64 = vec2(0.19509032368659973, -1.6704714833615242e-9);
const vec2 SIN_TABLE_1_FP64 = vec2(0.3826834261417389, 6.22335089017767e-9);
const vec2 SIN_TABLE_2_FP64 = vec2(0.5555702447891235, -1.1769521357507529e-8);
const vec2 SIN_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617041793133e-8);

const vec2 COS_TABLE_0_FP64 = vec2(0.9807852506637573, 2.9739473106360492e-8);
const vec2 COS_TABLE_1_FP64 = vec2(0.9238795042037964, 2.8307490351764386e-8);
const vec2 COS_TABLE_2_FP64 = vec2(0.8314695954322815, 1.6870263741530778e-8);
const vec2 COS_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617152815436e-8);

const vec2 INVERSE_FACTORIAL_3_FP64 = vec2(1.666666716337204e-01, -4.967053879312289e-09); // 1/3!
const vec2 INVERSE_FACTORIAL_4_FP64 = vec2(4.16666679084301e-02, -1.2417634698280722e-09); // 1/4!
const vec2 INVERSE_FACTORIAL_5_FP64 = vec2(8.333333767950535e-03, -4.34617203337595e-10); // 1/5!
const vec2 INVERSE_FACTORIAL_6_FP64 = vec2(1.3888889225199819e-03, -3.3631094437103215e-11); // 1/6!
const vec2 INVERSE_FACTORIAL_7_FP64 = vec2(1.9841270113829523e-04,  -2.725596874933456e-12); // 1/7!
const vec2 INVERSE_FACTORIAL_8_FP64 = vec2(2.4801587642286904e-05, -3.406996025904184e-13); // 1/8!
const vec2 INVERSE_FACTORIAL_9_FP64 = vec2(2.75573188446287533e-06, 3.7935713937038186e-14); // 1/9!
const vec2 INVERSE_FACTORIAL_10_FP64 = vec2(2.755731998149713e-07, -7.575112367869873e-15); // 1/10!

float nint(float d) {
    if (d == floor(d)) return d;
    return floor(d + 0.5);
}

vec2 nint_fp64(vec2 a) {
    float hi = nint(a.x);
    float lo;
    vec2 tmp;
    if (hi == a.x) {
        lo = nint(a.y);
        tmp = quickTwoSum(hi, lo);
    } else {
        lo = 0.0;
        if (abs(hi - a.x) == 0.5 && a.y < 0.0) {
            hi -= 1.0;
        }
        tmp = vec2(hi, lo);
    }
    return tmp;
}

/* k_power controls how much range reduction we would like to have
Range reduction uses the following method:
assume a = k_power * r + m * log(2), k and m being integers.
Set k_power = 4 (we can choose other k to trade accuracy with performance.
we only need to calculate exp(r) and using exp(a) = 2^m * exp(r)^k_power;
*/

vec2 exp_fp64(vec2 a) {
  // We need to make sure these two numbers match
  // as bit-wise shift is not available in GLSL 1.0
  const int k_power = 4;
  const float k = 16.0;

  const float inv_k = 1.0 / k;

  if (a.x <= -88.0) return vec2(0.0, 0.0);
  if (a.x >= 88.0) return vec2(1.0 / 0.0, 1.0 / 0.0);
  if (a.x == 0.0 && a.y == 0.0) return vec2(1.0, 0.0);
  if (a.x == 1.0 && a.y == 0.0) return E_FP64;

  float m = floor(a.x / LOG2_FP64.x + 0.5);
  vec2 r = sub_fp64(a, mul_fp64(LOG2_FP64, vec2(m, 0.0))) * inv_k;
  vec2 s, t, p;

  p = mul_fp64(r, r);
  s = sum_fp64(r, p * 0.5);
  p = mul_fp64(p, r);
  t = mul_fp64(p, INVERSE_FACTORIAL_3_FP64);

  s = sum_fp64(s, t);
  p = mul_fp64(p, r);
  t = mul_fp64(p, INVERSE_FACTORIAL_4_FP64);

  s = sum_fp64(s, t);
  p = mul_fp64(p, r);
  t = mul_fp64(p, INVERSE_FACTORIAL_5_FP64);

  // s = sum_fp64(s, t);
  // p = mul_fp64(p, r);
  // t = mul_fp64(p, INVERSE_FACTORIAL_6_FP64);

  // s = sum_fp64(s, t);
  // p = mul_fp64(p, r);
  // t = mul_fp64(p, INVERSE_FACTORIAL_7_FP64);

  s = sum_fp64(s, t);


  // At this point, s = exp(r) - 1; but after following 4 recursions, we will get exp(r) ^ 512 - 1.
  for (int i = 0; i < k_power; i++) {
    s = sum_fp64(s * 2.0, mul_fp64(s, s));
  }

#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)
  s = sum_fp64(s, vec2(ONE, 0.0));
#else
  s = sum_fp64(s, vec2(1.0, 0.0));
#endif

  return s * pow(2.0, m);
//   return r;
}

vec2 log_fp64(vec2 a)
{
  if (a.x == 1.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x <= 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);
  vec2 x = vec2(log(a.x), 0.0);
  vec2 s;
#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)
  s = vec2(ONE, 0.0);
#else
  s = vec2(1.0, 0.0);
#endif

  x = sub_fp64(sum_fp64(x, mul_fp64(a, exp_fp64(-x))), s);
  return x;
}

vec2 sin_taylor_fp64(vec2 a) {
  vec2 r, s, t, x;

  if (a.x == 0.0 && a.y == 0.0) {
    return vec2(0.0, 0.0);
  }

  x = -mul_fp64(a, a);
  s = a;
  r = a;

  r = mul_fp64(r, x);
  t = mul_fp64(r, INVERSE_FACTORIAL_3_FP64);
  s = sum_fp64(s, t);

  r = mul_fp64(r, x);
  t = mul_fp64(r, INVERSE_FACTORIAL_5_FP64);
  s = sum_fp64(s, t);

  /* keep the following commented code in case we need them
  for extra accuracy from the Taylor expansion*/

  // r = mul_fp64(r, x);
  // t = mul_fp64(r, INVERSE_FACTORIAL_7_FP64);
  // s = sum_fp64(s, t);

  // r = mul_fp64(r, x);
  // t = mul_fp64(r, INVERSE_FACTORIAL_9_FP64);
  // s = sum_fp64(s, t);

  return s;
}

vec2 cos_taylor_fp64(vec2 a) {
  vec2 r, s, t, x;

  if (a.x == 0.0 && a.y == 0.0) {
    return vec2(1.0, 0.0);
  }

  x = -mul_fp64(a, a);
  r = x;
  s = sum_fp64(vec2(1.0, 0.0), r * 0.5);

  r = mul_fp64(r, x);
  t = mul_fp64(r, INVERSE_FACTORIAL_4_FP64);
  s = sum_fp64(s, t);

  r = mul_fp64(r, x);
  t = mul_fp64(r, INVERSE_FACTORIAL_6_FP64);
  s = sum_fp64(s, t);

  /* keep the following commented code in case we need them
  for extra accuracy from the Taylor expansion*/

  // r = mul_fp64(r, x);
  // t = mul_fp64(r, INVERSE_FACTORIAL_8_FP64);
  // s = sum_fp64(s, t);

  // r = mul_fp64(r, x);
  // t = mul_fp64(r, INVERSE_FACTORIAL_10_FP64);
  // s = sum_fp64(s, t);

  return s;
}

void sincos_taylor_fp64(vec2 a, out vec2 sin_t, out vec2 cos_t) {
  if (a.x == 0.0 && a.y == 0.0) {
    sin_t = vec2(0.0, 0.0);
    cos_t = vec2(1.0, 0.0);
  }

  sin_t = sin_taylor_fp64(a);
  cos_t = sqrt_fp64(sub_fp64(vec2(1.0, 0.0), mul_fp64(sin_t, sin_t)));
}

vec2 sin_fp64(vec2 a) {
    if (a.x == 0.0 && a.y == 0.0) {
        return vec2(0.0, 0.0);
    }

    // 2pi range reduction
    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));
    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));

    vec2 t;
    float q = floor(r.x / PI_2_FP64.x + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return vec2(0.0 / 0.0, 0.0 / 0.0);
    }

    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));

    q = floor(t.x / PI_16_FP64.x + 0.5);
    int k = int(q);

    if (k == 0) {
        if (j == 0) {
            return sin_taylor_fp64(t);
        } else if (j == 1) {
            return cos_taylor_fp64(t);
        } else if (j == -1) {
            return -cos_taylor_fp64(t);
        } else {
            return -sin_taylor_fp64(t);
        }
    }

    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return vec2(0.0 / 0.0, 0.0 / 0.0);
    } else {
        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));
    }

    vec2 u = vec2(0.0, 0.0);
    vec2 v = vec2(0.0, 0.0);

#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)
    if (abs(float(abs_k) - 1.0) < 0.5) {
        u = COS_TABLE_0_FP64;
        v = SIN_TABLE_0_FP64;
    } else if (abs(float(abs_k) - 2.0) < 0.5) {
        u = COS_TABLE_1_FP64;
        v = SIN_TABLE_1_FP64;
    } else if (abs(float(abs_k) - 3.0) < 0.5) {
        u = COS_TABLE_2_FP64;
        v = SIN_TABLE_2_FP64;
    } else if (abs(float(abs_k) - 4.0) < 0.5) {
        u = COS_TABLE_3_FP64;
        v = SIN_TABLE_3_FP64;
    }
#else
    if (abs_k == 1) {
        u = COS_TABLE_0_FP64;
        v = SIN_TABLE_0_FP64;
    } else if (abs_k == 2) {
        u = COS_TABLE_1_FP64;
        v = SIN_TABLE_1_FP64;
    } else if (abs_k == 3) {
        u = COS_TABLE_2_FP64;
        v = SIN_TABLE_2_FP64;
    } else if (abs_k == 4) {
        u = COS_TABLE_3_FP64;
        v = SIN_TABLE_3_FP64;
    }
#endif

    vec2 sin_t, cos_t;
    sincos_taylor_fp64(t, sin_t, cos_t);



    vec2 result = vec2(0.0, 0.0);
    if (j == 0) {
        if (k > 0) {
            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
        } else {
            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
        }
    } else if (j == 1) {
        if (k > 0) {
            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        } else {
            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        }
    } else if (j == -1) {
        if (k > 0) {
            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));
        } else {
            result = -sum_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));
        }
    } else {
        if (k > 0) {
            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
        } else {
            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));
        }
    }

    return result;
}

vec2 cos_fp64(vec2 a) {
    if (a.x == 0.0 && a.y == 0.0) {
        return vec2(1.0, 0.0);
    }

    // 2pi range reduction
    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));
    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));

    vec2 t;
    float q = floor(r.x / PI_2_FP64.x + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return vec2(0.0 / 0.0, 0.0 / 0.0);
    }

    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));

    q = floor(t.x / PI_16_FP64.x + 0.5);
    int k = int(q);

    if (k == 0) {
        if (j == 0) {
            return cos_taylor_fp64(t);
        } else if (j == 1) {
            return -sin_taylor_fp64(t);
        } else if (j == -1) {
            return sin_taylor_fp64(t);
        } else {
            return -cos_taylor_fp64(t);
        }
    }

    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return vec2(0.0 / 0.0, 0.0 / 0.0);
    } else {
        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));
    }

    vec2 u = vec2(0.0, 0.0);
    vec2 v = vec2(0.0, 0.0);

#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)
    if (abs(float(abs_k) - 1.0) < 0.5) {
        u = COS_TABLE_0_FP64;
        v = SIN_TABLE_0_FP64;
    } else if (abs(float(abs_k) - 2.0) < 0.5) {
        u = COS_TABLE_1_FP64;
        v = SIN_TABLE_1_FP64;
    } else if (abs(float(abs_k) - 3.0) < 0.5) {
        u = COS_TABLE_2_FP64;
        v = SIN_TABLE_2_FP64;
    } else if (abs(float(abs_k) - 4.0) < 0.5) {
        u = COS_TABLE_3_FP64;
        v = SIN_TABLE_3_FP64;
    }
#else
    if (abs_k == 1) {
        u = COS_TABLE_0_FP64;
        v = SIN_TABLE_0_FP64;
    } else if (abs_k == 2) {
        u = COS_TABLE_1_FP64;
        v = SIN_TABLE_1_FP64;
    } else if (abs_k == 3) {
        u = COS_TABLE_2_FP64;
        v = SIN_TABLE_2_FP64;
    } else if (abs_k == 4) {
        u = COS_TABLE_3_FP64;
        v = SIN_TABLE_3_FP64;
    }
#endif

    vec2 sin_t, cos_t;
    sincos_taylor_fp64(t, sin_t, cos_t);

    vec2 result = vec2(0.0, 0.0);
    if (j == 0) {
        if (k > 0) {
            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        } else {
            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        }
    } else if (j == 1) {
        if (k > 0) {
            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
        } else {
            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));
        }
    } else if (j == -1) {
        if (k > 0) {
            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
        } else {
            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
        }
    } else {
        if (k > 0) {
            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));
        } else {
            result = -sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        }
    }

    return result;
}

vec2 tan_fp64(vec2 a) {
    vec2 sin_a;
    vec2 cos_a;

    if (a.x == 0.0 && a.y == 0.0) {
        return vec2(0.0, 0.0);
    }

    // 2pi range reduction
    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));
    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));

    vec2 t;
    float q = floor(r.x / PI_2_FP64.x + 0.5);
    int j = int(q);


    if (j < -2 || j > 2) {
        return vec2(0.0 / 0.0, 0.0 / 0.0);
    }

    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));

    q = floor(t.x / PI_16_FP64.x + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    // We just can't get PI/16 * 3.0 very accurately.
    // so let's just store it
    if (abs_k > 4) {
        return vec2(0.0 / 0.0, 0.0 / 0.0);
    } else {
        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));
    }


    vec2 u = vec2(0.0, 0.0);
    vec2 v = vec2(0.0, 0.0);

    vec2 sin_t, cos_t;
    vec2 s, c;
    sincos_taylor_fp64(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0_FP64;
            v = SIN_TABLE_0_FP64;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1_FP64;
            v = SIN_TABLE_1_FP64;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2_FP64;
            v = SIN_TABLE_2_FP64;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3_FP64;
            v = SIN_TABLE_3_FP64;
        }
#else
        if (abs_k == 1) {
            u = COS_TABLE_0_FP64;
            v = SIN_TABLE_0_FP64;
        } else if (abs_k == 2) {
            u = COS_TABLE_1_FP64;
            v = SIN_TABLE_1_FP64;
        } else if (abs_k == 3) {
            u = COS_TABLE_2_FP64;
            v = SIN_TABLE_2_FP64;
        } else if (abs_k == 4) {
            u = COS_TABLE_3_FP64;
            v = SIN_TABLE_3_FP64;
        }
#endif
        if (k > 0) {
            s = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
            c = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        } else {
            s = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));
            c = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return div_fp64(sin_a, cos_a);
}

vec2 radians_fp64(vec2 degree) {
  return mul_fp64(degree, PI_180_FP64);
}

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

// Vector functions
// vec2 functions
void vec2_sum_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {
    out_val[0] = sum_fp64(a[0], b[0]);
    out_val[1] = sum_fp64(a[1], b[1]);
}

void vec2_sub_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {
    out_val[0] = sub_fp64(a[0], b[0]);
    out_val[1] = sub_fp64(a[1], b[1]);
}

void vec2_mul_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {
    out_val[0] = mul_fp64(a[0], b[0]);
    out_val[1] = mul_fp64(a[1], b[1]);
}

void vec2_div_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {
    out_val[0] = div_fp64(a[0], b[0]);
    out_val[1] = div_fp64(a[1], b[1]);
}

void vec2_mix_fp64(vec2 x[2], vec2 y[2], float a, out vec2 out_val[2]) {
  vec2 range[2];
  vec2_sub_fp64(y, x, range);
  vec2 portion[2];
  portion[0] = range[0] * a;
  portion[1] = range[1] * a;
  vec2_sum_fp64(x, portion, out_val);
}

vec2 vec2_length_fp64(vec2 x[2]) {
  return sqrt_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])));
}

void vec2_normalize_fp64(vec2 x[2], out vec2 out_val[2]) {
  vec2 length = vec2_length_fp64(x);
  vec2 length_vec2[2];
  length_vec2[0] = length;
  length_vec2[1] = length;

  vec2_div_fp64(x, length_vec2, out_val);
}

vec2 vec2_distance_fp64(vec2 x[2], vec2 y[2]) {
  vec2 diff[2];
  vec2_sub_fp64(x, y, diff);
  return vec2_length_fp64(diff);
}

vec2 vec2_dot_fp64(vec2 a[2], vec2 b[2]) {
  vec2 v[2];

  v[0] = mul_fp64(a[0], b[0]);
  v[1] = mul_fp64(a[1], b[1]);

  return sum_fp64(v[0], v[1]);
}

// vec3 functions
void vec3_sub_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {
  for (int i = 0; i < 3; i++) {
    out_val[i] = sum_fp64(a[i], b[i]);
  }
}

void vec3_sum_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {
  for (int i = 0; i < 3; i++) {
    out_val[i] = sum_fp64(a[i], b[i]);
  }
}

vec2 vec3_length_fp64(vec2 x[3]) {
  return sqrt_fp64(sum_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])),
    mul_fp64(x[2], x[2])));
}

vec2 vec3_distance_fp64(vec2 x[3], vec2 y[3]) {
  vec2 diff[3];
  vec3_sub_fp64(x, y, diff);
  return vec3_length_fp64(diff);
}

// vec4 functions
void vec4_fp64(vec4 a, out vec2 out_val[4]) {
  out_val[0].x = a[0];
  out_val[0].y = 0.0;

  out_val[1].x = a[1];
  out_val[1].y = 0.0;

  out_val[2].x = a[2];
  out_val[2].y = 0.0;

  out_val[3].x = a[3];
  out_val[3].y = 0.0;
}

void vec4_scalar_mul_fp64(vec2 a[4], vec2 b, out vec2 out_val[4]) {
  out_val[0] = mul_fp64(a[0], b);
  out_val[1] = mul_fp64(a[1], b);
  out_val[2] = mul_fp64(a[2], b);
  out_val[3] = mul_fp64(a[3], b);
}

void vec4_sum_fp64(vec2 a[4], vec2 b[4], out vec2 out_val[4]) {
  for (int i = 0; i < 4; i++) {
    out_val[i] = sum_fp64(a[i], b[i]);
  }
}

void vec4_dot_fp64(vec2 a[4], vec2 b[4], out vec2 out_val) {
  vec2 v[4];

  v[0] = mul_fp64(a[0], b[0]);
  v[1] = mul_fp64(a[1], b[1]);
  v[2] = mul_fp64(a[2], b[2]);
  v[3] = mul_fp64(a[3], b[3]);

  out_val = sum_fp64(sum_fp64(v[0], v[1]), sum_fp64(v[2], v[3]));
}

void mat4_vec4_mul_fp64(vec2 b[16], vec2 a[4], out vec2 out_val[4]) {
  vec2 tmp[4];

  for (int i = 0; i < 4; i++)
  {
    for (int j = 0; j < 4; j++)
    {
      tmp[j] = b[j + i * 4];
    }
    vec4_dot_fp64(a, tmp, out_val[i]);
  }
}
`);


/***/ }),

/***/ "./src/modules/fp64/fp64-utils.js":
/*!****************************************!*\
  !*** ./src/modules/fp64/fp64-utils.js ***!
  \****************************************/
/*! exports provided: fp64ify, fp64LowPart, fp64ifyMatrix4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fp64ify", function() { return fp64ify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fp64LowPart", function() { return fp64LowPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fp64ifyMatrix4", function() { return fp64ifyMatrix4; });
/**
 * Calculate WebGL 64 bit float
 * @param a {number} - the input float number
 * @param out {array, optional} - the output array. If not supplied, a new array is created.
 * @param startIndex {integer, optional} - the index in the output array to fill from. Default 0.
 * @returns {array} - the fp64 representation of the input number
 */
function fp64ify(a, out = [], startIndex = 0) {
  const hiPart = Math.fround(a);
  const loPart = a - hiPart;
  out[startIndex] = hiPart;
  out[startIndex + 1] = loPart;
  return out;
}

/**
 * Calculate the low part of a WebGL 64 bit float
 * @param a {number} - the input float number
 * @returns {number} - the lower 32 bit of the number
 */
function fp64LowPart(a) {
  return a - Math.fround(a);
}

/**
 * Calculate WebGL 64 bit matrix (transposed "Float64Array")
 * @param matrix {Matrix4} - the input matrix
 * @returns {array} - the fp64 representation of the input matrix
 */
function fp64ifyMatrix4(matrix) {
  // Transpose the projection matrix to column major for GLSL.
  const matrixFP64 = new Float32Array(32);
  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 4; ++j) {
      const index = i * 4 + j;
      fp64ify(matrix[j * 4 + i], matrixFP64, index * 2);
    }
  }
  return matrixFP64;
}


/***/ }),

/***/ "./src/modules/fp64/fp64.js":
/*!**********************************!*\
  !*** ./src/modules/fp64/fp64.js ***!
  \**********************************/
/*! exports provided: fp64ify, fp64LowPart, fp64ifyMatrix4, default, fp64arithmetic, fp64fs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fp64arithmetic", function() { return fp64arithmetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fp64fs", function() { return fp64fs; });
/* harmony import */ var _fp64_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fp64-utils */ "./src/modules/fp64/fp64-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fp64ify", function() { return _fp64_utils__WEBPACK_IMPORTED_MODULE_0__["fp64ify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fp64LowPart", function() { return _fp64_utils__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fp64ifyMatrix4", function() { return _fp64_utils__WEBPACK_IMPORTED_MODULE_0__["fp64ifyMatrix4"]; });

/* harmony import */ var _fp64_arithmetic_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fp64-arithmetic.glsl */ "./src/modules/fp64/fp64-arithmetic.glsl.js");
/* harmony import */ var _fp64_functions_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fp64-functions.glsl */ "./src/modules/fp64/fp64-functions.glsl.js");
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.






const fp64shader = `${_fp64_arithmetic_glsl__WEBPACK_IMPORTED_MODULE_1__["default"]}\n${_fp64_functions_glsl__WEBPACK_IMPORTED_MODULE_2__["default"]}`;
const CONST_UNIFORMS = {
  // Used in LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  ONE: 1.0
};


function getUniforms() {
  return Object.assign({}, CONST_UNIFORMS);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fp64',
  vs: fp64shader,
  fs: null,
  fp64ify: _fp64_utils__WEBPACK_IMPORTED_MODULE_0__["fp64ify"],
  fp64LowPart: _fp64_utils__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"],
  fp64ifyMatrix4: _fp64_utils__WEBPACK_IMPORTED_MODULE_0__["fp64ifyMatrix4"],
  getUniforms
});

// Arithmetic only
const fp64arithmetic = {
  name: 'fp64-arithmetic',
  vs: `${_fp64_arithmetic_glsl__WEBPACK_IMPORTED_MODULE_1__["default"]}`,
  fs: null
};

// Fragment shader fp64
const fp64fs = {
  name: 'fp64-fs',
  vs: null,
  fs: fp64shader
};


/***/ }),

/***/ "./src/modules/lights/lights.glsl.js":
/*!*******************************************!*\
  !*** ./src/modules/lights/lights.glsl.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))

struct AmbientLight {
 vec3 color;
};

struct PointLight {
 vec3 color;
 vec3 position;

 // Constant-Linear-Exponential
 vec3 attenuation;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform AmbientLight lighting_uAmbientLight;
uniform PointLight lighting_uPointLight[MAX_LIGHTS];
uniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];
uniform int lighting_uPointLightCount;
uniform int lighting_uDirectionalLightCount;

uniform bool lighting_uEnabled;

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

#endif
`);


/***/ }),

/***/ "./src/modules/lights/lights.js":
/*!**************************************!*\
  !*** ./src/modules/lights/lights.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lights_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lights.glsl */ "./src/modules/lights/lights.glsl.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lights',
  vs: _lights_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
  fs: _lights_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
  getUniforms,
  defines: {
    MAX_LIGHTS: 3
  }
});

const INITIAL_MODULE_OPTIONS = {};

// Take color 0-255 and intensity as input and output 0.0-1.0 range
function convertColor({color = [0, 0, 0], intensity = 1.0} = {}) {
  return color.map(component => (component * intensity) / 255.0);
}

function getLightSourceUniforms({ambientLight, pointLights = [], directionalLights = []}) {
  const lightSourceUniforms = {};

  if (ambientLight) {
    lightSourceUniforms['lighting_uAmbientLight.color'] = convertColor(ambientLight);
  } else {
    lightSourceUniforms['lighting_uAmbientLight.color'] = [0, 0, 0];
  }

  pointLights.forEach((pointLight, index) => {
    lightSourceUniforms[`lighting_uPointLight[${index}].color`] = convertColor(pointLight);
    lightSourceUniforms[`lighting_uPointLight[${index}].position`] = pointLight.position;
    lightSourceUniforms[`lighting_uPointLight[${index}].attenuation`] = pointLight.attenuation;
  });
  lightSourceUniforms.lighting_uPointLightCount = pointLights.length;

  directionalLights.forEach((directionalLight, index) => {
    lightSourceUniforms[`lighting_uDirectionalLight[${index}].color`] = convertColor(
      directionalLight
    );
    lightSourceUniforms[`lighting_uDirectionalLight[${index}].direction`] =
      directionalLight.direction;
  });
  lightSourceUniforms.lighting_uDirectionalLightCount = directionalLights.length;

  return lightSourceUniforms;
}

// eslint-disable-next-line complexity
function getUniforms(opts = INITIAL_MODULE_OPTIONS) {
  // Specify lights separately
  if ('lightSources' in opts) {
    const {ambientLight, pointLights, directionalLights} = opts.lightSources || {};
    const hasLights =
      ambientLight ||
      (pointLights && pointLights.length > 0) ||
      (directionalLights && directionalLights.length > 0);

    if (!hasLights) {
      return {lighting_uEnabled: false};
    }

    return Object.assign(
      {},
      getLightSourceUniforms({ambientLight, pointLights, directionalLights}),
      {
        lighting_uEnabled: true
      }
    );
  }

  // Support for array of lights. Type of light is detected by type field
  if ('lights' in opts) {
    const lightSources = {pointLights: [], directionalLights: []};
    for (const light of opts.lights || []) {
      switch (light.type) {
        case 'ambient':
          // Note: Only uses last ambient light
          // TODO - add ambient light sources on CPU?
          lightSources.ambientLight = light;
          break;
        case 'directional':
          lightSources.directionalLights.push(light);
          break;
        case 'point':
          lightSources.pointLights.push(light);
          break;
        default:
        // eslint-disable-next-line
        // console.warn(light.type);
      }
    }

    // Call the `opts.lightSources`` version
    return getUniforms({lightSources});
  }

  return {};
}


/***/ }),

/***/ "./src/modules/module-injectors.js":
/*!*****************************************!*\
  !*** ./src/modules/module-injectors.js ***!
  \*****************************************/
/*! exports provided: MODULE_INJECTORS_VS, MODULE_INJECTORS_FS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_INJECTORS_VS", function() { return MODULE_INJECTORS_VS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_INJECTORS_FS", function() { return MODULE_INJECTORS_FS; });
const MODULE_INJECTORS_VS = `\
#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`;

const MODULE_INJECTORS_FS = `\
#ifdef MODULE_MATERIAL
  gl_FragColor = material_filterColor(gl_FragColor);
#endif

#ifdef MODULE_LIGHTING
  gl_FragColor = lighting_filterColor(gl_FragColor);
#endif

#ifdef MODULE_FOG
  gl_FragColor = fog_filterColor(gl_FragColor);
#endif

#ifdef MODULE_PICKING
  gl_FragColor = picking_filterHighlightColor(gl_FragColor);
  gl_FragColor = picking_filterPickingColor(gl_FragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`;


/***/ }),

/***/ "./src/modules/pbr/pbr-fragment.glsl.js":
/*!**********************************************!*\
  !*** ./src/modules/pbr/pbr-fragment.glsl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This fragment shader defines a reference implementation for Physically Based Shading of
// a microfacet surface material defined by a glTF model.
//
// Attribution:
// MIT license, Copyright (c) 2016-2017 Mohamad Moneimne and Contributors

/* harmony default export */ __webpack_exports__["default"] = (`\
#if (__VERSION__ < 300)
#extension GL_EXT_shader_texture_lod: enable
#extension GL_OES_standard_derivatives : enable
#endif

// WebGL 1.0 does not support non-constant in for loops
// This provides an easy way to handle these cases
// and still take advantage of WebGL 2.0
#if (__VERSION__ < 300)
  #define SMART_FOR(INIT, WEBGL1COND, WEBGL2COND, INCR) for (INIT; WEBGL1COND; INCR)
#else
  #define SMART_FOR(INIT, WEBGL1COND, WEBGL2COND, INCR) for (INIT; WEBGL2COND; INCR)
#endif

precision highp float;

#ifdef USE_IBL
uniform samplerCube u_DiffuseEnvSampler;
uniform samplerCube u_SpecularEnvSampler;
uniform sampler2D u_brdfLUT;
uniform vec2 u_ScaleIBLAmbient;
#endif

#ifdef HAS_BASECOLORMAP
uniform sampler2D u_BaseColorSampler;
#endif
#ifdef HAS_NORMALMAP
uniform sampler2D u_NormalSampler;
uniform float u_NormalScale;
#endif
#ifdef HAS_EMISSIVEMAP
uniform sampler2D u_EmissiveSampler;
uniform vec3 u_EmissiveFactor;
#endif
#ifdef HAS_METALROUGHNESSMAP
uniform sampler2D u_MetallicRoughnessSampler;
#endif
#ifdef HAS_OCCLUSIONMAP
uniform sampler2D u_OcclusionSampler;
uniform float u_OcclusionStrength;
#endif

#ifdef ALPHA_CUTOFF
uniform float u_AlphaCutoff;
#endif

uniform vec2 u_MetallicRoughnessValues;
uniform vec4 u_BaseColorFactor;

uniform vec3 u_Camera;

// debugging flags used for shader output of intermediate PBR variables
#ifdef PBR_DEBUG
uniform vec4 u_ScaleDiffBaseMR;
uniform vec4 u_ScaleFGDSpec;
#endif

varying vec3 pbr_vPosition;

varying vec2 pbr_vUV;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
varying mat3 pbr_vTBN;
#else
varying vec3 pbr_vNormal;
#endif
#endif

// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo
{
  float NdotL;                  // cos angle between normal and light direction
  float NdotV;                  // cos angle between normal and view direction
  float NdotH;                  // cos angle between normal and half vector
  float LdotH;                  // cos angle between light direction and half vector
  float VdotH;                  // cos angle between view direction and half vector
  float perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)
  float metalness;              // metallic value at the surface
  vec3 reflectance0;            // full reflectance color (normal incidence angle)
  vec3 reflectance90;           // reflectance color at grazing angle
  float alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])
  vec3 diffuseColor;            // color contribution from diffuse lighting
  vec3 specularColor;           // color contribution from specular lighting
  vec3 n;                       // normal at surface point
  vec3 v;                       // vector from surface point to camera
};

const float M_PI = 3.141592653589793;
const float c_MinRoughness = 0.04;

vec4 SRGBtoLINEAR(vec4 srgbIn)
{
#ifdef MANUAL_SRGB
#ifdef SRGB_FAST_APPROXIMATION
  vec3 linOut = pow(srgbIn.xyz,vec3(2.2));
#else //SRGB_FAST_APPROXIMATION
  vec3 bLess = step(vec3(0.04045),srgbIn.xyz);
  vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );
#endif //SRGB_FAST_APPROXIMATION
  return vec4(linOut,srgbIn.w);;
#else //MANUAL_SRGB
  return srgbIn;
#endif //MANUAL_SRGB
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
vec3 getNormal()
{
  // Retrieve the tangent space matrix
#ifndef HAS_TANGENTS
  vec3 pos_dx = dFdx(pbr_vPosition);
  vec3 pos_dy = dFdy(pbr_vPosition);
  vec3 tex_dx = dFdx(vec3(pbr_vUV, 0.0));
  vec3 tex_dy = dFdy(vec3(pbr_vUV, 0.0));
  vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

#ifdef HAS_NORMALS
  vec3 ng = normalize(pbr_vNormal);
#else
  vec3 ng = cross(pos_dx, pos_dy);
#endif

  t = normalize(t - ng * dot(ng, t));
  vec3 b = normalize(cross(ng, t));
  mat3 tbn = mat3(t, b, ng);
#else // HAS_TANGENTS
  mat3 tbn = pbr_vTBN;
#endif

#ifdef HAS_NORMALMAP
  vec3 n = texture2D(u_NormalSampler, pbr_vUV).rgb;
  n = normalize(tbn * ((2.0 * n - 1.0) * vec3(u_NormalScale, u_NormalScale, 1.0)));
#else
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  vec3 n = normalize(tbn[2].xyz);
#endif

  return n;
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
vec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)
{
  float mipCount = 9.0; // resolution of 512x512
  float lod = (pbrInputs.perceptualRoughness * mipCount);
  // retrieve a scale and bias to F0. See [1], Figure 3
  vec3 brdf = SRGBtoLINEAR(texture2D(u_brdfLUT,
    vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness))).rgb;
  vec3 diffuseLight = SRGBtoLINEAR(textureCube(u_DiffuseEnvSampler, n)).rgb;

#ifdef USE_TEX_LOD
  vec3 specularLight = SRGBtoLINEAR(textureCubeLodEXT(u_SpecularEnvSampler, reflection, lod)).rgb;
#else
  vec3 specularLight = SRGBtoLINEAR(textureCube(u_SpecularEnvSampler, reflection)).rgb;
#endif

  vec3 diffuse = diffuseLight * pbrInputs.diffuseColor;
  vec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);

  // For presentation, this allows us to disable IBL terms
  diffuse *= u_ScaleIBLAmbient.x;
  specular *= u_ScaleIBLAmbient.y;

  return diffuse + specular;
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
vec3 diffuse(PBRInfo pbrInputs)
{
  return pbrInputs.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
vec3 specularReflection(PBRInfo pbrInputs)
{
  return pbrInputs.reflectance0 +
    (pbrInputs.reflectance90 - pbrInputs.reflectance0) *
    pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
float geometricOcclusion(PBRInfo pbrInputs)
{
  float NdotL = pbrInputs.NdotL;
  float NdotV = pbrInputs.NdotV;
  float r = pbrInputs.alphaRoughness;

  float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
float microfacetDistribution(PBRInfo pbrInputs)
{
  float roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;
  float f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

void PBRInfo_setAmbientLight(inout PBRInfo pbrInputs) {
  pbrInputs.NdotL = 1.0;
  pbrInputs.NdotH = 0.0;
  pbrInputs.LdotH = 0.0;
  pbrInputs.VdotH = 1.0;
}

void PBRInfo_setDirectionalLight(inout PBRInfo pbrInputs, vec3 lightDirection) {
  vec3 n = pbrInputs.n;
  vec3 v = pbrInputs.v;
  vec3 l = normalize(lightDirection);             // Vector from surface point to light
  vec3 h = normalize(l+v);                        // Half vector between both l and v

  pbrInputs.NdotL = clamp(dot(n, l), 0.001, 1.0);
  pbrInputs.NdotH = clamp(dot(n, h), 0.0, 1.0);
  pbrInputs.LdotH = clamp(dot(l, h), 0.0, 1.0);
  pbrInputs.VdotH = clamp(dot(v, h), 0.0, 1.0);
}

void PBRInfo_setPointLight(inout PBRInfo pbrInputs, PointLight pointLight) {
  vec3 light_direction = normalize(pointLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInputs, light_direction);
}

vec3 calculateFinalColor(PBRInfo pbrInputs, vec3 lightColor) {
  // Calculate the shading terms for the microfacet specular shading model
  vec3 F = specularReflection(pbrInputs);
  float G = geometricOcclusion(pbrInputs);
  float D = microfacetDistribution(pbrInputs);

  // Calculation of analytical lighting contribution
  vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);
  vec3 specContrib = F * G * D / (4.0 * pbrInputs.NdotL * pbrInputs.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInputs.NdotL * lightColor * (diffuseContrib + specContrib);
}

vec4 pbr_filterColor(vec4 colorUnused)
{
  // Metallic and Roughness material properties are packed together
  // In glTF, these factors can be specified by fixed scalar values
  // or from a metallic-roughness map
  float perceptualRoughness = u_MetallicRoughnessValues.y;
  float metallic = u_MetallicRoughnessValues.x;
#ifdef HAS_METALROUGHNESSMAP
  // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
  // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
  vec4 mrSample = texture2D(u_MetallicRoughnessSampler, pbr_vUV);
  perceptualRoughness = mrSample.g * perceptualRoughness;
  metallic = mrSample.b * metallic;
#endif
  perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
  metallic = clamp(metallic, 0.0, 1.0);
  // Roughness is authored as perceptual roughness; as is convention,
  // convert to material roughness by squaring the perceptual roughness [2].
  float alphaRoughness = perceptualRoughness * perceptualRoughness;

  // The albedo may be defined from a base texture or a flat color
#ifdef HAS_BASECOLORMAP
  vec4 baseColor = SRGBtoLINEAR(texture2D(u_BaseColorSampler, pbr_vUV)) * u_BaseColorFactor;
#else
  vec4 baseColor = u_BaseColorFactor;
#endif

#ifdef ALPHA_CUTOFF
  if (baseColor.a < u_AlphaCutoff) {
    discard;
  }
#endif

  vec3 f0 = vec3(0.04);
  vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);
  diffuseColor *= 1.0 - metallic;
  vec3 specularColor = mix(f0, baseColor.rgb, metallic);

  // Compute reflectance.
  float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

  // For typical incident reflectance range (between 4% to 100%) set the grazing
  // reflectance to 100% for typical fresnel effect.
  // For very low reflectance range on highly diffuse objects (below 4%),
  // incrementally reduce grazing reflecance to 0%.
  float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
  vec3 specularEnvironmentR0 = specularColor.rgb;
  vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;

  vec3 n = getNormal();                          // normal at surface point
  vec3 v = normalize(u_Camera - pbr_vPosition);  // Vector from surface point to camera

  float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
  vec3 reflection = -normalize(reflect(v, n));

  PBRInfo pbrInputs = PBRInfo(
    0.0, // NdotL
    NdotV,
    0.0, // NdotH
    0.0, // LdotH
    0.0, // VdotH
    perceptualRoughness,
    metallic,
    specularEnvironmentR0,
    specularEnvironmentR90,
    alphaRoughness,
    diffuseColor,
    specularColor,
    n,
    v
  );

  vec3 color = vec3(0, 0, 0);

#ifdef USE_LIGHTS
  // Apply ambient light
  PBRInfo_setAmbientLight(pbrInputs);
  color += calculateFinalColor(pbrInputs, lighting_uAmbientLight.color);

  // Apply directional light
  SMART_FOR(int i = 0, i < MAX_LIGHTS, i < lighting_uDirectionalLightCount, i++) {
    if (i < lighting_uDirectionalLightCount) {
      PBRInfo_setDirectionalLight(pbrInputs, lighting_uDirectionalLight[i].direction);
      color += calculateFinalColor(pbrInputs, lighting_uDirectionalLight[i].color);
    }
  }

  // Apply point light
  SMART_FOR(int i = 0, i < MAX_LIGHTS, i < lighting_uPointLightCount, i++) {
    if (i < lighting_uPointLightCount) {
      PBRInfo_setPointLight(pbrInputs, lighting_uPointLight[i]);
      float attenuation = getPointLightAttenuation(lighting_uPointLight[i], distance(lighting_uPointLight[i].position, pbr_vPosition));
      color += calculateFinalColor(pbrInputs, lighting_uPointLight[i].color / attenuation);
    }
  }
#endif

  // Calculate lighting contribution from image based lighting source (IBL)
#ifdef USE_IBL
  color += getIBLContribution(pbrInputs, n, reflection);
#endif

  // Apply optional PBR terms for additional (optional) shading
#ifdef HAS_OCCLUSIONMAP
  float ao = texture2D(u_OcclusionSampler, pbr_vUV).r;
  color = mix(color, color * ao, u_OcclusionStrength);
#endif

#ifdef HAS_EMISSIVEMAP
  vec3 emissive = SRGBtoLINEAR(texture2D(u_EmissiveSampler, pbr_vUV)).rgb * u_EmissiveFactor;
  color += emissive;
#endif

  // This section uses mix to override final color for reference app visualization
  // of various parameters in the lighting equation.
#ifdef PBR_DEBUG
  // TODO: Figure out how to debug multiple lights

  // color = mix(color, F, u_ScaleFGDSpec.x);
  // color = mix(color, vec3(G), u_ScaleFGDSpec.y);
  // color = mix(color, vec3(D), u_ScaleFGDSpec.z);
  // color = mix(color, specContrib, u_ScaleFGDSpec.w);

  // color = mix(color, diffuseContrib, u_ScaleDiffBaseMR.x);
  color = mix(color, baseColor.rgb, u_ScaleDiffBaseMR.y);
  color = mix(color, vec3(metallic), u_ScaleDiffBaseMR.z);
  color = mix(color, vec3(perceptualRoughness), u_ScaleDiffBaseMR.w);
#endif

  return vec4(pow(color,vec3(1.0/2.2)), baseColor.a);
}
`);


/***/ }),

/***/ "./src/modules/pbr/pbr-vertex.glsl.js":
/*!********************************************!*\
  !*** ./src/modules/pbr/pbr-vertex.glsl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
varying vec3 pbr_vPosition;
varying vec2 pbr_vUV;

#ifdef HAS_NORMALS
# ifdef HAS_TANGENTS
varying mat3 pbr_vTBN;
# else
varying vec3 pbr_vNormal;
# endif
#endif

void pbr_setPositionNormalTangentUV(vec4 position, vec4 normal, vec4 tangent, vec2 uv)
{
  vec4 pos = u_ModelMatrix * position;
  pbr_vPosition = vec3(pos.xyz) / pos.w;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
  vec3 normalW = normalize(vec3(u_NormalMatrix * vec4(normal.xyz, 0.0)));
  vec3 tangentW = normalize(vec3(u_ModelMatrix * vec4(tangent.xyz, 0.0)));
  vec3 bitangentW = cross(normalW, tangentW) * tangent.w;
  pbr_vTBN = mat3(tangentW, bitangentW, normalW);
#else // HAS_TANGENTS != 1
  pbr_vNormal = normalize(vec3(u_ModelMatrix * vec4(normal.xyz, 0.0)));
#endif
#endif

#ifdef HAS_UV
  pbr_vUV = uv;
#else
  pbr_vUV = vec2(0.,0.);
#endif
}
`);


/***/ }),

/***/ "./src/modules/pbr/pbr.js":
/*!********************************!*\
  !*** ./src/modules/pbr/pbr.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project2_project2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project2/project2 */ "./src/modules/project2/project2.js");
/* harmony import */ var _lights_lights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lights/lights */ "./src/modules/lights/lights.js");
/* harmony import */ var _pbr_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pbr-vertex.glsl */ "./src/modules/pbr/pbr-vertex.glsl.js");
/* harmony import */ var _pbr_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pbr-fragment.glsl */ "./src/modules/pbr/pbr-fragment.glsl.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pbr',
  vs: _pbr_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"],
  fs: _pbr_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"],
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  dependencies: [_project2_project2__WEBPACK_IMPORTED_MODULE_0__["default"], _lights_lights__WEBPACK_IMPORTED_MODULE_1__["default"]]
});


/***/ }),

/***/ "./src/modules/phong-lighting/phong-lighting.glsl.js":
/*!***********************************************************!*\
  !*** ./src/modules/phong-lighting/phong-lighting.glsl.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\

uniform float lighting_uAmbient;
uniform float lighting_uDiffuse;
uniform float lighting_uShininess;
uniform vec3  lighting_uSpecularColor;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
    vec3 halfway_direction = normalize(light_direction + view_direction);
    float lambertian = dot(light_direction, normal_worldspace);
    float specular = 0.0;
    if (lambertian > 0.0) {
      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
      specular = pow(specular_angle, lighting_uShininess);
    }
    lambertian = max(lambertian, 0.0);
    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);
    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}

vec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = vec3(0, 0, 0);
  vec3 surfaceColor = vec3(0, 0, 0);

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`);


/***/ }),

/***/ "./src/modules/phong-lighting/phong-lighting.js":
/*!******************************************************!*\
  !*** ./src/modules/phong-lighting/phong-lighting.js ***!
  \******************************************************/
/*! exports provided: gouraudlighting, phonglighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gouraudlighting", function() { return gouraudlighting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phonglighting", function() { return phonglighting; });
/* harmony import */ var _lights_lights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lights/lights */ "./src/modules/lights/lights.js");
/* harmony import */ var _phong_lighting_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phong-lighting.glsl */ "./src/modules/phong-lighting/phong-lighting.glsl.js");



const gouraudlighting = {
  name: 'gouraud-lighting',
  dependencies: [_lights_lights__WEBPACK_IMPORTED_MODULE_0__["default"]],
  vs: _phong_lighting_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
  defines: {
    LIGHTING_VERTEX: 1
  },
  getUniforms
};

const phonglighting = {
  name: 'phong-lighting',
  dependencies: [_lights_lights__WEBPACK_IMPORTED_MODULE_0__["default"]],
  fs: _phong_lighting_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  getUniforms
};

const INITIAL_MODULE_OPTIONS = {};

function getMaterialUniforms(material) {
  const materialUniforms = {};
  materialUniforms.lighting_uAmbient = material.ambient;
  materialUniforms.lighting_uDiffuse = material.diffuse;
  materialUniforms.lighting_uShininess = material.shininess;
  materialUniforms.lighting_uSpecularColor = material.specularColor;
  return materialUniforms;
}

function getUniforms(opts = INITIAL_MODULE_OPTIONS) {
  if (!('material' in opts)) {
    return {};
  }

  const {material} = opts;

  if (!material) {
    return {lighting_uEnabled: false};
  }

  return getMaterialUniforms(material);
}




/***/ }),

/***/ "./src/modules/picking/picking.js":
/*!****************************************!*\
  !*** ./src/modules/picking/picking.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DEFAULT_HIGHLIGHT_COLOR = new Uint8Array([0, 255, 255, 255]);

const DEFAULT_MODULE_OPTIONS = {
  pickingSelectedColor: null, //  Set to a picking color to visually highlight that item
  pickingHighlightColor: DEFAULT_HIGHLIGHT_COLOR, // Color of visual highlight of "selected" item
  pickingThreshold: 1.0,
  pickingActive: false // Set to true when rendering to off-screen "picking" buffer
};

/* eslint-disable camelcase */
function getUniforms(opts = DEFAULT_MODULE_OPTIONS) {
  const uniforms = {};
  if (opts.pickingSelectedColor !== undefined) {
    if (opts.pickingSelectedColor === null) {
      uniforms.picking_uSelectedColorValid = 0;
    } else {
      const selectedColor = [
        opts.pickingSelectedColor[0],
        opts.pickingSelectedColor[1],
        opts.pickingSelectedColor[2]
      ];
      uniforms.picking_uSelectedColorValid = 1;
      uniforms.picking_uSelectedColor = selectedColor;
    }
  }
  if (opts.pickingHighlightColor !== undefined) {
    uniforms.picking_uHighlightColor = opts.pickingHighlightColor;
  }
  // TODO - major hack - decide on normalization and remove
  if (opts.pickingThreshold !== undefined) {
    uniforms.picking_uThreshold = opts.pickingThreshold;
  }
  if (opts.pickingActive !== undefined) {
    uniforms.picking_uActive = opts.pickingActive ? 1 : 0;
  }
  return uniforms;
}

const vs = `\
uniform vec3 picking_uSelectedColor;
uniform float picking_uThreshold;
uniform bool picking_uSelectedColorValid;

out vec4 picking_vRGBcolor_Aselected;

const float COLOR_SCALE = 1. / 255.;

bool isVertexPicked(vec3 vertexColor) {
  return
    picking_uSelectedColorValid &&
    abs(vertexColor.r - picking_uSelectedColor.r) < picking_uThreshold &&
    abs(vertexColor.g - picking_uSelectedColor.g) < picking_uThreshold &&
    abs(vertexColor.b - picking_uSelectedColor.b) < picking_uThreshold;
}

void picking_setPickingColor(vec3 pickingColor) {
  // Do the comparison with selected item color in vertex shader as it should mean fewer compares
  picking_vRGBcolor_Aselected.a =
    float(isVertexPicked(pickingColor));

  // Stores the picking color so that the fragment shader can render it during picking
  picking_vRGBcolor_Aselected.rgb = pickingColor * COLOR_SCALE;
}
`;

const fs = `\
uniform bool picking_uActive; // true during rendering to offscreen picking buffer
uniform vec3 picking_uSelectedColor;
uniform vec4 picking_uHighlightColor;

in vec4 picking_vRGBcolor_Aselected;

const float COLOR_SCALE = 1. / 255.;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  bool selected = bool(picking_vRGBcolor_Aselected.a);

  if (selected) {
    vec4 highLightColor = picking_uHighlightColor * COLOR_SCALE;

    float highLightAlpha = highLightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, highLightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  vec3 pickingColor = picking_vRGBcolor_Aselected.rgb;
  if (picking_uActive && length(pickingColor) < 0.001) {
    discard;
  }
  return picking_uActive ? vec4(pickingColor, 1.0) : color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highightColor);
}

`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'picking',
  vs,
  fs,
  getUniforms
});


/***/ }),

/***/ "./src/modules/project/project.js":
/*!****************************************!*\
  !*** ./src/modules/project/project.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "../../node_modules/math.gl/dist/esm/index.js");


const IDENTITY_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

const DEFAULT_MODULE_OPTIONS = {
  modelMatrix: IDENTITY_MATRIX,
  viewMatrix: IDENTITY_MATRIX,
  projectionMatrix: IDENTITY_MATRIX,
  cameraPositionWorld: [0, 0, 0]
};

function getUniforms(opts = DEFAULT_MODULE_OPTIONS, prevUniforms = {}) {
  // const viewProjectionInverse = viewProjection.invert();
  // viewInverseMatrix: view.invert(),
  // viewProjectionInverseMatrix: viewProjectionInverse

  const uniforms = {};
  if (opts.modelMatrix !== undefined) {
    uniforms.modelMatrix = opts.modelMatrix;
  }
  if (opts.viewMatrix !== undefined) {
    uniforms.viewMatrix = opts.viewMatrix;
  }
  if (opts.projectionMatrix !== undefined) {
    uniforms.projectionMatrix = opts.projectionMatrix;
  }
  if (opts.cameraPositionWorld !== undefined) {
    uniforms.cameraPositionWorld = opts.cameraPositionWorld;
  }

  // COMPOSITE UNIFORMS
  if (opts.projectionMatrix !== undefined || opts.viewMatrix !== undefined) {
    uniforms.viewProjectionMatrix = new math_gl__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](opts.projectionMatrix).multiplyRight(
      opts.viewMatrix
    );
  }

  return uniforms;
}

const common = `\
varying vec4 project_vPositionWorld;
varying vec3 project_vNormalWorld;

vec4 project_getPosition_World() {
  return project_vPositionWorld;
}

vec3 project_getNormal_World() {
  return project_vNormalWorld;
}
`;

const vs = `\
${common}

// Unprefixed uniforms
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewProjectionMatrix;
uniform vec3 cameraPositionWorld;

struct World {
  vec3 position;
  vec3 normal;
};

World world;

void project_setPosition(vec4 position) {
  project_vPositionWorld = position;
}

void project_setNormal(vec3 normal) {
  project_vNormalWorld = normal;
}

void project_setPositionAndNormal_World(vec3 position, vec3 normal) {
  world.position = position;
  world.normal = normal;
}

void project_setPositionAndNormal_Model(vec3 position, vec3 normal) {
  world.position = (modelMatrix * vec4(position, 1.)).xyz;
  world.normal = mat3(modelMatrix) * normal;
}

vec4 project_model_to_clipspace(vec4 position) {
  return viewProjectionMatrix * modelMatrix * position;
}

vec4 project_model_to_clipspace(vec3 position) {
  return viewProjectionMatrix * modelMatrix * vec4(position, 1.);
}

vec4 project_world_to_clipspace(vec3 position) {
  return viewProjectionMatrix * vec4(position, 1.);
}

vec4 project_view_to_clipspace(vec3 position) {
  return projectionMatrix * vec4(position, 1.);
}

vec4 project_to_clipspace(vec3 position) {
  return viewProjectionMatrix * vec4(position, 1.);
}
`;

const fs = `
${common}\
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'project',
  getUniforms,
  vs,
  fs
});


/***/ }),

/***/ "./src/modules/project2/project2.js":
/*!******************************************!*\
  !*** ./src/modules/project2/project2.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project2_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project2.vertex.glsl */ "./src/modules/project2/project2.vertex.glsl.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'project2',
  vs: _project2_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
  fs: _project2_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./src/modules/project2/project2.vertex.glsl.js":
/*!******************************************************!*\
  !*** ./src/modules/project2/project2.vertex.glsl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
uniform mat4 u_MVPMatrix;
uniform mat4 u_ModelMatrix;
uniform mat4 u_NormalMatrix;
`);


/***/ }),

/***/ "./src/modules/transform/transform.js":
/*!********************************************!*\
  !*** ./src/modules/transform/transform.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Private shader module used by `Transform`

const vs = `\
attribute float transform_elementID;

// returns half of pixel size, used to move the pixel position to center of the pixel.
vec2 transform_getPixelSizeHalf(vec2 size) {
  return vec2(1.) / (2. * size);
}

// returns current elements pixel indeces [x, y],
// where x ranges in [0 to texSize-1] and y ranges in [0 to texSize-1]
vec2 transform_getPixelIndices(vec2 texSize, vec2 pixelSizeHalf) {
  // Add safe offset (half of pixel height) before doing floor
  float yIndex = floor((transform_elementID / texSize[0]) + pixelSizeHalf[1]);
  float xIndex = transform_elementID - (yIndex * texSize[0]);
  return vec2(xIndex, yIndex);
}

// returns current elementID's texture co-ordianate
vec2 transform_getTexCoord(vec2 size) {
  vec2 pixelSizeHalf = transform_getPixelSizeHalf(size);
  vec2 indices = transform_getPixelIndices(size, pixelSizeHalf);
  vec2 coord = indices / size + pixelSizeHalf;
  return coord;
}

// returns current elementID's position
vec2 transform_getPos(vec2 size) {
  vec2 texCoord = transform_getTexCoord(size);
  // Change from [0 1] range to [-1 1]
  vec2 pos = (texCoord * (2.0, 2.0)) - (1., 1.);
  return pos;
}

// returns current elementID's pixel value
vec4 transform_getInput(sampler2D texSampler, vec2 size) {
  vec2 texCoord = transform_getTexCoord(size);
  vec4 textureColor = texture2D(texSampler, texCoord);
  return textureColor;
}
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'transform',
  vs,
  fs: null
});


/***/ }),

/***/ "./src/shaders/modular-fragment.glsl.js":
/*!**********************************************!*\
  !*** ./src/shaders/modular-fragment.glsl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME luma-modular-fragment

precision highp float;

// varyings
varying vec4 vColor;

void main(){
  gl_FragColor = vec4(1., 0., 1., 1.);

#ifdef MODULE_DIFFUSE
  gl_FragColor = diffuse_filterColor(gl_FragColor);
#endif

#ifdef MODULE_MATERIAL
  gl_FragColor = material_filterColor(gl_FragColor);
#endif

#ifdef MODULE_LIGHTING
  gl_FragColor = lighting_filterColor(gl_FragColor);
#endif

#ifdef MODULE_FOG
  gl_FragColor = fog_filterColor(gl_FragColor);
#endif

#ifdef MODULE_PICKING
  gl_FragColor = picking_filterHighlightColor(gl_FragColor);
  gl_FragColor = picking_filterPickingColor(gl_FragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth(gl_Position);
#endif
}
`);


/***/ }),

/***/ "./src/shaders/modular-vertex.glsl.js":
/*!********************************************!*\
  !*** ./src/shaders/modular-vertex.glsl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME luma_modular_vertex

// object attributes
attribute vec3 positions;
attribute vec3 normals;
attribute vec4 colors;
attribute vec2 texCoords;
attribute vec3 pickingColors;

void main(void) {

  // Set up position
#ifdef MODULE_GEOMETRY
  geometry_setPosition(positions);
  geometry_setNormal(normals);
#endif

#ifdef MODULE_PROJECT
  project_setPositionAndNormal_Model(positions, normals);
  gl_Position = project_model_to_clipspace(positions);
#endif

  // Set up depth
#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif

#ifdef MODULE_DIFFUSE
  diffuse_setTextureCoordinate(texCoords);
#endif

  // Set up color calculations
#ifdef MODULE_MATERIAL
  material_setDiffuseColor(colors);
  material_setDiffuseTextureCoordinates(texCoords);
#endif

#ifdef MODULE_LIGHTING
  lighting_setPositionAndNormal(positions, normals);
  lighting_apply_light(positions);
  lighting_apply_reflection(positions);
#endif

#ifdef MODULE_PICKING
  picking_setPickingColor(pickingColors);
#endif

}
`);


/***/ }),

/***/ "./src/utils/assert.js":
/*!*****************************!*\
  !*** ./src/utils/assert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
// Recommendation is to ignore message but current test suite checks agains the
// message so keep it for now.
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'shadertools: assertion failed.');
  }
}


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./src/utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _assert__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/utils/is-old-ie.js":
/*!********************************!*\
  !*** ./src/utils/is-old-ie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOldIE; });
/* global window */
// opts allows user agent to be overridden for testing
function isOldIE(opts = {}) {
  const navigator = typeof window !== 'undefined' ? window.navigator || {} : {};
  const userAgent = opts.userAgent || navigator.userAgent || '';
  // We only care about older versions of IE (IE 11 and below). Newer versions of IE (Edge)
  // have much better web standards support.
  const isMSIE = userAgent.indexOf('MSIE ') !== -1;
  const isTrident = userAgent.indexOf('Trident/') !== -1;
  return isMSIE || isTrident;
}


/***/ }),

/***/ "./src/utils/shader-utils.js":
/*!***********************************!*\
  !*** ./src/utils/shader-utils.js ***!
  \***********************************/
/*! exports provided: getQualifierDetails, getPassthroughFS, typeToChannelSuffix, typeToChannelCount, convertToVec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQualifierDetails", function() { return getQualifierDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPassthroughFS", function() { return getPassthroughFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeToChannelSuffix", function() { return typeToChannelSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeToChannelCount", function() { return typeToChannelCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToVec4", function() { return convertToVec4; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

const FS100 = 'void main() {}';
const FS300 = `#version 300 es\n${FS100}`;

// Prase given glsl line and return qualifier details or null
function getQualifierDetails(line, qualifiers) {
  qualifiers = Array.isArray(qualifiers) ? qualifiers : [qualifiers];
  const words = line.replace(/^\s+/, '').split(/\s+/);
  // TODO add support for precession qualifiers (highp, mediump and lowp)
  const [qualifier, type, definition] = words;
  if (!qualifiers.includes(qualifier) || !type || !definition) {
    return null;
  }
  const name = definition.split(';')[0];
  return {qualifier, type, name};
}

// Given the shader version, input and output variable names,
// builds and return a pass through fragment shader.
function getPassthroughFS({version = 100, input, inputType, output} = {}) {
  if (!input) {
    return version === 300 ? FS300 : FS100;
  }
  const outputValue = convertToVec4(input, inputType);
  if (version === 300) {
    return `\
#version 300 es
in ${inputType} ${input};
out vec4 ${output};
void main() {
  ${output} = ${outputValue};
}`;
  }
  // version 100
  return `\
varying ${inputType} ${input};
void main() {
  gl_FragColor = ${outputValue};
}`;
}

// convert glsl type to suffix
function typeToChannelSuffix(type) {
  switch (type) {
    case 'float':
      return 'x';
    case 'vec2':
      return 'xy';
    case 'vec3':
      return 'xyz';
    case 'vec4':
      return 'xyzw';
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
      return null;
  }
}

// convert glsl type to channel count
function typeToChannelCount(type) {
  switch (type) {
    case 'float':
      return 1;
    case 'vec2':
      return 2;
    case 'vec3':
      return 3;
    case 'vec4':
      return 4;
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
      return null;
  }
}

// Returns glsl instruction for converting to vec4
function convertToVec4(variable, type) {
  switch (type) {
    case 'float':
      return `vec4(${variable}, 0.0, 0.0, 1.0)`;
    case 'vec2':
      return `vec4(${variable}, 0.0, 1.0)`;
    case 'vec3':
      return `vec4(${variable}, 1.0)`;
    case 'vec4':
      return variable;
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
      return null;
  }
}


/***/ }),

/***/ "./src/utils/webgl-info.js":
/*!*********************************!*\
  !*** ./src/utils/webgl-info.js ***!
  \*********************************/
/*! exports provided: FEATURES, getContextInfo, canCompileGLGSExtension, hasFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextInfo", function() { return getContextInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCompileGLGSExtension", function() { return canCompileGLGSExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFeatures", function() { return hasFeatures; });
/* harmony import */ var _is_old_ie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-old-ie */ "./src/utils/is-old-ie.js");
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert */ "./src/utils/assert.js");
// Feature detection for WebGL
//
// Provides a function that enables simple checking of which WebGL features are
// available in an WebGL1 or WebGL2 environment.

/* eslint-disable no-inline-comments, max-len */



const GL_VENDOR = 0x1f00;
const GL_RENDERER = 0x1f01;
const GL_VERSION = 0x1f02;
const GL_SHADING_LANGUAGE_VERSION = 0x8b8c;

// Defines luma.gl "feature" names and semantics
const WEBGL_FEATURES = {
  // GLSL extensions
  GLSL_FRAG_DATA: ['WEBGL_draw_buffers', true], // TODO - name makes no sense in GLSL 3.00
  GLSL_FRAG_DEPTH: ['EXT_frag_depth', true],
  GLSL_DERIVATIVES: ['OES_standard_derivatives', true],
  GLSL_TEXTURE_LOD: ['EXT_shader_texture_lod', true]
};

// Create a key-mirrored FEATURES array
const FEATURES = {};
Object.keys(WEBGL_FEATURES).forEach(key => {
  FEATURES[key] = key;
});



function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function getContextInfo(gl) {
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  const vendor = gl.getParameter((info && info.UNMASKED_VENDOR_WEBGL) || GL_VENDOR);
  const renderer = gl.getParameter((info && info.UNMASKED_RENDERER_WEBGL) || GL_RENDERER);
  const gpuVendor = identifyGPUVendor(vendor, renderer);
  const gpuInfo = {
    gpuVendor,
    vendor,
    renderer,
    version: gl.getParameter(GL_VERSION),
    shadingLanguageVersion: gl.getParameter(GL_SHADING_LANGUAGE_VERSION)
  };
  return gpuInfo;
}

function identifyGPUVendor(vendor, renderer) {
  if (vendor.match(/NVIDIA/i) || renderer.match(/NVIDIA/i)) {
    return 'NVIDIA';
  }
  if (vendor.match(/INTEL/i) || renderer.match(/INTEL/i)) {
    return 'INTEL';
  }
  if (
    vendor.match(/AMD/i) ||
    renderer.match(/AMD/i) ||
    vendor.match(/ATI/i) ||
    renderer.match(/ATI/i)
  ) {
    return 'AMD';
  }
  return 'UNKNOWN GPU';
}

const compiledGlslExtensions = {};

// Enables feature detection in IE11 due to a bug where gl.getExtension may return true
// but fail to compile when the extension is enabled in the shader. Specifically,
// the OES_standard_derivatives and WEBGL_draw_buffers extensions fails to compile in IE11 even though its included
// in the list of supported extensions.
// opts allows user agent to be overridden for testing
/*
* Inputs :
*  gl : WebGL context
*  cap : Key of WEBGL_FEATURES object identifying the extension
*  opts :
*   behavior : behavor of extension to be tested, by defualt `enable` is used
* Returns : true, if shader is compiled successfully, false otherwise
*/
function canCompileGLGSExtension(gl, cap, opts = {}) {
  const feature = WEBGL_FEATURES[cap];
  Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(feature, cap);

  if (!Object(_is_old_ie__WEBPACK_IMPORTED_MODULE_0__["default"])(opts)) {
    return true;
  }

  if (cap in compiledGlslExtensions) {
    return compiledGlslExtensions[cap];
  }

  const extensionName = feature[0];
  const behavior = opts.behavior || 'enable';
  const source = `#extension GL_${extensionName} : ${behavior}\nvoid main(void) {}`;

  const shader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const canCompile = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  gl.deleteShader(shader);
  compiledGlslExtensions[cap] = canCompile;
  return canCompile;
}

// TODO - cache the value
function getFeature(gl, cap) {
  const feature = WEBGL_FEATURES[cap];
  Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(feature, cap);

  // Get extension name from table
  const extensionName = isWebGL2(gl) ? feature[1] || feature[0] : feature[0];

  // Check if the value is dependent on checking an extension
  const value =
    typeof extensionName === 'string' ? Boolean(gl.getExtension(extensionName)) : extensionName;

  Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(value === false || value === true);

  return value;
}

function hasFeatures(gl, features) {
  features = Array.isArray(features) ? features : [features];
  return features.every(feature => getFeature(gl, feature));
}


/***/ })

/******/ });
});
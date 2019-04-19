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

/***/ "./src/adjust-filters/brightnesscontrast.js":
/*!**************************************************!*\
  !*** ./src/adjust-filters/brightnesscontrast.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter           Brightness / Contrast
 * @description      Provides additive brightness and multiplicative contrast control.
 * @param brightness -1 to 1 (-1 is solid black, 0 is no change, and 1 is solid white)
 * @param contrast   -1 to 1 (-1 is solid gray, 0 is no change, and 1 is maximum contrast)
 */

const fs = `\
uniform float brightness;
uniform float contrast;

vec4 brightnessContrast_filterColor(vec4 color) {
  color.rgb += brightness;
  if (contrast > 0.0) {
    color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;
  } else {
    color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;
  }
  return color;
}

vec4 brightnessContrast_filterColor(vec4 color, vec2 texSize, vec2 texCoords) {
  return brightnessContrast_filterColor(color);
}
`;

const uniforms = {
  brightness: {value: 0, min: -1, max: 1},
  contrast: {value: 0, min: -1, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'brightnessContrast',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/adjust-filters/denoise.js":
/*!***************************************!*\
  !*** ./src/adjust-filters/denoise.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter         Denoise
 * @description    Smooths over grainy noise in dark images using an 9x9 box filter
 *                 weighted by color intensity, similar to a bilateral filter.
 * @param exponent The exponent of the color intensity difference, should be greater
 *                 than zero. A value of zero just gives an 9x9 box blur and high values
 *                 give the original image, but ideal values are usually around 10-20.
 */

// Do a 9x9 bilateral box filter
const fs = `\
uniform float strength;

vec4 denoise_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  float adjustedExponent = 3. + 200. * pow(1. - strength, 4.);

  vec4 center = texture2D(texture, texCoord);
  vec4 color = vec4(0.0);
  float total = 0.0;
  for (float x = -4.0; x <= 4.0; x += 1.0) {
    for (float y = -4.0; y <= 4.0; y += 1.0) {
      vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);
      float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));
      weight = pow(weight, adjustedExponent);
      color += sample * weight;
      total += weight;
    }
  }

  return color / total;
}
`;

const uniforms = {
  strength: {
    value: 0.5,
    min: 0,
    max: 0.1,
    adjust: strength => 0.53 + 200 * Math.pow(1 - strength, 4) // TODO - JS preprocessing
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'denoise',
  uniforms,
  fs,

  passes: [{sampler: true}, {sampler: true}]
});


/***/ }),

/***/ "./src/adjust-filters/huesaturation.js":
/*!*********************************************!*\
  !*** ./src/adjust-filters/huesaturation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter           Hue / Saturation
 * @description      Provides rotational hue and multiplicative saturation control. RGB color space
 *                   can be imagined as a cube where the axes are the red, green, and blue color
 *                   values. Hue changing works by rotating the color vector around the grayscale
 *                   line, which is the straight line from black (0, 0, 0) to white (1, 1, 1).
 *                   Saturation is implemented by scaling all color channel values either toward
 *                   or away from the average color channel value.
 * @param hue        -1 to 1 (-1 is 180 degree rotation in the negative direction, 0 is no change,
 *                   and 1 is 180 degree rotation in the positive direction)
 * @param saturation -1 to 1 (-1 is solid gray, 0 is no change, and 1 is maximum contrast)
 */

const fs = `\
uniform float hue;
uniform float saturation;

vec4 hueSaturation_filterColor(vec4 color) {
  // hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}]
  float angle = hue * 3.14159265;
  float s = sin(angle), c = cos(angle);
  vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;
  float len = length(color.rgb);
  color.rgb = vec3(
    dot(color.rgb, weights.xyz),
    dot(color.rgb, weights.zxy),
    dot(color.rgb, weights.yzx)
  );

  // saturation adjustment
  float average = (color.r + color.g + color.b) / 3.0;
  if (saturation > 0.0) {
    color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));
  } else {
    color.rgb += (average - color.rgb) * (-saturation);
  }

  return color;
}

vec4 hueSaturation_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  return hueSaturation_filterColor(color);
}
`;

const uniforms = {
  hue: {value: 0, min: -1, max: 1},
  saturation: {value: 0, min: -1, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hueSaturation',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/adjust-filters/noise.js":
/*!*************************************!*\
  !*** ./src/adjust-filters/noise.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter         Noise
 * @description    Adds black and white noise to the image.
 * @param amount   0 to 1 (0 for no effect, 1 for maximum noise)
 */
const fs = `\
uniform float amount;

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec4 noise_filterColor(vec4 color, vec2 texCoord) {
  float diff = (rand(texCoord) - 0.5) * amount;
  color.r += diff;
  color.g += diff;
  color.b += diff;
  return color;
}

vec4 noise_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  return noise_filterColor(color, texCoord);
}
`;

const uniforms = {
  amount: {value: 0.5, min: 0, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'noise',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/adjust-filters/sepia.js":
/*!*************************************!*\
  !*** ./src/adjust-filters/sepia.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter         Sepia
 * @description    Gives the image a reddish-brown monochrome tint that imitates an old photograph.
 * @param amount   0 to 1 (0 for no effect, 1 for full sepia coloring)
 */
const fs = `\
uniform float amount;

vec4 sepia_filterColor(vec4 color) {
  float r = color.r;
  float g = color.g;
  float b = color.b;

  color.r =
    min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));
  color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));
  color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));

  return color;
}

vec4 sepia_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  return sepia_filterColor(color);
}
`;

const uniforms = {
  amount: {value: 0.5, min: 0, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sepia',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/adjust-filters/unsharpmask.js":
/*!*******************************************!*\
  !*** ./src/adjust-filters/unsharpmask.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blur_filters_triangleblur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blur-filters/triangleblur */ "./src/blur-filters/triangleblur.js");
/**
 * @filter         Unsharp Mask
 * @description    A form of image sharpening that amplifies high-frequencies in the image. It
 *                 is implemented by scaling pixels away from the average of their neighbors.
 * @param radius   The blur radius that calculates the average of the neighboring pixels.
 * @param strength A scale factor where 0 is no effect and higher values cause a stronger effect.
 */


const fs = `\
uniform float strength;
uniform float threshold;
uniform sampler2D blurredTexture;

vec4 unsharpMark_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec4 blurred = texture2D(blurredTexture, texCoord);
  vec4 original = texture2D(texture, texCoord);
  gl_FragColor = mix(blurred, original, 1.0 + strength);
}
`;

const uniforms = {
  radius: {value: 20, min: 0, softMax: 200},
  strength: {value: 1, min: 0, softMax: 5}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'unsharpMask',
  uniforms,
  dependencies: [_blur_filters_triangleblur__WEBPACK_IMPORTED_MODULE_0__["default"]],
  passes: [
    {module: _blur_filters_triangleblur__WEBPACK_IMPORTED_MODULE_0__["default"], target: 'texture1'},
    {sampler: true, uniforms: {blurredTexture: 'texture1'}}
  ]
});

// TODO: FIXME
/* eslint-disable */
function unsharpMask(radius, strength) {
  gl.unsharpMask = gl.unsharpMask || new Shader(null, fs);

  // Store a copy of the current texture in the second texture unit
  window._.extraTexture.ensureFormat(window._.texture);
  window._.texture.use();
  window._.extraTexture.drawTo(() => Shader.getDefaultShader(this.gl).drawRect());

  // Blur the current texture, then use the stored texture to detect edges
  window._.extraTexture.use(1);
  this.triangleBlur(radius);
  gl.unsharpMask.textures({
    originalTexture: 1
  });
  simpleShader.call(this, gl.unsharpMask, {
    strength: strength
  });
  window._.extraTexture.unuse(1);
}


/***/ }),

/***/ "./src/adjust-filters/vibrance.js":
/*!****************************************!*\
  !*** ./src/adjust-filters/vibrance.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter       Vibrance
 * @description  Modifies the saturation of desaturated colors, leaving saturated colors unmodified.
 * @param amount -1 to 1 (-1 is minimum vibrance, 0 is no change, and 1 is maximum vibrance)
 */
const fs = `\
uniform float amount;

vec4 vibrance_filterColor(vec4 color) {
  float average = (color.r + color.g + color.b) / 3.0;
  float mx = max(color.r, max(color.g, color.b));
  float amt = (mx - average) * (-amount * 3.0);
  color.rgb = mix(color.rgb, vec3(mx), amt);
  return color;
}

vec4 vibrance_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  return vibrance_filterColor(color);
}
`;

const uniforms = {
  amount: {value: 0, min: -1, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vibrance',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/adjust-filters/vignette.js":
/*!****************************************!*\
  !*** ./src/adjust-filters/vignette.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter         Vignette
 * @description    Adds a simulated lens edge darkening effect.
 * @param radius   0 to 1 (0 for center of frame, 1 for edge of frame)
 * @param amount   0 to 1 (0 for no effect, 1 for maximum lens darkening)
 */
const fs = `\
uniform float radius;
uniform float amount;

vec4 vignette_filterColor(vec4 color, vec2 texCoord) {
  float dist = distance(texCoord, vec2(0.5, 0.5));
  color.rgb *= smoothstep(0.8, radius * 0.799, dist * (amount + radius));
  return color;
}

vec4 vignette_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  return vignette_filterColor(color, texCoord);
}
`;

const uniforms = {
  radius: {value: 0.5, min: 0, max: 1},
  amount: {value: 0.5, min: 0, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vignette',
  fs,
  uniforms,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/blur-filters/tiltshift.js":
/*!***************************************!*\
  !*** ./src/blur-filters/tiltshift.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/**
 * @filter               Tilt Shift
 * @description          Simulates the shallow depth of field normally encountered in close-up
 *                       photography, which makes the scene seem much smaller than it actually
 *                       is. This filter assumes the scene is relatively planar, in which case
 *                       the part of the scene that is completely in focus can be described by
 *                       a line (the intersection of the focal plane and the scene). An example
 *                       of a planar scene might be looking at a road from above at a downward
 *                       angle. The image is then blurred with a blur radius that starts at zero
 *                       on the line and increases further from the line.
 * @param startX         The x coordinate of the start of the line segment.
 * @param startY         The y coordinate of the start of the line segment.
 * @param endX           The x coordinate of the end of the line segment.
 * @param endY           The y coordinate of the end of the line segment.
 * @param blurRadius     The maximum radius of the pyramid blur.
 * @param gradientRadius The distance from the line at which the maximum blur radius is reached.
 */


const fs = `\
uniform float blurRadius;
uniform float gradientRadius;
uniform vec2 start;
uniform vec2 end;
uniform bool invert;

vec2 tiltShift_getDelta() {
  vec2 vector = normalize(end - start);
  return invert ? vec2(-vector.y, vector.x) : vector;
}

vec4 tiltShift_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec4 color = vec4(0.0);
  float total = 0.0;

  /* randomize the lookup values to hide the fixed number of samples */
  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

  vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
  float radius = smoothstep(0.0, 1.0,
    abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;

  for (float t = -30.0; t <= 30.0; t++) {
    float percent = (t + offset - 0.5) / 30.0;
    float weight = 1.0 - abs(percent);
    vec4 sample = texture2D(texture, texCoord + tiltShift_getDelta() / texSize * percent * radius);

    /* switch to pre-multiplied alpha to correctly blur transparent images */
    sample.rgb *= sample.a;

    color += sample * weight;
    total += weight;
  }

  color = color / total;

  /* switch back from pre-multiplied alpha */
  color.rgb /= color.a + 0.00001;

  return color;
}
`;

const uniforms = {
  blurRadius: {value: 15, min: 0, max: 50},
  gradientRadius: {value: 200, min: 0, max: 400},
  start: [0, 0],
  end: [1, 1],
  invert: {value: false, private: true}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tiltShift',
  uniforms,
  fs,
  dependencies: [_utils_random__WEBPACK_IMPORTED_MODULE_0__["default"]],

  passes: [{sampler: true, uniforms: {invert: false}}, {sampler: true, uniforms: {invert: true}}]
});

/*
function tiltShift(startX, startY, endX, endY, blurRadius, gradientRadius) {
  var dx = endX - startX;
  var dy = endY - startY;
  var d = Math.sqrt(dx * dx + dy * dy);
  simpleShader.call(this, gl.tiltShift, {
    blurRadius: blurRadius,
    gradientRadius: gradientRadius,
    start: [startX, startY],
    end: [endX, endY],
    delta: [dx / d, dy / d],
    texSize: [this.width, this.height]
  });
  simpleShader.call(this, gl.tiltShift, {
    blurRadius: blurRadius,
    gradientRadius: gradientRadius,
    start: [startX, startY],
    end: [endX, endY],
    delta: [-dy / d, dx / d],
    texSize: [this.width, this.height]
  });

  return this;
}
*/


/***/ }),

/***/ "./src/blur-filters/triangleblur.js":
/*!******************************************!*\
  !*** ./src/blur-filters/triangleblur.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/**
 * @filter       Triangle Blur
 * @description  This is the most basic blur filter, which convolves the image with a
 *               pyramid filter. The pyramid filter is separable and is applied as two
 *               perpendicular triangle filters.
 * @param radius The radius of the pyramid convolved with the image.
 */


const fs = `\
uniform float radius;
uniform vec2 delta;

vec4 triangleBlur_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 adjustedDelta = delta * radius / texSize;

  vec4 color = vec4(0.0);
  float total = 0.0;

  /* randomize the lookup values to hide the fixed number of samples */
  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

  for (float t = -30.0; t <= 30.0; t++) {
    float percent = (t + offset - 0.5) / 30.0;
    float weight = 1.0 - abs(percent);
    vec4 sample = texture2D(texture, texCoord + adjustedDelta * percent);

    /* switch to pre-multiplied alpha to correctly blur transparent images */
    sample.rgb *= sample.a;

    color += sample * weight;
    total += weight;
  }

  color = color / total;

  /* switch back from pre-multiplied alpha */
  color.rgb /= color.a + 0.00001;

  return color;
}
`;

const uniforms = {
  radius: {value: 20, min: 0, softMax: 100},
  delta: {value: [1, 0], private: true}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'triangleBlur',
  uniforms,
  fs,
  dependencies: [_utils_random__WEBPACK_IMPORTED_MODULE_0__["default"]],
  passes: [{sampler: true, uniforms: {delta: [1, 0]}}, {sampler: true, uniforms: {delta: [0, 1]}}]
});


/***/ }),

/***/ "./src/blur-filters/zoomblur.js":
/*!**************************************!*\
  !*** ./src/blur-filters/zoomblur.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/**
 * @filter         Zoom Blur
 * @description    Blurs the image away from a certain point, which looks like radial motion blur.
 * @param centerX  The x coordinate of the blur origin.
 * @param centerY  The y coordinate of the blur origin.
 * @param strength The strength of the blur. Values in the range 0 to 1 are usually sufficient,
 *                 where 0 doesn't change the image and 1 creates a highly blurred image.
 */


const fs = `
uniform vec2 center;
uniform float strength;

vec4 zoomBlur_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec4 color = vec4(0.0);
  float total = 0.0;
  vec2 toCenter = center - texCoord * texSize;

  /* randomize the lookup values to hide the fixed number of samples */
  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

  for (float t = 0.0; t <= 40.0; t++) {
    float percent = (t + offset) / 40.0;
    float weight = 4.0 * (percent - percent * percent);
    vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);

    /* switch to pre-multiplied alpha to correctly blur transparent images */
    sample.rgb *= sample.a;

    color += sample * weight;
    total += weight;
  }

  color = color / total;

  /* switch back from pre-multiplied alpha */
  color.rgb /= color.a + 0.00001;

  return color;
}
`;

const uniforms = {
  center: [0.5, 0.5],
  strength: {value: 0.3, min: 0, softMax: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'zoomBlur',
  uniforms,
  fs,
  dependencies: [_utils_random__WEBPACK_IMPORTED_MODULE_0__["default"]],

  passes: [{sampler: true}]
});


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

/***/ "./src/curve-filters/curves.js":
/*!*************************************!*\
  !*** ./src/curve-filters/curves.js ***!
  \*************************************/
/*! exports provided: default, splineInterpolate, getCurvesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splineInterpolate", function() { return splineInterpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurvesArray", function() { return getCurvesArray; });
/* harmony import */ var _spline_interpolator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spline-interpolator */ "./src/curve-filters/spline-interpolator.js");
/**
 * @filter      Curves
 * @description A powerful mapping tool that transforms the colors in the image
 *              by an arbitrary function. The function is interpolated between
 *              a set of 2D points using splines. The curves filter can take
 *              either one or three arguments which will apply the mapping to
 *              either luminance or RGB values, respectively.
 * @param red   A list of points that define the function for the red channel.
 *              Each point is a list of two values: the value before the mapping
 *              and the value after the mapping, both in the range 0 to 1. For
 *              example, [[0,1], [1,0]] would invert the red channel while
 *              [[0,0], [1,1]] would leave the red channel unchanged.
 * @param green (optional) A list of points that define the function for the green
 *              channel (just like for red).
 * @param blue  (optional) A list of points that define the function for the blue
 *              channel (just like for red).
 */


const fs = `\
uniform sampler2D red;
uniform sampler2D green;
uniform sampler2D blue;

vec4 curves_filterColor(vec4 color) {
  color.r = texture2D(red, vec2(color.r)).r;
  color.g = texture2D(green, vec2(color.g)).g;
  color.b = texture2D(blue, vec2(color.b)).b;
  return color;
}
`;

const uniforms = {
  map: {type: 'sampler2D'}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'curves',
  uniforms,
  fs,

  passes: [{filter: true}],

  getCurvesArray
});

const clamp = (value, min, max) => Math.max(Math.min(value, max), min);

function splineInterpolate(points) {
  const interpolator = new _spline_interpolator__WEBPACK_IMPORTED_MODULE_0__["default"](points);
  const array = [];
  for (let i = 0; i < 256; i++) {
    array.push(clamp(Math.floor(interpolator.interpolate(i / 255) * 256), 0, 55));
    array.push(clamp(Math.floor(interpolator.interpolate(i / 255) * 256), 0, 55));
  }
  return array;
}

function getCurvesArray(red = [[0, 0], [1, 1]], green, blue) {
  // Create the ramp texture
  red = splineInterpolate(red);
  if (arguments.length === 1) {
    green = blue = red;
  } else {
    green = splineInterpolate(green);
    blue = splineInterpolate(blue);
  }

  const array = [];
  for (let i = 0; i < 256; i++) {
    array.splice(array.length, 0, red[i], green[i], blue[i], 255);
  }

  return new Uint8Array(array);
}


/***/ }),

/***/ "./src/curve-filters/spline-interpolator.js":
/*!**************************************************!*\
  !*** ./src/curve-filters/spline-interpolator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplineInterpolator; });
// from SplineInterpolator.cs in the Paint.NET source code

class SplineInterpolator {
  constructor(points) {
    const n = points.length;
    this.xa = [];
    this.ya = [];
    this.u = [];
    this.y2 = [];

    points.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
      this.xa.push(points[i][0]);
      this.ya.push(points[i][1]);
    }

    this.u[0] = 0;
    this.y2[0] = 0;

    for (let i = 1; i < n - 1; ++i) {
      // This is the decomposition loop of the tridiagonal algorithm.
      // y2 and u are used for temporary storage of the decomposed factors.
      const wx = this.xa[i + 1] - this.xa[i - 1];
      const sig = (this.xa[i] - this.xa[i - 1]) / wx;
      const p = sig * this.y2[i - 1] + 2.0;

      this.y2[i] = (sig - 1.0) / p;

      const ddydx =
        (this.ya[i + 1] - this.ya[i]) / (this.xa[i + 1] - this.xa[i]) -
        (this.ya[i] - this.ya[i - 1]) / (this.xa[i] - this.xa[i - 1]);

      this.u[i] = ((6.0 * ddydx) / wx - sig * this.u[i - 1]) / p;
    }

    this.y2[n - 1] = 0;

    // This is the backsubstitution loop of the tridiagonal algorithm
    for (let i = n - 2; i >= 0; --i) {
      this.y2[i] = this.y2[i] * this.y2[i + 1] + this.u[i];
    }
  }

  interpolate(x) {
    const n = this.ya.length;
    let klo = 0;
    let khi = n - 1;

    // We will find the right place in the table by means of
    // bisection. This is optimal if sequential calls to this
    // routine are at random values of x. If sequential calls
    // are in order, and closely spaced, one would do better
    // to store previous values of klo and khi.
    while (khi - klo > 1) {
      const k = (khi + klo) >> 1;

      if (this.xa[k] > x) {
        khi = k;
      } else {
        klo = k;
      }
    }

    const h = this.xa[khi] - this.xa[klo];
    const a = (this.xa[khi] - x) / h;
    const b = (x - this.xa[klo]) / h;

    // Cubic spline polynomial is now evaluated.
    return (
      a * this.ya[klo] +
      b * this.ya[khi] +
      (((a * a * a - a) * this.y2[klo] + (b * b * b - b) * this.y2[khi]) * (h * h)) / 6.0
    );
  }
}


/***/ }),

/***/ "./src/fun-filters/colorhalftone.js":
/*!******************************************!*\
  !*** ./src/fun-filters/colorhalftone.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter        Color Halftone
 * @description   Simulates a CMYK halftone rendering of the image by multiplying pixel values
 *                with a four rotated 2D sine wave patterns, one each for cyan, magenta, yellow,
 *                and black.
 * @param centerX The x coordinate of the pattern origin.
 * @param centerY The y coordinate of the pattern origin.
 * @param angle   The rotation of the pattern in radians.
 * @param size    The diameter of a dot in pixels.
 */

// TODO pass texCoord to angle
const fs = `\
uniform vec2 center;
uniform float angle;
uniform float size;

float scale = 3.1514 / size;

float pattern(float angle, vec2 texSize, vec2 texCoord) {
  float s = sin(angle), c = cos(angle);
  vec2 tex = texCoord * texSize - center;
  vec2 point = vec2(
	c * tex.x - s * tex.y,
	s * tex.x + c * tex.y
  ) * scale;
  return (sin(point.x) * sin(point.y)) * 4.0;
}

vec4 colorHalftone_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  vec3 cmy = 1.0 - color.rgb;
  float k = min(cmy.x, min(cmy.y, cmy.z));
  cmy = (cmy - k) / (1.0 - k);
  cmy = clamp(
	cmy * 10.0 - 3.0 + vec3(
    pattern(angle + 0.26179, texSize, texCoord),
	  pattern(angle + 1.30899, texSize, texCoord),
    pattern(angle, texSize, texCoord)
  ),
	0.0,
	1.0
  );
  k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539, texSize, texCoord), 0.0, 1.0);
  return vec4(1.0 - cmy - k, color.a);
}
`;

const uniforms = {
  center: [0.5, 0.5],
  angle: {value: 1.1, softMin: 0, softMax: Math.PI / 2},
  size: {value: 4, min: 1, softMin: 3, softMax: 20}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'colorHalftone',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/fun-filters/dotscreen.js":
/*!**************************************!*\
  !*** ./src/fun-filters/dotscreen.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter        Dot Screen
 * @description   Simulates a black and white halftone rendering of the image by multiplying
 *                pixel values with a rotated 2D sine wave pattern.
 * @param centerX The x coordinate of the pattern origin.
 * @param centerY The y coordinate of the pattern origin.
 * @param angle   The rotation of the pattern in radians.
 * @param size    The diameter of a dot in pixels.
 */
const fs = `\
uniform vec2 center;
uniform float angle;
uniform float size;

float pattern(vec2 texSize, vec2 texCoord) {
  float scale = 3.1415 / size;

  float s = sin(angle), c = cos(angle);
  vec2 tex = texCoord * texSize - center;
  vec2 point = vec2(
    c * tex.x - s * tex.y,
    s * tex.x + c * tex.y
  ) * scale;
  return (sin(point.x) * sin(point.y)) * 4.0;
}

vec4 dotScreen_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  float average = (color.r + color.g + color.b) / 3.0;
  return vec4(vec3(average * 10.0 - 5.0 + pattern(texSize, texCoord)), color.a);
}
`;

const uniforms = {
  center: [0.5, 0.5],
  angle: {value: 1.1, softMin: 0, softMax: Math.PI / 2},
  size: {value: 3, min: 1, softMin: 3, softMax: 20}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dotScreen',
  uniforms,
  fs,

  passes: [{filter: true}]
});


/***/ }),

/***/ "./src/fun-filters/edgework.js":
/*!*************************************!*\
  !*** ./src/fun-filters/edgework.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/**
 * @filter       Edge Work
 * @description  Picks out different frequencies in the image by subtracting two
 *               copies of the image blurred with different radii.
 * @param radius The radius of the effect in pixels.
 */


const fs = `\
uniform float radius;
uniform vec2 delta;

vec4 edgeWork_sampleColor1(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 relativeDelta = radius * delta / texSize;

  vec2 color = vec2(0.0);
  vec2 total = vec2(0.0);

  /* randomize the lookup values to hide the fixed number of samples */
  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

  for (float t = -30.0; t <= 30.0; t++) {
    float percent = (t + offset - 0.5) / 30.0;
    float weight = 1.0 - abs(percent);
    vec3 sample = texture2D(texture, texCoord + relativeDelta * percent).rgb;
    float average = (sample.r + sample.g + sample.b) / 3.0;
    color.x += average * weight;
    total.x += weight;
    if (abs(t) < 15.0) {
      weight = weight * 2.0 - 1.0;
      color.y += average * weight;
      total.y += weight;
    }
  }
  return vec4(color / total, 0.0, 1.0);
}

vec4 edgeWork_sampleColor2(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 relativeDelta = radius * delta / texSize;

  vec2 color = vec2(0.0);
  vec2 total = vec2(0.0);

  /* randomize the lookup values to hide the fixed number of samples */
  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

  for (float t = -30.0; t <= 30.0; t++) {
    float percent = (t + offset - 0.5) / 30.0;
    float weight = 1.0 - abs(percent);
    vec2 sample = texture2D(texture, texCoord + relativeDelta * percent).xy;
    color.x += sample.x * weight;
    total.x += weight;
    if (abs(t) < 15.0) {
      weight = weight * 2.0 - 1.0;
      color.y += sample.y * weight;
      total.y += weight;
    }
  }
  float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);
  return vec4(c, c, c, 1.0);
}
`;

const uniforms = {
  radius: {value: 2, min: 1, softMax: 50},
  delta: {value: [1, 0], private: true}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'edgeWork',
  uniforms,
  fs,
  dependencies: [_utils_random__WEBPACK_IMPORTED_MODULE_0__["default"]],
  passes: [
    {
      sampler: 'edgeWork_sampleColor1',
      uniforms: {delta: [1, 0]}
    },
    {
      sampler: 'edgeWork_sampleColor2',
      uniforms: {delta: [0, 1]}
    }
  ]
});


/***/ }),

/***/ "./src/fun-filters/hexagonalpixelate.js":
/*!**********************************************!*\
  !*** ./src/fun-filters/hexagonalpixelate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter        Hexagonal Pixelate
 * @description   Renders the image using a pattern of hexagonal tiles. Tile colors
 *                are nearest-neighbor sampled from the centers of the tiles.
 * @param centerX The x coordinate of the pattern center.
 * @param centerY The y coordinate of the pattern center.
 * @param scale   The width of an individual tile, in pixels.
 */
const fs = `\
uniform vec2 center;
uniform float scale;

vec4 hexagonalPixelate_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 tex = (texCoord * texSize - center) / scale;
  tex.y /= 0.866025404;
  tex.x -= tex.y * 0.5;

  vec2 a;
  if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) {
    a = vec2(floor(tex.x), floor(tex.y));
  }
  else a = vec2(ceil(tex.x), ceil(tex.y));
  vec2 b = vec2(ceil(tex.x), floor(tex.y));
  vec2 c = vec2(floor(tex.x), ceil(tex.y));

  vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);
  vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);
  vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);
  vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);

  float alen = length(TEX - A);
  float blen = length(TEX - B);
  float clen = length(TEX - C);

  vec2 choice;
  if (alen < blen) {
    if (alen < clen) choice = a;
    else choice = c;
  } else {
    if (blen < clen) choice = b;
    else choice = c;
  }

  choice.x += choice.y * 0.5;
  choice.y *= 0.866025404;
  choice *= scale / texSize;

  return texture2D(texture, choice + center / texSize);
}
`;

const uniforms = {
  center: {value: [0.5, 0.5], hint: 'screenspace'},
  scale: {value: 10, min: 1, softMin: 5, softMax: 50}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hexagonalPixelate',
  uniforms,
  fs,

  passes: [{sampler: true}]
});


/***/ }),

/***/ "./src/fun-filters/ink.js":
/*!********************************!*\
  !*** ./src/fun-filters/ink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @filter         Ink
 * @description    Simulates outlining the image in ink by darkening edges stronger than a
 *                 certain threshold. The edge detection value is the difference of two
 *                 copies of the image, each blurred using a blur of a different radius.
 * @param strength The multiplicative scale of the ink edges. Values in the range 0 to 1
 *                 are usually sufficient, where 0 doesn't change the image and 1 adds lots
 *                 of black edges. Negative strength values will create white ink edges
 *                 instead of black ones.
 */
const fs = `\
uniform float strength;

vec4 ink_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 dx = vec2(1.0 / texSize.x, 0.0);
  vec2 dy = vec2(0.0, 1.0 / texSize.y);
  vec4 color = texture2D(texture, texCoord);
  float bigTotal = 0.0;
  float smallTotal = 0.0;
  vec3 bigAverage = vec3(0.0);
  vec3 smallAverage = vec3(0.0);
  for (float x = -2.0; x <= 2.0; x += 1.0) {
    for (float y = -2.0; y <= 2.0; y += 1.0) {
      vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;
      bigAverage += sample;
      bigTotal += 1.0;
      if (abs(x) + abs(y) < 2.0) {
        smallAverage += sample;
        smallTotal += 1.0;
      }
    }
  }
  vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);
  float power = strength * strength * strength * strength * strength;
  return vec4(color.rgb - dot(edge, edge) * power * 100000.0, color.a);
}
`;

const uniforms = {
  strength: {value: 0.25, min: 0, softMax: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ink',
  uniforms,
  fs,

  passes: [{sampler: true}]
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: splineInterpolate, brightnessContrast, denoise, hueSaturation, noise, sepia, unsharpMask, vibrance, vignette, curves, tiltShift, triangleBlur, zoomBlur, colorHalftone, dotScreen, edgeWork, hexagonalPixelate, ink, bulgePinch, swirl, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_filters_curves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve-filters/curves */ "./src/curve-filters/curves.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splineInterpolate", function() { return _curve_filters_curves__WEBPACK_IMPORTED_MODULE_0__["splineInterpolate"]; });

/* harmony import */ var _adjust_filters_brightnesscontrast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust-filters/brightnesscontrast */ "./src/adjust-filters/brightnesscontrast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brightnessContrast", function() { return _adjust_filters_brightnesscontrast__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _adjust_filters_denoise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust-filters/denoise */ "./src/adjust-filters/denoise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "denoise", function() { return _adjust_filters_denoise__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _adjust_filters_huesaturation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjust-filters/huesaturation */ "./src/adjust-filters/huesaturation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hueSaturation", function() { return _adjust_filters_huesaturation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _adjust_filters_noise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjust-filters/noise */ "./src/adjust-filters/noise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noise", function() { return _adjust_filters_noise__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _adjust_filters_sepia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjust-filters/sepia */ "./src/adjust-filters/sepia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepia", function() { return _adjust_filters_sepia__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _adjust_filters_unsharpmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adjust-filters/unsharpmask */ "./src/adjust-filters/unsharpmask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsharpMask", function() { return _adjust_filters_unsharpmask__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _adjust_filters_vibrance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adjust-filters/vibrance */ "./src/adjust-filters/vibrance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrance", function() { return _adjust_filters_vibrance__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _adjust_filters_vignette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adjust-filters/vignette */ "./src/adjust-filters/vignette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vignette", function() { return _adjust_filters_vignette__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curves", function() { return _curve_filters_curves__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _blur_filters_tiltshift__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blur-filters/tiltshift */ "./src/blur-filters/tiltshift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tiltShift", function() { return _blur_filters_tiltshift__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _blur_filters_triangleblur__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blur-filters/triangleblur */ "./src/blur-filters/triangleblur.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triangleBlur", function() { return _blur_filters_triangleblur__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _blur_filters_zoomblur__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blur-filters/zoomblur */ "./src/blur-filters/zoomblur.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomBlur", function() { return _blur_filters_zoomblur__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _fun_filters_colorhalftone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fun-filters/colorhalftone */ "./src/fun-filters/colorhalftone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorHalftone", function() { return _fun_filters_colorhalftone__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _fun_filters_dotscreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fun-filters/dotscreen */ "./src/fun-filters/dotscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dotScreen", function() { return _fun_filters_dotscreen__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _fun_filters_edgework__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fun-filters/edgework */ "./src/fun-filters/edgework.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edgeWork", function() { return _fun_filters_edgework__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _fun_filters_hexagonalpixelate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fun-filters/hexagonalpixelate */ "./src/fun-filters/hexagonalpixelate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexagonalPixelate", function() { return _fun_filters_hexagonalpixelate__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _fun_filters_ink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fun-filters/ink */ "./src/fun-filters/ink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ink", function() { return _fun_filters_ink__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _warp_filters_bulgepinch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./warp-filters/bulgepinch */ "./src/warp-filters/bulgepinch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bulgePinch", function() { return _warp_filters_bulgepinch__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _warp_filters_swirl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./warp-filters/swirl */ "./src/warp-filters/swirl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swirl", function() { return _warp_filters_swirl__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/random */ "./src/utils/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _utils_random__WEBPACK_IMPORTED_MODULE_19__["default"]; });



// glfx ADJUST shader modules











// glfx BLUR shader modules
// export {default as lensBlur} from './blur-filters/lensblur';




// glfx FUN shader modules






// glfx WARP shader modules

// export {default as matrixWarp} from './warp-filters/matrixwarp';
// export {default as perspective} from './warp-filters/perspective';


// glfx UTIL shader modules



/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Quick random generator for fragment shaders
const fs = `\
float random(vec3 scale, float seed) {
  /* use the fragment position for a different seed per-pixel */
  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'random',
  fs
});


/***/ }),

/***/ "./src/warp-filters/bulgepinch.js":
/*!****************************************!*\
  !*** ./src/warp-filters/bulgepinch.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warp */ "./src/warp-filters/warp.js");
/**
 * @filter         Bulge / Pinch
 * @description    Bulges or pinches the image in a circle.
 * @param centerX  The x coordinate of the center of the circle of effect.
 * @param centerY  The y coordinate of the center of the circle of effect.
 * @param radius   The radius of the circle of effect.
 * @param strength -1 to 1 (-1 is strong pinch, 0 is no effect, 1 is strong bulge)
 */


const fs = `\
uniform float radius;
uniform float strength;
uniform vec2 center;

vec2 bulgePinch_warp(vec2 coord) {
  coord -= center;
  float distance = length(coord);
  if (distance < radius) {
    float percent = distance / radius;
    if (strength > 0.0) {
      coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
    } else {
      coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
    }
  }
  coord += center;
  return coord;
}

vec4 bulgePinch_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 coord = texCoord * texSize;
  coord = bulgePinch_warp(coord);

  return warp_sampleColor(texture, texSize, coord);
}
`;

const uniforms = {
  center: [0.5, 0.5],
  radius: {value: 200, min: 1, softMax: 600},
  strength: {value: 0.5, min: -1, max: 1}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bulgePinch',
  fs,
  uniforms,
  dependencies: [_warp__WEBPACK_IMPORTED_MODULE_0__["default"]],

  passes: [{sampler: true}]
});


/***/ }),

/***/ "./src/warp-filters/swirl.js":
/*!***********************************!*\
  !*** ./src/warp-filters/swirl.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warp */ "./src/warp-filters/warp.js");
/**
 * @filter        Swirl
 * @description   Warps a circular region of the image in a swirl.
 * @param centerX The x coordinate of the center of the circular region.
 * @param centerY The y coordinate of the center of the circular region.
 * @param radius  The radius of the circular region.
 * @param angle   The angle in radians that the pixels in the center of
 *                the circular region will be rotated by.
 */


const fs = `\
uniform float radius;
uniform float angle;
uniform vec2 center;

vec2 swirl_warp(vec2 coord) {
  coord -= center;
  float distance = length(coord);
  if (distance < radius) {
    float percent = (radius - distance) / radius;
    float theta = percent * percent * angle;
    float s = sin(theta);
    float c = cos(theta);
    coord = vec2(
      coord.x * c - coord.y * s,
      coord.x * s + coord.y * c
    );
  }
  coord += center;
  return coord;
}

vec4 swirl_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
  vec2 coord = texCoord * texSize;
  coord = swirl_warp(coord);

  return warp_sampleColor(texture, texSize, coord);
}
`;

const uniforms = {
  center: [0.5, 0.5],
  radius: {value: 200, min: 1, softMax: 600},
  angle: {value: 3, softMin: -25, softMax: 25}
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'swirl',
  uniforms,
  fs,
  dependencies: [_warp__WEBPACK_IMPORTED_MODULE_0__["default"]],

  passes: [{sampler: true}]
});


/***/ }),

/***/ "./src/warp-filters/warp.js":
/*!**********************************!*\
  !*** ./src/warp-filters/warp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TODO: FIXME
/* eslint-disable */
const fs = `\
vec4 warp_sampleColor(sampler2D texture, vec2 texSize, vec2 coord) {
  vec4 color = texture2D(texture, coord / texSize);
  vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);
  if (coord != clampedCoord) {
    /* fade to transparent if we are outside the image */
    color.a *= max(0.0, 1.0 - length(coord - clampedCoord));
  }

  return color;
}
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'warp',
  fs
});


/***/ })

/******/ });
});
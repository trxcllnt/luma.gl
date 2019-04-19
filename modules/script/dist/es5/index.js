"use strict";

var _global = typeof window === 'undefined' ? global : window;

var lumaGL = require('@luma.gl/core');

require('@luma.gl/debug');

var filters = require('@luma.gl/glfx');

var shadertools = require('@luma.gl/shadertools');

var mathGL = require('math.gl');

_global.luma = Object.assign({}, _global.luma, lumaGL, {
  filters: filters
}, shadertools);
_global.mathgl = mathGL;
module.exports = _global.luma;
//# sourceMappingURL=index.js.map
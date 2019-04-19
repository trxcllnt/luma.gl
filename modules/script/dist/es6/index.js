const _global = typeof window === 'undefined' ? global : window;

const lumaGL = require('@luma.gl/core');

require('@luma.gl/debug');

const filters = require('@luma.gl/glfx');

const shadertools = require('@luma.gl/shadertools');

const mathGL = require('math.gl');

_global.luma = Object.assign({}, _global.luma, lumaGL, {
  filters
}, shadertools);
_global.mathgl = mathGL;
module.exports = _global.luma;
//# sourceMappingURL=index.js.map
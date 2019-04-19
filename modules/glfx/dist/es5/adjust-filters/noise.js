"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fs = "uniform float amount;\n\nfloat rand(vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 noise_filterColor(vec4 color, vec2 texCoord) {\n  float diff = (rand(texCoord) - 0.5) * amount;\n  color.r += diff;\n  color.g += diff;\n  color.b += diff;\n  return color;\n}\n\nvec4 noise_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return noise_filterColor(color, texCoord);\n}\n";
var uniforms = {
  amount: {
    value: 0.5,
    min: 0,
    max: 1
  }
};
var _default = {
  name: 'noise',
  uniforms: uniforms,
  fs: fs,
  passes: [{
    filter: true
  }]
};
exports["default"] = _default;
//# sourceMappingURL=noise.js.map
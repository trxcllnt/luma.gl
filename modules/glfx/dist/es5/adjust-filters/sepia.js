"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fs = "uniform float amount;\n\nvec4 sepia_filterColor(vec4 color) {\n  float r = color.r;\n  float g = color.g;\n  float b = color.b;\n\n  color.r =\n    min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));\n  color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));\n  color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));\n\n  return color;\n}\n\nvec4 sepia_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return sepia_filterColor(color);\n}\n";
var uniforms = {
  amount: {
    value: 0.5,
    min: 0,
    max: 1
  }
};
var _default = {
  name: 'sepia',
  uniforms: uniforms,
  fs: fs,
  passes: [{
    filter: true
  }]
};
exports["default"] = _default;
//# sourceMappingURL=sepia.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fs = "float random(vec3 scale, float seed) {\n  /* use the fragment position for a different seed per-pixel */\n  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n";
var _default = {
  name: 'random',
  fs: fs
};
exports["default"] = _default;
//# sourceMappingURL=random.js.map
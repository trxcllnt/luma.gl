"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _project = _interopRequireDefault(require("../project2/project2"));

var _lights = _interopRequireDefault(require("../lights/lights"));

var _pbrVertex = _interopRequireDefault(require("./pbr-vertex.glsl"));

var _pbrFragment = _interopRequireDefault(require("./pbr-fragment.glsl"));

var _default = {
  name: 'pbr',
  vs: _pbrVertex["default"],
  fs: _pbrFragment["default"],
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  dependencies: [_project["default"], _lights["default"]]
};
exports["default"] = _default;
//# sourceMappingURL=pbr.js.map
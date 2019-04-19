"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phonglighting = exports.gouraudlighting = void 0;

var _lights = _interopRequireDefault(require("../lights/lights"));

var _phongLighting = _interopRequireDefault(require("./phong-lighting.glsl"));

var gouraudlighting = {
  name: 'gouraud-lighting',
  dependencies: [_lights["default"]],
  vs: _phongLighting["default"],
  defines: {
    LIGHTING_VERTEX: 1
  },
  getUniforms: getUniforms
};
exports.gouraudlighting = gouraudlighting;
var phonglighting = {
  name: 'phong-lighting',
  dependencies: [_lights["default"]],
  fs: _phongLighting["default"],
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  getUniforms: getUniforms
};
exports.phonglighting = phonglighting;
var INITIAL_MODULE_OPTIONS = {};

function getMaterialUniforms(material) {
  var materialUniforms = {};
  materialUniforms.lighting_uAmbient = material.ambient;
  materialUniforms.lighting_uDiffuse = material.diffuse;
  materialUniforms.lighting_uShininess = material.shininess;
  materialUniforms.lighting_uSpecularColor = material.specularColor;
  return materialUniforms;
}

function getUniforms() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_MODULE_OPTIONS;

  if (!('material' in opts)) {
    return {};
  }

  var material = opts.material;

  if (!material) {
    return {
      lighting_uEnabled: false
    };
  }

  return getMaterialUniforms(material);
}
//# sourceMappingURL=phong-lighting.js.map
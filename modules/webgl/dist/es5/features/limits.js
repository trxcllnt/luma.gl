"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContextLimits = getContextLimits;
exports.getGLContextInfo = getGLContextInfo;
exports.getContextInfo = getContextInfo;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _webglUtils = require("../webgl-utils");

var _webglLimitsTable = _interopRequireDefault(require("./webgl-limits-table"));

var _getContextDebugInfo = require("../debug/get-context-debug-info");

function getContextLimits(gl) {
  gl.luma = gl.luma || {};

  if (!gl.luma.limits) {
    gl.luma.limits = {};
    gl.luma.webgl1MinLimits = {};
    gl.luma.webgl2MinLimits = {};
    var isWebgl2 = (0, _webglUtils.isWebGL2)(gl);

    for (var parameter in _webglLimitsTable["default"]) {
      var limit = _webglLimitsTable["default"][parameter];
      var webgl1MinLimit = limit.gl1;
      var webgl2MinLimit = 'gl2' in limit ? limit.gl2 : limit.gl1;
      var minLimit = isWebgl2 ? webgl2MinLimit : webgl1MinLimit;
      var limitNotAvailable = 'gl2' in limit && !isWebgl2 || 'extension' in limit && !gl.getExtension(limit.extension);
      var value = limitNotAvailable ? minLimit : gl.getParameter(parameter);
      gl.luma.limits[parameter] = value;
      gl.luma.webgl1MinLimits[parameter] = webgl1MinLimit;
      gl.luma.webgl2MinLimits[parameter] = webgl2MinLimit;
    }
  }

  return gl.luma.limits;
}

function getGLContextInfo(gl) {
  gl.luma = gl.luma || {};
  var info = (0, _getContextDebugInfo.getContextDebugInfo)(gl);

  if (!gl.luma.info) {
    var _gl$luma$info;

    gl.luma.info = (_gl$luma$info = {}, (0, _defineProperty2["default"])(_gl$luma$info, 37445, info.vendor), (0, _defineProperty2["default"])(_gl$luma$info, 37446, info.renderer), (0, _defineProperty2["default"])(_gl$luma$info, 7936, info.vendorMasked), (0, _defineProperty2["default"])(_gl$luma$info, 7937, info.rendererMasked), (0, _defineProperty2["default"])(_gl$luma$info, 7938, info.version), (0, _defineProperty2["default"])(_gl$luma$info, 35724, info.shadingLanguageVersion), _gl$luma$info);
  }

  return gl.luma.info;
}

function getContextInfo(gl) {
  return Object.assign((0, _getContextDebugInfo.getContextDebugInfo)(gl), {
    limits: getContextLimits(gl),
    info: getGLContextInfo(gl),
    webgl1MinLimits: gl.luma.webgl1MinLimits,
    webgl2MinLimits: gl.luma.webgl2MinLimits
  });
}
//# sourceMappingURL=limits.js.map
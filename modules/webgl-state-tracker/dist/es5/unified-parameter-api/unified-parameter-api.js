"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setParameter = setParameter;
exports.setParameters = setParameters;
exports.getParameter = getParameter;
exports.getParameters = getParameters;
exports.getDefaultParameters = getDefaultParameters;
exports.resetParameters = resetParameters;
exports.getModifiedParameters = getModifiedParameters;

var _webglParameterTables = require("./webgl-parameter-tables");

var _deepArrayEqual = _interopRequireDefault(require("../utils/deep-array-equal"));

var _utils = require("../utils");

function setParameter(gl, key, value) {
  var getter = _webglParameterTables.GL_PARAMETER_GETTERS[key];
  var prevValue = getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
  var setter = _webglParameterTables.GL_PARAMETER_SETTERS[key];
  (0, _utils.assert)(typeof setter === 'function');
  setter(gl, value, Number(key));
  return prevValue;
}

function setParameters(gl, values) {
  var compositeSetters = {};

  for (var key in values) {
    var glConstant = Number(key);
    var setter = _webglParameterTables.GL_PARAMETER_SETTERS[key];

    if (setter) {
      if (typeof setter === 'string') {
        compositeSetters[setter] = true;
      } else {
        setter(gl, values[key], glConstant);
      }
    }
  }

  var cache = gl.state && gl.state.cache;

  if (cache) {
    var mergedValues = Object.assign({}, cache, values);

    for (var _key in compositeSetters) {
      var compositeSetter = _webglParameterTables.GL_COMPOSITE_PARAMETER_SETTERS[_key];
      compositeSetter(gl, mergedValues);
    }
  }
}

function getParameter(gl, key) {
  var getter = _webglParameterTables.GL_PARAMETER_GETTERS[key];
  return getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
}

function getParameters(gl, parameters) {
  parameters = parameters || _webglParameterTables.GL_PARAMETER_DEFAULTS;
  var parameterKeys = Array.isArray(parameters) ? parameters : Object.keys(parameters);
  var state = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parameterKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      state[key] = getParameter(gl, key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return state;
}

function getDefaultParameters(gl) {
  return Object.assign({}, _webglParameterTables.GL_PARAMETER_DEFAULTS, {});
}

function resetParameters(gl) {
  setParameters(gl, getDefaultParameters(gl));
}

function getModifiedParameters(gl) {
  var values = getParameters(_webglParameterTables.GL_PARAMETER_DEFAULTS);
  var modified = {};

  for (var key in _webglParameterTables.GL_PARAMETER_DEFAULTS) {
    if (!(0, _deepArrayEqual["default"])(values[key], _webglParameterTables.GL_PARAMETER_DEFAULTS[key])) {
      modified[key] = values[key];
    }
  }

  return modified;
}
//# sourceMappingURL=unified-parameter-api.js.map
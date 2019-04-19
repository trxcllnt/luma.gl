"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.COLOR_MODE = void 0;

var _compileShader = require("./compile-shader");

var _math = require("math.gl");

var shaderCache = {};
var COLOR_MODE = {
  NONE: 0,
  DEPTH: 1,
  FRAGMENT: 2
};
exports.COLOR_MODE = COLOR_MODE;
var MIN_DEPTH_COLOR = [1, 1, 0, 1];
var MAX_DEPTH_COLOR = [0, 0, 1, 1];
var DISCARDED_FRAG_COLOR = [1, 0, 0, 1];

var _default = function _default(_ref) {
  var model = _ref.model,
      draw = _ref.draw,
      _ref$colorMode = _ref.colorMode,
      colorMode = _ref$colorMode === void 0 ? COLOR_MODE.NONE : _ref$colorMode;
  var shaders = getShaders(model);
  var uniforms = model.program.uniforms;

  var _sortAttributes = sortAttributes(model._attributes),
      instancedAttributes = _sortAttributes.instancedAttributes,
      vertexAttributes = _sortAttributes.vertexAttributes,
      indices = _sortAttributes.indices,
      attributeValues = _sortAttributes.attributeValues,
      vertexCount = _sortAttributes.vertexCount;

  var drawMode = model.getDrawMode();
  var instanceCount = model.instanceCount || 1;

  for (var i = 0; i < instanceCount; i++) {
    var ai = getAttributeAtIndex(instancedAttributes, i, attributeValues);
    var positions = [];
    var colors = [];

    for (var j = 0; j < vertexCount; j++) {
      var aj = Object.assign({}, ai, getAttributeAtIndex(vertexAttributes, j, attributeValues));

      var _renderVertex = renderVertex(shaders, uniforms, aj, colorMode),
          position = _renderVertex.position,
          color = _renderVertex.color;

      positions[j] = position;
      colors[j] = color;
    }

    draw({
      indices: indices,
      drawMode: drawMode,
      positions: positions,
      colors: colors
    });
  }
};

exports["default"] = _default;

function getShaders(model) {
  var id = model.id,
      program = model.program;
  var vs = shaderCache[program.vs.source];

  if (!vs) {
    vs = (0, _compileShader.compileVertexShader)("".concat(id, "-vs"), program.vs.source);
    shaderCache[program.vs.source] = vs;
  }

  var fs = shaderCache[program.fs.source];

  if (!fs) {
    fs = (0, _compileShader.compileFragmentShader)("".concat(id, "-fs"), program.fs.source);
    shaderCache[program.fs.source] = fs;
  }

  return {
    vs: vs,
    fs: fs
  };
}

function sortAttributes(attributes) {
  var attributeValues = {};
  var instancedAttributes = {};
  var vertexAttributes = {};
  var indexAttribute = null;
  var vertexCount = 1;

  for (var attributeName in attributes) {
    var attribute = attributes[attributeName];

    if (attribute.isIndexed) {
      indexAttribute = attribute;
    } else if (attribute.divisor) {
      instancedAttributes[attributeName] = attribute;
    } else {
      vertexAttributes[attributeName] = attribute;

      if (!attribute.constant) {
        vertexCount = attribute.getBuffer().getElementCount() / attribute.size;
      }
    }

    attributeValues[attributeName] = !attribute.constant && attribute.getBuffer().getData();
  }

  var indices;

  if (indexAttribute) {
    indices = attributeValues[indexAttribute.id];
  } else {
    indices = Array.from({
      length: vertexCount
    }, function (d, i) {
      return i;
    });
  }

  return {
    instancedAttributes: instancedAttributes,
    vertexAttributes: vertexAttributes,
    indices: indices,
    attributeValues: attributeValues,
    vertexCount: vertexCount
  };
}

function getAttributeAtIndex(attributes, i, values) {
  var result = {};

  for (var attributeName in attributes) {
    var attribute = attributes[attributeName];

    if (attribute.constant) {
      result[attributeName] = attribute.value;
    } else {
      var size = attribute.size;
      var value = values[attributeName].subarray(i * size, (i + 1) * size);
      result[attributeName] = Array.from(value);
    }
  }

  return result;
}

function renderVertex(shaders, uniforms, attributes, colorMode) {
  var _shaders$vs = shaders.vs(uniforms, attributes),
      gl_Position = _shaders$vs.gl_Position,
      varyings = _shaders$vs.varyings;

  var color;

  switch (colorMode) {
    case COLOR_MODE.DEPTH:
      {
        var depth = (0, _math.clamp)(gl_Position[2] / gl_Position[3], -1, 1);
        color = (0, _math.lerp)(MIN_DEPTH_COLOR, MAX_DEPTH_COLOR, (depth + 1) / 2);
        break;
      }

    case COLOR_MODE.FRAGMENT:
      {
        var _shaders$fs = shaders.fs(uniforms, varyings),
            gl_FragColor = _shaders$fs.gl_FragColor,
            isDiscarded = _shaders$fs.isDiscarded;

        color = isDiscarded ? DISCARDED_FRAG_COLOR : gl_FragColor;
        break;
      }

    default:
  }

  return {
    position: gl_Position,
    color: color
  };
}
//# sourceMappingURL=draw-model.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _geometry = _interopRequireDefault(require("../geometry/geometry"));

var _geometryUtils = require("../geometry/geometry-utils");

var _utils = require("../utils");

var PlaneGeometry = function (_Geometry) {
  (0, _inherits2["default"])(PlaneGeometry, _Geometry);

  function PlaneGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PlaneGeometry);
    var _props$id = props.id,
        id = _props$id === void 0 ? (0, _utils.uid)('plane-geometry') : _props$id;

    var _tesselatePlane = tesselatePlane(props),
        indices = _tesselatePlane.indices,
        attributes = _tesselatePlane.attributes;

    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaneGeometry).call(this, (0, _objectSpread2["default"])({}, props, {
      id: id,
      indices: indices,
      attributes: (0, _objectSpread2["default"])({}, attributes, props.attributes)
    })));
  }

  return PlaneGeometry;
}(_geometry["default"]);

exports["default"] = PlaneGeometry;

function tesselatePlane(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'x,y' : _props$type,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? 0 : _props$offset,
      _props$flipCull = props.flipCull,
      flipCull = _props$flipCull === void 0 ? false : _props$flipCull,
      _props$unpack = props.unpack,
      unpack = _props$unpack === void 0 ? false : _props$unpack;
  var coords = type.split(',');
  var c1len = props["".concat(coords[0], "len")];
  var c2len = props["".concat(coords[1], "len")];
  var subdivisions1 = props["n".concat(coords[0])] || 1;
  var subdivisions2 = props["n".concat(coords[1])] || 1;
  var numVertices = (subdivisions1 + 1) * (subdivisions2 + 1);
  var positions = new Float32Array(numVertices * 3);
  var normals = new Float32Array(numVertices * 3);
  var texCoords = new Float32Array(numVertices * 2);

  if (flipCull) {
    c1len = -c1len;
  }

  var i2 = 0;
  var i3 = 0;

  for (var z = 0; z <= subdivisions2; z++) {
    for (var x = 0; x <= subdivisions1; x++) {
      var u = x / subdivisions1;
      var v = z / subdivisions2;
      texCoords[i2 + 0] = flipCull ? 1 - u : u;
      texCoords[i2 + 1] = v;

      switch (type) {
        case 'x,y':
          positions[i3 + 0] = c1len * u - c1len * 0.5;
          positions[i3 + 1] = c2len * v - c2len * 0.5;
          positions[i3 + 2] = offset;
          normals[i3 + 0] = 0;
          normals[i3 + 1] = 0;
          normals[i3 + 2] = flipCull ? 1 : -1;
          break;

        case 'x,z':
          positions[i3 + 0] = c1len * u - c1len * 0.5;
          positions[i3 + 1] = offset;
          positions[i3 + 2] = c2len * v - c2len * 0.5;
          normals[i3 + 0] = 0;
          normals[i3 + 1] = flipCull ? 1 : -1;
          normals[i3 + 2] = 0;
          break;

        case 'y,z':
          positions[i3 + 0] = offset;
          positions[i3 + 1] = c1len * u - c1len * 0.5;
          positions[i3 + 2] = c2len * v - c2len * 0.5;
          normals[i3 + 0] = flipCull ? 1 : -1;
          normals[i3 + 1] = 0;
          normals[i3 + 2] = 0;
          break;

        default:
          break;
      }

      i2 += 2;
      i3 += 3;
    }
  }

  var numVertsAcross = subdivisions1 + 1;
  var indices = new Uint16Array(subdivisions1 * subdivisions2 * 6);

  for (var _z = 0; _z < subdivisions2; _z++) {
    for (var _x = 0; _x < subdivisions1; _x++) {
      var index = (_z * subdivisions1 + _x) * 6;
      indices[index + 0] = (_z + 0) * numVertsAcross + _x;
      indices[index + 1] = (_z + 1) * numVertsAcross + _x;
      indices[index + 2] = (_z + 0) * numVertsAcross + _x + 1;
      indices[index + 3] = (_z + 1) * numVertsAcross + _x;
      indices[index + 4] = (_z + 1) * numVertsAcross + _x + 1;
      indices[index + 5] = (_z + 0) * numVertsAcross + _x + 1;
    }
  }

  var geometry = {
    indices: {
      size: 1,
      value: indices
    },
    attributes: {
      POSITION: {
        size: 3,
        value: positions
      },
      NORMAL: {
        size: 3,
        value: normals
      },
      TEXCOORD_0: {
        size: 2,
        value: texCoords
      }
    }
  };
  return unpack ? (0, _geometryUtils.unpackIndexedGeometry)(geometry) : geometry;
}
//# sourceMappingURL=plane-geometry.js.map
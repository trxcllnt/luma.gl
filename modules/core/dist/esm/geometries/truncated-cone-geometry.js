import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Geometry from '../geometry/geometry';
import { uid } from '../utils';
var INDEX_OFFSETS = {
  x: [2, 0, 1],
  y: [0, 1, 2],
  z: [1, 2, 0]
};

var TruncatedConeGeometry = function (_Geometry) {
  _inherits(TruncatedConeGeometry, _Geometry);

  function TruncatedConeGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TruncatedConeGeometry);

    var _props$id = props.id,
        id = _props$id === void 0 ? uid('truncated-code-geometry') : _props$id;

    var _tesselateTruncatedCo = tesselateTruncatedCone(props),
        indices = _tesselateTruncatedCo.indices,
        attributes = _tesselateTruncatedCo.attributes;

    return _possibleConstructorReturn(this, _getPrototypeOf(TruncatedConeGeometry).call(this, _objectSpread({}, props, {
      id: id,
      indices: indices,
      attributes: _objectSpread({}, attributes, props.attributes)
    })));
  }

  return TruncatedConeGeometry;
}(Geometry);

export { TruncatedConeGeometry as default };

function tesselateTruncatedCone(props) {
  var _props$bottomRadius = props.bottomRadius,
      bottomRadius = _props$bottomRadius === void 0 ? 0 : _props$bottomRadius,
      _props$topRadius = props.topRadius,
      topRadius = _props$topRadius === void 0 ? 0 : _props$topRadius,
      _props$height = props.height,
      height = _props$height === void 0 ? 1 : _props$height,
      _props$nradial = props.nradial,
      nradial = _props$nradial === void 0 ? 10 : _props$nradial,
      _props$nvertical = props.nvertical,
      nvertical = _props$nvertical === void 0 ? 10 : _props$nvertical,
      _props$verticalAxis = props.verticalAxis,
      verticalAxis = _props$verticalAxis === void 0 ? 'y' : _props$verticalAxis,
      _props$topCap = props.topCap,
      topCap = _props$topCap === void 0 ? false : _props$topCap,
      _props$bottomCap = props.bottomCap,
      bottomCap = _props$bottomCap === void 0 ? false : _props$bottomCap;
  var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
  var numVertices = (nradial + 1) * (nvertical + 1 + extra);
  var slant = Math.atan2(bottomRadius - topRadius, height);
  var msin = Math.sin;
  var mcos = Math.cos;
  var mpi = Math.PI;
  var cosSlant = mcos(slant);
  var sinSlant = msin(slant);
  var start = topCap ? -2 : 0;
  var end = nvertical + (bottomCap ? 2 : 0);
  var vertsAroundEdge = nradial + 1;
  var indices = new Uint16Array(nradial * (nvertical + extra) * 6);
  var indexOffset = INDEX_OFFSETS[verticalAxis];
  var positions = new Float32Array(numVertices * 3);
  var normals = new Float32Array(numVertices * 3);
  var texCoords = new Float32Array(numVertices * 2);
  var i3 = 0;
  var i2 = 0;

  for (var i = start; i <= end; i++) {
    var v = i / nvertical;
    var y = height * v;
    var ringRadius = void 0;

    if (i < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (i > nvertical) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius + (topRadius - bottomRadius) * (i / nvertical);
    }

    if (i === -2 || i === nvertical + 2) {
      ringRadius = 0;
      v = 0;
    }

    y -= height / 2;

    for (var j = 0; j < vertsAroundEdge; j++) {
      var sin = msin(j * mpi * 2 / nradial);
      var cos = mcos(j * mpi * 2 / nradial);
      positions[i3 + indexOffset[0]] = sin * ringRadius;
      positions[i3 + indexOffset[1]] = y;
      positions[i3 + indexOffset[2]] = cos * ringRadius;
      normals[i3 + indexOffset[0]] = i < 0 || i > nvertical ? 0 : sin * cosSlant;
      normals[i3 + indexOffset[1]] = i < 0 ? -1 : i > nvertical ? 1 : sinSlant;
      normals[i3 + indexOffset[2]] = i < 0 || i > nvertical ? 0 : cos * cosSlant;
      texCoords[i2 + 0] = j / nradial;
      texCoords[i2 + 1] = v;
      i2 += 2;
      i3 += 3;
    }
  }

  for (var _i = 0; _i < nvertical + extra; _i++) {
    for (var _j = 0; _j < nradial; _j++) {
      var index = (_i * nradial + _j) * 6;
      indices[index + 0] = vertsAroundEdge * (_i + 0) + 0 + _j;
      indices[index + 1] = vertsAroundEdge * (_i + 0) + 1 + _j;
      indices[index + 2] = vertsAroundEdge * (_i + 1) + 1 + _j;
      indices[index + 3] = vertsAroundEdge * (_i + 0) + 0 + _j;
      indices[index + 4] = vertsAroundEdge * (_i + 1) + 1 + _j;
      indices[index + 5] = vertsAroundEdge * (_i + 1) + 0 + _j;
    }
  }

  return {
    indices: indices,
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
}
//# sourceMappingURL=truncated-cone-geometry.js.map
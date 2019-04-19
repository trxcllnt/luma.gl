import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import Geometry from '../geometry/geometry';
import { unpackIndexedGeometry } from '../geometry/geometry-utils';
import { uid } from '../utils';
export default class PlaneGeometry extends Geometry {
  constructor() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const _props$id = props.id,
          id = _props$id === void 0 ? uid('plane-geometry') : _props$id;

    const _tesselatePlane = tesselatePlane(props),
          indices = _tesselatePlane.indices,
          attributes = _tesselatePlane.attributes;

    super(_objectSpread({}, props, {
      id,
      indices,
      attributes: _objectSpread({}, attributes, props.attributes)
    }));
  }

}

function tesselatePlane(props) {
  const _props$type = props.type,
        type = _props$type === void 0 ? 'x,y' : _props$type,
        _props$offset = props.offset,
        offset = _props$offset === void 0 ? 0 : _props$offset,
        _props$flipCull = props.flipCull,
        flipCull = _props$flipCull === void 0 ? false : _props$flipCull,
        _props$unpack = props.unpack,
        unpack = _props$unpack === void 0 ? false : _props$unpack;
  const coords = type.split(',');
  let c1len = props["".concat(coords[0], "len")];
  const c2len = props["".concat(coords[1], "len")];
  const subdivisions1 = props["n".concat(coords[0])] || 1;
  const subdivisions2 = props["n".concat(coords[1])] || 1;
  const numVertices = (subdivisions1 + 1) * (subdivisions2 + 1);
  const positions = new Float32Array(numVertices * 3);
  const normals = new Float32Array(numVertices * 3);
  const texCoords = new Float32Array(numVertices * 2);

  if (flipCull) {
    c1len = -c1len;
  }

  let i2 = 0;
  let i3 = 0;

  for (let z = 0; z <= subdivisions2; z++) {
    for (let x = 0; x <= subdivisions1; x++) {
      const u = x / subdivisions1;
      const v = z / subdivisions2;
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

  const numVertsAcross = subdivisions1 + 1;
  const indices = new Uint16Array(subdivisions1 * subdivisions2 * 6);

  for (let z = 0; z < subdivisions2; z++) {
    for (let x = 0; x < subdivisions1; x++) {
      const index = (z * subdivisions1 + x) * 6;
      indices[index + 0] = (z + 0) * numVertsAcross + x;
      indices[index + 1] = (z + 1) * numVertsAcross + x;
      indices[index + 2] = (z + 0) * numVertsAcross + x + 1;
      indices[index + 3] = (z + 1) * numVertsAcross + x;
      indices[index + 4] = (z + 1) * numVertsAcross + x + 1;
      indices[index + 5] = (z + 0) * numVertsAcross + x + 1;
    }
  }

  const geometry = {
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
  return unpack ? unpackIndexedGeometry(geometry) : geometry;
}
//# sourceMappingURL=plane-geometry.js.map
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _TEXTURE_FORMATS, _DATA_FORMAT_CHANNELS, _TYPE_SIZES;

import { isWebGL2 } from '../webgl-utils';
export var TEXTURE_FORMATS = (_TEXTURE_FORMATS = {}, _defineProperty(_TEXTURE_FORMATS, 6407, {
  dataFormat: 6407,
  types: [5121, 33635]
}), _defineProperty(_TEXTURE_FORMATS, 6408, {
  dataFormat: 6408,
  types: [5121, 32819, 32820]
}), _defineProperty(_TEXTURE_FORMATS, 6406, {
  dataFormat: 6406,
  types: [5121]
}), _defineProperty(_TEXTURE_FORMATS, 6409, {
  dataFormat: 6409,
  types: [5121]
}), _defineProperty(_TEXTURE_FORMATS, 6410, {
  dataFormat: 6410,
  types: [5121]
}), _defineProperty(_TEXTURE_FORMATS, 33326, {
  dataFormat: 6403,
  types: [5126],
  gl2: true
}), _defineProperty(_TEXTURE_FORMATS, 33328, {
  dataFormat: 33319,
  types: [5126],
  gl2: true
}), _defineProperty(_TEXTURE_FORMATS, 34837, {
  dataFormat: 6407,
  types: [5126],
  gl2: true
}), _defineProperty(_TEXTURE_FORMATS, 34836, {
  dataFormat: 6408,
  types: [5126],
  gl2: true
}), _TEXTURE_FORMATS);
export var DATA_FORMAT_CHANNELS = (_DATA_FORMAT_CHANNELS = {}, _defineProperty(_DATA_FORMAT_CHANNELS, 6403, 1), _defineProperty(_DATA_FORMAT_CHANNELS, 36244, 1), _defineProperty(_DATA_FORMAT_CHANNELS, 33319, 2), _defineProperty(_DATA_FORMAT_CHANNELS, 33320, 2), _defineProperty(_DATA_FORMAT_CHANNELS, 6407, 3), _defineProperty(_DATA_FORMAT_CHANNELS, 36248, 3), _defineProperty(_DATA_FORMAT_CHANNELS, 6408, 4), _defineProperty(_DATA_FORMAT_CHANNELS, 36249, 4), _defineProperty(_DATA_FORMAT_CHANNELS, 6402, 1), _defineProperty(_DATA_FORMAT_CHANNELS, 34041, 1), _defineProperty(_DATA_FORMAT_CHANNELS, 6406, 1), _defineProperty(_DATA_FORMAT_CHANNELS, 6409, 1), _defineProperty(_DATA_FORMAT_CHANNELS, 6410, 2), _DATA_FORMAT_CHANNELS);
export var TYPE_SIZES = (_TYPE_SIZES = {}, _defineProperty(_TYPE_SIZES, 5126, 4), _defineProperty(_TYPE_SIZES, 5125, 4), _defineProperty(_TYPE_SIZES, 5124, 4), _defineProperty(_TYPE_SIZES, 5123, 2), _defineProperty(_TYPE_SIZES, 5122, 2), _defineProperty(_TYPE_SIZES, 5131, 2), _defineProperty(_TYPE_SIZES, 5120, 1), _defineProperty(_TYPE_SIZES, 5121, 1), _TYPE_SIZES);
export function isFormatSupported(gl, format) {
  var info = TEXTURE_FORMATS[format];

  if (!info) {
    return false;
  }

  if (info.gl1 === undefined && info.gl2 === undefined) {
    return true;
  }

  var value = isWebGL2(gl) ? info.gl2 || info.gl1 : info.gl1;
  return typeof value === 'string' ? gl.getExtension(value) : value;
}
export function isLinearFilteringSupported(gl, format) {
  var info = TEXTURE_FORMATS[format];

  switch (info && info.types[0]) {
    case 5126:
      return gl.getExtension('OES_texture_float_linear');

    case 5131:
      return gl.getExtension('OES_texture_half_float_linear');

    default:
      return true;
  }
}
//# sourceMappingURL=texture-formats.js.map
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _WEBGL2_CONTEXT_POLYF;

import assert from './assert';
import { getParameterPolyfill } from './polyfills/get-parameter-polyfill';
var OES_vertex_array_object = 'OES_vertex_array_object';
var ANGLE_instanced_arrays = 'ANGLE_instanced_arrays';
var WEBGL_draw_buffers = 'WEBGL_draw_buffers';
var EXT_disjoint_timer_query = 'EXT_disjoint_timer_query';
var EXT_texture_filter_anisotropic = 'EXT_texture_filter_anisotropic';
var ERR_VAO_NOT_SUPPORTED = 'VertexArray requires WebGL2 or OES_vertex_array_object extension';

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function getExtensionData(gl, extension) {
  return {
    webgl2: isWebGL2(gl),
    ext: gl.getExtension(extension)
  };
}

export var WEBGL2_CONTEXT_POLYFILLS = (_WEBGL2_CONTEXT_POLYF = {}, _defineProperty(_WEBGL2_CONTEXT_POLYF, OES_vertex_array_object, {
  meta: {
    suffix: 'OES'
  },
  createVertexArray: function createVertexArray() {
    assert(false, ERR_VAO_NOT_SUPPORTED);
  },
  deleteVertexArray: function deleteVertexArray() {},
  bindVertexArray: function bindVertexArray() {},
  isVertexArray: function isVertexArray() {
    return false;
  }
}), _defineProperty(_WEBGL2_CONTEXT_POLYF, ANGLE_instanced_arrays, {
  meta: {
    suffix: 'ANGLE'
  },
  vertexAttribDivisor: function vertexAttribDivisor(location, divisor) {
    assert(divisor === 0, 'WebGL instanced rendering not supported');
  },
  drawElementsInstanced: function drawElementsInstanced() {},
  drawArraysInstanced: function drawArraysInstanced() {}
}), _defineProperty(_WEBGL2_CONTEXT_POLYF, WEBGL_draw_buffers, {
  meta: {
    suffix: 'WEBGL'
  },
  drawBuffers: function drawBuffers() {
    assert(false);
  }
}), _defineProperty(_WEBGL2_CONTEXT_POLYF, EXT_disjoint_timer_query, {
  meta: {
    suffix: 'EXT'
  },
  createQuery: function createQuery() {
    assert(false);
  },
  deleteQuery: function deleteQuery() {
    assert(false);
  },
  beginQuery: function beginQuery() {
    assert(false);
  },
  endQuery: function endQuery() {},
  getQuery: function getQuery(handle, pname) {
    return this.getQueryObject(handle, pname);
  },
  getQueryParameter: function getQueryParameter(handle, pname) {
    return this.getQueryObject(handle, pname);
  },
  getQueryObject: function getQueryObject() {}
}), _WEBGL2_CONTEXT_POLYF);
export var WEBGL2_CONTEXT_OVERRIDES = {
  readBuffer: function readBuffer(gl, originalFunc, attachment) {
    if (isWebGL2(gl)) {
      originalFunc(attachment);
    } else {}
  },
  getVertexAttrib: function getVertexAttrib(gl, originalFunc, location, pname) {
    var _getExtensionData = getExtensionData(gl, ANGLE_instanced_arrays),
        webgl2 = _getExtensionData.webgl2,
        ext = _getExtensionData.ext;

    var result;

    switch (pname) {
      case 35069:
        result = !webgl2 ? false : undefined;
        break;

      case 35070:
        result = !webgl2 && !ext ? 0 : undefined;
        break;

      default:
    }

    return result !== undefined ? result : originalFunc(location, pname);
  },
  getProgramParameter: function getProgramParameter(gl, originalFunc, program, pname) {
    if (!isWebGL2(gl)) {
      switch (pname) {
        case 35967:
          return 35981;

        case 35971:
          return 0;

        case 35382:
          return 0;

        default:
      }
    }

    return originalFunc(program, pname);
  },
  getInternalformatParameter: function getInternalformatParameter(gl, originalFunc, target, format, pname) {
    if (!isWebGL2(gl)) {
      switch (pname) {
        case 32937:
          return new Int32Array([0]);

        default:
      }
    }

    return gl.getInternalformatParameter(target, format, pname);
  },
  getTexParameter: function getTexParameter(gl, originalFunc, target, pname) {
    switch (pname) {
      case 34046:
        var extensions = gl.luma.extensions;
        var ext = extensions[EXT_texture_filter_anisotropic];
        pname = ext && ext.TEXTURE_MAX_ANISOTROPY_EXT || 34046;
        break;

      default:
    }

    return originalFunc(target, pname);
  },
  getParameter: getParameterPolyfill,
  hint: function hint(gl, originalFunc, pname, value) {
    return originalFunc(pname, value);
  }
};
//# sourceMappingURL=polyfill-table.js.map
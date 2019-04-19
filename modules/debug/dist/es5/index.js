"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "COLOR_MODE", {
  enumerable: true,
  get: function get() {
    return _drawModel.COLOR_MODE;
  }
});
Object.defineProperty(exports, "_DebugContext", {
  enumerable: true,
  get: function get() {
    return _debugContext["default"];
  }
});
Object.defineProperty(exports, "compileShaderModule", {
  enumerable: true,
  get: function get() {
    return _compileShader.compileShaderModule;
  }
});
Object.defineProperty(exports, "compileVertexShader", {
  enumerable: true,
  get: function get() {
    return _compileShader.compileVertexShader;
  }
});
Object.defineProperty(exports, "compileFragmentShader", {
  enumerable: true,
  get: function get() {
    return _compileShader.compileFragmentShader;
  }
});
Object.defineProperty(exports, "makeDebugContext", {
  enumerable: true,
  get: function get() {
    return _webglDebugContext.makeDebugContext;
  }
});

var _core = require("@luma.gl/core");

var _drawModel = require("./glsl-to-js-compiler/draw-model");

var _debugContext = _interopRequireDefault(require("./glsl-to-js-compiler/debug-context"));

var _compileShader = require("./glsl-to-js-compiler/compile-shader");

var _webglDebugContext = require("./webgl-api-tracing/webgl-debug-context");

_core.global.makeDebugContext = _webglDebugContext.makeDebugContext;

_core.log.info('@luma.gl/debug: WebGL debug support installed');
//# sourceMappingURL=index.js.map
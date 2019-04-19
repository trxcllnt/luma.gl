"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _webgl = require("@luma.gl/webgl");

var RenderState = function () {
  function RenderState(gl) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, RenderState);
    this.gl = gl;
    this.framebuffer1 = new _webgl.Framebuffer(gl, {
      id: 'multi-pass-1',
      stencil: true
    });
    this.framebuffer2 = new _webgl.Framebuffer(gl, {
      id: 'multi-pass-2',
      stencil: true
    });
    this.reset();
  }

  (0, _createClass2["default"])(RenderState, [{
    key: "reset",
    value: function reset() {
      this.framebuffer1.resize();
      this.framebuffer2.resize();
      this.writeBuffer = this.framebuffer1;
      this.readBuffer = this.framebuffer2;
      this.maskActive = false;
    }
  }, {
    key: "_swapFramebuffers",
    value: function _swapFramebuffers() {
      var tmp = this.readBuffer;
      this.readBuffer = this.writeBuffer;
      this.writeBuffer = tmp;
    }
  }]);
  return RenderState;
}();

exports["default"] = RenderState;
//# sourceMappingURL=render-state.js.map
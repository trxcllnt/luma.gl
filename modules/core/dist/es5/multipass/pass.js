"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _webgl = require("@luma.gl/webgl");

var Pass = function () {
  function Pass(gl, props) {
    (0, _classCallCheck2["default"])(this, Pass);
    var _props$id = props.id,
        id = _props$id === void 0 ? 'pass' : _props$id;
    this.id = id;
    this.gl = gl;
    this.props = {
      enabled: true,
      screen: false,
      swap: false
    };
    Object.assign(this.props, props);
  }

  (0, _createClass2["default"])(Pass, [{
    key: "setProps",
    value: function setProps(props) {
      Object.assign(this.props, props);
    }
  }, {
    key: "render",
    value: function render(renderState, animationProps) {
      var _this = this;

      if (!this.props.enabled) {
        return;
      }

      var gl = this.gl;
      var renderParams = {
        gl: gl,
        outputBuffer: renderState.writeBuffer,
        inputBuffer: renderState.readBuffer,
        animationProps: animationProps,
        swapBuffers: function swapBuffers() {
          return renderState._swapFramebuffers();
        }
      };

      if (this.props.screen) {
        renderParams.inputBuffer = renderParams.outputBuffer;
        renderParams.outputBuffer = _webgl.Framebuffer.getDefaultFramebuffer(gl);
      } else if (this.props.swap) {
        renderParams.inputBuffer = renderState.writeBuffer;
        renderParams.outputBuffer = renderState.readBuffer;
      }

      (0, _webgl.withParameters)(gl, {
        framebuffer: renderParams.outputBuffer
      }, function () {
        return _this._renderPass(renderParams);
      });

      if (this.props.debug) {
        renderParams.outputBuffer.log(1, this.id);
      }

      if (this.props.swap) {
        renderState._swapFramebuffers();
      }
    }
  }, {
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var gl = _ref.gl,
          inputBuffer = _ref.inputBuffer,
          outputBuffer = _ref.outputBuffer,
          animationProps = _ref.animationProps;
    }
  }]);
  return Pass;
}();

exports["default"] = Pass;
//# sourceMappingURL=pass.js.map
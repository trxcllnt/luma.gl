"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@luma.gl/core");

var _convolution = _interopRequireDefault(require("../modules/convolution"));

var ConvolutionPass = function (_Pass) {
  (0, _inherits2["default"])(ConvolutionPass, _Pass);
  (0, _createClass2["default"])(ConvolutionPass, null, [{
    key: "KERNEL",
    get: function get() {
      return _convolution["default"].KERNEL;
    }
  }]);

  function ConvolutionPass(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, ConvolutionPass);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ConvolutionPass).call(this, gl, Object.assign({
      id: 'convolution-pass',
      swap: true,
      kernel: _convolution["default"].KERNEL.NORMAL
    }, props)));
    _this.clipspace = new _core.ClipSpace(gl, {
      id: 'convolution-pass',
      modules: [_convolution["default"]],
      fs: "\n        uniform sampler2D tDiffuse;\n        varying vec2 uv; // the texCoords passed in from the vertex shader.\n        void main() {\n          gl_FragColor = convolution_getColor(tDiffuse, uv);\n        }\n      "
    });

    _this.setProps(props);

    return _this;
  }

  (0, _createClass2["default"])(ConvolutionPass, [{
    key: "setProps",
    value: function setProps(props) {
      Object.assign(this.props, props);
      this.clipspace.setUniforms({
        uKernel: this.props.kernel,
        uKernelWeight: this.props.kernel.reduce(function (sum, x) {
          return sum + x;
        }, 0)
      });
    }
  }, {
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var inputBuffer = _ref.inputBuffer,
          outputBuffer = _ref.outputBuffer;
      var width = inputBuffer.width,
          height = inputBuffer.height;
      this.clipspace.draw({
        uniforms: {
          tDiffuse: inputBuffer,
          uTextureSize: [width, height]
        },
        parameters: {
          depthWrite: false,
          depthTest: false
        }
      });
    }
  }]);
  return ConvolutionPass;
}(_core._Pass);

exports["default"] = ConvolutionPass;
//# sourceMappingURL=convolution-pass.js.map
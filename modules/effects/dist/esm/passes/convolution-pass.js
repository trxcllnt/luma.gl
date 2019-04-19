import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { _Pass as Pass, ClipSpace } from '@luma.gl/core';
import convolution from '../modules/convolution';

var ConvolutionPass = function (_Pass) {
  _inherits(ConvolutionPass, _Pass);

  _createClass(ConvolutionPass, null, [{
    key: "KERNEL",
    get: function get() {
      return convolution.KERNEL;
    }
  }]);

  function ConvolutionPass(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ConvolutionPass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConvolutionPass).call(this, gl, Object.assign({
      id: 'convolution-pass',
      swap: true,
      kernel: convolution.KERNEL.NORMAL
    }, props)));
    _this.clipspace = new ClipSpace(gl, {
      id: 'convolution-pass',
      modules: [convolution],
      fs: "\n        uniform sampler2D tDiffuse;\n        varying vec2 uv; // the texCoords passed in from the vertex shader.\n        void main() {\n          gl_FragColor = convolution_getColor(tDiffuse, uv);\n        }\n      "
    });

    _this.setProps(props);

    return _this;
  }

  _createClass(ConvolutionPass, [{
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
}(Pass);

export { ConvolutionPass as default };
//# sourceMappingURL=convolution-pass.js.map
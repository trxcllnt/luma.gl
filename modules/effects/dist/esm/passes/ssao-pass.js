import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { _Pass as Pass, Framebuffer, ClipSpace, withParameters } from '@luma.gl/core';
import ssao from '../modules/ssao';

var SSAOPass = function (_Pass) {
  _inherits(SSAOPass, _Pass);

  function SSAOPass(gl, props) {
    var _this;

    _classCallCheck(this, SSAOPass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SSAOPass).call(this, gl, Object.assign({
      id: 'ssao-pass',
      swap: true
    }, ssao.DEFAULT_PROPS, props)));
    _this.renderToScreen = false;
    _this.depthFramebuffer = new Framebuffer(gl, {
      id: 'ssao-pass-depth-map'
    });
    _this.clipspace = new ClipSpace(gl, {
      id: 'ssao-pass',
      modules: [ssao],
      fs: "\n        varying vec2 uv;\n        void main() {\n          gl_FragColor = ssao_getColor(uv);\n        }\n      "
    });

    _this.setProps(props);

    return _this;
  }

  _createClass(SSAOPass, [{
    key: "setProps",
    value: function setProps(props) {
      _get(_getPrototypeOf(SSAOPass.prototype), "setProps", this).call(this, props);

      var _this$props = this.props,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 512 : _this$props$width,
          _this$props$height = _this$props.height,
          height = _this$props$height === void 0 ? 512 : _this$props$height;
      this.depthFramebuffer.resize({
        width: width,
        height: height
      });
      this.clipspace.setUniforms(this.props);
    }
  }, {
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var _this2 = this;

      var inputBuffer = _ref.inputBuffer,
          outputBuffer = _ref.outputBuffer,
          animationProps = _ref.animationProps;
      var width = inputBuffer.width,
          height = inputBuffer.height;
      this.depthFramebuffer.resize({
        width: width,
        height: height
      });
      withParameters(this.gl, {
        framebuffer: this.depthFramebuffer
      }, function () {
        _this2.gl.clear(_this2.gl.COLOR_BUFFER_BIT | _this2.gl.DEPTH_BUFFER_BIT);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this2.props.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var model = _step.value;
            model.setUniforms({
              depth_uEnabled: true
            });
            model.draw(Object.assign({}, _this2.props.drawParams, {
              animationProps: animationProps
            }));
            model.setUniforms({
              depth_uEnabled: false
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.clipspace.draw({
        animationProps: animationProps,
        uniforms: {
          tDepth: this.depthFramebuffer,
          tDiffuse: inputBuffer,
          size: [this.depthFramebuffer.width, this.depthFramebuffer.height]
        }
      });
    }
  }]);

  return SSAOPass;
}(Pass);

export { SSAOPass as default };
//# sourceMappingURL=ssao-pass.js.map
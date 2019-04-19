"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@luma.gl/core");

var _ssao = _interopRequireDefault(require("../modules/ssao"));

var SSAOPass = function (_Pass) {
  (0, _inherits2["default"])(SSAOPass, _Pass);

  function SSAOPass(gl, props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SSAOPass);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SSAOPass).call(this, gl, Object.assign({
      id: 'ssao-pass',
      swap: true
    }, _ssao["default"].DEFAULT_PROPS, props)));
    _this.renderToScreen = false;
    _this.depthFramebuffer = new _core.Framebuffer(gl, {
      id: 'ssao-pass-depth-map'
    });
    _this.clipspace = new _core.ClipSpace(gl, {
      id: 'ssao-pass',
      modules: [_ssao["default"]],
      fs: "\n        varying vec2 uv;\n        void main() {\n          gl_FragColor = ssao_getColor(uv);\n        }\n      "
    });

    _this.setProps(props);

    return _this;
  }

  (0, _createClass2["default"])(SSAOPass, [{
    key: "setProps",
    value: function setProps(props) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SSAOPass.prototype), "setProps", this).call(this, props);
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
      (0, _core.withParameters)(this.gl, {
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
}(_core._Pass);

exports["default"] = SSAOPass;
//# sourceMappingURL=ssao-pass.js.map
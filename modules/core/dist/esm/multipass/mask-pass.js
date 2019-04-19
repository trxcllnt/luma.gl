import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Pass from './pass';

var MaskPass = function (_Pass) {
  _inherits(MaskPass, _Pass);

  function MaskPass(gl, props) {
    var _this;

    _classCallCheck(this, MaskPass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskPass).call(this, gl, Object.assign({
      id: 'mask-pass'
    }, props)));
    _this.inverse = false;
    _this.clearStencil = true;
    return _this;
  }

  _createClass(MaskPass, [{
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var gl = _ref.gl;
      var writeValue = 1;
      var clearValue = 0;

      if (this.inverse) {
        writeValue = 0;
        clearValue = 1;
      }

      gl.colorMask(false, false, false, false);
      gl.depthMask(false);
      gl.enable(2960);
      gl.stencilOp(7681, 7681, 7681);
      gl.stencilFunc(519, writeValue, 0xffffffff);
      gl.clearStencil(clearValue);
      gl.colorMask(true, true, true, true);
      gl.depthMask(true);
      gl.stencilFunc(514, 1, 0xffffffff);
      gl.stencilOp(7680, 7680, 7680);
    }
  }]);

  return MaskPass;
}(Pass);

export { MaskPass as default };
//# sourceMappingURL=mask-pass.js.map
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { _Pass as Pass, withParameters, setParameters } from '@luma.gl/core';

var OutlinePass = function (_Pass) {
  _inherits(OutlinePass, _Pass);

  function OutlinePass(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, OutlinePass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OutlinePass).call(this, gl, Object.assign({
      id: 'simple-outline-pass'
    }, props)));

    _this.setProps(props);

    return _this;
  }

  _createClass(OutlinePass, [{
    key: "setProps",
    value: function setProps(props) {
      this.props = Object.assign(this.props, props);
    }
  }, {
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var _this2 = this;

      var gl = _ref.gl,
          animationProps = _ref.animationProps;
      withParameters(gl, {
        stencilTest: true,
        stencilOp: [7680, 7680, 7681]
      }, function () {
        setParameters(gl, {
          stencilFunc: [519, 1, 0xff],
          stencilMask: 0x01
        });
        gl.clear(1024);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this2.props.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var model = _step.value;
            model.setUniforms(_this2.props.normalUniforms);
            model.draw(_this2.props.drawParams);
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

        setParameters(gl, {
          stencilFunc: [517, 1, 0x01],
          stencilMask: 0x00,
          depthTest: false
        });
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this2.props.models[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _model = _step2.value;

            _model.setUniforms(_this2.props.outlineUniforms);

            _model.draw(_this2.props.drawParams);

            _model.setUniforms(_this2.props.normalUniforms);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    }
  }]);

  return OutlinePass;
}(Pass);

export { OutlinePass as default };
//# sourceMappingURL=outline-pass.js.map
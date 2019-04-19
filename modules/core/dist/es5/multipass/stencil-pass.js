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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _webgl = require("@luma.gl/webgl");

var _pass = _interopRequireDefault(require("./pass"));

function getMask() {
  var indices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var bits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var mask = 0;
  indices.forEach(function (index) {
    mask = mask & 1 >> index;
  });
  return mask;
}

var StencilPass = function (_Pass) {
  (0, _inherits2["default"])(StencilPass, _Pass);

  function StencilPass(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, StencilPass);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StencilPass).call(this, gl, Object.assign({
      id: 'simple-outline-pass',
      swap: false
    }, props)));
    _this.props = Object.assign({}, props);

    _this.setProps(props);

    return _this;
  }

  (0, _createClass2["default"])(StencilPass, [{
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var _this2 = this;

      var gl = _ref.gl,
          inputBuffer = _ref.inputBuffer,
          outputBuffer = _ref.outputBuffer,
          animationPropst = _ref.animationPropst;
      var stencilReadMask = getMask(this.props.stencils);
      var stencilWriteMask = getMask(this.props.updateStencil);
      (0, _webgl.withParameters)(gl, {
        stencilTest: stencilReadMask !== 0 && stencilWriteMask !== 0,
        stencilOp: [7680, 7680, 7681]
      }, function () {
        if (stencilReadMask) {
          (0, _webgl.setParameters)(gl, {
            stencilFunc: [514, 0, stencilReadMask]
          });
        }

        (0, _webgl.setParameters)(gl, {
          stencilMask: stencilWriteMask
        });

        if (_this2.props.clearStencil) {
          gl.clear(1024);
        }

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

        (0, _webgl.setParameters)(gl, {
          stencilFunc: [514, 0, stencilReadMask],
          stencilMask: 0x00
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
  return StencilPass;
}(_pass["default"]);

exports["default"] = StencilPass;
//# sourceMappingURL=stencil-pass.js.map
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import CompositePass from './composite-pass';
import RenderState from './render-state';

var MultiPassRenderer = function (_CompositePass) {
  _inherits(MultiPassRenderer, _CompositePass);

  function MultiPassRenderer(gl, props) {
    var _this;

    _classCallCheck(this, MultiPassRenderer);

    props = Array.isArray(props) ? {
      passes: props
    } : props;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiPassRenderer).call(this, gl, Object.assign({
      id: 'multi-pass'
    }, props)));
    _this.renderState = new RenderState(gl, props);
    return _this;
  }

  _createClass(MultiPassRenderer, [{
    key: "render",
    value: function render(animationProps) {
      this.renderState.reset();
      var _this$props$passes = this.props.passes,
          passes = _this$props$passes === void 0 ? [] : _this$props$passes;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = passes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pass = _step.value;
          pass.render(this.renderState, animationProps);
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

      return this;
    }
  }]);

  return MultiPassRenderer;
}(CompositePass);

export { MultiPassRenderer as default };
//# sourceMappingURL=multi-pass-renderer.js.map
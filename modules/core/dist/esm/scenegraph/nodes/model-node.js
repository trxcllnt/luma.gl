import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Model from '../../lib/model';
import ScenegraphNode from './scenegraph-node';

var ModelNode = function (_ScenegraphNode) {
  _inherits(ModelNode, _ScenegraphNode);

  function ModelNode(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ModelNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelNode).call(this, props));
    _this.onBeforeRender = null;
    _this.AfterRender = null;

    if (gl instanceof Model) {
      _this.model = gl;

      _this._setModelNodeProps(props);
    } else {
      _this.model = new Model(gl, props);
    }

    _this.managedResources = props.managedResources || [];
    return _this;
  }

  _createClass(ModelNode, [{
    key: "setProps",
    value: function setProps(props) {
      _get(_getPrototypeOf(ModelNode.prototype), "setProps", this).call(this, props);

      this._setModelNodeProps(props);

      return this;
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (this.model) {
        this.model["delete"]();
        this.model = null;
      }

      this.managedResources.forEach(function (resource) {
        return resource["delete"]();
      });
      this.managedResources = [];
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$model;

      return (_this$model = this.model).draw.apply(_this$model, arguments);
    }
  }, {
    key: "setUniforms",
    value: function setUniforms() {
      var _this$model2;

      (_this$model2 = this.model).setUniforms.apply(_this$model2, arguments);

      return this;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes() {
      var _this$model3;

      (_this$model3 = this.model).setAttributes.apply(_this$model3, arguments);

      return this;
    }
  }, {
    key: "updateModuleSettings",
    value: function updateModuleSettings() {
      var _this$model4;

      (_this$model4 = this.model).updateModuleSettings.apply(_this$model4, arguments);

      return this;
    }
  }, {
    key: "_setModelNodeProps",
    value: function _setModelNodeProps(props) {
      this.model.setProps(props);
    }
  }]);

  return ModelNode;
}(ScenegraphNode);

export { ModelNode as default };
//# sourceMappingURL=model-node.js.map
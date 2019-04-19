import Model from '../../lib/model';
import ScenegraphNode from './scenegraph-node';
export default class ModelNode extends ScenegraphNode {
  constructor(gl) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(props);
    this.onBeforeRender = null;
    this.AfterRender = null;

    if (gl instanceof Model) {
      this.model = gl;

      this._setModelNodeProps(props);
    } else {
      this.model = new Model(gl, props);
    }

    this.managedResources = props.managedResources || [];
  }

  setProps(props) {
    super.setProps(props);

    this._setModelNodeProps(props);

    return this;
  }

  delete() {
    if (this.model) {
      this.model.delete();
      this.model = null;
    }

    this.managedResources.forEach(resource => resource.delete());
    this.managedResources = [];
  }

  draw() {
    return this.model.draw(...arguments);
  }

  setUniforms() {
    this.model.setUniforms(...arguments);
    return this;
  }

  setAttributes() {
    this.model.setAttributes(...arguments);
    return this;
  }

  updateModuleSettings() {
    this.model.updateModuleSettings(...arguments);
    return this;
  }

  _setModelNodeProps(props) {
    this.model.setProps(props);
  }

}
//# sourceMappingURL=model-node.js.map
import { _Pass as Pass, withParameters, setParameters } from '@luma.gl/core';
export default class OutlinePass extends Pass {
  constructor(gl) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(gl, Object.assign({
      id: 'simple-outline-pass'
    }, props));
    this.setProps(props);
  }

  setProps(props) {
    this.props = Object.assign(this.props, props);
  }

  _renderPass(_ref) {
    let gl = _ref.gl,
        animationProps = _ref.animationProps;
    withParameters(gl, {
      stencilTest: true,
      stencilOp: [7680, 7680, 7681]
    }, () => {
      setParameters(gl, {
        stencilFunc: [519, 1, 0xff],
        stencilMask: 0x01
      });
      gl.clear(1024);

      for (const model of this.props.models) {
        model.setUniforms(this.props.normalUniforms);
        model.draw(this.props.drawParams);
      }

      setParameters(gl, {
        stencilFunc: [517, 1, 0x01],
        stencilMask: 0x00,
        depthTest: false
      });

      for (const model of this.props.models) {
        model.setUniforms(this.props.outlineUniforms);
        model.draw(this.props.drawParams);
        model.setUniforms(this.props.normalUniforms);
      }
    });
  }

}
//# sourceMappingURL=outline-pass.js.map
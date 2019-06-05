import { _Pass as Pass, Framebuffer, ClipSpace, withParameters } from '@luma.gl/core';
import ssao from '../shader-modules/ssao';
export default class SSAOPass extends Pass {
  constructor(gl, props) {
    super(gl, Object.assign({
      id: 'ssao-pass',
      swap: true
    }, ssao.DEFAULT_PROPS, props));
    this.renderToScreen = false;
    this.depthFramebuffer = new Framebuffer(gl, {
      id: 'ssao-pass-depth-map'
    });
    this.clipspace = new ClipSpace(gl, {
      id: 'ssao-pass',
      modules: [ssao],
      fs: "\n        varying vec2 uv;\n        void main() {\n          gl_FragColor = ssao_getColor(uv);\n        }\n      "
    });
    this.setProps(props);
  }

  setProps(props) {
    super.setProps(props);
    const {
      width = 512,
      height = 512
    } = this.props;
    this.depthFramebuffer.resize({
      width,
      height
    });
    this.clipspace.setUniforms(this.props);
  }

  _renderPass(_ref) {
    let {
      inputBuffer,
      outputBuffer,
      animationProps
    } = _ref;
    const {
      width,
      height
    } = inputBuffer;
    this.depthFramebuffer.resize({
      width,
      height
    });
    withParameters(this.gl, {
      framebuffer: this.depthFramebuffer
    }, () => {
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

      for (const model of this.props.models) {
        model.setUniforms({
          depth_uEnabled: true
        });
        model.draw(Object.assign({}, this.props.drawParams, {
          animationProps
        }));
        model.setUniforms({
          depth_uEnabled: false
        });
      }
    });
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.clipspace.draw({
      animationProps,
      uniforms: {
        tDepth: this.depthFramebuffer,
        tDiffuse: inputBuffer,
        size: [this.depthFramebuffer.width, this.depthFramebuffer.height]
      }
    });
  }

}
//# sourceMappingURL=ssao-pass.js.map
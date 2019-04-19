import { _Pass as Pass, ClipSpace } from '@luma.gl/core';
import convolution from '../modules/convolution';
export default class ConvolutionPass extends Pass {
  static get KERNEL() {
    return convolution.KERNEL;
  }

  constructor(gl) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(gl, Object.assign({
      id: 'convolution-pass',
      swap: true,
      kernel: convolution.KERNEL.NORMAL
    }, props));
    this.clipspace = new ClipSpace(gl, {
      id: 'convolution-pass',
      modules: [convolution],
      fs: "\n        uniform sampler2D tDiffuse;\n        varying vec2 uv; // the texCoords passed in from the vertex shader.\n        void main() {\n          gl_FragColor = convolution_getColor(tDiffuse, uv);\n        }\n      "
    });
    this.setProps(props);
  }

  setProps(props) {
    Object.assign(this.props, props);
    this.clipspace.setUniforms({
      uKernel: this.props.kernel,
      uKernelWeight: this.props.kernel.reduce((sum, x) => sum + x, 0)
    });
  }

  _renderPass(_ref) {
    let inputBuffer = _ref.inputBuffer,
        outputBuffer = _ref.outputBuffer;
    const width = inputBuffer.width,
          height = inputBuffer.height;
    this.clipspace.draw({
      uniforms: {
        tDiffuse: inputBuffer,
        uTextureSize: [width, height]
      },
      parameters: {
        depthWrite: false,
        depthTest: false
      }
    });
  }

}
//# sourceMappingURL=convolution-pass.js.map
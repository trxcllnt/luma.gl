"use strict";module.export({default:()=>ClearPass});var Pass;module.link('./pass',{default(v){Pass=v}},0);//
// A pass that clears the input buffer or the screen.
//
// Attribution: This class and the multipass system were inspired by
// the THREE.js EffectComposer and *Pass classes



class ClearPass extends Pass {
  constructor(gl, props = {}) {
    super(gl, Object.assign({id: 'clear-pass'}, props));
  }

  // TODO - add support for colors, align with model.clear and framebuffer.clear
  // TODO - integrate with luma.gl clear, make sure right buffer is cleared
  _renderPass({gl}) {
    const {clearBits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT} = this.props;
    gl.clear(clearBits);
  }
}

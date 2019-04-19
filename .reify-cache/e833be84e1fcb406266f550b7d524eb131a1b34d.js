"use strict";module.export({default:()=>CompositePass});var Pass;module.link('./pass',{default(v){Pass=v}},0);//
// A composite render pass.
//
// Attribution: This class and the multipass system were inspired by
// the THREE.js EffectComposer and *Pass classes



class CompositePass extends Pass {
  constructor(gl, props) {
    props = Array.isArray(props) ? {passes: props} : props;
    super(gl, Object.assign({id: 'composite-pass'}, props));
  }

  // Override render() to just forward the call
  render(...args) {
    const {passes = []} = this.props;
    for (const pass of passes) {
      pass.render(...args);
    }
  }
}

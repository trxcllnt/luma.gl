"use strict";module.export({default:()=>MultiPassRenderer});var CompositePass;module.link('./composite-pass',{default(v){CompositePass=v}},0);var RenderState;module.link('./render-state',{default(v){RenderState=v}},1);//
// A top-level composite render pass, that manages render state
//
// Attribution: This class and the multipass system were inspired by
// the THREE.js EffectComposer and *Pass classes




class MultiPassRenderer extends CompositePass {
  constructor(gl, props) {
    props = Array.isArray(props) ? {passes: props} : props;
    super(gl, Object.assign({id: 'multi-pass'}, props));
    this.renderState = new RenderState(gl, props);
  }

  // Override render() to just forward the call
  render(animationProps) {
    this.renderState.reset();
    const {passes = []} = this.props;
    for (const pass of passes) {
      pass.render(this.renderState, animationProps);
    }
    return this;
  }
}

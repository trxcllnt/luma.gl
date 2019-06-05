"use strict";module.export({default:()=>RenderPass});var Pass;module.link('./pass',{default(v){Pass=v}},0);//
// A pass that renders a given scene directly on screen or into the read buffer
// for further processing.
//
// Attribution: This class and the multipass system were inspired by
// the THREE.js EffectComposer and *Pass classes



class RenderPass extends Pass {
  constructor(gl, props = {}) {
    super(gl, Object.assign({id: 'render-pass'}, props));
  }

  _renderPass({animationProps}) {
    const {models = [], drawParams} = this.props;
    for (const model of models) {
      model.draw(Object.assign({}, drawParams, {animationProps}));
    }
  }
}

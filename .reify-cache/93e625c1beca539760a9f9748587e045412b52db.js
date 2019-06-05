"use strict";module.export({default:()=>CopyPass});var ClipSpace;module.link('../lib/clip-space',{default(v){ClipSpace=v}},0);var Pass;module.link('./pass',{default(v){Pass=v}},1);//
// A pass that disables stencil test.
//
// Attribution: This class and the multipass system were inspired by
// the THREE.js EffectComposer and *Pass classes




const fs = `\
uniform sampler2D uDiffuseSampler;
uniform float uOpacity;

varying vec2 uv;

void main() {
  vec4 texel = texture2D(uDiffuseSampler, uv);
  gl_FragColor = uOpacity * texel;
}
`;

class CopyPass extends Pass {
  constructor(gl, props = {}) {
    super(gl, Object.assign({id: 'copy-pass', swap: true}, props));
    this.clipspace = new ClipSpace(gl, {id: 'copy-pass', fs});
  }

  _renderPass({inputBuffer}) {
    const {opacity = 1.0} = this.props;

    this.clipspace.draw({
      uniforms: {
        uDiffuseSampler: inputBuffer,
        uOpacity: opacity
      },
      parameters: {
        depthWrite: false,
        depthTest: false
      }
    });
  }
}

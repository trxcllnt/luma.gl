"use strict";module.export({default:()=>TexturePass});var ClipSpace;module.link('../lib/clip-space',{default(v){ClipSpace=v}},0);var Pass;module.link('./pass',{default(v){Pass=v}},1);//
// A pass that renders a given texture into screen space
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

class TexturePass extends Pass {
  constructor(gl, options = {}) {
    super(gl, Object.assign({id: 'texture-pass'}, options));
    const {texture, opacity = 1.0} = options;
    this.clipspace = new ClipSpace(gl, {
      id: 'texture-pass',
      fs,
      uniforms: {
        uDiffuseSampler: texture,
        uOpacity: opacity
      }
    });
  }

  _renderPass() {
    this.clipspace.draw({
      parameters: {
        depthWrite: false,
        depthTest: false
      }
    });
  }
}

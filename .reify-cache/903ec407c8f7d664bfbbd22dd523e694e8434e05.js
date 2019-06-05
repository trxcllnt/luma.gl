"use strict";var module1=module;module1.export({default:()=>SSAOPass});var Pass,Framebuffer,ClipSpace,withParameters;module1.link('@luma.gl/core',{_Pass(v){Pass=v},Framebuffer(v){Framebuffer=v},ClipSpace(v){ClipSpace=v},withParameters(v){withParameters=v}},0);var ssao;module1.link('../shader-modules/ssao',{default(v){ssao=v}},1);/**
 * Screen-space ambient occlusion pass.
 *
 * Ported to luma.gl from THREE.js (MIT license).
 * Attributions (per comments in original THREE.js files):
 * @author alteredq / http://alteredqualia.com/
 * @author tentone
 */

/* eslint-disable camelcase */



class SSAOPass extends Pass {
  constructor(gl, props) {
    super(gl, Object.assign({id: 'ssao-pass', swap: true}, ssao.DEFAULT_PROPS, props));

    this.renderToScreen = false;

    // Depth render target, for `depth` shader module
    this.depthFramebuffer = new Framebuffer(gl, {id: 'ssao-pass-depth-map'});

    this.clipspace = new ClipSpace(gl, {
      id: 'ssao-pass',
      modules: [ssao],
      fs: `
        varying vec2 uv;
        void main() {
          gl_FragColor = ssao_getColor(uv);
        }
      `
    });

    this.setProps(props);
  }

  setProps(props) {
    super.setProps(props);

    const {width = 512, height = 512} = this.props;
    this.depthFramebuffer.resize({width, height});
    this.clipspace.setUniforms(this.props);

    // Shader uniforms
    // this.uniforms['cameraNear' ].value = this.camera2.near;
    // this.uniforms[ 'cameraFar' ].value = this.camera2.far;
  }

  _renderPass({inputBuffer, outputBuffer, animationProps}) {
    const {width, height} = inputBuffer;
    this.depthFramebuffer.resize({width, height});

    // Render depth into depthRenderTarget
    withParameters(this.gl, {framebuffer: this.depthFramebuffer}, () => {
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      for (const model of this.props.models) {
        model.setUniforms({depth_uEnabled: true});
        model.draw(Object.assign({}, this.props.drawParams, {animationProps}));
        model.setUniforms({depth_uEnabled: false});
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

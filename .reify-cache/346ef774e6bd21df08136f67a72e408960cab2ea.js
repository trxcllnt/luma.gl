"use strict";module.export({default:()=>Texture2D});var GL;module.link('@luma.gl/constants',{default(v){GL=v}},0);var Texture;module.link('./texture',{default(v){Texture=v}},1);var assertWebGLContext;module.link('../webgl-utils',{assertWebGLContext(v){assertWebGLContext=v}},2);var loadImage;module.link('../utils/load-file',{loadImage(v){loadImage=v}},3);




class Texture2D extends Texture {
  static isSupported(gl, opts) {
    return Texture.isSupported(gl, opts);
  }

  constructor(gl, props = {}) {
    assertWebGLContext(gl);

    // Signature: new Texture2D(gl, url | Promise)
    if (props instanceof Promise || typeof props === 'string') {
      props = {data: props};
    }

    // Signature: new Texture2D(gl, {data: url})
    if (typeof props.data === 'string') {
      props = Object.assign({}, props, {data: loadImage(props.data)});
    }

    super(gl, Object.assign({}, props, {target: GL.TEXTURE_2D}));

    this.initialize(props);

    Object.seal(this);
  }
}

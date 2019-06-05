"use strict";module.export({cloneTextureFrom:()=>cloneTextureFrom,toFramebuffer:()=>toFramebuffer});var Texture2D;module.link('../classes/texture-2d',{default(v){Texture2D=v}},0);var TextureCube;module.link('../classes/texture-cube',{default(v){TextureCube=v}},1);var Texture3D;module.link('../classes/texture-3d',{default(v){Texture3D=v}},2);var Framebuffer;module.link('../classes/framebuffer',{default(v){Framebuffer=v}},3);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},4);var assert;module.link('../utils',{assert(v){assert=v}},5);// TODO: Two subdirectories must not depend on each other (classes vs utils)!







// Clone a new texture object from a reference texture object.
function cloneTextureFrom(refTexture, overrides) {
  assert(
    refTexture instanceof Texture2D ||
      refTexture instanceof TextureCube ||
      refTexture instanceof Texture3D
  );

  const TextureType = refTexture.constructor;

  const {gl, width, height, format, type, dataFormat, border, mipmaps} = refTexture;

  const textureOptions = Object.assign(
    {
      width,
      height,
      format,
      type,
      dataFormat,
      border,
      mipmaps
    },
    overrides
  );

  // TODO: move this to `Texture` class as instance method and use this.constructor
  return new TextureType(gl, textureOptions);
}

// Wraps a given texture into a framebuffer object, that can be further used
// to read data from the texture object.
function toFramebuffer(texture, opts) {
  const {gl, width, height, id} = texture;
  const framebuffer = new Framebuffer(
    gl,
    Object.assign({}, opts, {
      id: `framebuffer-for-${id}`,
      width,
      height,
      attachments: {
        [GL.COLOR_ATTACHMENT0]: texture
      }
    })
  );
  return framebuffer;
}

"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var cloneTextureFrom;module.link('@luma.gl/webgl/webgl-utils/texture-utils',{cloneTextureFrom(v){cloneTextureFrom=v}},1);var Texture2D;module.link('@luma.gl/webgl',{Texture2D(v){Texture2D=v}},2);var fixture;module.link('test/setup',{fixture(v){fixture=v}},3);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},4);





test('texture-utils#cloneTextureFrom', t => {
  const {gl} = fixture;
  const refTextureOptions = {
    width: 10,
    height: 20,
    format: GL.RGBA,
    dataFormat: GL.RGBA,
    type: GL.UNSIGNED_BYTE
  };
  const overrides = {
    width: 100,
    height: 50
  };
  const expected = Object.assign({}, refTextureOptions, overrides);

  const ref2DTexture = new Texture2D(gl, refTextureOptions);
  const cloned2DTexture = cloneTextureFrom(ref2DTexture, overrides);
  t.ok(cloned2DTexture instanceof Texture2D, 'Texture2D object should be created');
  for (const name in expected) {
    t.equal(cloned2DTexture[name], expected[name], `Should set correct value for ${name}`);
  }
  t.end();
});

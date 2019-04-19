"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},1);var Renderbuffer,getKey;module.link('@luma.gl/webgl',{Renderbuffer(v){Renderbuffer=v},getKey(v){getKey=v}},2);var RENDERBUFFER_FORMATS;module.link('@luma.gl/webgl/classes/renderbuffer-formats',{default(v){RENDERBUFFER_FORMATS=v}},3);var fixture;module.link('test/setup',{fixture(v){fixture=v}},4);







// const WEBGL1_FORMATS = [GL.RGB, GL.RGBA, GL.LUMINANCE_ALPHA, GL.LUMINANCE, GL.ALPHA];

test('WebGL#Renderbuffer construct/delete', t => {
  const {gl} = fixture;

  t.throws(
    () => new Renderbuffer(),
    /.*WebGLRenderingContext.*/,
    'Renderbuffer throws on missing gl context'
  );

  const renderbuffer = new Renderbuffer(gl, {format: GL.DEPTH_COMPONENT16, width: 1, height: 1});
  t.ok(renderbuffer instanceof Renderbuffer, 'Renderbuffer construction successful');

  renderbuffer.delete();
  t.ok(renderbuffer instanceof Renderbuffer, 'Renderbuffer delete successful');

  renderbuffer.delete();
  t.ok(renderbuffer instanceof Renderbuffer, 'Renderbuffer repeated delete successful');

  t.end();
});

test('WebGL#Renderbuffer format creation', t => {
  const {gl} = fixture;

  for (let format in RENDERBUFFER_FORMATS) {
    format = Number(format);
    if (Renderbuffer.isSupported(gl, {format})) {
      const renderbuffer = new Renderbuffer(gl, {format});
      t.equals(
        renderbuffer.format,
        format,
        `Renderbuffer(${getKey(gl, format)}) created with correct format`
      );
      renderbuffer.delete();
    }
  }

  t.end();
});

test('WebGL2#Renderbuffer format creation', t => {
  const {gl2} = fixture;

  if (!gl2) {
    t.comment('WebGL2 not available, skipping tests');
    t.end();
    return;
  }

  for (const format_ in RENDERBUFFER_FORMATS) {
    const format = Number(format_);
    if (Renderbuffer.isSupported(gl2, {format})) {
      const renderbuffer = new Renderbuffer(gl2, {format});
      t.equals(
        renderbuffer.format,
        format,
        `Renderbuffer(${getKey(gl2, format)}) created with correct format`
      );
      renderbuffer.delete();
    }
  }

  t.end();
});

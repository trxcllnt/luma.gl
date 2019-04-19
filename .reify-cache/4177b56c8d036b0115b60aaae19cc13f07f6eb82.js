"use strict";var createGLContext,Program;module.link('@luma.gl/webgl',{createGLContext(v){createGLContext=v},Program(v){Program=v}},0);var webGLTypesAvailable;module.link('@luma.gl/webgl/webgl-utils',{webGLTypesAvailable(v){webGLTypesAvailable=v}},1);var test;module.link('tape-catch',{default(v){test=v}},2);// NOTE: `headless.js` must **NOT** be included in this file





test('LumaGL#imports are defined', t => {
  t.ok(typeof Program === 'function', 'Program is defined');
  t.ok(typeof createGLContext === 'function', 'createGLContext is defined');
  t.end();
});

if (!webGLTypesAvailable) {
  test('LumaGL#createGLContext throws without headless', t => {
    t.throws(
      () => createGLContext(),
      /WebGL API is missing/,
      'createGLContext throws when headless is not included'
    );
    t.end();
  });
}

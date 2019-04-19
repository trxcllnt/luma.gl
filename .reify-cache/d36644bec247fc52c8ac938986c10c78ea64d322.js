"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var createGLContext;module.link('@luma.gl/webgl',{createGLContext(v){createGLContext=v}},1);var makeDebugContext;module.link('@luma.gl/debug',{makeDebugContext(v){makeDebugContext=v}},2);




test('WebGL#makeDebugContext', t => {
  t.ok(typeof makeDebugContext === 'function', 'makeDebugContext defined');

  const context = makeDebugContext(createGLContext({}));
  t.ok(context, 'extensions were returned');
  t.end();
});

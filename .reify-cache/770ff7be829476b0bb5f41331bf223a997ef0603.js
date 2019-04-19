"use strict";module.export({createTestContext:()=>createTestContext});module.export({fixture:()=>fixture},true);var test_;module.link('tape-catch',{default(v){test_=v}},0);var tapePromise;module.link('tape-promise',{default(v){tapePromise=v}},1);module.link('./deep-copy',{default:"deepCopy"},2);var setContextDefaults,createGLContext;module.link('@luma.gl/core',{setContextDefaults(v){setContextDefaults=v},createGLContext(v){createGLContext=v}},3);var makeDebugContext;module.link('@luma.gl/debug',{makeDebugContext(v){makeDebugContext=v}},4);// decorate tape-catch with tape-promise


module.exportDefault(tapePromise(test_));





// Avoid generating a lot of big context divs
setContextDefaults({width: 1, height: 1, debug: true, throwOnFailure: false, throwOnError: false});

function createTestContext(opts = {}) {
  return makeDebugContext(createGLContext(opts));
}

const fixture = {
  gl: createTestContext({webgl2: false, webgl1: true, throwOnFailure: true, throwOnError: true}),
  gl2: createTestContext({webgl2: true, webgl1: false})
};

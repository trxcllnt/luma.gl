"use strict";var module1=module;var zoomBlur;module1.link('@luma.gl/effects',{zoomBlur(v){zoomBlur=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('zoomBlur#build/uniform', t => {
  normalizeShaderModule(zoomBlur);
  const uniforms = zoomBlur.getUniforms();

  t.ok(uniforms, 'zoomBlur module build is ok');
  t.deepEqual(uniforms.center, [0.5, 0.5], 'zoomBlur center uniform is ok');
  t.equal(uniforms.strength, 0.3, 'zoomBlur strength uniform is ok');
  t.end();
});

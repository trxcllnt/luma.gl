"use strict";var module1=module;var denoise;module1.link('@luma.gl/effects',{denoise(v){denoise=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('denoise#build/uniform', t => {
  normalizeShaderModule(denoise);
  const uniforms = denoise.getUniforms();

  t.ok(uniforms, 'denoise module build is ok');
  t.equal(uniforms.strength, 0.5, 'denoise strength uniform is ok');
  t.end();
});

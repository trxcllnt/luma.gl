"use strict";var module1=module;var noise;module1.link('@luma.gl/effects',{noise(v){noise=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('noise#build/uniform', t => {
  normalizeShaderModule(noise);
  const uniforms = noise.getUniforms();

  t.ok(uniforms, 'noise module build is ok');
  t.equal(uniforms.amount, 0.5, 'noise amount uniform is ok');
  t.end();
});

"use strict";var module1=module;var sepia;module1.link('@luma.gl/effects',{sepia(v){sepia=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('sepia#build/uniform', t => {
  normalizeShaderModule(sepia);
  const uniforms = sepia.getUniforms();

  t.ok(uniforms, 'sepia module build is ok');
  t.equal(uniforms.amount, 0.5, 'sepia amount uniform is ok');
  t.end();
});

"use strict";var module1=module;var vibrance;module1.link('@luma.gl/effects',{vibrance(v){vibrance=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('vibrance#build/uniform', t => {
  normalizeShaderModule(vibrance);
  const uniforms = vibrance.getUniforms();

  t.ok(uniforms, 'vibrance module build is ok');
  t.equal(uniforms.amount, 0, 'vibrance amount uniform is ok');
  t.end();
});

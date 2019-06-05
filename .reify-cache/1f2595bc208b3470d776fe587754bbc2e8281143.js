"use strict";var module1=module;var vignette;module1.link('@luma.gl/effects',{vignette(v){vignette=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('vignette#build/uniform', t => {
  normalizeShaderModule(vignette);
  const uniforms = vignette.getUniforms();

  t.ok(uniforms, 'vignette module build is ok');
  t.equal(uniforms.radius, 0.5, 'vignette radius uniform is ok');
  t.equal(uniforms.amount, 0.5, 'vignette amount uniform is ok');
  t.end();
});

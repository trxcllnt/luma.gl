"use strict";var module1=module;var dotScreen;module1.link('@luma.gl/effects',{dotScreen(v){dotScreen=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('dotScreen#build/uniform', t => {
  normalizeShaderModule(dotScreen);
  const uniforms = dotScreen.getUniforms();

  t.ok(uniforms, 'dotScreen module build is ok');
  t.deepEqual(uniforms.center, [0.5, 0.5], 'dotScreen center uniform is ok');
  t.equal(uniforms.angle, 1.1, 'dotScreen angle uniform is ok');
  t.equal(uniforms.size, 3, 'dotScreen size uniform is ok');
  t.end();
});

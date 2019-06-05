"use strict";var module1=module;var hueSaturation;module1.link('@luma.gl/effects',{hueSaturation(v){hueSaturation=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('hueSaturation#build/uniform', t => {
  normalizeShaderModule(hueSaturation);
  const uniforms = hueSaturation.getUniforms();

  t.ok(uniforms, 'hueSaturation module build is ok');
  t.equal(uniforms.hue, 0, 'hueSaturation hue uniform is ok');
  t.equal(uniforms.saturation, 0, 'hueSaturation saturation uniform is ok');
  t.end();
});

"use strict";var module1=module;var brightnessContrast;module1.link('@luma.gl/effects',{brightnessContrast(v){brightnessContrast=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('brightnessContrast#build/uniform', t => {
  normalizeShaderModule(brightnessContrast);
  const uniforms = brightnessContrast.getUniforms();

  t.ok(uniforms, 'brightnessContrast module build is ok');
  t.equal(uniforms.brightness, 0, 'brightnessContrast brightness uniform is ok');
  t.equal(uniforms.contrast, 0, 'brightnessContrast contrast uniform is ok');
  t.end();
});

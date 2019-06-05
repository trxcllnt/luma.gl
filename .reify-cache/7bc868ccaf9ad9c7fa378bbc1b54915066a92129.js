"use strict";var module1=module;var colorHalftone;module1.link('@luma.gl/effects',{colorHalftone(v){colorHalftone=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('colorHalftone#build/uniform', t => {
  normalizeShaderModule(colorHalftone);
  const uniforms = colorHalftone.getUniforms();

  t.ok(uniforms, 'colorHalftone module build is ok');
  t.deepEqual(uniforms.center, [0.5, 0.5], 'colorHalftone center uniform is ok');
  t.equal(uniforms.angle, 1.1, 'colorHalftone angle uniform is ok');
  t.equal(uniforms.size, 4, 'colorHalftone size uniform is ok');
  t.end();
});

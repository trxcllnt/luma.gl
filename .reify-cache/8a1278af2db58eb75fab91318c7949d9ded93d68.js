"use strict";var module1=module;var hexagonalPixelate;module1.link('@luma.gl/effects',{hexagonalPixelate(v){hexagonalPixelate=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('hexagonalPixelate#build/uniform', t => {
  normalizeShaderModule(hexagonalPixelate);
  const uniforms = hexagonalPixelate.getUniforms();

  t.ok(uniforms, 'hexagonalPixelate module build is ok');
  t.deepEqual(uniforms.center, [0.5, 0.5], 'hexagonalPixelate center uniform is ok');
  t.equal(uniforms.scale, 10, 'hexagonalPixelate strength uniform is ok');
  t.end();
});

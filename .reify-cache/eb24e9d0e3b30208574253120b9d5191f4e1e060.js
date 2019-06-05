"use strict";var module1=module;var tiltShift;module1.link('@luma.gl/effects',{tiltShift(v){tiltShift=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('tiltShift#build/uniform', t => {
  normalizeShaderModule(tiltShift);
  const uniforms = tiltShift.getUniforms();

  t.ok(uniforms, 'tiltShift module build is ok');
  t.equal(uniforms.blurRadius, 15, 'tiltShift blurRadius uniform is ok');
  t.equal(uniforms.gradientRadius, 200, 'tiltShift gradientRadius uniform is ok');
  t.deepEqual(uniforms.start, [0, 0], 'tiltShift start uniform is ok');
  t.deepEqual(uniforms.end, [1, 1], 'tiltShift end uniform is ok');
  t.equal(uniforms.invert, false, 'tiltShift invert uniform is ok');
  t.end();
});

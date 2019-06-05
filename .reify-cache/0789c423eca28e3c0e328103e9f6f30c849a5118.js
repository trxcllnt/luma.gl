"use strict";var module1=module;var swirl;module1.link('@luma.gl/effects',{swirl(v){swirl=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('swirl#build/uniform', t => {
  normalizeShaderModule(swirl);
  const uniforms = swirl.getUniforms();

  t.ok(uniforms, 'swirl module build is ok');
  t.deepEqual(uniforms.center, [0.5, 0.5], 'swirl center uniform is ok');
  t.equal(uniforms.radius, 200, 'swirl radius uniform is ok');
  t.equal(uniforms.angle, 3, 'swirl angle uniform is ok');
  t.end();
});

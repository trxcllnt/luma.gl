"use strict";var module1=module;var triangleBlur;module1.link('@luma.gl/effects',{triangleBlur(v){triangleBlur=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('triangleBlur#build/uniform', t => {
  normalizeShaderModule(triangleBlur);
  const uniforms = triangleBlur.getUniforms();

  t.ok(uniforms, 'triangleBlur module build is ok');
  t.equal(uniforms.radius, 20, 'triangleBlur radius uniform is ok');
  t.deepEqual(uniforms.delta, [1, 0], 'triangleBlur delta uniform is ok');
  t.end();
});

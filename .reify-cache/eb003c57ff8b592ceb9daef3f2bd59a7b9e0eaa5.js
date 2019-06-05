"use strict";var module1=module;var edgeWork;module1.link('@luma.gl/effects',{edgeWork(v){edgeWork=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('edgeWork#build/uniform', t => {
  normalizeShaderModule(edgeWork);
  const uniforms = edgeWork.getUniforms();

  t.ok(uniforms, 'edgeWork module build is ok');
  t.equal(uniforms.radius, 2, 'edgeWork radius uniform is ok');
  t.deepEqual(uniforms.delta, [1, 0], 'edgeWork delta uniform is ok');
  t.end();
});

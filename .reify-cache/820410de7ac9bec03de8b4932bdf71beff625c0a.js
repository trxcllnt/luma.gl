"use strict";var module1=module;var bulgePinch;module1.link('@luma.gl/effects',{bulgePinch(v){bulgePinch=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);



test('bulgePinch#build/uniform', t => {
  normalizeShaderModule(bulgePinch);
  const uniforms = bulgePinch.getUniforms();

  t.ok(uniforms, 'bulgePinch module build is ok');
  t.deepEqual(uniforms.center, [0.5, 0.5], 'bulgePinch center uniform is ok');
  t.equal(uniforms.radius, 200, 'bulgePinch radius uniform is ok');
  t.equal(uniforms.strength, 0.5, 'bulgePinch strength uniform is ok');
  t.end();
});

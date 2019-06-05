"use strict";var module1=module;var random;module1.link('@luma.gl/effects/shader-modules/utils/random',{default(v){random=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);




test('random#build', t => {
  normalizeShaderModule(random);

  t.ok(random.fs, 'random module fs is ok');
  t.end();
});

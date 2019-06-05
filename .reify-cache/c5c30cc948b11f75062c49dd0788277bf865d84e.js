"use strict";var module1=module;var warp;module1.link('@luma.gl/effects/shader-modules/warp-filters/warp',{default(v){warp=v}},0);var normalizeShaderModule;module1.link('@luma.gl/shadertools',{normalizeShaderModule(v){normalizeShaderModule=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);




test('warp#build', t => {
  normalizeShaderModule(warp);

  t.ok(warp.fs, 'warp module fs is ok');
  t.end();
});

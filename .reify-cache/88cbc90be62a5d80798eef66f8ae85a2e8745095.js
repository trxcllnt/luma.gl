"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var lights;module.link('@luma.gl/shadertools',{lights(v){lights=v}},1);


test('shadertools#lights', t => {
  let uniforms = lights.getUniforms();
  t.ok(uniforms, 'Generated default uniforms');

  uniforms = lights.getUniforms({
    lights: [{type: 'ambient'}, {type: 'directional'}, {type: 'point'}]
  });
  t.ok(uniforms, 'Generated uniforms for empty lights');

  uniforms = lights.getUniforms({
    lights: [{type: 'non-existing'}]
  });
  t.ok(uniforms, 'Generated uniforms for non-supported light object');

  t.end();
});

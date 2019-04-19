"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var phonglighting;module.link('@luma.gl/shadertools',{phonglighting(v){phonglighting=v}},1);


test('shadertools#phonglighting', t => {
  let uniforms = phonglighting.getUniforms();
  t.deepEqual(uniforms, {}, `Default phong lighting uniforms ok`);

  uniforms = phonglighting.getUniforms({
    material: {ambient: 0.0, diffuse: 0.0, shininess: 0.0, specularColor: 0.0}
  });
  t.equal(uniforms.lighting_uEnabled, undefined, `Not enable lighting flag with only material`);

  uniforms = phonglighting.getUniforms({
    material: null
  });
  t.equal(uniforms.lighting_uEnabled, false, 'Disable lighting without material');

  t.end();
});

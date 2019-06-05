"use strict";var AmbientLight,DirectionalLight,PointLight;module.link('@luma.gl/core',{AmbientLight(v){AmbientLight=v},DirectionalLight(v){DirectionalLight=v},PointLight(v){PointLight=v}},0);var test;module.link('tape-catch',{default(v){test=v}},1);


test('@luma.gl/core#AmbientLight', t => {
  const light = new AmbientLight();
  t.ok(light, 'Created a default AmbientLight');
  t.end();
});

test('@luma.gl/core#DirectionalLight', t => {
  const light = new DirectionalLight();
  t.ok(light, 'Created a default AmbientLight');
  t.end();
});

test('@luma.gl/core#PointLight', t => {
  const light = new PointLight();
  t.ok(light, 'Created a default AmbientLight');
  t.end();
});

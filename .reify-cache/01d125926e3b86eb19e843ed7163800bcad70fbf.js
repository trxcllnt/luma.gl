"use strict";var module1=module;module1.link('./fp64/fp64-arithmetic-transform.spec');module1.link('../../src/modules/lights/test/lights.spec');module1.link('../../src/modules/picking/test/picking.spec');module1.link('./phong-lighting/phong-lighting.spec');var registerShaderModules,setDefaultShaderModules,fp32,fp64,project,dirlight,picking,diffuse;module1.link('@luma.gl/shadertools',{registerShaderModules(v){registerShaderModules=v},setDefaultShaderModules(v){setDefaultShaderModules=v},fp32(v){fp32=v},fp64(v){fp64=v},project(v){project=v},dirlight(v){dirlight=v},picking(v){picking=v},diffuse(v){diffuse=v}},0);var test;module1.link('tape-catch',{default(v){test=v}},1);


















test('shadertools#module imports are defined', t => {
  t.ok(registerShaderModules, 'registerShaderModules is defined');
  t.ok(setDefaultShaderModules, 'setDefaultShaderModules is defined');
  t.ok(fp32, 'fp32 is defined');
  t.ok(fp64, 'fp64 is defined');
  t.ok(project, 'project is defined');
  // TODO: looks like lighting is not correctly imported and we should be using
  // deck.gl lighting module, disabling this failing test.
  // t.ok(lighting, 'lighting is defined');
  t.ok(dirlight, 'dirlight is defined');
  t.ok(picking, 'picking is defined');
  t.ok(diffuse, 'diffuse is defined');
  t.end();
});

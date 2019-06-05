"use strict";var module1=module;var test;module1.link('tape-catch',{default(v){test=v}},0);var resolveModules,TEST_EXPORTS;module1.link('@luma.gl/shadertools/lib/resolve-modules',{resolveModules(v){resolveModules=v},TEST_EXPORTS(v){TEST_EXPORTS=v}},1);

const {getDependencyGraph} = TEST_EXPORTS;

// Dummy shader modules with dependencies
const fp32 = {
  name: 'fp32-test'
};

const fp64 = {
  name: 'fp64-test'
};

const project = {
  name: 'project-test',
  dependencies: [fp32]
};

const project64 = {
  name: 'project64-test',
  dependencies: [project, fp64]
};

test('ShaderModules#import', t => {
  t.ok(resolveModules !== undefined, 'resolveModules import successful');
  t.ok(getDependencyGraph !== undefined, 'getDependencyGraph import successful');
  t.end();
});

test('ShaderModules#getShaderDependencies', t => {
  const result = resolveModules([project64, project]);
  t.deepEqual(
    result.map(module => module.name),
    [fp32.name, project.name, fp64.name, project64.name],
    'Module order is correct'
  );
  t.end();
});

test('ShaderModules#getDependencyGraph', t => {
  const moduleDepth = {};
  getDependencyGraph({
    modules: [project64, project],
    level: 0,
    moduleMap: {},
    moduleDepth
  });
  t.deepEqual(
    moduleDepth,
    {
      [fp32.name]: 2,
      [project.name]: 1,
      [fp64.name]: 1,
      [project64.name]: 0
    },
    'Module dependecny is correct'
  );
  t.end();
});

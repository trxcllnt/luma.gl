"use strict";var module1=module;var createGLContext;module1.link('@luma.gl/core',{createGLContext(v){createGLContext=v}},0);var assembleShaders,setShaderHook,setModuleInjection,picking,fp64;module1.link('@luma.gl/shadertools',{assembleShaders(v){assembleShaders=v},setShaderHook(v){setShaderHook=v},setModuleInjection(v){setModuleInjection=v},picking(v){picking=v},fp64(v){fp64=v}},1);var test;module1.link('tape-catch',{default(v){test=v}},2);/* eslint-disable camelcase */











const fixture = {
  gl: createGLContext()
};

const VS_GLSL_300 = `\
#version 300 es

in vec4 positions;

void main(void) {
  gl_Position = positions;
}
`;
const FS_GLSL_300 = `\
#version 300 es

precision highp float;

out vec4 fragmentColor;

void main(void) {
  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

test('assembleShaders#import', t => {
  t.ok(assembleShaders !== undefined, 'assembleShaders import successful');
  t.end();
});

test('assembleShaders#version_directive', t => {
  const assembleResult = assembleShaders(fixture.gl, {
    vs: VS_GLSL_300,
    fs: FS_GLSL_300,
    modules: [picking]
  });
  // Verify version directive remains as first line.
  t.equal(
    assembleResult.vs.indexOf('#version 300 es'),
    0,
    'version directive should be first statement'
  );
  t.equal(
    assembleResult.fs.indexOf('#version 300 es'),
    0,
    'version directive should be first statement'
  );
  t.end();
});

test('assembleShaders#getUniforms', t => {
  const testModuleSettings = {pickingActive: true};

  // inject spy into the picking module's getUniforms
  // const module = getShaderModule(picking);
  // const getUniformsSpy = makeSpy(module, 'getUniforms');

  let assembleResult;

  // Without shader modules
  assembleResult = assembleShaders(fixture.gl, {
    vs: VS_GLSL_300,
    fs: FS_GLSL_300
  });
  // Verify getUniforms is function
  t.is(typeof assembleResult.getUniforms, 'function', 'getUniforms should be function');

  // With shader modules
  const testModule = {
    name: 'test-module',
    vs: '',
    fs: '',
    getUniforms: (opts, context) => {
      // Check a uniform generated by its dependency
      t.ok(context.picking_uActive, 'module getUniforms is called with correct context');
      return {};
    },
    dependencies: ['picking']
  };

  assembleResult = assembleShaders(fixture.gl, {
    vs: VS_GLSL_300,
    fs: FS_GLSL_300,
    modules: [picking, testModule, fp64]
  });

  // Verify getUniforms is function
  t.is(typeof assembleResult.getUniforms, 'function', 'getUniforms should be function');

  assembleResult.getUniforms(testModuleSettings);

  // t.ok(module.getUniforms.called, 'module getUniforms is called');

  // TODO: probe.gl spy does not yet support args
  // t.deepEqual(
  //   picking.getUniforms.getCall(0).args[0],
  //   testModuleSettings,
  //   'module getUniforms is called with correct opts');

  // t.ok(testModule.getUniforms.calledAfter(picking.getUniforms),
  //   'module getUniforms is called after its dependencies');

  // TODO: probe.gl spy does not yet support args
  // t.deepEqual(
  //   testModule.getUniforms.getCall(0).args[0],
  //   testModuleSettings,
  //   'module getUniforms is called with correct opts');

  // getUniformsSpy.restore();

  t.end();
});

test('assembleShaders#shaderhooks', t => {
  setShaderHook('vs', {
    signature: 'LUMAGL_pickColor(inout vec4 color)'
  });

  setShaderHook('fs', {
    signature: 'LUMAGL_fragmentColor(inout vec4 color)'
  });

  setModuleInjection('picking', {
    shaderStage: 'vs',
    shaderHook: 'LUMAGL_pickColor',
    injection: 'picking_setPickingColor(color.rgb);'
  });

  setModuleInjection('picking', {
    shaderStage: 'fs',
    shaderHook: 'LUMAGL_fragmentColor',
    injection: 'color = picking_filterColor(color);',
    order: Number.POSITIVE_INFINITY
  });

  let assembleResult = assembleShaders(fixture.gl, {
    vs: VS_GLSL_300,
    fs: FS_GLSL_300
  });
  // Verify version directive remains as first line.
  t.ok(
    assembleResult.vs.indexOf('LUMAGL_pickColor') > -1,
    'hook function injected into vertex shader'
  );
  t.ok(
    assembleResult.fs.indexOf('LUMAGL_fragmentColor') > -1,
    'hook function injected into fragment shader shader'
  );
  t.ok(
    assembleResult.vs.indexOf('picking_setPickingColor(color.rgb)') === -1,
    'injection code not included in vertex shader without module'
  );
  t.ok(
    assembleResult.fs.indexOf('color = picking_filterColor(color)') === -1,
    'injection code not included in fragment shader without module'
  );

  assembleResult = assembleShaders(fixture.gl, {
    vs: VS_GLSL_300,
    fs: FS_GLSL_300,
    modules: [picking]
  });
  // Verify version directive remains as first line.
  t.ok(
    assembleResult.vs.indexOf('LUMAGL_pickColor') > -1,
    'hook function injected into vertex shader'
  );
  t.ok(
    assembleResult.fs.indexOf('LUMAGL_fragmentColor') > -1,
    'hook function injected into fragment shader shader'
  );
  t.ok(
    assembleResult.vs.indexOf('picking_setPickingColor(color.rgb)') > -1,
    'injection code included in vertex shader with module'
  );
  t.ok(
    assembleResult.fs.indexOf('color = picking_filterColor(color)') > -1,
    'injection code included in fragment shader with module'
  );

  setModuleInjection('dirlight', {
    shaderStage: 'vs',
    shaderHook: 'fs:#main-end',
    injection: 'picking_setPickingColor(color.rgb);'
  });

  setModuleInjection('dirlight', {
    shaderStage: 'fs',
    shaderHook: 'LUMAGL_fragmentColor',
    injection: 'color = picking_filterColor(color);',
    order: Number.POSITIVE_INFINITY
  });

  t.end();
});

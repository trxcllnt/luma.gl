"use strict";var createGLContext;module.link('@luma.gl/core',{createGLContext(v){createGLContext=v}},0);var assembleShaders;module.link('@luma.gl/shadertools',{assembleShaders(v){assembleShaders=v}},1);var injectShader,combineInjects;module.link('@luma.gl/shadertools/lib/inject-shader',{default(v){injectShader=v},combineInjects(v){combineInjects=v}},2);var test;module.link('tape-catch',{default(v){test=v}},3);/* eslint-disable camelcase */





const fixture = {
  gl: createGLContext()
};

const VS_GLSL_TEMPLATE = `\
#version 300 es

in vec4 positions;
out vec4 vColor;

void f(out float a, in float b) {}

void main(void) {
  gl_Position = positions;
  vColor = vec4(1., 0., 0., 1.);
}
`;

const VS_GLSL_RESOLVED_DECL = 'uniform float uNewUniform';

const VS_GLSL_RESOLVED_MAIN = `\
void main(void) {
  gl_Position = positions;
  vColor = vec4(1., 0., 0., 1.);
}
`;

const FS_GLSL_TEMPLATE = `\
#version 300 es

precision highp float;

out vec4 fragmentColor;
in vec4 vColor;

void f(out float a, in float b) {}

void main(void) {
  fragmentColor = vColor;
}
`;

const FS_GLSL_RESOLVED_DECL = 'uniform bool uDiscard';

const FS_GLSL_RESOLVED_MAIN = `\
void main(void) {
  if (uDiscard} { discard } else {
  fragmentColor = vColor;
  }
}
`;

const INJECT = {
  'vs:#decl': [{injection: 'uniform float uNewUniform;\n', order: 0}],
  'fs:#decl': [{injection: 'uniform bool uDiscard;\n', order: 0}],
  'fs:#main-start': [{injection: '  if (uDiscard} { discard } else {\n', order: 0}],
  'fs:#main-end': [{injection: '  }\n', order: 0}]
};

const INJECT2 = {
  'vs:#decl': [{injection: 'uniform float uNewUniform2;\n', order: 0}],
  'fs:#main-start': [{injection: '  uNewUniform2 = uNewUniform + 1.;\n', order: 0}],
  'vs:#main-start': [{injection: ' uNewUniform = uNewUniform2;\n', order: 0}]
};

const COMBINED_INJECT = {
  'vs:#decl': 'uniform float uNewUniform;\n\nuniform float uNewUniform2;\n',
  'fs:#decl': 'uniform bool uDiscard;\n',
  'fs:#main-start': '  if (uDiscard} { discard } else {\n\n  uNewUniform2 = uNewUniform + 1.;\n',
  'fs:#main-end': '  }\n',
  'vs:#main-start': ' uNewUniform = uNewUniform2;\n'
};

test('injectShader#import', t => {
  t.ok(injectShader !== undefined, 'injectShader import successful');
  t.end();
});

test.only('injectShader#injectShader', t => {
  let injectResult;

  injectResult = injectShader(VS_GLSL_TEMPLATE, 'vs', INJECT);
  t.ok(
    injectResult.indexOf(VS_GLSL_RESOLVED_DECL) > -1,
    'declarations correctly injected in vertex shader'
  );
  t.ok(
    injectResult.indexOf(VS_GLSL_RESOLVED_MAIN) > -1,
    'main correctly injected in vertex shader'
  );

  injectResult = injectShader(FS_GLSL_TEMPLATE, 'fs', INJECT);
  t.ok(
    injectResult.indexOf(FS_GLSL_RESOLVED_DECL) > -1,
    'declarations correctly injected in vertex shader'
  );
  t.ok(
    injectResult.indexOf(FS_GLSL_RESOLVED_MAIN) > -1,
    'main correctly injected in vertex shader'
  );

  t.end();
});

test('injectShader#assembleShaders', t => {
  const assembleResult = assembleShaders(fixture.gl, {
    vs: VS_GLSL_TEMPLATE,
    fs: FS_GLSL_TEMPLATE,
    inject: INJECT,
    prologue: false
  });
  t.ok(
    assembleResult.vs.indexOf(VS_GLSL_RESOLVED_DECL) > -1,
    'declarations correctly assembled in vertex shader'
  );
  t.ok(
    assembleResult.vs.indexOf(VS_GLSL_RESOLVED_MAIN) > -1,
    'main correctly assembled in vertex shader'
  );

  t.ok(
    assembleResult.fs.indexOf(FS_GLSL_RESOLVED_DECL) > -1,
    'declarations correctly assembled in vertex shader'
  );
  t.ok(
    assembleResult.fs.indexOf(FS_GLSL_RESOLVED_MAIN) > -1,
    'main correctly assembled in vertex shader'
  );

  t.end();
});

test('injectShader#combineInjects', t => {
  t.deepEqual(combineInjects([INJECT, INJECT2]), COMBINED_INJECT, 'injects correctly combined');
  t.end();
});

"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},1);var Program;module.link('@luma.gl/webgl',{Program(v){Program=v}},2);var ProgramConfiguration;module.link('@luma.gl/webgl/classes/program-configuration',{default(v){ProgramConfiguration=v}},3);var fixture;module.link('test/setup',{fixture(v){fixture=v}},4);





const vs = `
attribute vec3 positions;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
varying vec3 vPosition;

void main(void) {
  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);
  vPosition = positions;
}
`;

const fs = `
void main(void) {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

test('WebGL2#ProgramConfiguration', t => {
  const {gl} = fixture;

  t.ok(ProgramConfiguration, 'ProgramConfiguration import successful');

  const program = new Program(gl, {vs, fs});
  const configuration = program.configuration;

  t.ok(configuration, 'ProgramConfiguration construction successful');

  // TODO - check that info about attributes and varyings have been correctly extracted

  t.end();
});

test('WebGL2#ProgramConfiguration#varyings', t => {
  const {gl2} = fixture;
  if (!gl2) {
    t.comment('WebGL2 not available, skipping tests');
    t.end();
    return;
  }

  let program = new Program(gl2, {fs, vs, varyings: ['vPosition', 'gl_Position']});

  let varyingMap = program.configuration.varyingInfosByName;
  t.equals(varyingMap.vPosition.location, 0);
  t.equals(varyingMap.gl_Position.location, 1);

  program = new Program(gl2, {
    fs,
    vs,
    varyings: ['vPosition', 'gl_Position'],
    bufferMode: GL.INTERLEAVED_ATTRIBS
  });
  varyingMap = program.configuration.varyingInfosByName;
  t.equals(varyingMap.vPosition.location, 0);
  t.equals(varyingMap.gl_Position.location, 1);
  t.end();
});

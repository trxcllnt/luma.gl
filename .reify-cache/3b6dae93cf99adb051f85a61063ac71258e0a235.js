"use strict";module.export({getQualifierDetails:()=>getQualifierDetails,getPassthroughFS:()=>getPassthroughFS,typeToChannelSuffix:()=>typeToChannelSuffix,typeToChannelCount:()=>typeToChannelCount,convertToVec4:()=>convertToVec4});var assert;module.link('../utils',{assert(v){assert=v}},0);
const FS100 = 'void main() {gl_FragColor = vec4(0);}';
const FS300 = `\
#version 300 es
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`;

// Prase given glsl line and return qualifier details or null
function getQualifierDetails(line, qualifiers) {
  qualifiers = Array.isArray(qualifiers) ? qualifiers : [qualifiers];
  const words = line.replace(/^\s+/, '').split(/\s+/);
  // TODO add support for precession qualifiers (highp, mediump and lowp)
  const [qualifier, type, definition] = words;
  if (!qualifiers.includes(qualifier) || !type || !definition) {
    return null;
  }
  const name = definition.split(';')[0];
  return {qualifier, type, name};
}

// Given the shader version, input and output variable names,
// builds and return a pass through fragment shader.
function getPassthroughFS({version = 100, input, inputType, output} = {}) {
  if (!input) {
    return version === 300 ? FS300 : FS100;
  }
  const outputValue = convertToVec4(input, inputType);
  if (version === 300) {
    return `\
#version 300 es
in ${inputType} ${input};
out vec4 ${output};
void main() {
  ${output} = ${outputValue};
}`;
  }
  // version 100
  return `\
varying ${inputType} ${input};
void main() {
  gl_FragColor = ${outputValue};
}`;
}

// convert glsl type to suffix
function typeToChannelSuffix(type) {
  switch (type) {
    case 'float':
      return 'x';
    case 'vec2':
      return 'xy';
    case 'vec3':
      return 'xyz';
    case 'vec4':
      return 'xyzw';
    default:
      assert(false);
      return null;
  }
}

// convert glsl type to channel count
function typeToChannelCount(type) {
  switch (type) {
    case 'float':
      return 1;
    case 'vec2':
      return 2;
    case 'vec3':
      return 3;
    case 'vec4':
      return 4;
    default:
      assert(false);
      return null;
  }
}

// Returns glsl instruction for converting to vec4
function convertToVec4(variable, type) {
  switch (type) {
    case 'float':
      return `vec4(${variable}, 0.0, 0.0, 1.0)`;
    case 'vec2':
      return `vec4(${variable}, 0.0, 1.0)`;
    case 'vec3':
      return `vec4(${variable}, 1.0)`;
    case 'vec4':
      return variable;
    default:
      assert(false);
      return null;
  }
}

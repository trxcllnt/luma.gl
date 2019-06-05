"use strict";module.export({getKeyValue:()=>getKeyValue,getKey:()=>getKey,getKeyType:()=>getKeyType});var assert;module.link('../utils',{assert(v){assert=v}},0);

// Resolve a WebGL enumeration name (returns itself if already a number)
function getKeyValue(gl, name) {
  // If not a string, return (assume number)
  if (typeof name !== 'string') {
    return name;
  }

  // If string converts to number, return number
  const number = Number(name);
  if (!isNaN(number)) {
    return number;
  }

  // Look up string, after removing any 'GL.' or 'gl.' prefix
  name = name.replace(/^.*\./, '');
  const value = gl[name];
  assert(value !== undefined, `Accessing undefined constant GL.${name}`);
  return value;
}

function getKey(gl, value) {
  value = Number(value);
  for (const key in gl) {
    if (gl[key] === value) {
      return `GL.${key}`;
    }
  }
  return String(value);
}

function getKeyType(gl, value) {
  assert(value !== undefined, 'undefined key');
  value = Number(value);
  for (const key in gl) {
    if (gl[key] === value) {
      return `GL.${key}`;
    }
  }
  return String(value);
}

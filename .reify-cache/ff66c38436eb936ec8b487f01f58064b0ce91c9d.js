"use strict";module.export({withParameters:()=>withParameters});var pushContextState,popContextState;module.link('./track-context-state',{pushContextState(v){pushContextState=v},popContextState(v){popContextState=v}},0);var setParameters;module.link('../unified-parameter-api/set-parameters',{setParameters(v){setParameters=v}},1);var assert,isObjectEmpty;module.link('../utils',{assert(v){assert=v},isObjectEmpty(v){isObjectEmpty=v}},2);



// Stores current "global" WebGL context settings, changes selected parameters,
// executes function, restores parameters
function withParameters(gl, parameters, func) {
  // assertWebGLContext(gl);

  if (isObjectEmpty(parameters)) {
    // Avoid setting state if no parameters provided. Just call and return
    return func(gl);
  }

  const {nocatch = true} = parameters;

  // frameBuffer not supported: use framebuffer API
  // TODO - is this still true?
  assert(!parameters.frameBuffer);

  pushContextState(gl);
  setParameters(gl, parameters);

  // Setup is done, call the function
  let value;

  if (nocatch) {
    // Avoid try catch to minimize stack size impact for safe execution paths
    value = func(gl);
    popContextState(gl);
  } else {
    // Wrap in a try-catch to ensure that parameters are restored on exceptions
    try {
      value = func(gl);
    } finally {
      popContextState(gl);
    }
  }

  return value;
}

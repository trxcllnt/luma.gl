"use strict";module.export({setParameters:()=>setParameters});var glSetParameters;module.link('./unified-parameter-api',{setParameters(v){glSetParameters=v}},0);var FUNCTION_STYLE_PARAMETER_SETTERS;module.link('./webgl-setter-function-table',{default(v){FUNCTION_STYLE_PARAMETER_SETTERS=v}},1);


// Adds support for using gl function names (in addition to parameter constants)
// as keys in setParameters
//
// Note: Value may be "normalized" (in case a short form is supported).
// In that case the normalized value is returned.

function setParameters(gl, parameters) {
  // Handles any GL parameter keys
  glSetParameters(gl, parameters);
  // Check for function style keys
  for (const key in parameters) {
    const setter = FUNCTION_STYLE_PARAMETER_SETTERS[key];
    if (setter) {
      setter(gl, parameters[key], key);
    }
  }
}

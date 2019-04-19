import { GL_PARAMETER_DEFAULTS, GL_PARAMETER_SETTERS, GL_COMPOSITE_PARAMETER_SETTERS, GL_PARAMETER_GETTERS } from './webgl-parameter-tables';
import deepArrayEqual from '../utils/deep-array-equal';
import { assert } from '../utils';
export function setParameter(gl, key, value) {
  const getter = GL_PARAMETER_GETTERS[key];
  const prevValue = getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
  const setter = GL_PARAMETER_SETTERS[key];
  assert(typeof setter === 'function');
  setter(gl, value, Number(key));
  return prevValue;
}
export function setParameters(gl, values) {
  const compositeSetters = {};

  for (const key in values) {
    const glConstant = Number(key);
    const setter = GL_PARAMETER_SETTERS[key];

    if (setter) {
      if (typeof setter === 'string') {
        compositeSetters[setter] = true;
      } else {
        setter(gl, values[key], glConstant);
      }
    }
  }

  const cache = gl.state && gl.state.cache;

  if (cache) {
    const mergedValues = Object.assign({}, cache, values);

    for (const key in compositeSetters) {
      const compositeSetter = GL_COMPOSITE_PARAMETER_SETTERS[key];
      compositeSetter(gl, mergedValues);
    }
  }
}
export function getParameter(gl, key) {
  const getter = GL_PARAMETER_GETTERS[key];
  return getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
}
export function getParameters(gl, parameters) {
  parameters = parameters || GL_PARAMETER_DEFAULTS;
  const parameterKeys = Array.isArray(parameters) ? parameters : Object.keys(parameters);
  const state = {};

  for (const key of parameterKeys) {
    state[key] = getParameter(gl, key);
  }

  return state;
}
export function getDefaultParameters(gl) {
  return Object.assign({}, GL_PARAMETER_DEFAULTS, {});
}
export function resetParameters(gl) {
  setParameters(gl, getDefaultParameters(gl));
}
export function getModifiedParameters(gl) {
  const values = getParameters(GL_PARAMETER_DEFAULTS);
  const modified = {};

  for (const key in GL_PARAMETER_DEFAULTS) {
    if (!deepArrayEqual(values[key], GL_PARAMETER_DEFAULTS[key])) {
      modified[key] = values[key];
    }
  }

  return modified;
}
//# sourceMappingURL=unified-parameter-api.js.map
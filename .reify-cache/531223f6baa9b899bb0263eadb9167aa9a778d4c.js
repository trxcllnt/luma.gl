"use strict";var module1=module;var project;module1.link('../project/project',{default(v){project=v}},0);// Cheap lighting - single directional light, single dot product, one uniform



/* eslint-disable camelcase */
const DEFAULT_LIGHT_DIRECTION = new Float32Array([1, 1, 2]);

const DEFAULT_MODULE_OPTIONS = {
  lightDirection: DEFAULT_LIGHT_DIRECTION
};

function getUniforms(opts = DEFAULT_MODULE_OPTIONS) {
  const uniforms = {};
  if (opts.lightDirection) {
    uniforms.dirlight_uLightDirection = opts.lightDirection;
  }
  return uniforms;
}

// TODO - reuse normal from geometry module
const vs = null;

const fs = `\
uniform vec3 dirlight_uLightDirection;

/*
 * Returns color attenuated by angle from light source
 */
vec4 dirlight_filterColor(vec4 color) {
  vec3 normal = project_getNormal_World();
  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));
  return vec4(color.rgb * d, color.a);
}
`;

module1.exportDefault({
  name: 'dirlight',
  vs,
  fs,
  getUniforms,
  dependencies: [project]
});

const DEFAULT_MODULE_OPTIONS = {
  diffuseTexture: null,
  diffuseColor: [0.5, 0.5, 0.5, 1]
};

function getUniforms() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MODULE_OPTIONS;
  const uniforms = {};

  if (opts.diffuseTexture !== undefined) {
    uniforms.diffuse_uHasTexture = Boolean(opts.diffuseTexture);
    uniforms.diffuse_uTexture = opts.diffuseTexture;
  }

  if (opts.diffuseColor !== undefined) {
    uniforms.diffuse_uColor = opts.diffuseColor;
  }

  return uniforms;
}

const vs = "out vec2 diffuse_vTexCoord;\nvoid diffuse_setTextureCoordinate(vec2 uv) {\n  diffuse_vTexCoord = uv;\n}\n";
const fs = "uniform vec4 diffuse_uColor;\nuniform bool diffuse_uHasTexture;\nuniform sampler2D diffuse_uTexture;\n\nin vec2 diffuse_vTexCoord;\n\n\n\nvec4 diffuse_getColor() {\n  vec2 texCoord = diffuse_vTexCoord;\n  return diffuse_uHasTexture ?\n    texture2D(diffuse_uTexture, vec2(texCoord.s, texCoord.t)) :\n    diffuse_uColor;\n}\n\nvec4 diffuse_filterColor(vec4 color) {\n  return diffuse_getColor();\n}\n";
export default {
  name: 'diffuse',
  getUniforms,
  vs,
  fs
};
//# sourceMappingURL=diffuse.js.map
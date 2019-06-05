const fs = "uniform float radius;\nuniform float amount;\n\nvec4 vignette_filterColor(vec4 color, vec2 texCoord) {\n  float dist = distance(texCoord, vec2(0.5, 0.5));\n  float ratio = smoothstep(0.8, radius * 0.799, dist * (amount + radius));\n  return color.rgba * ratio + (1.0 - ratio)*vec4(0.0, 0.0, 0.0, 1.0);\n}\n\nvec4 vignette_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return vignette_filterColor(color, texCoord);\n}\n";
const uniforms = {
  radius: {
    value: 0.5,
    min: 0,
    max: 1
  },
  amount: {
    value: 0.5,
    min: 0,
    max: 1
  }
};
export default {
  name: 'vignette',
  fs,
  uniforms,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=vignette.js.map
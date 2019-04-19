var fs = "uniform float radius;\nuniform float amount;\n\nvec4 vignette_filterColor(vec4 color, vec2 texCoord) {\n  float dist = distance(texCoord, vec2(0.5, 0.5));\n  color.rgb *= smoothstep(0.8, radius * 0.799, dist * (amount + radius));\n  return color;\n}\n\nvec4 vignette_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return vignette_filterColor(color, texCoord);\n}\n";
var uniforms = {
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
  fs: fs,
  uniforms: uniforms,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=vignette.js.map
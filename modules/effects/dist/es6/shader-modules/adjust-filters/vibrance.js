const fs = "uniform float amount;\n\nvec4 vibrance_filterColor(vec4 color) {\n  float average = (color.r + color.g + color.b) / 3.0;\n  float mx = max(color.r, max(color.g, color.b));\n  float amt = (mx - average) * (-amount * 3.0);\n  color.rgb = mix(color.rgb, vec3(mx), amt);\n  return color;\n}\n\nvec4 vibrance_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return vibrance_filterColor(color);\n}\n";
const uniforms = {
  amount: {
    value: 0,
    min: -1,
    max: 1
  }
};
export default {
  name: 'vibrance',
  uniforms,
  fs,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=vibrance.js.map
const fs = "uniform float brightness;\nuniform float contrast;\n\nvec4 brightnessContrast_filterColor(vec4 color) {\n  color.rgb += brightness;\n  if (contrast > 0.0) {\n    color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;\n  } else {\n    color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;\n  }\n  return color;\n}\n\nvec4 brightnessContrast_filterColor(vec4 color, vec2 texSize, vec2 texCoords) {\n  return brightnessContrast_filterColor(color);\n}\n";
const uniforms = {
  brightness: {
    value: 0,
    min: -1,
    max: 1
  },
  contrast: {
    value: 0,
    min: -1,
    max: 1
  }
};
export default {
  name: 'brightnessContrast',
  uniforms,
  fs,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=brightnesscontrast.js.map
import random from '../utils/random';
var fs = "uniform float radius;\nuniform vec2 delta;\n\nvec4 triangleBlur_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 adjustedDelta = delta * radius / texSize;\n\n  vec4 color = vec4(0.0);\n  float total = 0.0;\n\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n  for (float t = -30.0; t <= 30.0; t++) {\n    float percent = (t + offset - 0.5) / 30.0;\n    float weight = 1.0 - abs(percent);\n    vec4 sample = texture2D(texture, texCoord + adjustedDelta * percent);\n\n    /* switch to pre-multiplied alpha to correctly blur transparent images */\n    sample.rgb *= sample.a;\n\n    color += sample * weight;\n    total += weight;\n  }\n\n  color = color / total;\n\n  /* switch back from pre-multiplied alpha */\n  color.rgb /= color.a + 0.00001;\n\n  return color;\n}\n";
var uniforms = {
  radius: {
    value: 20,
    min: 0,
    softMax: 100
  },
  delta: {
    value: [1, 0],
    "private": true
  }
};
export default {
  name: 'triangleBlur',
  uniforms: uniforms,
  fs: fs,
  dependencies: [random],
  passes: [{
    sampler: true,
    uniforms: {
      delta: [1, 0]
    }
  }, {
    sampler: true,
    uniforms: {
      delta: [0, 1]
    }
  }]
};
//# sourceMappingURL=triangleblur.js.map
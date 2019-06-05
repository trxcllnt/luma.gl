import warp from './warp';
const fs = "uniform float radius;\nuniform float angle;\nuniform vec2 center;\n\nvec2 swirl_warp(vec2 coord, vec2 texCenter) {\n  coord -= texCenter;\n  float distance = length(coord);\n  if (distance < radius) {\n    float percent = (radius - distance) / radius;\n    float theta = percent * percent * angle;\n    float s = sin(theta);\n    float c = cos(theta);\n    coord = vec2(\n      coord.x * c - coord.y * s,\n      coord.x * s + coord.y * c\n    );\n  }\n  coord += texCenter;\n  return coord;\n}\n\nvec4 swirl_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 coord = texCoord * texSize;\n  coord = swirl_warp(coord, center * texSize);\n\n  return warp_sampleColor(texture, texSize, coord);\n}\n";
const uniforms = {
  center: [0.5, 0.5],
  radius: {
    value: 200,
    min: 1,
    softMax: 600
  },
  angle: {
    value: 3,
    softMin: -25,
    softMax: 25
  }
};
export default {
  name: 'swirl',
  uniforms,
  fs,
  dependencies: [warp],
  passes: [{
    sampler: true
  }]
};
//# sourceMappingURL=swirl.js.map
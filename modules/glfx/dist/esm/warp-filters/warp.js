var fs = "vec4 warp_sampleColor(sampler2D texture, vec2 texSize, vec2 coord) {\n  vec4 color = texture2D(texture, coord / texSize);\n  vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);\n  if (coord != clampedCoord) {\n    /* fade to transparent if we are outside the image */\n    color.a *= max(0.0, 1.0 - length(coord - clampedCoord));\n  }\n\n  return color;\n}\n";
export default {
  name: 'warp',
  fs: fs
};
//# sourceMappingURL=warp.js.map
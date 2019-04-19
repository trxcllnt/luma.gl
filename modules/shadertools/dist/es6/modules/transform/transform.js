const vs = "attribute float transform_elementID;\nvec2 transform_getPixelSizeHalf(vec2 size) {\n  return vec2(1.) / (2. * size);\n}\n\nvec2 transform_getPixelIndices(vec2 texSize, vec2 pixelSizeHalf) {\n  float yIndex = floor((transform_elementID / texSize[0]) + pixelSizeHalf[1]);\n  float xIndex = transform_elementID - (yIndex * texSize[0]);\n  return vec2(xIndex, yIndex);\n}\nvec2 transform_getTexCoord(vec2 size) {\n  vec2 pixelSizeHalf = transform_getPixelSizeHalf(size);\n  vec2 indices = transform_getPixelIndices(size, pixelSizeHalf);\n  vec2 coord = indices / size + pixelSizeHalf;\n  return coord;\n}\nvec2 transform_getPos(vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  vec2 pos = (texCoord * (2.0, 2.0)) - (1., 1.);\n  return pos;\n}\nvec4 transform_getInput(sampler2D texSampler, vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  vec4 textureColor = texture2D(texSampler, texCoord);\n  return textureColor;\n}\n";
export default {
  name: 'transform',
  vs,
  fs: null
};
//# sourceMappingURL=transform.js.map
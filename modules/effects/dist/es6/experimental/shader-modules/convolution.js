const KERNEL = {
  NORMAL: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  GAUSSIAN_BLUR: [0.045, 0.122, 0.045, 0.122, 0.332, 0.122, 0.045, 0.122, 0.045],
  GAUSSIAN_BLUR_2: [1, 2, 1, 2, 4, 2, 1, 2, 1],
  GAUSSIAN_BLUR_3: [0, 1, 0, 1, 1, 1, 0, 1, 0],
  UNSHARPEN: [-1, -1, -1, -1, 9, -1, -1, -1, -1],
  SHARPNESS: [0, -1, 0, -1, 5, -1, 0, -1, 0],
  SHARPEN: [-1, -1, -1, -1, 16, -1, -1, -1, -1],
  EDGE_DETECT: [-0.125, -0.125, -0.125, -0.125, 1, -0.125, -0.125, -0.125, -0.125],
  EDGE_DETECT_2: [-1, -1, -1, -1, 8, -1, -1, -1, -1],
  EDGE_DETECT_3: [-5, 0, 0, 0, 0, 0, 0, 0, 5],
  EDGE_DETECT_4: [-1, -1, -1, 0, 0, 0, 1, 1, 1],
  EDGE_DETECT_5: [-1, -1, -1, 2, 2, 2, -1, -1, -1],
  EDGE_DETECT_6: [-5, -5, -5, -5, 39, -5, -5, -5, -5],
  SOBEL_HORIZONTAL: [1, 2, 1, 0, 0, 0, -1, -2, -1],
  SOBEL_VERTICAL: [1, 0, -1, 2, 0, -2, 1, 0, -1],
  PREVIT_HORIZONTAL: [1, 1, 1, 0, 0, 0, -1, -1, -1],
  PREVIT_VERTICAL: [1, 0, -1, 1, 0, -1, 1, 0, -1],
  BOX_BLUR: [0.111, 0.111, 0.111, 0.111, 0.111, 0.111, 0.111, 0.111, 0.111],
  TRIANGLE_BLUR: [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625],
  EMBOSS: [-2, -1, 0, -1, 1, 1, 0, 1, 2]
};
const fs = "\nprecision highp float;\n\nuniform float kernel[9];\nuniform float kernelWeight;\n\nvec4 convolution_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoords) {\n  vec2 onePixel = vec2(1.0, 1.0) / texSize;\n  vec4 colorSum =\n    texture2D(texture, texCoords + onePixel * vec2(-1, -1)) * kernel[0] +\n    texture2D(texture, texCoords + onePixel * vec2( 0, -1)) * kernel[1] +\n    texture2D(texture, texCoords + onePixel * vec2( 1, -1)) * kernel[2] +\n    texture2D(texture, texCoords + onePixel * vec2(-1,  0)) * kernel[3] +\n    texture2D(texture, texCoords + onePixel * vec2( 0,  0)) * kernel[4] +\n    texture2D(texture, texCoords + onePixel * vec2( 1,  0)) * kernel[5] +\n    texture2D(texture, texCoords + onePixel * vec2(-1,  1)) * kernel[6] +\n    texture2D(texture, texCoords + onePixel * vec2( 0,  1)) * kernel[7] +\n    texture2D(texture, texCoords + onePixel * vec2( 1,  1)) * kernel[8] ;\n\n  // Divide the sum by the weight but just use rgb, set alpha to 1.0\n  return vec4((colorSum / kernelWeight).rgb, colorSum.a);\n}\n";
const uniforms = {
  kernel: KERNEL.NORMAL,
  kernelWeight: KERNEL.NORMAL.reduce((sum, x) => sum + x, 0)
};
export default {
  name: 'convolution',
  uniforms,
  fs,
  KERNEL,
  passes: [{
    sampler: true
  }]
};
//# sourceMappingURL=convolution.js.map
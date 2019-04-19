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
const fs = "\nprecision highp float;\n\nuniform vec2 uTextureSize;\nuniform float uKernel[9];\nuniform float uKernelWeight;\n\nvec4 convolution_getColor(sampler2D tDiffuse, vec2 uv) {\n  vec2 onePixel = vec2(1.0, 1.0) / uTextureSize;\n  vec4 colorSum =\n    texture2D(tDiffuse, uv + onePixel * vec2(-1, -1)) * uKernel[0] +\n    texture2D(tDiffuse, uv + onePixel * vec2( 0, -1)) * uKernel[1] +\n    texture2D(tDiffuse, uv + onePixel * vec2( 1, -1)) * uKernel[2] +\n    texture2D(tDiffuse, uv + onePixel * vec2(-1,  0)) * uKernel[3] +\n    texture2D(tDiffuse, uv + onePixel * vec2( 0,  0)) * uKernel[4] +\n    texture2D(tDiffuse, uv + onePixel * vec2( 1,  0)) * uKernel[5] +\n    texture2D(tDiffuse, uv + onePixel * vec2(-1,  1)) * uKernel[6] +\n    texture2D(tDiffuse, uv + onePixel * vec2( 0,  1)) * uKernel[7] +\n    texture2D(tDiffuse, uv + onePixel * vec2( 1,  1)) * uKernel[8] ;\n\n  // Divide the sum by the weight but just use rgb, set alpha to 1.0\n  return vec4((colorSum / uKernelWeight).rgb, 1.0);\n}\n";
const DEFAULT_PROPS = {};
export default {
  name: 'convolution',
  fs,
  DEFAULT_PROPS,
  getUniforms: props => props,
  KERNEL
};
//# sourceMappingURL=convolution.js.map
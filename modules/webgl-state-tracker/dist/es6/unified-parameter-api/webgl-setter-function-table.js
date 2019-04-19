import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function isArray(array) {
  return Array.isArray(array) || ArrayBuffer.isView(array);
}

export default {
  framebuffer: (gl, _framebuffer) => {
    const handle = _framebuffer && 'handle' in _framebuffer ? _framebuffer.handle : _framebuffer;
    return gl.bindFramebuffer(36160, handle);
  },
  blend: (gl, value) => value ? gl.enable(3042) : gl.disable(3042),
  blendColor: (gl, value) => gl.blendColor(...value),
  blendEquation: (gl, args) => {
    args = isArray(args) ? args : [args, args];
    gl.blendEquationSeparate(...args);
  },
  blendFunc: (gl, args) => {
    args = isArray(args) && args.length === 2 ? [...args, ...args] : args;
    gl.blendFuncSeparate(...args);
  },
  clearColor: (gl, value) => gl.clearColor(...value),
  clearDepth: (gl, value) => gl.clearDepth(value),
  clearStencil: (gl, value) => gl.clearStencil(value),
  colorMask: (gl, value) => gl.colorMask(...value),
  cull: (gl, value) => value ? gl.enable(2884) : gl.disable(2884),
  cullFace: (gl, value) => gl.cullFace(value),
  depthTest: (gl, value) => value ? gl.enable(2929) : gl.disable(2929),
  depthFunc: (gl, value) => gl.depthFunc(value),
  depthMask: (gl, value) => gl.depthMask(value),
  depthRange: (gl, value) => gl.depthRange(...value),
  dither: (gl, value) => value ? gl.enable(3024) : gl.disable(3024),
  derivativeHint: (gl, value) => {
    gl.hint(35723, value);
  },
  frontFace: (gl, value) => gl.frontFace(value),
  mipmapHint: (gl, value) => gl.hint(33170, value),
  lineWidth: (gl, value) => gl.lineWidth(value),
  polygonOffsetFill: (gl, value) => value ? gl.enable(32823) : gl.disable(32823),
  polygonOffset: (gl, value) => gl.polygonOffset(...value),
  sampleCoverage: (gl, value) => gl.sampleCoverage(...value),
  scissorTest: (gl, value) => value ? gl.enable(3089) : gl.disable(3089),
  scissor: (gl, value) => gl.scissor(...value),
  stencilTest: (gl, value) => value ? gl.enable(2960) : gl.disable(2960),
  stencilMask: (gl, value) => {
    value = isArray(value) ? value : [value, value];

    const _value = value,
          _value2 = _slicedToArray(_value, 2),
          mask = _value2[0],
          backMask = _value2[1];

    gl.stencilMaskSeparate(1028, mask);
    gl.stencilMaskSeparate(1029, backMask);
  },
  stencilFunc: (gl, args) => {
    args = isArray(args) && args.length === 3 ? [...args, ...args] : args;

    const _args = args,
          _args2 = _slicedToArray(_args, 6),
          func = _args2[0],
          ref = _args2[1],
          mask = _args2[2],
          backFunc = _args2[3],
          backRef = _args2[4],
          backMask = _args2[5];

    gl.stencilFuncSeparate(1028, func, ref, mask);
    gl.stencilFuncSeparate(1029, backFunc, backRef, backMask);
  },
  stencilOp: (gl, args) => {
    args = isArray(args) && args.length === 3 ? [...args, ...args] : args;

    const _args3 = args,
          _args4 = _slicedToArray(_args3, 6),
          sfail = _args4[0],
          dpfail = _args4[1],
          dppass = _args4[2],
          backSfail = _args4[3],
          backDpfail = _args4[4],
          backDppass = _args4[5];

    gl.stencilOpSeparate(1028, sfail, dpfail, dppass);
    gl.stencilOpSeparate(1029, backSfail, backDpfail, backDppass);
  },
  viewport: (gl, value) => gl.viewport(...value)
};
//# sourceMappingURL=webgl-setter-function-table.js.map
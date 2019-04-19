import assert from './assert';
import { WEBGL2_CONTEXT_POLYFILLS, WEBGL2_CONTEXT_OVERRIDES } from './polyfill-table';
export default function polyfillContext(gl) {
  gl.luma = gl.luma || {};
  initializeExtensions(gl);

  if (!gl.luma.polyfilled) {
    installPolyfills(gl, WEBGL2_CONTEXT_POLYFILLS);
    installOverrides(gl, {
      target: gl.luma,
      target2: gl
    });
    gl.luma.polyfilled = true;
  }

  return gl;
}
const global_ = typeof global !== 'undefined' ? global : window;
global_.polyfillContext = polyfillContext;

function initializeExtensions(gl) {
  gl.luma.extensions = {};
  const EXTENSIONS = gl.getSupportedExtensions() || [];

  for (const extension of EXTENSIONS) {
    gl.luma[extension] = gl.getExtension(extension);
  }
}

function installOverrides(gl, _ref) {
  let target = _ref.target,
      target2 = _ref.target2;
  Object.keys(WEBGL2_CONTEXT_OVERRIDES).forEach(key => {
    if (typeof WEBGL2_CONTEXT_OVERRIDES[key] === 'function') {
      const originalFunc = gl[key] ? gl[key].bind(gl) : () => {};
      const polyfill = WEBGL2_CONTEXT_OVERRIDES[key].bind(null, gl, originalFunc);
      target[key] = polyfill;
      target2[key] = polyfill;
    }
  });
}

function installPolyfills(gl, polyfills) {
  for (const extension of Object.getOwnPropertyNames(polyfills)) {
    if (extension !== 'overrides') {
      polyfillExtension(gl, {
        extension,
        target: gl.luma,
        target2: gl
      });
    }
  }
}

function polyfillExtension(gl, _ref2) {
  let extension = _ref2.extension,
      target = _ref2.target,
      target2 = _ref2.target2;
  const defaults = WEBGL2_CONTEXT_POLYFILLS[extension];
  assert(defaults);
  const _defaults$meta = defaults.meta,
        meta = _defaults$meta === void 0 ? {} : _defaults$meta;
  const _meta$suffix = meta.suffix,
        suffix = _meta$suffix === void 0 ? '' : _meta$suffix;
  const ext = gl.getExtension(extension);

  for (const key of Object.keys(defaults)) {
    const extKey = "".concat(key).concat(suffix);
    let polyfill = null;

    if (key === 'meta') {} else if (typeof gl[key] === 'function') {} else if (ext && typeof ext[extKey] === 'function') {
      polyfill = function polyfill() {
        return ext[extKey](...arguments);
      };
    } else if (typeof defaults[key] === 'function') {
      polyfill = defaults[key].bind(target);
    }

    if (polyfill) {
      target[key] = polyfill;
      target2[key] = polyfill;
    }
  }
}
//# sourceMappingURL=polyfill-context.js.map
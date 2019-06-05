"use strict";module.export({isWebGL:()=>isWebGL,isWebGL2:()=>isWebGL2,assertWebGLContext:()=>assertWebGLContext,assertWebGL2Context:()=>assertWebGL2Context,setGLContextDefaults:()=>setGLContextDefaults,createGLContext:()=>createGLContext,instrumentGLContext:()=>instrumentGLContext,destroyGLContext:()=>destroyGLContext,resizeGLContext:()=>resizeGLContext});module.export({ERR_CONTEXT:()=>ERR_CONTEXT,ERR_WEBGL:()=>ERR_WEBGL,ERR_WEBGL2:()=>ERR_WEBGL2},true);var trackContextState;module.link('@luma.gl/webgl-state-tracker',{trackContextState(v){trackContextState=v}},0);var createHeadlessContext;module.link('./create-headless-context',{createHeadlessContext(v){createHeadlessContext=v}},1);var getCanvas;module.link('./create-canvas',{getCanvas(v){getCanvas=v}},2);var createBrowserContext;module.link('./create-browser-context',{createBrowserContext(v){createBrowserContext=v}},3);var getContextDebugInfo;module.link('../debug/get-context-debug-info',{getContextDebugInfo(v){getContextDebugInfo=v}},4);var WebGL2RenderingContext;module.link('../webgl-utils',{WebGL2RenderingContext(v){WebGL2RenderingContext=v}},5);var log,isBrowser,assert;module.link('../utils',{log(v){log=v},isBrowser(v){isBrowser=v},assert(v){assert=v}},6);var global;module.link('../utils/globals',{global(v){global=v}},7);/* eslint-disable quotes */
// WebGLRenderingContext related methods












const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
const ERR_WEBGL = ERR_CONTEXT;
const ERR_WEBGL2 = 'Requires WebGL2';

function isWebGL(gl) {
  return Boolean(gl && Number.isFinite(gl._version));
}

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function assertWebGLContext(gl) {
  // Need to handle debug context
  assert(isWebGL(gl), ERR_CONTEXT);
}

function assertWebGL2Context(gl) {
  // Need to handle debug context
  assert(isWebGL2(gl), ERR_WEBGL2);
}

const contextDefaults = {
  // COMMON CONTEXT PARAMETERS
  // Attempt to allocate WebGL2 context
  webgl2: true, // Attempt to create a WebGL2 context (false to force webgl1)
  webgl1: true, // Attempt to create a WebGL1 context (false to fail if webgl2 not available)
  throwOnFailure: true,
  manageState: true,
  // BROWSER CONTEXT PARAMETERS
  canvas: null, // A canvas element or a canvas string id
  debug: false, // Instrument context (at the expense of performance)
  // HEADLESS CONTEXT PARAMETERS
  width: 800, // width are height are only used by headless gl
  height: 600
  // WEBGL/HEADLESS CONTEXT PARAMETERS
  // Remaining options are passed through to context creator
};

/*
 * Change default context creation parameters.
 * Main use case is regression test suite.
 */
function setGLContextDefaults(options = {}) {
  Object.assign(contextDefaults, {width: 1, height: 1}, options);
}

/*
 * Creates a context giving access to the WebGL API
 */
/* eslint-disable complexity, max-statements */
function createGLContext(options = {}) {
  options = Object.assign({}, contextDefaults, options);
  const {width, height} = options;

  // Error reporting function, enables exceptions to be disabled
  function onError(message) {
    if (options.throwOnError) {
      throw new Error(message);
    }
    return null;
  }

  let gl;
  if (isBrowser) {
    // Get or create a canvas
    const {canvas} = options;
    const targetCanvas = getCanvas({canvas, width, height, onError});
    // Create a WebGL context in the canvas
    gl = createBrowserContext(targetCanvas, options);
  } else {
    // Create a headless-gl context under Node.js
    gl = createHeadlessContext({...options, width, height, onError});
  }

  if (!gl) {
    return null;
  }

  gl = instrumentGLContext(gl, options);

  // Log some debug info about the newly created context
  logInfo(gl);

  // Add to seer integration
  return gl;
}

function instrumentGLContext(gl, options = {}) {
  // Avoid multiple instrumentations
  if (gl._instrumented) {
    return gl;
  }

  gl._version = gl._version || getVersion(gl);

  options = Object.assign({}, contextDefaults, options);
  const {manageState, debug} = options;

  // Install context state tracking
  if (manageState) {
    trackContextState(gl, {
      copyState: false,
      log: (...args) => log.log(1, ...args)()
    });
  }

  // Add debug instrumentation to the context
  if (isBrowser && debug) {
    if (!global.makeDebugContext) {
      log.warn('WebGL debug mode not activated. import "@luma.gl/debug" to enable.')();
    } else {
      gl = global.makeDebugContext(gl, {debug});
      // Debug forces log level to at least 1
      log.priority = Math.max(log.priority, 1);
    }
  }

  gl._instrumented = true;

  return gl;
}

function destroyGLContext(gl) {
  // TODO - Remove from seer integration

  // TODO - Unregister any tracking/polyfills

  // There is no way to delete browser based context

  // Destroy headless gl context
  const ext = gl.getExtension('STACKGL_destroy_context');
  if (ext) {
    ext.destroy();
  }
}

/**
 * Resize the canvas' drawing buffer.
 *
 * Can match the canvas CSS size, and optionally also consider devicePixelRatio
 * Can be called every frame
 *
 * Regardless of size, the drawing buffer will always be scaled to the viewport, but
 * for best visual results, usually set to either:
 *  canvas CSS width x canvas CSS height
 *  canvas CSS width * devicePixelRatio x canvas CSS height * devicePixelRatio
 * See http://webgl2fundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
 *
 * resizeGLContext(gl, {width, height, useDevicePixels})
 */
function resizeGLContext(gl, options = {}) {
  // Resize browser context
  if (gl.canvas) {
    /* global window */
    const devicePixelRatio = options.useDevicePixels ? window.devicePixelRatio || 1 : 1;

    const width = `width` in options ? options.width : gl.canvas.clientWidth;
    const height = `height` in options ? options.height : gl.canvas.clientHeight;

    gl.canvas.width = width * devicePixelRatio;
    gl.canvas.height = height * devicePixelRatio;

    return;
  }

  // Resize headless gl context
  const ext = gl.getExtension('STACKGL_resize_drawingbuffer');
  if (ext && `width` in options && `height` in options) {
    ext.resize(options.width, options.height);
  }
}

// HELPER METHODS

function logInfo(gl) {
  const webGL = isWebGL2(gl) ? 'WebGL2' : 'WebGL1';
  const info = getContextDebugInfo(gl);
  const driver = info ? `(${info.vendor},${info.renderer})` : '';
  const debug = gl.debug ? ' debug' : '';
  log.once(1, `${webGL}${debug} context ${driver}`)();
}

function getVersion(gl) {
  if (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) {
    // WebGL2 context.
    return 2;
  }
  // Must be a WebGL1 context.
  return 1;
}

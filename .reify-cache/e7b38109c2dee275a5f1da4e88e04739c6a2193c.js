"use strict";var module1=module;module1.export({headlessTypes:()=>headlessTypes,headlessGL:()=>headlessGL,Image:()=>Image,WebGLRenderingContext:()=>WebGLRenderingContext,WebGLProgram:()=>WebGLProgram,WebGLShader:()=>WebGLShader,WebGLBuffer:()=>WebGLBuffer,WebGLFramebuffer:()=>WebGLFramebuffer,WebGLRenderbuffer:()=>WebGLRenderbuffer,WebGLTexture:()=>WebGLTexture,WebGLUniformLocation:()=>WebGLUniformLocation,WebGLActiveInfo:()=>WebGLActiveInfo,WebGLShaderPrecisionFormat:()=>WebGLShaderPrecisionFormat,WebGL2RenderingContext:()=>WebGL2RenderingContext});module1.export({ERR_HEADLESSGL_LOAD:()=>ERR_HEADLESSGL_LOAD,webGLTypesAvailable:()=>webGLTypesAvailable},true);var global;module1.link('../utils/globals',{global(v){global=v}},0);var isBrowser;module1.link('../utils/is-browser',{default(v){isBrowser=v}},1);// WEBGL BUILT-IN TYPES
// 1) Exports all WebGL constants as {GL}
// 2) Enables app to "import" WebGL types
//    - Importing these types makes them known to eslint etc.
//    - Provides dummy types for WebGL2 when not available to streamline
//      library code.
//    - Exports types from headless gl when running under Node.js

/* eslint-disable quotes, no-console */



const ERR_HEADLESSGL_LOAD = `\
luma.gl: loaded under Node.js without headless gl installed, meaning that WebGL \
contexts can not be created. This may not be an error. For example, this is a \
typical configuration for isorender applications running on the server.`;

// Load headless gl dynamically, if available
let headlessTypes = null;
function headlessGL(...args) {
  const headless = module.require('gl');
  if (!headless) {
    throw new Error(ERR_HEADLESSGL_LOAD);
  }
  return headless(...args);
}

if (!isBrowser) {
  try {
    module1.runSetters(headlessTypes = module.require('gl/wrap'));
  } catch (error) {
    // /* global console */
    // console.info(ERR_HEADLESSGL_LOAD);
  }
}

class DummyType {}

const {
  WebGLRenderingContext = DummyType,
  WebGLProgram = DummyType,
  WebGLShader = DummyType,
  WebGLBuffer = DummyType,
  WebGLFramebuffer = DummyType,
  WebGLRenderbuffer = DummyType,
  WebGLTexture = DummyType,
  WebGLUniformLocation = DummyType,
  WebGLActiveInfo = DummyType,
  WebGLShaderPrecisionFormat = DummyType
} = headlessTypes || global;

const webGLTypesAvailable =
  WebGLRenderingContext !== DummyType &&
  WebGLProgram !== DummyType &&
  WebGLShader !== DummyType &&
  WebGLBuffer !== DummyType &&
  WebGLFramebuffer !== DummyType &&
  WebGLRenderbuffer !== DummyType &&
  WebGLTexture !== DummyType &&
  WebGLUniformLocation !== DummyType &&
  WebGLActiveInfo !== DummyType &&
  WebGLShaderPrecisionFormat !== DummyType;

// Ensures that WebGL2RenderingContext is defined in non-WebGL2 environments
// so that apps can test their gl contexts with instanceof
// E.g. if (gl instanceof WebGL2RenderingContext) { }
function getWebGL2RenderingContext() {
  class WebGL2RenderingContextNotSupported {}
  return global.WebGL2RenderingContext || WebGL2RenderingContextNotSupported;
}

// Ensure that Image is defined under Node.js
function getImage() {
  class ImageNotSupported {}
  return global.Image || ImageNotSupported;
}

const WebGL2RenderingContext = getWebGL2RenderingContext();
const Image = getImage();

// Export the standard WebGL types















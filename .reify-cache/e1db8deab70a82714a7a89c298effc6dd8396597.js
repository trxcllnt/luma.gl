"use strict";module.export({isWebGL:()=>isWebGL,isWebGL2:()=>isWebGL2,assertWebGLContext:()=>assertWebGLContext,assertWebGL2Context:()=>assertWebGL2Context});module.export({ERR_CONTEXT:()=>ERR_CONTEXT,ERR_WEBGL:()=>ERR_WEBGL,ERR_WEBGL2:()=>ERR_WEBGL2},true);var assert;module.link('../utils',{assert(v){assert=v}},0);// import {WebGLRenderingContext, WebGL2RenderingContext} from './webgl-types';


// Heuristic testing of contexts (to indentify debug wrappers around gl contexts)
// const GL_ARRAY_BUFFER = 0x8892;

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

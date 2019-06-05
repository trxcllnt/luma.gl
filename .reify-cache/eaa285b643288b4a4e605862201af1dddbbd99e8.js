"use strict";var module1=module;var log,global;module1.link('@luma.gl/core',{log(v){log=v},global(v){global=v}},0);module1.link('./glsl-to-js-compiler/draw-model',{COLOR_MODE:"COLOR_MODE"},1);module1.link('./glsl-to-js-compiler/debug-context',{default:"_DebugContext"},2);module1.link('./glsl-to-js-compiler/compile-shader',{compileShaderModule:"compileShaderModule",compileVertexShader:"compileVertexShader",compileFragmentShader:"compileFragmentShader"},3);module1.link('./webgl-api-tracing/webgl-debug-context',{makeDebugContext:"makeDebugContext"},4);var makeDebugContext;module1.link('./webgl-api-tracing/webgl-debug-context',{makeDebugContext(v){makeDebugContext=v}},5);











// Register the Khronons WebGLDebugger module that lets us instrument WebGLContexts
// TODO - move the instrumentation code into this module

global.makeDebugContext = makeDebugContext;

// Install additional parameter definitions on luma.gl classes
// TODO: This needs a bit more plumbing
// import {installParameterDefinitions} from './webgl-api-tracing/parameter-definitions';
// installParameterDefinitions();

// Since debug support has been explicitly installed, no qualms about printing to console
// TODO - That said: We could import probe.gl from luma.gl
log.info('@luma.gl/debug: WebGL debug support installed'); // eslint-disable-line

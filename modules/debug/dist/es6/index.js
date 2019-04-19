import { log, global } from '@luma.gl/core';
export { COLOR_MODE } from './glsl-to-js-compiler/draw-model';
export { default as _DebugContext } from './glsl-to-js-compiler/debug-context';
export { compileShaderModule, compileVertexShader, compileFragmentShader } from './glsl-to-js-compiler/compile-shader';
export { makeDebugContext } from './webgl-api-tracing/webgl-debug-context';
import { makeDebugContext } from './webgl-api-tracing/webgl-debug-context';
global.makeDebugContext = makeDebugContext;
log.info('@luma.gl/debug: WebGL debug support installed');
//# sourceMappingURL=index.js.map
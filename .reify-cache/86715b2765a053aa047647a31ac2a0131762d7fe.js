"use strict";module.link('./init');module.link('./init',{lumaStats:"lumaStats"},0);module.link('@luma.gl/webgl-state-tracker',{resetParameters:"resetParameters",getParameter:"getParameter",getParameters:"getParameters",setParameter:"setParameter",setParameters:"setParameters",withParameters:"withParameters",getModifiedParameters:"getModifiedParameters"},1);module.link('./webgl-utils/webgl-types',{Image:"Image",WebGLRenderingContext:"WebGLRenderingContext",WebGLProgram:"WebGLProgram",WebGLShader:"WebGLShader",WebGLBuffer:"WebGLBuffer",WebGLFramebuffer:"WebGLFramebuffer",WebGLRenderbuffer:"WebGLRenderbuffer",WebGLTexture:"WebGLTexture",WebGLUniformLocation:"WebGLUniformLocation",WebGLActiveInfo:"WebGLActiveInfo",WebGLShaderPrecisionFormat:"WebGLShaderPrecisionFormat",WebGL2RenderingContext:"WebGL2RenderingContext",webGLTypesAvailable:"webGLTypesAvailable"},2);module.link('./context/context',{createGLContext:"createGLContext",destroyGLContext:"destroyGLContext",resizeGLContext:"resizeGLContext",instrumentGLContext:"instrumentGLContext",setGLContextDefaults:"setGLContextDefaults"},3);module.link('./context/create-canvas',{getCanvas:"getCanvas",getPageLoadPromise:"getPageLoadPromise"},4);module.link('./webgl-utils/request-animation-frame',{requestAnimationFrame:"requestAnimationFrame",cancelAnimationFrame:"cancelAnimationFrame"},5);module.link('./webgl-utils/webgl-checks',{isWebGL:"isWebGL",isWebGL2:"isWebGL2"},6);module.link('./webgl-utils/texture-utils',{cloneTextureFrom:"cloneTextureFrom"},7);module.link('./webgl-utils/constants-to-keys',{getKeyValue:"getKeyValue",getKey:"getKey"},8);module.link('./features/limits',{getContextInfo:"getContextInfo",getGLContextInfo:"getGLContextInfo",getContextLimits:"getContextLimits"},9);module.link('./debug/get-context-debug-info',{getContextDebugInfo:"getContextDebugInfo"},10);module.link('./features/webgl-features-table',{FEATURES:"FEATURES"},11);module.link('./features/features',{hasFeature:"hasFeature",hasFeatures:"hasFeatures",getFeatures:"getFeatures"},12);module.link('./features/check-glsl-extension',{default:"canCompileGLGSExtension"},13);module.link('./classes/accessor',{default:"Accessor"},14);module.link('./classes/buffer',{default:"Buffer"},15);module.link('./classes/shader',{Shader:"Shader",VertexShader:"VertexShader",FragmentShader:"FragmentShader"},16);module.link('./classes/program',{default:"Program"},17);module.link('./classes/framebuffer',{default:"Framebuffer"},18);module.link('./classes/renderbuffer',{default:"Renderbuffer"},19);module.link('./classes/texture-2d',{default:"Texture2D"},20);module.link('./classes/texture-cube',{default:"TextureCube"},21);module.link('./classes/clear',{clear:"clear",clearBuffer:"clearBuffer"},22);module.link('./classes/copy-and-blit',{readPixelsToArray:"readPixelsToArray",readPixelsToBuffer:"readPixelsToBuffer",copyToDataUrl:"copyToDataUrl",copyToImage:"copyToImage",copyToTexture:"copyToTexture",blit:"blit"},23);module.link('./classes/query',{default:"Query"},24);module.link('./classes/texture-3d',{default:"Texture3D"},25);module.link('./classes/transform-feedback',{default:"TransformFeedback"},26);module.link('./classes/vertex-array-object',{default:"VertexArrayObject"},27);module.link('./classes/vertex-array',{default:"VertexArray"},28);module.link('./classes/uniform-buffer-layout',{default:"UniformBufferLayout"},29);module.link('./utils/load-file',{setPathPrefix:"setPathPrefix",loadFile:"loadFile",loadImage:"loadImage"},30);module.link('./glsl-utils/get-shader-name',{default:"getShaderName"},31);module.link('./glsl-utils/get-shader-version',{default:"getShaderVersion"},32);module.link('./utils/log',{default:"log"},33);module.link('./utils/assert',{default:"assert"},34);module.link('./utils/utils',{uid:"uid",isObjectEmpty:"isObjectEmpty"},35);module.link('./utils/globals',{self:"self",window:"window",global:"global",document:"document"},36);module.link('./utils/is-browser',{default:"isBrowser"},37);module.link('./classes/uniforms',{parseUniformName:"parseUniformName",getUniformSetter:"getUniformSetter"},38);module.link('./debug/debug-uniforms',{getDebugTableForUniforms:"getDebugTableForUniforms"},39);module.link('./debug/debug-vertex-array',{getDebugTableForVertexArray:"getDebugTableForVertexArray"},40);module.link('./debug/debug-program-configuration',{getDebugTableForProgramConfiguration:"getDebugTableForProgramConfiguration"},41);// luma.gl Base WebGL wrapper library
// Provides simple class/function wrappers around the low level webgl objects
// These classes are intentionally close to the WebGL API
// but make it easier to use.
// Higher level abstractions can be built on these classes

// Initialize any global state



// TODO - should we reexport these?










// Exports WebGL API constants and types, plus some basic type checks


























// UTILS


// WebGL Functions









// WebGL Helper Classes


// WebGL1 classes










// Copy and Blit









// WebGL2 classes & Extensions







// experimental WebGL exports



// PARSE SHADER SOURCE



// UTILS






// INTERNAL





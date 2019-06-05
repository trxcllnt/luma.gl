"use strict";module.export({getContextLimits:()=>getContextLimits,getGLContextInfo:()=>getGLContextInfo,getContextInfo:()=>getContextInfo});var GL;module.link('@luma.gl/constants',{default(v){GL=v}},0);var isWebGL2;module.link('../webgl-utils',{isWebGL2(v){isWebGL2=v}},1);var WEBGL_LIMITS;module.link('./webgl-limits-table',{default(v){WEBGL_LIMITS=v}},2);var getContextDebugInfo;module.link('../debug/get-context-debug-info',{getContextDebugInfo(v){getContextDebugInfo=v}},3);





function getContextLimits(gl) {
  gl.luma = gl.luma || {};

  if (!gl.luma.limits) {
    gl.luma.limits = {};
    gl.luma.webgl1MinLimits = {};
    gl.luma.webgl2MinLimits = {};

    const isWebgl2 = isWebGL2(gl);

    // WEBGL limits
    for (const parameter in WEBGL_LIMITS) {
      const limit = WEBGL_LIMITS[parameter];

      const webgl1MinLimit = limit.gl1;
      const webgl2MinLimit = 'gl2' in limit ? limit.gl2 : limit.gl1;
      const minLimit = isWebgl2 ? webgl2MinLimit : webgl1MinLimit;

      // Check if we can query for this limit
      const limitNotAvailable =
        ('gl2' in limit && !isWebgl2) ||
        ('extension' in limit && !gl.getExtension(limit.extension));

      const value = limitNotAvailable ? minLimit : gl.getParameter(parameter);
      gl.luma.limits[parameter] = value;
      gl.luma.webgl1MinLimits[parameter] = webgl1MinLimit;
      gl.luma.webgl2MinLimits[parameter] = webgl2MinLimit;
    }
  }

  return gl.luma.limits;
}

function getGLContextInfo(gl) {
  gl.luma = gl.luma || {};

  const info = getContextDebugInfo(gl);
  if (!gl.luma.info) {
    gl.luma.info = {
      [GL.UNMASKED_VENDOR_WEBGL]: info.vendor,
      [GL.UNMASKED_RENDERER_WEBGL]: info.renderer,
      [GL.VENDOR]: info.vendorMasked,
      [GL.RENDERER]: info.rendererMasked,
      [GL.VERSION]: info.version,
      [GL.SHADING_LANGUAGE_VERSION]: info.shadingLanguageVersion
    };
  }

  return gl.luma.info;
}

function getContextInfo(gl) {
  return Object.assign(getContextDebugInfo(gl), {
    limits: getContextLimits(gl),
    info: getGLContextInfo(gl),
    webgl1MinLimits: gl.luma.webgl1MinLimits,
    webgl2MinLimits: gl.luma.webgl2MinLimits
  });
}

import { isWebGL2 } from '../webgl-utils';
import WEBGL_LIMITS from './webgl-limits-table';
import { getContextDebugInfo } from '../debug/get-context-debug-info';
export function getContextLimits(gl) {
  gl.luma = gl.luma || {};

  if (!gl.luma.limits) {
    gl.luma.limits = {};
    gl.luma.webgl1MinLimits = {};
    gl.luma.webgl2MinLimits = {};
    const isWebgl2 = isWebGL2(gl);

    for (const parameter in WEBGL_LIMITS) {
      const limit = WEBGL_LIMITS[parameter];
      const webgl1MinLimit = limit.gl1;
      const webgl2MinLimit = 'gl2' in limit ? limit.gl2 : limit.gl1;
      const minLimit = isWebgl2 ? webgl2MinLimit : webgl1MinLimit;
      const limitNotAvailable = 'gl2' in limit && !isWebgl2 || 'extension' in limit && !gl.getExtension(limit.extension);
      const value = limitNotAvailable ? minLimit : gl.getParameter(parameter);
      gl.luma.limits[parameter] = value;
      gl.luma.webgl1MinLimits[parameter] = webgl1MinLimit;
      gl.luma.webgl2MinLimits[parameter] = webgl2MinLimit;
    }
  }

  return gl.luma.limits;
}
export function getGLContextInfo(gl) {
  gl.luma = gl.luma || {};
  const info = getContextDebugInfo(gl);

  if (!gl.luma.info) {
    gl.luma.info = {
      [37445]: info.vendor,
      [37446]: info.renderer,
      [7936]: info.vendorMasked,
      [7937]: info.rendererMasked,
      [7938]: info.version,
      [35724]: info.shadingLanguageVersion
    };
  }

  return gl.luma.info;
}
export function getContextInfo(gl) {
  return Object.assign(getContextDebugInfo(gl), {
    limits: getContextLimits(gl),
    info: getGLContextInfo(gl),
    webgl1MinLimits: gl.luma.webgl1MinLimits,
    webgl2MinLimits: gl.luma.webgl2MinLimits
  });
}
//# sourceMappingURL=limits.js.map
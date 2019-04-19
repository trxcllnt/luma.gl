import { log } from '@luma.gl/core';

const WebGLDebug = require('webgl-debug');

function getContextData(gl) {
  gl.luma = gl.luma || {};
  return gl.luma;
}

export function makeDebugContext(gl) {
  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? true : _ref$debug;

  if (gl === null) {
    return null;
  }

  return debug ? getDebugContext(gl) : getRealContext(gl);
}
export function enableDebug(debug) {
  log.debug = debug;
}
export function getRealContext(gl) {
  if (gl === null) {
    return null;
  }

  const data = getContextData(gl);
  return data.realContext ? data.realContext : gl;
}
export function getDebugContext(gl) {
  if (gl === null) {
    return null;
  }

  const data = getContextData(gl);

  if (data.realContext) {
    return gl;
  }

  if (data.debugContext) {
    return data.debugContext;
  }

  class WebGLDebugContext {}

  const debugContext = WebGLDebug.makeDebugContext(gl, onGLError, onValidateGLFunc);
  Object.assign(WebGLDebugContext.prototype, debugContext);
  data.debugContext = debugContext;
  debugContext.debug = true;
  debugContext.gl = gl;
  log.info('debug context actived.')();
  return debugContext;
}

function getFunctionString(functionName, functionArgs) {
  let args = WebGLDebug.glFunctionArgsToString(functionName, functionArgs);
  args = "".concat(args.slice(0, 100)).concat(args.length > 100 ? '...' : '');
  return "gl.".concat(functionName, "(").concat(args, ")");
}

function onGLError(err, functionName, args) {
  const errorMessage = WebGLDebug.glEnumToString(err);
  const functionArgs = WebGLDebug.glFunctionArgsToString(functionName, args);
  const message = "".concat(errorMessage, " in gl.").concat(functionName, "(").concat(functionArgs, ")");

  if (log.throw) {
    throw new Error(message);
  } else {
    log.error(message)();
    debugger;
  }
}

function onValidateGLFunc(functionName, functionArgs) {
  let functionString;

  if (log.priority >= 4) {
    functionString = getFunctionString(functionName, functionArgs);
    log.log(4, functionString)();
  }

  if (log.break) {
    functionString = functionString || getFunctionString(functionName, functionArgs);
    const isBreakpoint = log.break && log.break.every(breakOn => functionString.indexOf(breakOn) !== -1);

    if (isBreakpoint) {
      debugger;
    }
  }

  for (const arg of functionArgs) {
    if (arg === undefined) {
      functionString = functionString || getFunctionString(functionName, functionArgs);

      if (log.throw) {
        throw new Error("Undefined argument: ".concat(functionString));
      } else {
        log.error("Undefined argument: ".concat(functionString))();
        debugger;
      }
    }
  }
}
//# sourceMappingURL=webgl-debug-context.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGLContext = createGLContext;
exports.hasWebGL = hasWebGL;
exports.hasExtension = hasExtension;
exports.getExtension = getExtension;
exports.glContextWithState = glContextWithState;
exports.glCheckError2 = glCheckError2;
exports.glCheckError = glCheckError;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Checks if WebGL is enabled and creates a context for using WebGL.
function createGLContext(canvas) {
  var opt = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!isBrowserContext()) {
    throw new Error('Can\'t create a WebGL context outside a browser context.');
  }
  canvas = typeof canvas === 'string' ? document.getElementById(canvas) : canvas;

  canvas.addEventListener('webglcontextcreationerror', function (e) {
    console.log(e.statusMessage || 'Unknown error');
  }, false);

  // Prefer webgl2 over webgl1, prefer conformant over experimental
  var gl = canvas.getContext('webgl2', opt);
  gl = gl || canvas.getContext('experimental-webgl2', opt);
  gl = gl || canvas.getContext('webgl', opt);
  gl = gl || canvas.getContext('experimental-webgl', opt);

  (0, _assert2.default)(gl, 'Failed to create WebGLRenderingContext');

  // Set as debug handler
  gl = opt.debug ? createDebugContext(gl) : gl;

  // Add a safe get method
  gl.get = function glGet(name) {
    var value = name;
    if (typeof name === 'string') {
      value = this[name];
      (0, _assert2.default)(value, 'Accessing gl.' + name);
    }
    return value;
  };

  return gl;
} // WebGLRenderingContext related methods
/* eslint-disable no-try-catch, no-console, no-loop-func */
/* global window, document, console */


function hasWebGL() {
  if (!isBrowserContext()) {
    return false;
  }
  // Feature test WebGL
  try {
    var canvas = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (error) {
    return false;
  }
}

function hasExtension(name) {
  if (!hasWebGL()) {
    return false;
  }
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  // Should maybe be return !!context.getExtension(name);
  return context.getExtension(name);
}

// Returns the extension or throws an error
function getExtension(gl, extensionName) {
  var extension = gl.getExtension(extensionName);
  (0, _assert2.default)(extension, extensionName + ' not supported!');
  return extension;
}

function isBrowserContext() {
  return typeof window !== 'undefined';
}

// Executes a function with gl states temporarily set, exception safe
// Currently support scissor test and framebuffer binding
function glContextWithState(gl, _ref, func) {
  var scissorTest = _ref.scissorTest;
  var frameBuffer = _ref.frameBuffer;

  var scissorTestWasEnabled = undefined;
  if (scissorTest) {
    scissorTestWasEnabled = gl.isEnabled(gl.SCISSOR_TEST);
    var x = scissorTest.x;
    var y = scissorTest.y;
    var w = scissorTest.w;
    var h = scissorTest.h;

    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(x, y, w, h);
  }

  if (frameBuffer) {
    // TODO - was there any previously set frame buffer we need to remember?
    frameBuffer.bind();
  }

  try {
    func(gl);
  } finally {
    if (!scissorTestWasEnabled) {
      gl.disable(gl.SCISSOR_TEST);
    }
    if (frameBuffer) {
      // TODO - was there any previously set frame buffer?
      // TODO - delegate "unbind" to Framebuffer object?
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
  }
}

function glCheckError2(gl) {
  glCheckError(gl);
}

function glCheckError(gl) {
  var error = gl.getError();
  switch (error) {
    case gl.NO_ERROR:
      //  No error has been recorded. The value of this constant is 0.
      return;

    case gl.CONTEXT_LOST_WEBGL:
      //  If the WebGL context is lost, this error is returned on the
      // first call to getError. Afterwards and until the context has been
      // restored, it returns gl.NO_ERROR.
      throw new Error('WebGL context lost');

    case gl.INVALID_ENUM:
      // An unacceptable value has been specified for an enumerated argument.
      throw new Error('WebGL invalid enumerated argument');

    case gl.INVALID_VALUE:
      // A numeric argument is out of range.
      throw new Error('WebGL invalid value');

    case gl.INVALID_OPERATION:
      // The specified command is not allowed for the current state.
      throw new Error('WebGL invalid operation');

    case gl.INVALID_FRAMEBUFFER_OPERATION:
      // The currently bound framebuffer is not framebuffer complete
      // when trying to render to or to read from it.
      throw new Error('WebGL invalid framebuffer operation');

    case gl.OUT_OF_MEMORY:
      // Not enough memory is left to execute the command.
      throw new Error('WebGL out of memory');

    default:
      // Not enough memory is left to execute the command.
      throw new Error('WebGL unknown error');
  }
}

// TODO - document or remove
function createDebugContext(ctx) {
  var _arguments = arguments;

  var gl = {};
  for (var m in ctx) {
    var f = ctx[m];
    if (typeof f === 'function') {
      gl[m] = function (k, v) {
        return function () {
          console.log(k, Array.prototype.join.call(_arguments), Array.prototype.slice.call(_arguments));
          var ans = undefined;
          try {
            ans = v.apply(ctx, _arguments);
          } catch (e) {
            throw new Error(k + ' ' + e);
          }
          var errorStack = [];
          var error = undefined;
          while ((error = ctx.getError()) !== ctx.NO_ERROR) {
            errorStack.push(error);
          }
          if (errorStack.length) {
            throw errorStack.join();
          }
          return ans;
        };
      }(m, f);
    } else {
      gl[m] = f;
    }
  }

  return gl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJnbC9jb250ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCO1FBb0NBO1FBY0E7UUFZQTtRQVlBO1FBNEJBO1FBSUE7Ozs7Ozs7OztBQTFHVCxTQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBMkM7TUFBViw0REFBTSxrQkFBSTs7QUFDaEQsTUFBSSxDQUFDLGtCQUFELEVBQXFCO0FBQ3ZCLFVBQU0sSUFBSSxLQUFKLDREQUFOLENBRHVCO0dBQXpCO0FBR0EsV0FBUyxPQUFPLE1BQVAsS0FBa0IsUUFBbEIsR0FDUCxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FETyxHQUMyQixNQUQzQixDQUp1Qzs7QUFPaEQsU0FBTyxnQkFBUCxDQUF3QiwyQkFBeEIsRUFBcUQsYUFBSztBQUN4RCxZQUFRLEdBQVIsQ0FBWSxFQUFFLGFBQUYsSUFBbUIsZUFBbkIsQ0FBWixDQUR3RDtHQUFMLEVBRWxELEtBRkg7OztBQVBnRCxNQVk1QyxLQUFLLE9BQU8sVUFBUCxDQUFrQixRQUFsQixFQUE0QixHQUE1QixDQUFMLENBWjRDO0FBYWhELE9BQUssTUFBTSxPQUFPLFVBQVAsQ0FBa0IscUJBQWxCLEVBQXlDLEdBQXpDLENBQU4sQ0FiMkM7QUFjaEQsT0FBSyxNQUFNLE9BQU8sVUFBUCxDQUFrQixPQUFsQixFQUEyQixHQUEzQixDQUFOLENBZDJDO0FBZWhELE9BQUssTUFBTSxPQUFPLFVBQVAsQ0FBa0Isb0JBQWxCLEVBQXdDLEdBQXhDLENBQU4sQ0FmMkM7O0FBaUJoRCx3QkFBTyxFQUFQLEVBQVcsd0NBQVg7OztBQWpCZ0QsSUFvQmhELEdBQUssSUFBSSxLQUFKLEdBQVksbUJBQW1CLEVBQW5CLENBQVosR0FBcUMsRUFBckM7OztBQXBCMkMsSUF1QmhELENBQUcsR0FBSCxHQUFTLFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUI7QUFDNUIsUUFBSSxRQUFRLElBQVIsQ0FEd0I7QUFFNUIsUUFBSSxPQUFPLElBQVAsS0FBZ0IsUUFB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QUFhLEVBQWIsQ0FaSztBQWFYLGNBQUksaUJBQUosQ0FiVztBQWNYLGlCQUFPLENBQUMsUUFBUSxJQUFJLFFBQUosRUFBUixDQUFELEtBQTZCLElBQUksUUFBSixFQUFjO0FBQ2hELHVCQUFXLElBQVgsQ0FBZ0IsS0FBaEIsRUFEZ0Q7V0FBbEQ7QUFHQSxjQUFJLFdBQVcsTUFBWCxFQUFtQjtBQUNyQixrQkFBTSxXQUFXLElBQVgsRUFBTixDQURxQjtXQUF2QjtBQUdBLGlCQUFPLEdBQVAsQ0FwQlc7U0FBTixDQURVO09BQVYsQ0F1Qk4sQ0F2QkssRUF1QkYsQ0F2QkUsQ0FBUixDQUQyQjtLQUE3QixNQXlCTztBQUNMLFNBQUcsQ0FBSCxJQUFRLENBQVIsQ0FESztLQXpCUDtHQUZGOztBQWdDQSxTQUFPLEVBQVAsQ0FsQytCO0NBQWpDIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWJHTFJlbmRlcmluZ0NvbnRleHQgcmVsYXRlZCBtZXRob2RzXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10cnktY2F0Y2gsIG5vLWNvbnNvbGUsIG5vLWxvb3AtZnVuYyAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGNvbnNvbGUgKi9cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuLy8gQ2hlY2tzIGlmIFdlYkdMIGlzIGVuYWJsZWQgYW5kIGNyZWF0ZXMgYSBjb250ZXh0IGZvciB1c2luZyBXZWJHTC5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHTENvbnRleHQoY2FudmFzLCBvcHQgPSB7fSkge1xuICBpZiAoIWlzQnJvd3NlckNvbnRleHQoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgY3JlYXRlIGEgV2ViR0wgY29udGV4dCBvdXRzaWRlIGEgYnJvd3NlciBjb250ZXh0LmApO1xuICB9XG4gIGNhbnZhcyA9IHR5cGVvZiBjYW52YXMgPT09ICdzdHJpbmcnID9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpIDogY2FudmFzO1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRjcmVhdGlvbmVycm9yJywgZSA9PiB7XG4gICAgY29uc29sZS5sb2coZS5zdGF0dXNNZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyk7XG4gIH0sIGZhbHNlKTtcblxuICAvLyBQcmVmZXIgd2ViZ2wyIG92ZXIgd2ViZ2wxLCBwcmVmZXIgY29uZm9ybWFudCBvdmVyIGV4cGVyaW1lbnRhbFxuICBsZXQgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJywgb3B0KTtcbiAgZ2wgPSBnbCB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsMicsIG9wdCk7XG4gIGdsID0gZ2wgfHwgY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywgb3B0KTtcbiAgZ2wgPSBnbCB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgb3B0KTtcblxuICBhc3NlcnQoZ2wsICdGYWlsZWQgdG8gY3JlYXRlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCcpO1xuXG4gIC8vIFNldCBhcyBkZWJ1ZyBoYW5kbGVyXG4gIGdsID0gb3B0LmRlYnVnID8gY3JlYXRlRGVidWdDb250ZXh0KGdsKSA6IGdsO1xuXG4gIC8vIEFkZCBhIHNhZmUgZ2V0IG1ldGhvZFxuICBnbC5nZXQgPSBmdW5jdGlvbiBnbEdldChuYW1lKSB7XG4gICAgbGV0IHZhbHVlID0gbmFtZTtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICBhc3NlcnQodmFsdWUsIGBBY2Nlc3NpbmcgZ2wuJHtuYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIGdsO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNXZWJHTCgpIHtcbiAgaWYgKCFpc0Jyb3dzZXJDb250ZXh0KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gRmVhdHVyZSB0ZXN0IFdlYkdMXG4gIHRyeSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCAmJlxuICAgICAgKGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzRXh0ZW5zaW9uKG5hbWUpIHtcbiAgaWYgKCFoYXNXZWJHTCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHxcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG4gIC8vIFNob3VsZCBtYXliZSBiZSByZXR1cm4gISFjb250ZXh0LmdldEV4dGVuc2lvbihuYW1lKTtcbiAgcmV0dXJuIGNvbnRleHQuZ2V0RXh0ZW5zaW9uKG5hbWUpO1xufVxuXG4vLyBSZXR1cm5zIHRoZSBleHRlbnNpb24gb3IgdGhyb3dzIGFuIGVycm9yXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uKGdsLCBleHRlbnNpb25OYW1lKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IGdsLmdldEV4dGVuc2lvbihleHRlbnNpb25OYW1lKTtcbiAgYXNzZXJ0KGV4dGVuc2lvbiwgYCR7ZXh0ZW5zaW9uTmFtZX0gbm90IHN1cHBvcnRlZCFgKTtcbiAgcmV0dXJuIGV4dGVuc2lvbjtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyQ29udGV4dCgpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG4vLyBFeGVjdXRlcyBhIGZ1bmN0aW9uIHdpdGggZ2wgc3RhdGVzIHRlbXBvcmFyaWx5IHNldCwgZXhjZXB0aW9uIHNhZmVcbi8vIEN1cnJlbnRseSBzdXBwb3J0IHNjaXNzb3IgdGVzdCBhbmQgZnJhbWVidWZmZXIgYmluZGluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdsQ29udGV4dFdpdGhTdGF0ZShnbCwge3NjaXNzb3JUZXN0LCBmcmFtZUJ1ZmZlcn0sIGZ1bmMpIHtcbiAgbGV0IHNjaXNzb3JUZXN0V2FzRW5hYmxlZDtcbiAgaWYgKHNjaXNzb3JUZXN0KSB7XG4gICAgc2Npc3NvclRlc3RXYXNFbmFibGVkID0gZ2wuaXNFbmFibGVkKGdsLlNDSVNTT1JfVEVTVCk7XG4gICAgY29uc3Qge3gsIHksIHcsIGh9ID0gc2Npc3NvclRlc3Q7XG4gICAgZ2wuZW5hYmxlKGdsLlNDSVNTT1JfVEVTVCk7XG4gICAgZ2wuc2Npc3Nvcih4LCB5LCB3LCBoKTtcbiAgfVxuXG4gIGlmIChmcmFtZUJ1ZmZlcikge1xuICAgIC8vIFRPRE8gLSB3YXMgdGhlcmUgYW55IHByZXZpb3VzbHkgc2V0IGZyYW1lIGJ1ZmZlciB3ZSBuZWVkIHRvIHJlbWVtYmVyP1xuICAgIGZyYW1lQnVmZmVyLmJpbmQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZnVuYyhnbCk7XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKCFzY2lzc29yVGVzdFdhc0VuYWJsZWQpIHtcbiAgICAgIGdsLmRpc2FibGUoZ2wuU0NJU1NPUl9URVNUKTtcbiAgICB9XG4gICAgaWYgKGZyYW1lQnVmZmVyKSB7XG4gICAgICAvLyBUT0RPIC0gd2FzIHRoZXJlIGFueSBwcmV2aW91c2x5IHNldCBmcmFtZSBidWZmZXI/XG4gICAgICAvLyBUT0RPIC0gZGVsZWdhdGUgXCJ1bmJpbmRcIiB0byBGcmFtZWJ1ZmZlciBvYmplY3Q/XG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2xDaGVja0Vycm9yMihnbCkge1xuICBnbENoZWNrRXJyb3IoZ2wpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2xDaGVja0Vycm9yKGdsKSB7XG4gIGNvbnN0IGVycm9yID0gZ2wuZ2V0RXJyb3IoKTtcbiAgc3dpdGNoIChlcnJvcikge1xuICBjYXNlIGdsLk5PX0VSUk9SOlxuICAgIC8vICBObyBlcnJvciBoYXMgYmVlbiByZWNvcmRlZC4gVGhlIHZhbHVlIG9mIHRoaXMgY29uc3RhbnQgaXMgMC5cbiAgICByZXR1cm47XG5cbiAgY2FzZSBnbC5DT05URVhUX0xPU1RfV0VCR0w6XG4gICAgLy8gIElmIHRoZSBXZWJHTCBjb250ZXh0IGlzIGxvc3QsIHRoaXMgZXJyb3IgaXMgcmV0dXJuZWQgb24gdGhlXG4gICAgLy8gZmlyc3QgY2FsbCB0byBnZXRFcnJvci4gQWZ0ZXJ3YXJkcyBhbmQgdW50aWwgdGhlIGNvbnRleHQgaGFzIGJlZW5cbiAgICAvLyByZXN0b3JlZCwgaXQgcmV0dXJucyBnbC5OT19FUlJPUi5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkdMIGNvbnRleHQgbG9zdCcpO1xuXG4gIGNhc2UgZ2wuSU5WQUxJRF9FTlVNOlxuICAgIC8vIEFuIHVuYWNjZXB0YWJsZSB2YWx1ZSBoYXMgYmVlbiBzcGVjaWZpZWQgZm9yIGFuIGVudW1lcmF0ZWQgYXJndW1lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdXZWJHTCBpbnZhbGlkIGVudW1lcmF0ZWQgYXJndW1lbnQnKTtcblxuICBjYXNlIGdsLklOVkFMSURfVkFMVUU6XG4gICAgLy8gQSBudW1lcmljIGFyZ3VtZW50IGlzIG91dCBvZiByYW5nZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkdMIGludmFsaWQgdmFsdWUnKTtcblxuICBjYXNlIGdsLklOVkFMSURfT1BFUkFUSU9OOlxuICAgIC8vIFRoZSBzcGVjaWZpZWQgY29tbWFuZCBpcyBub3QgYWxsb3dlZCBmb3IgdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdXZWJHTCBpbnZhbGlkIG9wZXJhdGlvbicpO1xuXG4gIGNhc2UgZ2wuSU5WQUxJRF9GUkFNRUJVRkZFUl9PUEVSQVRJT046XG4gICAgLy8gVGhlIGN1cnJlbnRseSBib3VuZCBmcmFtZWJ1ZmZlciBpcyBub3QgZnJhbWVidWZmZXIgY29tcGxldGVcbiAgICAvLyB3aGVuIHRyeWluZyB0byByZW5kZXIgdG8gb3IgdG8gcmVhZCBmcm9tIGl0LlxuICAgIHRocm93IG5ldyBFcnJvcignV2ViR0wgaW52YWxpZCBmcmFtZWJ1ZmZlciBvcGVyYXRpb24nKTtcblxuICBjYXNlIGdsLk9VVF9PRl9NRU1PUlk6XG4gICAgLy8gTm90IGVub3VnaCBtZW1vcnkgaXMgbGVmdCB0byBleGVjdXRlIHRoZSBjb21tYW5kLlxuICAgIHRocm93IG5ldyBFcnJvcignV2ViR0wgb3V0IG9mIG1lbW9yeScpO1xuXG4gIGRlZmF1bHQ6XG4gICAgLy8gTm90IGVub3VnaCBtZW1vcnkgaXMgbGVmdCB0byBleGVjdXRlIHRoZSBjb21tYW5kLlxuICAgIHRocm93IG5ldyBFcnJvcignV2ViR0wgdW5rbm93biBlcnJvcicpO1xuICB9XG59XG5cbi8vIFRPRE8gLSBkb2N1bWVudCBvciByZW1vdmVcbmZ1bmN0aW9uIGNyZWF0ZURlYnVnQ29udGV4dChjdHgpIHtcbiAgY29uc3QgZ2wgPSB7fTtcbiAgZm9yICh2YXIgbSBpbiBjdHgpIHtcbiAgICB2YXIgZiA9IGN0eFttXTtcbiAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGdsW21dID0gKChrLCB2KSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IGFucztcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYW5zID0gdi5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2t9ICR7ZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZXJyb3JTdGFjayA9IFtdO1xuICAgICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgICB3aGlsZSAoKGVycm9yID0gY3R4LmdldEVycm9yKCkpICE9PSBjdHguTk9fRVJST1IpIHtcbiAgICAgICAgICAgIGVycm9yU3RhY2sucHVzaChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlcnJvclN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3JTdGFjay5qb2luKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhbnM7XG4gICAgICAgIH07XG4gICAgICB9KShtLCBmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xbbV0gPSBmO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnbDtcbn1cbiJdfQ==
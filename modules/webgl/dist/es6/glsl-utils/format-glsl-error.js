import getShaderName from './get-shader-name';
import getShaderTypeName from './get-shader-type-name';
export default function formatGLSLCompilerError(errLog, src, shaderType) {
  const _parseGLSLCompilerErr = parseGLSLCompilerError(errLog, src, shaderType),
        shaderName = _parseGLSLCompilerErr.shaderName,
        errors = _parseGLSLCompilerErr.errors,
        warnings = _parseGLSLCompilerErr.warnings;

  return "GLSL compilation error in ".concat(shaderName, "\n\n").concat(errors, "\n").concat(warnings);
}
export function parseGLSLCompilerError(errLog, src, shaderType, shaderName) {
  const errorStrings = errLog.split(/\r?\n/);
  const errors = {};
  const warnings = {};
  const name = shaderName || getShaderName(src) || '(unnamed)';
  const shaderDescription = "".concat(getShaderTypeName(shaderType), " shader ").concat(name);

  for (let i = 0; i < errorStrings.length; i++) {
    const errorString = errorStrings[i];

    if (errorString.length <= 1) {
      continue;
    }

    const segments = errorString.split(':');
    const type = segments[0];
    const line = parseInt(segments[2], 10);

    if (isNaN(line)) {
      throw new Error("GLSL compilation error in ".concat(shaderDescription, ": ").concat(errLog));
    }

    if (type !== 'WARNING') {
      errors[line] = errorString;
    } else {
      warnings[line] = errorString;
    }
  }

  const lines = addLineNumbers(src);
  return {
    shaderName: shaderDescription,
    errors: formatErrors(errors, lines),
    warnings: formatErrors(warnings, lines)
  };
}

function formatErrors(errors, lines) {
  let message = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!errors[i + 3] && !errors[i + 2] && !errors[i + 1]) {
      continue;
    }

    message += "".concat(line, "\n");

    if (errors[i + 1]) {
      const error = errors[i + 1];
      const segments = error.split(':', 3);
      const type = segments[0];
      const column = parseInt(segments[1], 10) || 0;
      const err = error.substring(segments.join(':').length + 1).trim();
      message += padLeft("^^^ ".concat(type, ": ").concat(err, "\n\n"), column);
    }
  }

  return message;
}

function addLineNumbers(string) {
  let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  let delim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ': ';
  const lines = string.split(/\r?\n/);
  const maxDigits = String(lines.length + start - 1).length;
  return lines.map((line, i) => {
    const lineNumber = i + start;
    const digits = String(lineNumber).length;
    const prefix = padLeft(lineNumber, maxDigits - digits);
    return prefix + delim + line;
  });
}

function padLeft(string, digits) {
  let result = '';

  for (let i = 0; i < digits; ++i) {
    result += ' ';
  }

  return "".concat(result).concat(string);
}
//# sourceMappingURL=format-glsl-error.js.map
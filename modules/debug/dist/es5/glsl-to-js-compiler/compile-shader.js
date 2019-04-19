"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileShaderModule = compileShaderModule;
exports.compileVertexShader = compileVertexShader;
exports.compileFragmentShader = compileFragmentShader;

var _glslTranspiler = _interopRequireDefault(require("glsl-transpiler"));

var _normalizeUniforms = require("./normalize-uniforms");

function normalize(source) {
  return source.replace(/^(#define \w+) *$/gm, function ($0, $1) {
    return "".concat($1, " 1");
  });
}

function getVersion(source) {
  return source.slice(0, 9) === '#version ' ? '300 es' : '100 es';
}

function compileShaderModule(moduleName, source) {
  source = normalize(source);
  var compileModule = (0, _glslTranspiler["default"])({
    uniform: function uniform(name) {
      return "uniforms.".concat(name);
    },
    version: getVersion(source)
  });
  var compiledSource = compileModule(source);
  var compiler = compileModule.compiler;
  return evalScript("function vs(uniforms) {\n  ".concat((0, _normalizeUniforms.getUniformNormalizer)(compiler.uniforms), "\n  ").concat(compiledSource, "\n  return {\n    ").concat(Object.keys(compiler.functions).join(','), "\n  };\n}"), moduleName);
}

function compileVertexShader(shaderName, source) {
  source = normalize(source);
  var compileVS = (0, _glslTranspiler["default"])({
    uniform: function uniform(name) {
      return "uniforms.".concat(name);
    },
    attribute: function attribute(name) {
      return "attributes.".concat(name);
    },
    version: getVersion(source)
  });
  var compiledSource = compileVS(source);
  var compiler = compileVS.compiler;
  return evalScript("function vs(uniforms, attributes) {\n  var gl_Position;\n  ".concat((0, _normalizeUniforms.getUniformNormalizer)(compiler.uniforms), "\n  ").concat(compiledSource, "\n  /* End of shader code */\n  main();\n  return {\n    gl_Position,\n    varyings: {").concat(Object.keys(compiler.varyings).join(', '), "}\n  };\n}"), shaderName);
}

function compileFragmentShader(shaderName, source) {
  source = normalize(source);
  var compileFS = (0, _glslTranspiler["default"])({
    uniform: function uniform(name) {
      return "uniforms.".concat(name);
    },
    attribute: function attribute(name) {
      return "attributes.".concat(name);
    },
    varying: function varying(name) {
      return "varyings.".concat(name);
    },
    version: getVersion(source)
  });
  var compiledSource = compileFS(source);
  var compiler = compileFS.compiler;
  return evalScript("function fs(uniforms, varyings) {\n  var gl_FragColor;\n  var isDiscarded = false;\n  function discard() {\n    isDiscarded = true;\n  }\n  ".concat((0, _normalizeUniforms.getUniformNormalizer)(compiler.uniforms), "\n  ").concat(compiledSource, "\n  /* End of shader code */\n  main();\n  return {\n    gl_FragColor,\n    isDiscarded\n  };\n}"), shaderName);
}

function evalScript(value, name) {
  var script = "(function() { return ".concat(value, "; })()\n//# sourceURL=").concat(name, ".js");
  return eval(script);
}
//# sourceMappingURL=compile-shader.js.map
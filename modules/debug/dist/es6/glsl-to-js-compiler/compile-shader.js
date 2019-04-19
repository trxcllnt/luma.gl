import Compiler from 'glsl-transpiler';
import { getUniformNormalizer } from './normalize-uniforms';

function normalize(source) {
  return source.replace(/^(#define \w+) *$/gm, ($0, $1) => "".concat($1, " 1"));
}

function getVersion(source) {
  return source.slice(0, 9) === '#version ' ? '300 es' : '100 es';
}

export function compileShaderModule(moduleName, source) {
  source = normalize(source);
  const compileModule = Compiler({
    uniform: name => "uniforms.".concat(name),
    version: getVersion(source)
  });
  const compiledSource = compileModule(source);
  const compiler = compileModule.compiler;
  return evalScript("function vs(uniforms) {\n  ".concat(getUniformNormalizer(compiler.uniforms), "\n  ").concat(compiledSource, "\n  return {\n    ").concat(Object.keys(compiler.functions).join(','), "\n  };\n}"), moduleName);
}
export function compileVertexShader(shaderName, source) {
  source = normalize(source);
  const compileVS = Compiler({
    uniform: name => "uniforms.".concat(name),
    attribute: name => "attributes.".concat(name),
    version: getVersion(source)
  });
  const compiledSource = compileVS(source);
  const compiler = compileVS.compiler;
  return evalScript("function vs(uniforms, attributes) {\n  var gl_Position;\n  ".concat(getUniformNormalizer(compiler.uniforms), "\n  ").concat(compiledSource, "\n  /* End of shader code */\n  main();\n  return {\n    gl_Position,\n    varyings: {").concat(Object.keys(compiler.varyings).join(', '), "}\n  };\n}"), shaderName);
}
export function compileFragmentShader(shaderName, source) {
  source = normalize(source);
  const compileFS = Compiler({
    uniform: name => "uniforms.".concat(name),
    attribute: name => "attributes.".concat(name),
    varying: name => "varyings.".concat(name),
    version: getVersion(source)
  });
  const compiledSource = compileFS(source);
  const compiler = compileFS.compiler;
  return evalScript("function fs(uniforms, varyings) {\n  var gl_FragColor;\n  var isDiscarded = false;\n  function discard() {\n    isDiscarded = true;\n  }\n  ".concat(getUniformNormalizer(compiler.uniforms), "\n  ").concat(compiledSource, "\n  /* End of shader code */\n  main();\n  return {\n    gl_FragColor,\n    isDiscarded\n  };\n}"), shaderName);
}

function evalScript(value, name) {
  const script = "(function() { return ".concat(value, "; })()\n//# sourceURL=").concat(name, ".js");
  return eval(script);
}
//# sourceMappingURL=compile-shader.js.map
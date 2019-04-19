"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createGLTFModel;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _core = require("@luma.gl/core");

var _gltfMaterialParser = _interopRequireDefault(require("./gltf-material-parser"));

var vs = "\n#if (__VERSION__ < 300)\n  #define _attr attribute\n#else\n  #define _attr in\n#endif\n\n  _attr vec4 POSITION;\n\n  #ifdef HAS_NORMALS\n    _attr vec4 NORMAL;\n  #endif\n\n  #ifdef HAS_TANGENTS\n    _attr vec4 TANGENT;\n  #endif\n\n  #ifdef HAS_UV\n    _attr vec2 TEXCOORD_0;\n  #endif\n\n  void main(void) {\n    vec4 _NORMAL = vec4(0.);\n    vec4 _TANGENT = vec4(0.);\n    vec2 _TEXCOORD_0 = vec2(0.);\n\n    #ifdef HAS_NORMALS\n      _NORMAL = NORMAL;\n    #endif\n\n    #ifdef HAS_TANGENTS\n      _TANGENT = TANGENT;\n    #endif\n\n    #ifdef HAS_UV\n      _TEXCOORD_0 = TEXCOORD_0;\n    #endif\n\n    pbr_setPositionNormalTangentUV(POSITION, _NORMAL, _TANGENT, _TEXCOORD_0);\n    gl_Position = u_MVPMatrix * POSITION;\n  }\n";
var fs = "\n#if (__VERSION__ < 300)\n  #define fragmentColor gl_FragColor\n#else\n  out vec4 fragmentColor;\n#endif\n\n  void main(void) {\n    fragmentColor = pbr_filterColor(vec4(0));\n  }\n";

function addVersionToShader(gl, source) {
  if ((0, _core.isWebGL2)(gl)) {
    return "#version 300 es\n".concat(source);
  }

  return source;
}

function createGLTFModel(gl, options) {
  var id = options.id,
      drawMode = options.drawMode,
      vertexCount = options.vertexCount,
      attributes = options.attributes,
      modelOptions = options.modelOptions;
  var materialParser = new _gltfMaterialParser["default"](gl, options);

  _core.log.info(4, 'createGLTFModel defines: ', materialParser.defines)();

  var managedResources = [];
  managedResources.push.apply(managedResources, (0, _toConsumableArray2["default"])(materialParser.generatedTextures));
  managedResources.push.apply(managedResources, (0, _toConsumableArray2["default"])(Object.values(attributes).map(function (attribute) {
    return attribute.buffer;
  })));
  var model = new _core.ModelNode(gl, Object.assign({
    id: id,
    drawMode: drawMode,
    vertexCount: vertexCount,
    modules: [_core.pbr],
    defines: materialParser.defines,
    parameters: materialParser.parameters,
    vs: addVersionToShader(gl, vs),
    fs: addVersionToShader(gl, fs),
    managedResources: managedResources
  }, modelOptions));
  model.setProps({
    attributes: attributes
  });
  model.setUniforms(materialParser.uniforms);
  return model;
}
//# sourceMappingURL=create-gltf-model.js.map
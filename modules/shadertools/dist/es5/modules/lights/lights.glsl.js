"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\n\nstruct AmbientLight {\n vec3 color;\n};\n\nstruct PointLight {\n vec3 color;\n vec3 position;\n vec3 attenuation;\n};\n\nstruct DirectionalLight {\n  vec3 color;\n  vec3 direction;\n};\n\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\n\nuniform bool lighting_uEnabled;\n\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\n  return pointLight.attenuation.x\n       + pointLight.attenuation.y * distance\n       + pointLight.attenuation.z * distance * distance;\n}\n\n#endif\n";
exports["default"] = _default;
//# sourceMappingURL=lights.glsl.js.map
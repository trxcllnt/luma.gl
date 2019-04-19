"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "varying vec3 pbr_vPosition;\nvarying vec2 pbr_vUV;\n\n#ifdef HAS_NORMALS\n# ifdef HAS_TANGENTS\nvarying mat3 pbr_vTBN;\n# else\nvarying vec3 pbr_vNormal;\n# endif\n#endif\n\nvoid pbr_setPositionNormalTangentUV(vec4 position, vec4 normal, vec4 tangent, vec2 uv)\n{\n  vec4 pos = u_ModelMatrix * position;\n  pbr_vPosition = vec3(pos.xyz) / pos.w;\n\n#ifdef HAS_NORMALS\n#ifdef HAS_TANGENTS\n  vec3 normalW = normalize(vec3(u_NormalMatrix * vec4(normal.xyz, 0.0)));\n  vec3 tangentW = normalize(vec3(u_ModelMatrix * vec4(tangent.xyz, 0.0)));\n  vec3 bitangentW = cross(normalW, tangentW) * tangent.w;\n  pbr_vTBN = mat3(tangentW, bitangentW, normalW);\n#else\n  pbr_vNormal = normalize(vec3(u_ModelMatrix * vec4(normal.xyz, 0.0)));\n#endif\n#endif\n\n#ifdef HAS_UV\n  pbr_vUV = uv;\n#else\n  pbr_vUV = vec2(0.,0.);\n#endif\n}\n";
exports["default"] = _default;
//# sourceMappingURL=pbr-vertex.glsl.js.map
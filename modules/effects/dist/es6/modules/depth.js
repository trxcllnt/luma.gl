import pack from './pack';
const fs = "#define DEPTH_PACKING 3201\n\nuniform bool depth_uEnabled;\n\n#ifdef USE_LOGDEPTHBUF\nuniform float logDepthBufFC;\n#endif\n\n#if DEPTH_PACKING == 3200\nuniform float opacity;\n#endif\n\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat depth_viewZToOrthographicDepth(\n  const in float viewZ, const in float near, const in float far\n) {\n  return ( viewZ + near ) / ( near - far );\n}\n\nfloat depth_orthographicDepthToViewZ(\n  const in float linearClipZ, const in float near, const in float far\n) {\n  return linearClipZ * ( near - far ) - near;\n}\n\nfloat depth_viewZToPerspectiveDepth(\n  const in float viewZ, const in float near, const in float far\n) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\n\nfloat depth_perspectiveDepthToViewZ(\n  const in float invClipZ, const in float near, const in float far\n) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n\n// Sample depth buffer and convert to float\nfloat depth_getDepth(sampler2D tDepth, vec2 coord) {\n  float depthValue = pack_RGBA8ToFloat(texture2D(tDepth, coord));\n#ifdef USE_LOGDEPTHBUF\n  float logz = depthValue;\n  float w = pow(2.0, (logz / logDepthBufFC)) - 1.0;\n  float z = (logz / w) + 1.0;\n#else\n  float z = depthValue;\n#endif\n  return z;\n}\n\n//\nvec4 depth_getColor() {\n#if DEPTH_PACKING == 3200\n  return vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n#elif DEPTH_PACKING == 3201\n  return pack_floatToRGBA8( gl_FragCoord.z );\n#endif\n}\n\nvec4 depth_filterColor(vec4 color) {\n  return depth_uEnabled ? depth_getColor() : color;\n}\n";
const DEFAULT_PROPS = {
  depth_uEnabled: false
};
export default {
  name: 'depth',
  dependencies: [pack],
  fs,
  DEFAULT_PROPS,
  getUniforms: function getUniforms() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PROPS;
    return props;
  }
};
//# sourceMappingURL=depth.js.map
const fs = "const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\n\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 pack_floatToRGBA8( const in float v ) {\n  vec4 r = vec4( fract( v * PackFactors ), v );\n  r.yzw -= r.xyz * ShiftRight8; // tidy overflow\n  return r * PackUpscale;\n}\n\nfloat pack_RGBA8ToFloat( const in vec4 v ) {\n  return dot(v, UnpackFactors);\n}\n";
const DEFAULT_PROPS = {};
export default {
  name: 'pack',
  fs,
  vs: fs,
  DEFAULT_PROPS,
  getUniforms: props => props
};
//# sourceMappingURL=pack.js.map
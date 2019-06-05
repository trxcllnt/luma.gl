import depth from './depth';
var DEFAULT_PROPS = {
  ssao_uEnabled: true,
  tDiffuse: null,
  tDepth: null,
  size: [512, 512],
  cameraNear: 1,
  cameraFar: 100,
  radius: 32,
  onlyAO: false,
  aoClamp: 0.25,
  lumInfluence: 0.7
};
var fsSSAO = "// Inputs\nuniform sampler2D tDiffuse;\nuniform sampler2D tDepth;\nuniform vec2 size;        // texture width, height\n\n// TODO - move to 'camera' module?\nuniform float cameraNear;\nuniform float cameraFar;\n\n// SSAO\nuniform bool ssao_uEnabled;\nuniform float radius;     // ao radius\nuniform float aoClamp;    // depth clamp - reduces haloing at screen edges\nuniform float lumInfluence;  // how much luminance affects occlusion\n\nuniform bool onlyAO;      // use only ambient occlusion pass?\n\n#define DL 2.399963229728653  // PI * ( 3.0 - sqrt( 5.0 ) )\n#define EULER 2.718281828459045\n\nconst int samples = 64;           // ao sample count\nconst bool useNoise = true;       // use noise instead of pattern for sample dithering\nconst float noiseAmount = 0.0004; // dithering amount\nconst float diffArea = 0.4;       // self-shadowing reduction\nconst float gDisplace = 0.4;      // gauss bell center\n\n// Random noise generating: pattern texture for dithering\nvec2 rand( const vec2 coord ) {\n  vec2 noise;\n\n  if ( useNoise ) {\n    float nx = dot ( coord, vec2( 12.9898, 78.233 ) );\n    float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\n    noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n  } else {\n    float ff = fract( 1.0 - coord.s * ( size.x / 2.0 ) );\n    float gg = fract( coord.t * ( size.y / 2.0 ) );\n    noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n  }\n\n  return ( noise * 2.0  - 1.0 ) * noiseAmount;\n}\n\n// RGBA depth\n\nfloat readDepth( const in vec2 coord ) {\n  float z = depth_getDepth(tDepth, coord);\n\n  float cameraFarPlusNear = cameraFar + cameraNear;\n  float cameraFarMinusNear = cameraFar - cameraNear;\n  float cameraCoef = 2.0 * cameraNear;\n  return cameraCoef / ( cameraFarPlusNear - z * cameraFarMinusNear );\n}\n\nfloat compareDepths( const in float depth1, const in float depth2, inout int far ) {\n  float garea = 8.0;                         // gauss bell width\n  float diff = ( depth1 - depth2 ) * 100.0;  // depth difference (0-100)\n\n  // reduce left bell width to avoid self-shadowing\n\n  if ( diff < gDisplace ) {\n    garea = diffArea;\n  } else {\n    far = 1;\n  }\n\n  float dd = diff - gDisplace;\n  float gauss = pow( EULER, -2.0 * ( dd * dd ) / ( garea * garea ) );\n  return gauss;\n}\n\nfloat calcAO( float depth, float dw, float dh, vec2 uv ) {\n  vec2 vv = vec2( dw, dh );\n\n  vec2 coord1 = uv + radius * vv;\n  vec2 coord2 = uv - radius * vv;\n\n  float temp1 = 0.0;\n  float temp2 = 0.0;\n\n  int far = 0;\n  temp1 = compareDepths( depth, readDepth( coord1 ), far );\n\n  // DEPTH EXTRAPOLATION\n  if ( far > 0 ) {\n    temp2 = compareDepths( readDepth( coord2 ), depth, far );\n    temp1 += ( 1.0 - temp1 ) * temp2;\n  }\n\n  return temp1;\n}\n\nvec4 ssao_filterColor(vec4 color4, vec2 uv) {\n\n  vec2 noise = rand( uv );\n  float depth = readDepth( uv );\n\n  float tt = clamp( depth, aoClamp, 1.0 );\n\n  float w = ( 1.0 / size.x ) / tt + ( noise.x * ( 1.0 - noise.x ) );\n  float h = ( 1.0 / size.y ) / tt + ( noise.y * ( 1.0 - noise.y ) );\n\n  float ao = 0.0;\n\n  float dz = 1.0 / float( samples );\n  float l = 0.0;\n  float z = 1.0 - dz / 2.0;\n\n  for ( int i = 0; i <= samples; i ++ ) {\n    float r = sqrt( 1.0 - z );\n\n    float pw = cos( l ) * r;\n    float ph = sin( l ) * r;\n    ao += calcAO( depth, pw * w, ph * h, uv );\n    z = z - dz;\n    l = l + DL;\n  }\n\n  ao /= float( samples );\n  ao = 1.0 - ao;\n\n  vec3 color = color4.rgb;\n\n  vec3 final = color;\n\n  vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\n  float lum = dot( color.rgb, lumcoeff );\n  vec3 luminance = vec3( lum );\n\n  // mix( color * ao, white, luminance )\n  final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n\n  if ( onlyAO ) {\n    // ambient occlusion only\n    final = vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n  }\n\n  return vec4( final, 1.0 );\n}\n\nvec4 ssao_getColor(vec2 uv) {\n  vec4 color = texture2D( tDiffuse, uv );\n  return ssao_uEnabled ? ssao_filterColor(color, uv) : color;\n}\n";
export default {
  name: 'ssao',
  dependencies: [depth],
  DEFAULT_PROPS: DEFAULT_PROPS,
  fs: fsSSAO
};
//# sourceMappingURL=ssao.js.map
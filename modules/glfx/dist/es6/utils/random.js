const fs = "float random(vec3 scale, float seed) {\n  /* use the fragment position for a different seed per-pixel */\n  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n";
export default {
  name: 'random',
  fs
};
//# sourceMappingURL=random.js.map
import random from '../utils/random';
const fsLensBlurPrePass = "uniform sampler2D texture;\nuniform float power;\nvarying vec2 texCoord;\nvoid main() {\n  vec4 color = texture2D(texture, texCoord);\n  color = pow(color, vec4(power));\n  gl_FragColor = vec4(color);\n}\n";
const fsCommon = "uniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform vec2 delta0;\nuniform vec2 delta1;\nuniform float power;\nvarying vec2 texCoord;\n\nvec4 lensBlur_sampleColor(vec2 delta) {\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(delta, 151.7182), 0.0);\n\n  vec4 color = vec4(0.0);\n  float total = 0.0;\n  for (float t = 0.0; t <= 30.0; t++) {\n    float percent = (t + offset) / 30.0;\n    color += texture2D(texture0, texCoord + delta * percent);\n    total += 1.0;\n  }\n  return color / total;\n}\n";
export default {
  dependencies: [random],
  fsLensBlurPrePass,
  fsCommon
};

function lensBlur(radius, brightness, angle) {
  gl.lensBlurPrePass = gl.lensBlurPrePass || new Shader(null, '');
  gl.lensBlur0 = gl.lensBlur0 || new Shader(null, common + '\
    void main() {\
      gl_FragColor = sample(delta0);\
    }\
  ');
  gl.lensBlur1 = gl.lensBlur1 || new Shader(null, common + '\
    void main() {\
      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;\
    }\
  ');
  gl.lensBlur2 = gl.lensBlur2 || new Shader(null, common + '\
    void main() {\
      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;\
      gl_FragColor = pow(color, vec4(power));\
    }\
  ').textures({
    texture1: 1
  });
  var dir = [];

  for (var i = 0; i < 3; i++) {
    var a = angle + i * Math.PI * 2 / 3;
    dir.push([radius * Math.sin(a) / this.width, radius * Math.cos(a) / this.height]);
  }

  var power = Math.pow(10, clamp(-1, brightness, 1));
  simpleShader.call(this, gl.lensBlurPrePass, {
    power: power
  });

  window._.extraTexture.ensureFormat(window._.texture);

  simpleShader.call(this, gl.lensBlur0, {
    delta0: dir[0]
  }, window._.texture, window._.extraTexture);
  simpleShader.call(this, gl.lensBlur1, {
    delta0: dir[1],
    delta1: dir[2]
  }, window._.extraTexture, window._.extraTexture);
  simpleShader.call(this, gl.lensBlur0, {
    delta0: dir[1]
  });

  window._.extraTexture.use(1);

  simpleShader.call(this, gl.lensBlur2, {
    power: 1 / power,
    delta0: dir[2]
  });
  return this;
}
//# sourceMappingURL=lensblur.js.map
import triangleBlur from '../blur-filters/triangleblur';
var fs = "uniform float strength;\nuniform float threshold;\nuniform sampler2D blurredTexture;\n\nvec4 unsharpMark_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec4 blurred = texture2D(blurredTexture, texCoord);\n  vec4 original = texture2D(texture, texCoord);\n  gl_FragColor = mix(blurred, original, 1.0 + strength);\n}\n";
var uniforms = {
  radius: {
    value: 20,
    min: 0,
    softMax: 200
  },
  strength: {
    value: 1,
    min: 0,
    softMax: 5
  }
};
export default {
  name: 'unsharpMask',
  uniforms: uniforms,
  dependencies: [triangleBlur],
  passes: [{
    module: triangleBlur,
    target: 'texture1'
  }, {
    sampler: true,
    uniforms: {
      blurredTexture: 'texture1'
    }
  }]
};

function unsharpMask(radius, strength) {
  var _this = this;

  gl.unsharpMask = gl.unsharpMask || new Shader(null, fs);

  window._.extraTexture.ensureFormat(window._.texture);

  window._.texture.use();

  window._.extraTexture.drawTo(function () {
    return Shader.getDefaultShader(_this.gl).drawRect();
  });

  window._.extraTexture.use(1);

  this.triangleBlur(radius);
  gl.unsharpMask.textures({
    originalTexture: 1
  });
  simpleShader.call(this, gl.unsharpMask, {
    strength: strength
  });

  window._.extraTexture.unuse(1);
}
//# sourceMappingURL=unsharpmask.js.map
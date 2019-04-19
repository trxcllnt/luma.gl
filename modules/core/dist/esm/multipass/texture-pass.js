import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { default as ClipSpace } from '../lib/clip-space';
import Pass from './pass';
var fs = "uniform sampler2D uDiffuseSampler;\nuniform float uOpacity;\nvarying vec2 uv;\n\nvoid main() {\n  vec4 texel = texture2D(uDiffuseSampler, uv);\n  gl_FragColor = uOpacity * texel;\n}\n";

var TexturePass = function (_Pass) {
  _inherits(TexturePass, _Pass);

  function TexturePass(gl) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TexturePass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturePass).call(this, gl, Object.assign({
      id: 'texture-pass'
    }, options)));
    var texture = options.texture,
        _options$opacity = options.opacity,
        opacity = _options$opacity === void 0 ? 1.0 : _options$opacity;
    _this.clipspace = new ClipSpace(gl, {
      id: 'texture-pass',
      fs: fs,
      uniforms: {
        uDiffuseSampler: texture,
        uOpacity: opacity
      }
    });
    return _this;
  }

  _createClass(TexturePass, [{
    key: "_renderPass",
    value: function _renderPass() {
      this.clipspace.draw({
        parameters: {
          depthWrite: false,
          depthTest: false
        }
      });
    }
  }]);

  return TexturePass;
}(Pass);

export { TexturePass as default };
//# sourceMappingURL=texture-pass.js.map
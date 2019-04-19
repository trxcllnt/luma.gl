"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _pass = _interopRequireDefault(require("./pass"));

var _compositePass = _interopRequireDefault(require("./composite-pass"));

var _clipSpace = _interopRequireDefault(require("../lib/clip-space"));

var _shadertools = require("@luma.gl/shadertools");

var ShaderModuleSinglePass = function (_Pass) {
  (0, _inherits2["default"])(ShaderModuleSinglePass, _Pass);

  function ShaderModuleSinglePass(gl) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, ShaderModuleSinglePass);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ShaderModuleSinglePass).call(this, gl, Object.assign({
      swap: true
    }, props)));
  }

  (0, _createClass2["default"])(ShaderModuleSinglePass, [{
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var inputBuffer = _ref.inputBuffer,
          swapBuffers = _ref.swapBuffers;
      this.props.model.setUniforms(this.props);
      this.props.model.draw({
        uniforms: {
          texture: inputBuffer,
          texSize: [inputBuffer.width, inputBuffer.height]
        },
        parameters: {
          depthWrite: false,
          depthTest: false
        }
      });
    }
  }]);
  return ShaderModuleSinglePass;
}(_pass["default"]);

var ShaderModulePass = function (_CompositePass) {
  (0, _inherits2["default"])(ShaderModulePass, _CompositePass);

  function ShaderModulePass(gl, module) {
    var _this;

    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2["default"])(this, ShaderModulePass);
    var id = "".concat(module.name, "-pass");
    (0, _shadertools.normalizeShaderModule)(module);
    var passes = normalizePasses(gl, module, id, props);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ShaderModulePass).call(this, gl, Object.assign({
      id: id,
      passes: passes
    }, props)));
    _this.module = module;
    return _this;
  }

  (0, _createClass2["default"])(ShaderModulePass, [{
    key: "_renderPass",
    value: function _renderPass(_ref2) {
      var inputBuffer = _ref2.inputBuffer,
          swapBuffers = _ref2.swapBuffers;
      var first = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.module.passes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pass = _step.value;

          if (!first) {
            swapBuffers();
          }

          first = false;

          if (pass.uniforms) {
            pass.model.setUniforms(pass.uniforms);
          }

          pass.model.draw({
            uniforms: {
              texture: inputBuffer,
              texSize: [inputBuffer.width, inputBuffer.height]
            },
            parameters: {
              depthWrite: false,
              depthTest: false
            }
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return ShaderModulePass;
}(_compositePass["default"]);

exports["default"] = ShaderModulePass;

function normalizePasses(gl, module, id, props) {
  if (module.filter || module.sampler) {
    var fs = getFragmentShaderForRenderPass(module);
    var pass = new ShaderModuleSinglePass(gl, {
      id: id,
      model: getModel(gl, module, fs, id, props),
      uniforms: null
    });
    return [pass];
  }

  var passes = module.passes || [];
  return passes.map(function (pass) {
    var fs = getFragmentShaderForRenderPass(module, pass);
    var idn = "".concat(id, "-").concat(passes.length + 1);
    return new ShaderModuleSinglePass(gl, Object.assign({
      id: idn,
      model: getModel(gl, module, fs, idn, props),
      uniforms: pass.uniforms
    }, props));
  });
}

function getModel(gl, module, fs, id, props) {
  var model = new _clipSpace["default"](gl, {
    id: id,
    fs: fs,
    modules: [module]
  });
  var uniforms = Object.assign(module.getUniforms(), module.getUniforms(props));
  model.setUniforms(uniforms);
  return model;
}

var FILTER_FS_TEMPLATE = function FILTER_FS_TEMPLATE(func) {
  return "uniform sampler2D texture;\nuniform vec2 texSize;\n\nvarying vec2 position;\nvarying vec2 coordinate;\nvarying vec2 uv;\n\nvoid main() {\n  vec2 texCoord = coordinate;\n\n  gl_FragColor = texture2D(texture, texCoord);\n  gl_FragColor = ".concat(func, "(gl_FragColor, texSize, texCoord);\n}\n");
};

var SAMPLER_FS_TEMPLATE = function SAMPLER_FS_TEMPLATE(func) {
  return "uniform sampler2D texture;\nuniform vec2 texSize;\n\nvarying vec2 position;\nvarying vec2 coordinate;\nvarying vec2 uv;\n\nvoid main() {\n  vec2 texCoord = coordinate;\n\n  gl_FragColor = ".concat(func, "(texture, texSize, texCoord);\n}\n");
};

function getFragmentShaderForRenderPass(module) {
  var pass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : module;

  if (pass.filter) {
    var func = typeof pass.filter === 'string' ? pass.filter : "".concat(module.name, "_filterColor");
    return FILTER_FS_TEMPLATE(func);
  }

  if (pass.sampler) {
    var _func = typeof pass.sampler === 'string' ? pass.sampler : "".concat(module.name, "_sampleColor");

    return SAMPLER_FS_TEMPLATE(_func);
  }

  return null;
}
//# sourceMappingURL=shader-module-pass.js.map
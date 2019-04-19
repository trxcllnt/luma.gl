import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { parseGLSLCompilerError, getShaderName } from '../glsl-utils';
import { assertWebGLContext } from '../webgl-utils';
import { uid, log, assert } from '../utils';
import Resource from './resource';
var ERR_SOURCE = 'Shader: GLSL source code must be a JavaScript string';
export var Shader = function (_Resource) {
  _inherits(Shader, _Resource);

  _createClass(Shader, null, [{
    key: "getTypeName",
    value: function getTypeName(shaderType) {
      switch (shaderType) {
        case 35633:
          return 'vertex-shader';

        case 35632:
          return 'fragment-shader';

        default:
          assert(false);
          return 'unknown';
      }
    }
  }]);

  function Shader(gl, props) {
    var _this;

    _classCallCheck(this, Shader);

    assertWebGLContext(gl);
    assert(typeof props.source === 'string', ERR_SOURCE);
    var id = getShaderName(props.source, null) || props.id || uid("unnamed ".concat(Shader.getTypeName(props.shaderType)));
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shader).call(this, gl, {
      id: id
    }));
    _this.shaderType = props.shaderType;
    _this.source = props.source;

    _this.initialize(props);

    return _this;
  }

  _createClass(Shader, [{
    key: "initialize",
    value: function initialize(_ref) {
      var source = _ref.source;
      var shaderName = getShaderName(source, null);

      if (shaderName) {
        this.id = uid(shaderName);
      }

      this._compile(source);
    }
  }, {
    key: "getParameter",
    value: function getParameter(pname) {
      return this.gl.getShaderParameter(this.handle, pname);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(Shader.getTypeName(this.shaderType), ":").concat(this.id);
    }
  }, {
    key: "getName",
    value: function getName() {
      return getShaderName(this.source) || 'unnamed-shader';
    }
  }, {
    key: "getSource",
    value: function getSource() {
      return this.gl.getShaderSource(this.handle);
    }
  }, {
    key: "getTranslatedSource",
    value: function getTranslatedSource() {
      var extension = this.gl.getExtension('WEBGL.debug_shaders');
      return extension ? extension.getTranslatedShaderSource(this.handle) : 'No translated source available. WEBGL.debug_shaders not implemented';
    }
  }, {
    key: "_compile",
    value: function _compile() {
      this.gl.shaderSource(this.handle, this.source);
      this.gl.compileShader(this.handle);
      var compileStatus = this.getParameter(35713);

      if (!compileStatus) {
        var infoLog = this.gl.getShaderInfoLog(this.handle);

        var _parseGLSLCompilerErr = parseGLSLCompilerError(infoLog, this.source, this.shaderType, this.id),
            shaderName = _parseGLSLCompilerErr.shaderName,
            errors = _parseGLSLCompilerErr.errors,
            warnings = _parseGLSLCompilerErr.warnings;

        log.error("GLSL compilation errors in ".concat(shaderName, "\n").concat(errors))();
        log.warn("GLSL compilation warnings in ".concat(shaderName, "\n").concat(warnings))();
        throw new Error("GLSL compilation errors in ".concat(shaderName));
      }
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteShader(this.handle);
    }
  }, {
    key: "_getOptsFromHandle",
    value: function _getOptsFromHandle() {
      return {
        type: this.getParameter(35663),
        source: this.getSource()
      };
    }
  }]);

  return Shader;
}(Resource);
export var VertexShader = function (_Shader) {
  _inherits(VertexShader, _Shader);

  function VertexShader(gl, props) {
    _classCallCheck(this, VertexShader);

    if (typeof props === 'string') {
      props = {
        source: props
      };
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(VertexShader).call(this, gl, Object.assign({}, props, {
      shaderType: 35633
    })));
  }

  _createClass(VertexShader, [{
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createShader(35633);
    }
  }]);

  return VertexShader;
}(Shader);
export var FragmentShader = function (_Shader2) {
  _inherits(FragmentShader, _Shader2);

  function FragmentShader(gl, props) {
    _classCallCheck(this, FragmentShader);

    if (typeof props === 'string') {
      props = {
        source: props
      };
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(FragmentShader).call(this, gl, Object.assign({}, props, {
      shaderType: 35632
    })));
  }

  _createClass(FragmentShader, [{
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createShader(35632);
    }
  }]);

  return FragmentShader;
}(Shader);
//# sourceMappingURL=shader.js.map
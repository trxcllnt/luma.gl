import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import Texture from './texture';
import Framebuffer from './framebuffer';
import { parseUniformName, getUniformSetter } from './uniforms';
import { VertexShader, FragmentShader } from './shader';
import ProgramConfiguration from './program-configuration';
import { checkUniformValues, areUniformsEqual, getUniformCopy } from './uniforms';
import { withParameters } from '../context';
import { assertWebGL2Context, isWebGL2, getKey } from '../webgl-utils';
import { getPrimitiveDrawMode } from '../webgl-utils/attribute-utils';
import { log, uid, assert } from '../utils';
var LOG_PROGRAM_PERF_PRIORITY = 4;
var GL_SEPARATE_ATTRIBS = 0x8c8d;
var V6_DEPRECATED_METHODS = ['setVertexArray', 'setAttributes', 'setBuffers', 'unsetBuffers', 'use', 'getUniformCount', 'getUniformInfo', 'getUniformLocation', 'getUniformValue', 'getVarying', 'getFragDataLocation', 'getAttachedShaders', 'getAttributeCount', 'getAttributeLocation', 'getAttributeInfo'];

var Program = function (_Resource) {
  _inherits(Program, _Resource);

  function Program(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Program);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Program).call(this, gl, props));

    _this.stubRemovedMethods('Program', 'v6.0', V6_DEPRECATED_METHODS);

    _this._isCached = false;

    _this.initialize(props);

    Object.seal(_assertThisInitialized(_this));

    _this._setId(props.id);

    return _this;
  }

  _createClass(Program, [{
    key: "initialize",
    value: function initialize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var vs = props.vs,
          fs = props.fs,
          varyings = props.varyings,
          _props$bufferMode = props.bufferMode,
          bufferMode = _props$bufferMode === void 0 ? GL_SEPARATE_ATTRIBS : _props$bufferMode;
      this.vs = typeof vs === 'string' ? new VertexShader(this.gl, {
        id: "".concat(props.id, "-vs"),
        source: vs
      }) : vs;
      this.fs = typeof fs === 'string' ? new FragmentShader(this.gl, {
        id: "".concat(props.id, "-fs"),
        source: fs
      }) : fs;
      assert(this.vs instanceof VertexShader);
      assert(this.fs instanceof FragmentShader);
      this.uniforms = {};

      if (varyings) {
        assertWebGL2Context(this.gl);
        this.varyings = varyings;
        this.gl.transformFeedbackVaryings(this.handle, varyings, bufferMode);
      }

      this._compileAndLink();

      this._readUniformLocationsFromLinkedProgram();

      this.configuration = new ProgramConfiguration(this);
      return this.setProps(props);
    }
  }, {
    key: "delete",
    value: function _delete() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this._isCached) {
        return this;
      }

      return _get(_getPrototypeOf(Program.prototype), "delete", this).call(this, options);
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      if ('uniforms' in props) {
        this.setUniforms(props.uniforms);
      }

      return this;
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var _this2 = this;

      var logPriority = _ref.logPriority,
          _ref$drawMode = _ref.drawMode,
          drawMode = _ref$drawMode === void 0 ? 4 : _ref$drawMode,
          vertexCount = _ref.vertexCount,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          start = _ref.start,
          end = _ref.end,
          _ref$isIndexed = _ref.isIndexed,
          isIndexed = _ref$isIndexed === void 0 ? false : _ref$isIndexed,
          _ref$indexType = _ref.indexType,
          indexType = _ref$indexType === void 0 ? 5123 : _ref$indexType,
          _ref$isInstanced = _ref.isInstanced,
          isInstanced = _ref$isInstanced === void 0 ? false : _ref$isInstanced,
          _ref$instanceCount = _ref.instanceCount,
          instanceCount = _ref$instanceCount === void 0 ? 0 : _ref$instanceCount,
          _ref$vertexArray = _ref.vertexArray,
          vertexArray = _ref$vertexArray === void 0 ? null : _ref$vertexArray,
          transformFeedback = _ref.transformFeedback,
          framebuffer = _ref.framebuffer,
          _ref$parameters = _ref.parameters,
          parameters = _ref$parameters === void 0 ? {} : _ref$parameters,
          uniforms = _ref.uniforms,
          samplers = _ref.samplers;

      if (uniforms || samplers) {
        log.deprecated('Program.draw({uniforms})', 'Program.setUniforms(uniforms)')();
        this.setUniforms(uniforms || {});
      }

      if (logPriority !== undefined) {
        var fb = framebuffer ? framebuffer.id : 'default';
        var message = "mode=".concat(getKey(this.gl, drawMode), " verts=").concat(vertexCount, " ") + "instances=".concat(instanceCount, " indexType=").concat(getKey(this.gl, indexType), " ") + "isInstanced=".concat(isInstanced, " isIndexed=").concat(isIndexed, " ") + "Framebuffer=".concat(fb);
        log.log(logPriority, message)();
      }

      assert(vertexArray);
      this.gl.useProgram(this.handle);

      if (!this._areTexturesRenderable()) {
        return false;
      }

      vertexArray.bindForDraw(vertexCount, instanceCount, function () {
        if (framebuffer !== undefined) {
          parameters = Object.assign({}, parameters, {
            framebuffer: framebuffer
          });
        }

        if (transformFeedback) {
          var primitiveMode = getPrimitiveDrawMode(drawMode);
          transformFeedback.begin(primitiveMode);
        }

        _this2._bindTextures();

        withParameters(_this2.gl, parameters, function () {
          if (isIndexed && isInstanced) {
            _this2.gl.drawElementsInstanced(drawMode, vertexCount, indexType, offset, instanceCount);
          } else if (isIndexed && isWebGL2(_this2.gl) && !isNaN(start) && !isNaN(end)) {
            _this2.gl.drawRangeElements(drawMode, start, end, vertexCount, indexType, offset);
          } else if (isIndexed) {
            _this2.gl.drawElements(drawMode, vertexCount, indexType, offset);
          } else if (isInstanced) {
            _this2.gl.drawArraysInstanced(drawMode, offset, vertexCount, instanceCount);
          } else {
            _this2.gl.drawArrays(drawMode, offset, vertexCount);
          }
        });

        if (transformFeedback) {
          transformFeedback.end();
        }
      });
      return true;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms() {
      var uniforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _onChangeCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      var somethingChanged = false;
      var changedUniforms = {};

      for (var key in uniforms) {
        if (!areUniformsEqual(this.uniforms[key], uniforms[key])) {
          somethingChanged = true;
          changedUniforms[key] = uniforms[key];
          this.uniforms[key] = getUniformCopy(uniforms[key]);
        }
      }

      if (somethingChanged) {
        _onChangeCallback();

        checkUniformValues(changedUniforms, this.id, this._uniformSetters);

        this._setUniforms(changedUniforms);
      }

      return this;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "_areTexturesRenderable",
    value: function _areTexturesRenderable() {
      var texturesRenderable = true;

      for (var uniformName in this.uniforms) {
        var uniformSetter = this._uniformSetters[uniformName];

        if (uniformSetter && uniformSetter.textureIndex !== undefined) {
          var uniform = this.uniforms[uniformName];

          if (uniform instanceof Framebuffer) {
            var framebuffer = uniform;
            uniform = framebuffer.texture;
          }

          if (uniform instanceof Texture) {
            var texture = uniform;
            texturesRenderable = texturesRenderable && texture.loaded;
          }
        }
      }

      return texturesRenderable;
    }
  }, {
    key: "_bindTextures",
    value: function _bindTextures() {
      for (var uniformName in this.uniforms) {
        var uniformSetter = this._uniformSetters[uniformName];

        if (uniformSetter && uniformSetter.textureIndex !== undefined) {
          var uniform = this.uniforms[uniformName];

          if (uniform instanceof Framebuffer) {
            uniform = uniform.texture;
          }

          if (uniform instanceof Texture) {
            var texture = uniform;
            texture.bind(uniformSetter.textureIndex);
          }
        }
      }
    }
  }, {
    key: "_setUniforms",
    value: function _setUniforms(uniforms) {
      this.gl.useProgram(this.handle);

      for (var uniformName in uniforms) {
        var uniform = uniforms[uniformName];
        var uniformSetter = this._uniformSetters[uniformName];

        if (uniformSetter) {
          if (uniform instanceof Framebuffer) {
            uniform = uniform.texture;
          }

          if (uniform instanceof Texture) {
            if (uniformSetter.textureIndex === undefined) {
              uniformSetter.textureIndex = this._textureIndexCounter++;
            }

            var texture = uniform;
            var textureIndex = uniformSetter.textureIndex;
            texture.bind(textureIndex);
            uniformSetter(textureIndex);
          } else {
            uniformSetter(uniform);
          }
        }
      }

      return this;
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createProgram();
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteProgram(this.handle);
    }
  }, {
    key: "_getOptionsFromHandle",
    value: function _getOptionsFromHandle(handle) {
      var shaderHandles = this.gl.getAttachedShaders(handle);
      var opts = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = shaderHandles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var shaderHandle = _step.value;
          var type = this.gl.getShaderParameter(this.handle, 35663);

          switch (type) {
            case 35633:
              opts.vs = new VertexShader({
                handle: shaderHandle
              });
              break;

            case 35632:
              opts.fs = new FragmentShader({
                handle: shaderHandle
              });
              break;

            default:
          }
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

      return opts;
    }
  }, {
    key: "_getParameter",
    value: function _getParameter(pname) {
      return this.gl.getProgramParameter(this.handle, pname);
    }
  }, {
    key: "_setId",
    value: function _setId(id) {
      if (!id) {
        var programName = this._getName();

        this.id = uid(programName);
      }
    }
  }, {
    key: "_getName",
    value: function _getName() {
      var programName = this.vs.getName() || this.fs.getName();
      programName = programName.replace(/shader/i, '');
      programName = programName ? "".concat(programName, "-program") : 'program';
      return programName;
    }
  }, {
    key: "_compileAndLink",
    value: function _compileAndLink() {
      var gl = this.gl;
      gl.attachShader(this.handle, this.vs.handle);
      gl.attachShader(this.handle, this.fs.handle);
      log.time(LOG_PROGRAM_PERF_PRIORITY, "linkProgram for ".concat(this._getName()))();
      gl.linkProgram(this.handle);
      log.timeEnd(LOG_PROGRAM_PERF_PRIORITY, "linkProgram for ".concat(this._getName()))();

      if (gl.debug || log.priority > 0) {
        gl.validateProgram(this.handle);
        var linked = gl.getProgramParameter(this.handle, 35714);

        if (!linked) {
          throw new Error("Error linking: ".concat(gl.getProgramInfoLog(this.handle)));
        }
      }
    }
  }, {
    key: "_readUniformLocationsFromLinkedProgram",
    value: function _readUniformLocationsFromLinkedProgram() {
      var gl = this.gl;
      this._uniformSetters = {};
      this._uniformCount = this._getParameter(35718);

      for (var i = 0; i < this._uniformCount; i++) {
        var info = this.gl.getActiveUniform(this.handle, i);

        var _parseUniformName = parseUniformName(info.name),
            name = _parseUniformName.name,
            isArray = _parseUniformName.isArray;

        var location = gl.getUniformLocation(this.handle, name);
        this._uniformSetters[name] = getUniformSetter(gl, location, info, isArray);
      }

      this._textureIndexCounter = 0;
    }
  }, {
    key: "getActiveUniforms",
    value: function getActiveUniforms(uniformIndices, pname) {
      return this.gl.getActiveUniforms(this.handle, uniformIndices, pname);
    }
  }, {
    key: "getUniformBlockIndex",
    value: function getUniformBlockIndex(blockName) {
      return this.gl.getUniformBlockIndex(this.handle, blockName);
    }
  }, {
    key: "getActiveUniformBlockParameter",
    value: function getActiveUniformBlockParameter(blockIndex, pname) {
      return this.gl.getActiveUniformBlockParameter(this.handle, blockIndex, pname);
    }
  }, {
    key: "uniformBlockBinding",
    value: function uniformBlockBinding(blockIndex, blockBinding) {
      this.gl.uniformBlockBinding(this.handle, blockIndex, blockBinding);
    }
  }]);

  return Program;
}(Resource);

export { Program as default };
//# sourceMappingURL=program.js.map
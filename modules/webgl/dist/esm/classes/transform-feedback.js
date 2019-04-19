import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import Buffer from './buffer';
import { isWebGL2, assertWebGL2Context } from '../webgl-utils';
import { log, isObjectEmpty } from '../utils';

var TransformFeedback = function (_Resource) {
  _inherits(TransformFeedback, _Resource);

  _createClass(TransformFeedback, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      return isWebGL2(gl);
    }
  }]);

  function TransformFeedback(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TransformFeedback);

    assertWebGL2Context(gl);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TransformFeedback).call(this, gl, props));

    _this.initialize(props);

    _this.stubRemovedMethods('TransformFeedback', 'v6.0', ['pause', 'resume']);

    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TransformFeedback, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.buffers = {};
      this.unused = {};
      this.configuration = null;
      this.bindOnUse = true;

      if (!isObjectEmpty(this.buffers)) {
        this.bind(function () {
          return _this2._unbindBuffers();
        });
      }

      this.setProps(props);
      return this;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      if ('program' in props) {
        this.configuration = props.program && props.program.configuration;
      }

      if ('configuration' in props) {
        this.configuration = props.configuration;
      }

      if ('bindOnUse' in props) {
        props = props.bindOnUse;
      }

      if ('buffers' in props) {
        this.setBuffers(props.buffers);
      }
    }
  }, {
    key: "setBuffers",
    value: function setBuffers() {
      var _this3 = this;

      var buffers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.bind(function () {
        for (var bufferName in buffers) {
          _this3.setBuffer(bufferName, buffers[bufferName]);
        }
      });
      return this;
    }
  }, {
    key: "setBuffer",
    value: function setBuffer(locationOrName, bufferOrParams) {
      var _this4 = this;

      var location = this._getVaryingIndex(locationOrName);

      var _this$_getBufferParam = this._getBufferParams(bufferOrParams),
          buffer = _this$_getBufferParam.buffer,
          byteSize = _this$_getBufferParam.byteSize,
          byteOffset = _this$_getBufferParam.byteOffset;

      if (location < 0) {
        this.unused[locationOrName] = buffer;
        log.warn(function () {
          return "".concat(_this4.id, " unused varying buffer ").concat(locationOrName);
        })();
        return this;
      }

      this.buffers[location] = bufferOrParams;

      if (!this.bindOnUse) {
        this._bindBuffer(location, buffer, byteOffset, byteSize);
      }

      return this;
    }
  }, {
    key: "begin",
    value: function begin() {
      var primitiveMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.gl.bindTransformFeedback(36386, this.handle);

      this._bindBuffers();

      this.gl.beginTransformFeedback(primitiveMode);
      return this;
    }
  }, {
    key: "end",
    value: function end() {
      this.gl.endTransformFeedback();

      this._unbindBuffers();

      this.gl.bindTransformFeedback(36386, null);
      return this;
    }
  }, {
    key: "_getBufferParams",
    value: function _getBufferParams(bufferOrParams) {
      var byteOffset;
      var byteSize;
      var buffer;

      if (bufferOrParams instanceof Buffer === false) {
        buffer = bufferOrParams.buffer;
        byteSize = bufferOrParams.byteSize;
        byteOffset = bufferOrParams.byteOffset;
      } else {
        buffer = bufferOrParams;
      }

      if (byteOffset !== undefined || byteSize !== undefined) {
        byteOffset = byteOffset || 0;
        byteSize = byteSize || buffer.byteLength - byteOffset;
      }

      return {
        buffer: buffer,
        byteOffset: byteOffset,
        byteSize: byteSize
      };
    }
  }, {
    key: "_getVaryingInfo",
    value: function _getVaryingInfo(locationOrName) {
      return this.configuration && this.configuration.getVaryingInfo(locationOrName);
    }
  }, {
    key: "_getVaryingIndex",
    value: function _getVaryingIndex(locationOrName) {
      if (this.configuration) {
        return this.configuration.getVaryingInfo(locationOrName).location;
      }

      var location = Number(locationOrName);
      return Number.isFinite(location) ? location : -1;
    }
  }, {
    key: "_bindBuffers",
    value: function _bindBuffers() {
      if (this.bindOnUse) {
        for (var bufferIndex in this.buffers) {
          var _this$_getBufferParam2 = this._getBufferParams(this.buffers[bufferIndex]),
              buffer = _this$_getBufferParam2.buffer,
              byteSize = _this$_getBufferParam2.byteSize,
              byteOffset = _this$_getBufferParam2.byteOffset;

          this._bindBuffer(bufferIndex, buffer, byteOffset, byteSize);
        }
      }
    }
  }, {
    key: "_unbindBuffers",
    value: function _unbindBuffers() {
      if (this.bindOnUse) {
        for (var bufferIndex in this.buffers) {
          this._bindBuffer(bufferIndex, null);
        }
      }
    }
  }, {
    key: "_bindBuffer",
    value: function _bindBuffer(index, buffer) {
      var byteOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var byteSize = arguments.length > 3 ? arguments[3] : undefined;
      var handle = buffer && buffer.handle;

      if (!handle || byteSize === undefined) {
        this.gl.bindBufferBase(35982, index, handle);
      } else {
        this.gl.bindBufferRange(35982, index, handle, byteOffset, byteSize);
      }

      return this;
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createTransformFeedback();
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteTransformFeedback(this.handle);
    }
  }, {
    key: "_bindHandle",
    value: function _bindHandle(handle) {
      this.gl.bindTransformFeedback(36386, this.handle);
    }
  }]);

  return TransformFeedback;
}(Resource);

export { TransformFeedback as default };
//# sourceMappingURL=transform-feedback.js.map
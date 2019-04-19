"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ACCESSOR_VALUES = exports["default"] = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

var DEFAULT_ACCESSOR_VALUES = {
  offset: 0,
  stride: 0,
  type: 5126,
  size: 1,
  divisor: 0,
  normalized: false,
  integer: false
};
exports.DEFAULT_ACCESSOR_VALUES = DEFAULT_ACCESSOR_VALUES;
var PROP_CHECKS = {
  deprecatedProps: {
    instanced: 'divisor',
    isInstanced: 'divisor'
  }
};

var Accessor = function () {
  (0, _createClass2["default"])(Accessor, null, [{
    key: "getBytesPerElement",
    value: function getBytesPerElement(accessor) {
      var ArrayType = (0, _webglUtils.getTypedArrayFromGLType)(accessor.type || 5126);
      return ArrayType.BYTES_PER_ELEMENT;
    }
  }, {
    key: "getBytesPerVertex",
    value: function getBytesPerVertex(accessor) {
      (0, _utils.assert)(accessor.size);
      var ArrayType = (0, _webglUtils.getTypedArrayFromGLType)(accessor.type || 5126);
      return ArrayType.BYTES_PER_ELEMENT * accessor.size;
    }
  }, {
    key: "resolve",
    value: function resolve() {
      for (var _len = arguments.length, accessors = new Array(_len), _key = 0; _key < _len; _key++) {
        accessors[_key] = arguments[_key];
      }

      return (0, _construct2["default"])(Accessor, [DEFAULT_ACCESSOR_VALUES].concat(accessors));
    }
  }]);

  function Accessor() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Accessor);

    for (var _len2 = arguments.length, accessors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      accessors[_key2] = arguments[_key2];
    }

    accessors.forEach(function (accessor) {
      return _this._assign(accessor);
    });
    Object.freeze(this);
  }

  (0, _createClass2["default"])(Accessor, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify(this);
    }
  }, {
    key: "_assign",
    value: function _assign() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      props = (0, _utils.checkProps)('Accessor', props, PROP_CHECKS);

      if (props.type !== undefined) {
        this.type = props.type;

        if (props.type === 5124 || props.type === 5125) {
          this.integer = true;
        }
      }

      if (props.size !== undefined) {
        this.size = props.size;
      }

      if (props.offset !== undefined) {
        this.offset = props.offset;
      }

      if (props.stride !== undefined) {
        this.stride = props.stride;
      }

      if (props.normalized !== undefined) {
        this.normalized = props.normalized;
      }

      if (props.integer !== undefined) {
        this.integer = props.integer;
      }

      if (props.divisor !== undefined) {
        this.divisor = props.divisor;
      }

      if (props.buffer !== undefined) {
        this.buffer = props.buffer;
      }

      if (props.index !== undefined) {
        if (typeof index === 'boolean') {
          this.index = props.index ? 1 : 0;
        } else {
          this.index = props.index;
        }
      }

      if (props.instanced !== undefined) {
        this.divisor = props.instanced ? 1 : 0;
      }

      if (props.isInstanced !== undefined) {
        this.divisor = props.isInstanced ? 1 : 0;
      }

      return this;
    }
  }, {
    key: "BYTES_PER_ELEMENT",
    get: function get() {
      return Accessor.getBytesPerElement(this);
    }
  }, {
    key: "BYTES_PER_VERTEX",
    get: function get() {
      return Accessor.getBytesPerVertex(this);
    }
  }]);
  return Accessor;
}();

exports["default"] = Accessor;
//# sourceMappingURL=accessor.js.map
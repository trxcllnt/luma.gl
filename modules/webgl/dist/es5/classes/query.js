"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _resource = _interopRequireDefault(require("./resource"));

var _features = require("../features");

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

var GL_QUERY_RESULT = 0x8866;
var GL_QUERY_RESULT_AVAILABLE = 0x8867;
var GL_TIME_ELAPSED_EXT = 0x88bf;
var GL_GPU_DISJOINT_EXT = 0x8fbb;
var GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88;
var GL_ANY_SAMPLES_PASSED = 0x8c2f;
var GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a;

var Query = function (_Resource) {
  (0, _inherits2["default"])(Query, _Resource);
  (0, _createClass2["default"])(Query, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var webgl2 = (0, _webglUtils.isWebGL2)(gl);
      var hasTimerQuery = (0, _features.hasFeatures)(gl, _features.FEATURES.TIMER_QUERY);
      var supported = webgl2 || hasTimerQuery;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = opts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          switch (key) {
            case 'queries':
              supported = supported && webgl2;
              break;

            case 'timers':
              supported = supported && hasTimerQuery;
              break;

            default:
              (0, _utils.assert)(false);
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

      return supported;
    }
  }]);

  function Query(gl) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, Query);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Query).call(this, gl, opts));
    _this.target = null;
    _this._queryPending = false;
    _this._pollingPromise = null;
    Object.seal((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Query, [{
    key: "beginTimeElapsedQuery",
    value: function beginTimeElapsedQuery() {
      return this.begin(GL_TIME_ELAPSED_EXT);
    }
  }, {
    key: "beginOcclusionQuery",
    value: function beginOcclusionQuery() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$conservative = _ref.conservative,
          conservative = _ref$conservative === void 0 ? false : _ref$conservative;

      return this.begin(conservative ? GL_ANY_SAMPLES_PASSED_CONSERVATIVE : GL_ANY_SAMPLES_PASSED);
    }
  }, {
    key: "beginTransformFeedbackQuery",
    value: function beginTransformFeedbackQuery() {
      return this.begin(GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN);
    }
  }, {
    key: "begin",
    value: function begin(target) {
      if (this._queryPending) {
        return this;
      }

      this.target = target;
      this.gl.beginQuery(this.target, this.handle);
      return this;
    }
  }, {
    key: "end",
    value: function end() {
      if (this._queryPending) {
        return this;
      }

      if (this.target) {
        this.gl.endQuery(this.target);
        this.target = null;
        this._queryPending = true;
      }

      return this;
    }
  }, {
    key: "isResultAvailable",
    value: function isResultAvailable() {
      if (!this._queryPending) {
        return false;
      }

      var resultAvailable = this.gl.getQueryParameter(this.handle, GL_QUERY_RESULT_AVAILABLE);

      if (resultAvailable) {
        this._queryPending = false;
      }

      return resultAvailable;
    }
  }, {
    key: "isTimerDisjoint",
    value: function isTimerDisjoint() {
      return this.gl.getParameter(GL_GPU_DISJOINT_EXT);
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.gl.getQueryParameter(this.handle, GL_QUERY_RESULT);
    }
  }, {
    key: "getTimerMilliseconds",
    value: function getTimerMilliseconds() {
      return this.getResult() / 1e6;
    }
  }, {
    key: "createPoll",
    value: function createPoll() {
      var _this2 = this;

      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;

      if (this._pollingPromise) {
        return this._pollingPromise;
      }

      var counter = 0;
      this._pollingPromise = new Promise(function (resolve, reject) {
        var poll = function poll() {
          if (_this2.isResultAvailable()) {
            resolve(_this2.getResult());
            _this2._pollingPromise = null;
          } else if (counter++ > limit) {
            reject('Timed out');
            _this2._pollingPromise = null;
          } else {
            requestAnimationFrame(poll);
          }
        };

        requestAnimationFrame(poll);
      });
      return this._pollingPromise;
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return Query.isSupported(this.gl) ? this.gl.createQuery() : null;
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteQuery(this.handle);
    }
  }]);
  return Query;
}(_resource["default"]);

exports["default"] = Query;
//# sourceMappingURL=query.js.map
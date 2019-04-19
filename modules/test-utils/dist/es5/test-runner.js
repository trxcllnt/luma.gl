"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _core = require("@luma.gl/core");

var _webglStateTracker = require("@luma.gl/webgl-state-tracker");

function noop() {}

var DEFAULT_TEST_CASE = {
  name: 'Unnamed test',
  onInitialize: noop,
  onRender: function onRender(_ref) {
    var done = _ref.done;
    return done();
  },
  onFinalize: noop
};
var DEFAULT_TEST_OPTIONS = {
  onTestStart: function onTestStart(testCase) {
    return console.log("# ".concat(testCase.name));
  },
  onTestPass: function onTestPass(testCase) {
    return console.log("ok ".concat(testCase.name, " passed"));
  },
  onTestFail: function onTestFail(testCase) {
    return console.log("not ok ".concat(testCase.name, " failed"));
  },
  timeout: 2000
};

var TestRunner = function () {
  function TestRunner() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, TestRunner);
    this.props = props;
    this.isRunning = false;
    this._testCases = [];
    this._testCaseData = null;
    this.isHeadless = Boolean(window.browserTestDriver_isHeadless);
    this.testOptions = Object.assign({}, DEFAULT_TEST_OPTIONS);
  }

  (0, _createClass2["default"])(TestRunner, [{
    key: "add",
    value: function add(testCases) {
      if (!Array.isArray(testCases)) {
        testCases = [testCases];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = testCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var testCase = _step.value;

          this._testCases.push(testCase);
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

      return this;
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(this.testOptions, options);
      return new Promise(function (resolve) {
        _this._animationLoop = new _core.AnimationLoop(Object.assign({}, _this.props, {
          onRender: _this._onRender.bind(_this),
          onFinalize: function onFinalize() {
            _this.isRunning = false;
            resolve();
          }
        }));

        _this._animationLoop.start(_this.props);

        _this.isRunning = true;
        _this.isDiffing = false;
        _this._currentTestCase = null;
      })["catch"](function (error) {
        _this._fail({
          error: error.message
        });
      });
    }
  }, {
    key: "initTestCase",
    value: function initTestCase(testCase) {
      var animationLoop = testCase.animationLoop;

      if (animationLoop) {
        testCase.onInitialize = animationLoop.onInitialize.bind(animationLoop);
        testCase.onRender = animationLoop.onRender.bind(animationLoop);
        testCase.onFinalize = animationLoop.onFinalize.bind(animationLoop);
      }

      for (var key in DEFAULT_TEST_CASE) {
        testCase[key] = testCase[key] || DEFAULT_TEST_CASE[key];
      }
    }
  }, {
    key: "shouldRender",
    value: function shouldRender(animationProps) {
      return true;
    }
  }, {
    key: "assert",
    value: function assert(testCase) {
      this._pass(testCase);

      this._next();
    }
  }, {
    key: "_pass",
    value: function _pass(result) {
      this.testOptions.onTestPass(this._currentTestCase, result);
    }
  }, {
    key: "_fail",
    value: function _fail(result) {
      this.testOptions.onTestFail(this._currentTestCase, result);
    }
  }, {
    key: "_next",
    value: function _next() {
      this._nextTestCase();
    }
  }, {
    key: "_onRender",
    value: function _onRender(animationProps) {
      this._animationProps = animationProps;

      var testCase = this._currentTestCase || this._nextTestCase();

      if (!testCase) {
        this._animationLoop.stop();

        return;
      }

      var isDone = false;
      var testCaseAnimationProps = Object.assign({}, animationProps, this._testCaseData, {
        startTime: this._currentTestCaseStartTime,
        time: animationProps.time - this._currentTestCaseStartTime,
        tick: animationProps.tick - this._currentTestCaseStartTick,
        done: function done() {
          isDone = true;
        }
      });

      if (this._testCaseData && this.shouldRender(testCaseAnimationProps)) {
        testCase.onRender(testCaseAnimationProps);
      }

      var timeout = testCase.timeout || this.testOptions.timeout;

      if (timeout && testCaseAnimationProps.time > timeout) {
        isDone = true;
      }

      if (isDone) {
        this.assert(testCase);
      }
    }
  }, {
    key: "_nextTestCase",
    value: function _nextTestCase() {
      var _this2 = this;

      var animationProps = this._animationProps;

      if (this._testCaseData) {
        for (var key in this._testCaseData) {
          var value = this._testCaseData[key];

          if (value && value["delete"]) {
            value["delete"]();
          }
        }

        this._currentTestCase.onFinalize(Object.assign({}, animationProps, this._testCaseData));

        (0, _webglStateTracker.popContextState)(animationProps.gl);
        this._currentTestCase = null;
        this._testCaseData = null;
      }

      var testCase = this._testCases.shift();

      if (testCase) {
        this._currentTestCase = testCase;
        this._currentTestCaseStartTime = animationProps.time;
        this._currentTestCaseStartTick = animationProps.tick;
        this.initTestCase(testCase);
        (0, _webglStateTracker.pushContextState)(animationProps.gl);
        Promise.resolve(testCase.onInitialize(Object.assign({}, animationProps, {
          startTime: animationProps.time,
          time: 0,
          tick: 0
        }))).then(function (userData) {
          _this2._testCaseData = userData || {};
        });
        this.testOptions.onTestStart(testCase);
      }

      return testCase;
    }
  }]);
  return TestRunner;
}();

exports["default"] = TestRunner;
//# sourceMappingURL=test-runner.js.map
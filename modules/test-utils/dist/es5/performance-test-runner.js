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

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _probe = require("probe.gl");

var _testRunner = _interopRequireDefault(require("./test-runner"));

var PerformanceTestRunner = function (_TestRunner) {
  (0, _inherits2["default"])(PerformanceTestRunner, _TestRunner);

  function PerformanceTestRunner(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PerformanceTestRunner);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PerformanceTestRunner).call(this, props));
    Object.assign(_this.testOptions, {
      maxFramesToRender: 60,
      targetFPS: 50
    });
    return _this;
  }

  (0, _createClass2["default"])(PerformanceTestRunner, [{
    key: "initTestCase",
    value: function initTestCase(testCase) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(PerformanceTestRunner.prototype), "initTestCase", this).call(this, testCase);
      this._stats = new _probe.Stats({
        id: testCase.name
      });
      this._fps = this._stats.get('fps');
    }
  }, {
    key: "shouldRender",
    value: function shouldRender(animationProps) {
      this._fps.timeEnd();

      this._fps.timeStart();

      if (this._fps.count > this.testOptions.maxFramesToRender) {
        animationProps.done();
      }

      return true;
    }
  }, {
    key: "assert",
    value: function assert(testCase) {
      var targetFPS = testCase.targetFPS || this.testOptions.targetFPS;
      var count = this._fps.count;

      var fps = this._fps.getHz();

      if (fps >= targetFPS) {
        this._pass({
          fps: fps,
          framesRendered: count
        });
      } else {
        this._fail({
          fps: fps,
          framesRendered: count
        });
      }

      this._next();
    }
  }]);
  return PerformanceTestRunner;
}(_testRunner["default"]);

exports["default"] = PerformanceTestRunner;
//# sourceMappingURL=performance-test-runner.js.map
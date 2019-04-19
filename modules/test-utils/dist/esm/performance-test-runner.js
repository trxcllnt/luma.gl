import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Stats } from 'probe.gl';
import TestRunner from './test-runner';

var PerformanceTestRunner = function (_TestRunner) {
  _inherits(PerformanceTestRunner, _TestRunner);

  function PerformanceTestRunner(props) {
    var _this;

    _classCallCheck(this, PerformanceTestRunner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PerformanceTestRunner).call(this, props));
    Object.assign(_this.testOptions, {
      maxFramesToRender: 60,
      targetFPS: 50
    });
    return _this;
  }

  _createClass(PerformanceTestRunner, [{
    key: "initTestCase",
    value: function initTestCase(testCase) {
      _get(_getPrototypeOf(PerformanceTestRunner.prototype), "initTestCase", this).call(this, testCase);

      this._stats = new Stats({
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
}(TestRunner);

export { PerformanceTestRunner as default };
//# sourceMappingURL=performance-test-runner.js.map
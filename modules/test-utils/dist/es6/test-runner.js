import { AnimationLoop } from '@luma.gl/core';
import { pushContextState, popContextState } from '@luma.gl/webgl-state-tracker';

function noop() {}

const DEFAULT_TEST_CASE = {
  name: 'Unnamed test',
  onInitialize: noop,
  onRender: (_ref) => {
    let done = _ref.done;
    return done();
  },
  onFinalize: noop
};
const DEFAULT_TEST_OPTIONS = {
  onTestStart: testCase => console.log("# ".concat(testCase.name)),
  onTestPass: testCase => console.log("ok ".concat(testCase.name, " passed")),
  onTestFail: testCase => console.log("not ok ".concat(testCase.name, " failed")),
  timeout: 2000
};
export default class TestRunner {
  constructor() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.props = props;
    this.isRunning = false;
    this._testCases = [];
    this._testCaseData = null;
    this.isHeadless = Boolean(window.browserTestDriver_isHeadless);
    this.testOptions = Object.assign({}, DEFAULT_TEST_OPTIONS);
  }

  add(testCases) {
    if (!Array.isArray(testCases)) {
      testCases = [testCases];
    }

    for (const testCase of testCases) {
      this._testCases.push(testCase);
    }

    return this;
  }

  run() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.assign(this.testOptions, options);
    return new Promise(resolve => {
      this._animationLoop = new AnimationLoop(Object.assign({}, this.props, {
        onRender: this._onRender.bind(this),
        onFinalize: () => {
          this.isRunning = false;
          resolve();
        }
      }));

      this._animationLoop.start(this.props);

      this.isRunning = true;
      this.isDiffing = false;
      this._currentTestCase = null;
    }).catch(error => {
      this._fail({
        error: error.message
      });
    });
  }

  initTestCase(testCase) {
    const animationLoop = testCase.animationLoop;

    if (animationLoop) {
      testCase.onInitialize = animationLoop.onInitialize.bind(animationLoop);
      testCase.onRender = animationLoop.onRender.bind(animationLoop);
      testCase.onFinalize = animationLoop.onFinalize.bind(animationLoop);
    }

    for (const key in DEFAULT_TEST_CASE) {
      testCase[key] = testCase[key] || DEFAULT_TEST_CASE[key];
    }
  }

  shouldRender(animationProps) {
    return true;
  }

  assert(testCase) {
    this._pass(testCase);

    this._next();
  }

  _pass(result) {
    this.testOptions.onTestPass(this._currentTestCase, result);
  }

  _fail(result) {
    this.testOptions.onTestFail(this._currentTestCase, result);
  }

  _next() {
    this._nextTestCase();
  }

  _onRender(animationProps) {
    this._animationProps = animationProps;

    const testCase = this._currentTestCase || this._nextTestCase();

    if (!testCase) {
      this._animationLoop.stop();

      return;
    }

    let isDone = false;
    const testCaseAnimationProps = Object.assign({}, animationProps, this._testCaseData, {
      startTime: this._currentTestCaseStartTime,
      time: animationProps.time - this._currentTestCaseStartTime,
      tick: animationProps.tick - this._currentTestCaseStartTick,
      done: () => {
        isDone = true;
      }
    });

    if (this._testCaseData && this.shouldRender(testCaseAnimationProps)) {
      testCase.onRender(testCaseAnimationProps);
    }

    const timeout = testCase.timeout || this.testOptions.timeout;

    if (timeout && testCaseAnimationProps.time > timeout) {
      isDone = true;
    }

    if (isDone) {
      this.assert(testCase);
    }
  }

  _nextTestCase() {
    const animationProps = this._animationProps;

    if (this._testCaseData) {
      for (const key in this._testCaseData) {
        const value = this._testCaseData[key];

        if (value && value.delete) {
          value.delete();
        }
      }

      this._currentTestCase.onFinalize(Object.assign({}, animationProps, this._testCaseData));

      popContextState(animationProps.gl);
      this._currentTestCase = null;
      this._testCaseData = null;
    }

    const testCase = this._testCases.shift();

    if (testCase) {
      this._currentTestCase = testCase;
      this._currentTestCaseStartTime = animationProps.time;
      this._currentTestCaseStartTick = animationProps.tick;
      this.initTestCase(testCase);
      pushContextState(animationProps.gl);
      Promise.resolve(testCase.onInitialize(Object.assign({}, animationProps, {
        startTime: animationProps.time,
        time: 0,
        tick: 0
      }))).then(userData => {
        this._testCaseData = userData || {};
      });
      this.testOptions.onTestStart(testCase);
    }

    return testCase;
  }

}
//# sourceMappingURL=test-runner.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@luma.gl/core");

var _display = _interopRequireDefault(require("./display"));

var _vrButton = require("./vr-button");

var VRDisplay = function (_Display) {
  (0, _inherits2["default"])(VRDisplay, _Display);
  (0, _createClass2["default"])(VRDisplay, null, [{
    key: "isSupported",
    value: function isSupported() {
      return 'getVRDisplays' in navigator && 'VRFrameData' in window;
    }
  }]);

  function VRDisplay(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, VRDisplay);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VRDisplay).call(this, props));
    _this._vrSupported = VRDisplay.isSupported();

    if (_this._vrSupported) {
      _this.vrFrameData = new window.VRFrameData();
      _this.vrPresenting = false;
      _this.vrFrame = false;
      window.addEventListener('vrdisplaypresentchange', _this._vrDisplayPresentChange.bind((0, _assertThisInitialized2["default"])(_this)));
    }

    return _this;
  }

  (0, _createClass2["default"])(VRDisplay, [{
    key: "delete",
    value: function _delete() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(VRDisplay.prototype), "delete", this).call(this);

      this._removeVRButton();
    }
  }, {
    key: "getViews",
    value: function getViews(options) {
      if (this._vrSupported) {
        this._addVRButton();
      }

      if (this.vrPresenting && this.vrFrame) {
        this.vrDisplay.getFrameData(this.vrFrameData);
        var _this$vrFrameData = this.vrFrameData,
            leftProjectionMatrix = _this$vrFrameData.leftProjectionMatrix,
            leftViewMatrix = _this$vrFrameData.leftViewMatrix,
            rightProjectionMatrix = _this$vrFrameData.rightProjectionMatrix,
            rightViewMatrix = _this$vrFrameData.rightViewMatrix;
        var width = options.width,
            height = options.height;
        return [{
          displayEye: 'left',
          projectionMatrix: leftProjectionMatrix,
          viewMatrix: leftViewMatrix,
          params: {
            viewport: [0, 0, width * 0.5, height],
            scissor: [0, 0, width * 0.5, height],
            scissorTest: true
          }
        }, {
          displayEye: 'right',
          projectionMatrix: rightProjectionMatrix,
          viewMatrix: rightViewMatrix,
          params: {
            viewport: [width * 0.5, 0, width * 0.5, height],
            scissor: [width * 0.5, 0, width * 0.5, height],
            scissorTest: true
          }
        }];
      }

      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(VRDisplay.prototype), "getViews", this).call(this, options);
    }
  }, {
    key: "submitFrame",
    value: function submitFrame() {
      if (this.vrPresenting && this.vrFrame) {
        this.vrDisplay.submitFrame();
        return true;
      }

      return false;
    }
  }, {
    key: "requestAnimationFrame",
    value: function requestAnimationFrame(renderFrame) {
      var _this2 = this;

      if (this.vrPresenting) {
        this.vrDisplay.requestAnimationFrame(function () {
          _this2.vrFrame = true;
          renderFrame();
          _this2.vrFrame = false;
        });
        return true;
      }

      return false;
    }
  }, {
    key: "_addVRButton",
    value: function () {
      var _addVRButton2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var _this3 = this;

        var canvas, displays;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.vrButton) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                canvas = this._getCanvas();

                if (canvas) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return navigator.getVRDisplays();

              case 7:
                displays = _context.sent;

                if (displays && displays.length) {
                  _core.log.info(2, 'Found VR Displays', displays)();

                  this.vrDisplay = displays[0];
                  this.vrButton = (0, _vrButton.createEnterVRButton)({
                    canvas: canvas,
                    title: "Enter VR (".concat(this.vrDisplay.displayName, ")")
                  });

                  this.vrButton.onclick = function () {
                    return _this3._startDisplay();
                  };
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _addVRButton() {
        return _addVRButton2.apply(this, arguments);
      }

      return _addVRButton;
    }()
  }, {
    key: "_getCanvas",
    value: function _getCanvas() {
      return this.animationLoop.canvas || this.animationLoop.gl && this.animationLoop.gl.canvas;
    }
  }, {
    key: "_removeVRButton",
    value: function _removeVRButton() {
      if (this.vrButton) {}
    }
  }, {
    key: "_startDisplay",
    value: function _startDisplay() {
      this.vrDisplay.requestPresent([{
        source: this._getCanvas()
      }]);
    }
  }, {
    key: "_vrDisplayPresentChange",
    value: function _vrDisplayPresentChange() {
      if (this.vrDisplay.isPresenting) {
        _core.log.info(2, 'Entering VR')();

        this.vrPresenting = true;
        this.vrButton.style.display = 'none';
      } else {
        _core.log.info(2, 'Exiting VR')();

        this.vrPresenting = false;
        this.vrButton.style.display = 'block';
      }
    }
  }]);
  return VRDisplay;
}(_display["default"]);

exports["default"] = VRDisplay;
//# sourceMappingURL=vr-display.js.map
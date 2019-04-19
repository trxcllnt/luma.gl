"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _webgl = require("@luma.gl/webgl");

var _utils = require("../utils");

var statIdCounter = 0;

var AnimationLoop = function () {
  function AnimationLoop() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, AnimationLoop);
    var _props$onCreateContex = props.onCreateContext,
        onCreateContext = _props$onCreateContex === void 0 ? function (opts) {
      return (0, _webgl.createGLContext)(opts);
    } : _props$onCreateContex,
        _props$onAddHTML = props.onAddHTML,
        onAddHTML = _props$onAddHTML === void 0 ? null : _props$onAddHTML,
        _props$onInitialize = props.onInitialize,
        onInitialize = _props$onInitialize === void 0 ? function () {} : _props$onInitialize,
        _props$onRender = props.onRender,
        onRender = _props$onRender === void 0 ? function () {} : _props$onRender,
        _props$onFinalize = props.onFinalize,
        onFinalize = _props$onFinalize === void 0 ? function () {} : _props$onFinalize,
        _props$gl = props.gl,
        gl = _props$gl === void 0 ? null : _props$gl,
        _props$glOptions = props.glOptions,
        glOptions = _props$glOptions === void 0 ? {} : _props$glOptions,
        _props$debug = props.debug,
        debug = _props$debug === void 0 ? false : _props$debug,
        _props$createFramebuf = props.createFramebuffer,
        createFramebuffer = _props$createFramebuf === void 0 ? false : _props$createFramebuf,
        _props$autoResizeView = props.autoResizeViewport,
        autoResizeViewport = _props$autoResizeView === void 0 ? true : _props$autoResizeView,
        _props$autoResizeDraw = props.autoResizeDrawingBuffer,
        autoResizeDrawingBuffer = _props$autoResizeDraw === void 0 ? true : _props$autoResizeDraw,
        _props$stats = props.stats,
        stats = _props$stats === void 0 ? _webgl.lumaStats.get("animation-loop-".concat(statIdCounter++)) : _props$stats;
    var _props$useDevicePixel = props.useDevicePixels,
        useDevicePixels = _props$useDevicePixel === void 0 ? true : _props$useDevicePixel;

    if ('useDevicePixelRatio' in props) {
      _utils.log.deprecated('useDevicePixelRatio', 'useDevicePixels')();

      useDevicePixels = props.useDevicePixelRatio;
    }

    this.props = {
      onCreateContext: onCreateContext,
      onAddHTML: onAddHTML,
      onInitialize: onInitialize,
      onRender: onRender,
      onFinalize: onFinalize,
      gl: gl,
      glOptions: glOptions,
      debug: debug,
      createFramebuffer: createFramebuffer
    };
    this.gl = gl;
    this.needsRedraw = null;
    this.stats = stats;
    this.cpuTime = this.stats.get('CPU Time');
    this.gpuTime = this.stats.get('GPU Time');
    this.frameRate = this.stats.get('Frame Rate');
    this._initialized = false;
    this._running = false;
    this._animationFrameId = null;
    this._nextFramePromise = null;
    this._resolveNextFrame = null;
    this._cpuStartTime = 0;
    this.setProps({
      autoResizeViewport: autoResizeViewport,
      autoResizeDrawingBuffer: autoResizeDrawingBuffer,
      useDevicePixels: useDevicePixels
    });
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this._onMousemove = this._onMousemove.bind(this);
    this._onMouseleave = this._onMouseleave.bind(this);
  }

  (0, _createClass2["default"])(AnimationLoop, [{
    key: "delete",
    value: function _delete() {
      this.stop();

      this._setDisplay(null);
    }
  }, {
    key: "setNeedsRedraw",
    value: function setNeedsRedraw(reason) {
      (0, _utils.assert)(typeof reason === 'string');
      this.needsRedraw = this.needsRedraw || reason;
      return this;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      if ('autoResizeViewport' in props) {
        this.autoResizeViewport = props.autoResizeViewport;
      }

      if ('autoResizeDrawingBuffer' in props) {
        this.autoResizeDrawingBuffer = props.autoResizeDrawingBuffer;
      }

      if ('useDevicePixels' in props) {
        this.useDevicePixels = props.useDevicePixels;
      }

      return this;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this._running) {
        return this;
      }

      this._running = true;
      (0, _webgl.getPageLoadPromise)().then(function () {
        if (!_this._running || _this._initialized) {
          return null;
        }

        _this._createWebGLContext(opts);

        _this._createFramebuffer();

        _this._startEventHandling();

        _this._initializeCallbackData();

        _this._updateCallbackData();

        _this._resizeCanvasDrawingBuffer();

        _this._resizeViewport();

        _this._gpuTimeQuery = _webgl.Query.isSupported(_this.gl, ['timers']) ? new _webgl.Query(_this.gl) : null;
        _this._initialized = true;
        return _this.onInitialize(_this.animationProps);
      }).then(function (appContext) {
        if (_this._running) {
          _this._addCallbackData(appContext || {});

          if (appContext !== false) {
            _this._startLoop();
          }
        }
      });
      return this;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      this._beginTimers();

      this._setupFrame();

      this._updateCallbackData();

      this._renderFrame(this.animationProps);

      this._clearNeedsRedraw();

      if (this.offScreen && this.gl.commit) {
        this.gl.commit();
      }

      if (this._resolveNextFrame) {
        this._resolveNextFrame(this);

        this._nextFramePromise = null;
        this._resolveNextFrame = null;
      }

      this._endTimers();

      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._running) {
        this._finalizeCallbackData();

        (0, _webgl.cancelAnimationFrame)(this._animationFrameId);
        this._nextFramePromise = null;
        this._resolveNextFrame = null;
        this._animationFrameId = null;
        this._running = false;
      }

      return this;
    }
  }, {
    key: "waitForRender",
    value: function waitForRender() {
      var _this2 = this;

      this.setNeedsRedraw('waitForRender');

      if (!this._nextFramePromise) {
        this._nextFramePromise = new Promise(function (resolve) {
          _this2._resolveNextFrame = resolve;
        });
      }

      return this._nextFramePromise;
    }
  }, {
    key: "toDataURL",
    value: function () {
      var _toDataURL = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setNeedsRedraw('toDataURL');
                _context.next = 3;
                return this.waitForRender();

              case 3:
                return _context.abrupt("return", this.gl.canvas.toDataURL());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toDataURL() {
        return _toDataURL.apply(this, arguments);
      }

      return toDataURL;
    }()
  }, {
    key: "onCreateContext",
    value: function onCreateContext() {
      var _this$props;

      return (_this$props = this.props).onCreateContext.apply(_this$props, arguments);
    }
  }, {
    key: "onInitialize",
    value: function onInitialize() {
      var _this$props2;

      return (_this$props2 = this.props).onInitialize.apply(_this$props2, arguments);
    }
  }, {
    key: "onRender",
    value: function onRender() {
      var _this$props3;

      return (_this$props3 = this.props).onRender.apply(_this$props3, arguments);
    }
  }, {
    key: "onFinalize",
    value: function onFinalize() {
      var _this$props4;

      return (_this$props4 = this.props).onFinalize.apply(_this$props4, arguments);
    }
  }, {
    key: "getHTMLControlValue",
    value: function getHTMLControlValue(id) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var element = document.getElementById(id);
      return element ? Number(element.value) : defaultValue;
    }
  }, {
    key: "setViewParameters",
    value: function setViewParameters() {
      _utils.log.removed('AnimationLoop.setViewParameters', 'AnimationLoop.setProps')();

      return this;
    }
  }, {
    key: "_startLoop",
    value: function _startLoop() {
      var _this3 = this;

      var renderFrame = function renderFrame() {
        if (!_this3._running) {
          return;
        }

        _this3.redraw();

        _this3._animationFrameId = _this3._requestAnimationFrame(renderFrame);
      };

      (0, _webgl.cancelAnimationFrame)(this._animationFrameId);
      this._animationFrameId = this._requestAnimationFrame(renderFrame);
    }
  }, {
    key: "_setDisplay",
    value: function _setDisplay(display) {
      if (this.display) {
        this.display["delete"]();
        this.display.animationLoop = null;
      }

      if (display) {
        display.animationLoop = this;
      }

      this.display = display;
    }
  }, {
    key: "_requestAnimationFrame",
    value: function _requestAnimationFrame(renderFrameCallback) {
      if (this.display && this.display.requestAnimationFrame(renderFrameCallback)) {
        return;
      }

      (0, _webgl.requestAnimationFrame)(renderFrameCallback);
    }
  }, {
    key: "_renderFrame",
    value: function _renderFrame() {
      if (this.display) {
        var _this$display;

        (_this$display = this.display)._renderFrame.apply(_this$display, arguments);

        return;
      }

      this.onRender.apply(this, arguments);
    }
  }, {
    key: "_clearNeedsRedraw",
    value: function _clearNeedsRedraw() {
      this.needsRedraw = null;
    }
  }, {
    key: "_setupFrame",
    value: function _setupFrame() {
      if (this._onSetupFrame) {
        this._onSetupFrame(this.animationProps);
      } else {
        this._resizeCanvasDrawingBuffer();

        this._resizeViewport();

        this._resizeFramebuffer();
      }
    }
  }, {
    key: "_initializeCallbackData",
    value: function _initializeCallbackData() {
      this.animationProps = {
        gl: this.gl,
        stop: this.stop,
        canvas: this.gl.canvas,
        framebuffer: this.framebuffer,
        useDevicePixels: this.useDevicePixels,
        needsRedraw: null,
        startTime: Date.now(),
        time: 0,
        tick: 0,
        tock: 0,
        _loop: this,
        _animationLoop: this,
        _mousePosition: null
      };
    }
  }, {
    key: "_updateCallbackData",
    value: function _updateCallbackData() {
      var _this$_getSizeAndAspe = this._getSizeAndAspect(),
          width = _this$_getSizeAndAspe.width,
          height = _this$_getSizeAndAspe.height,
          aspect = _this$_getSizeAndAspe.aspect;

      if (width !== this.animationProps.width || height !== this.animationProps.height) {
        this.setNeedsRedraw('drawing buffer resized');
      }

      if (aspect !== this.animationProps.aspect) {
        this.setNeedsRedraw('drawing buffer aspect changed');
      }

      this.animationProps.width = width;
      this.animationProps.height = height;
      this.animationProps.aspect = aspect;
      this.animationProps.needsRedraw = this.needsRedraw;
      this.animationProps.time = Date.now() - this.animationProps.startTime;
      this.animationProps.tick = Math.floor(this.animationProps.time / 1000 * 60);
      this.animationProps.tock++;
      this.animationProps._offScreen = this.offScreen;
    }
  }, {
    key: "_finalizeCallbackData",
    value: function _finalizeCallbackData() {
      this.onFinalize(this.animationProps);
    }
  }, {
    key: "_addCallbackData",
    value: function _addCallbackData(appContext) {
      if ((0, _typeof2["default"])(appContext) === 'object' && appContext !== null) {
        this.animationProps = Object.assign({}, this.animationProps, appContext);
      }
    }
  }, {
    key: "_createWebGLContext",
    value: function _createWebGLContext(opts) {
      this.offScreen = opts.canvas && typeof OffscreenCanvas !== 'undefined' && opts.canvas instanceof OffscreenCanvas;
      opts = Object.assign({}, opts, this.props.glOptions);
      this.gl = this.props.gl ? (0, _webgl.instrumentGLContext)(this.props.gl, opts) : this.onCreateContext(opts);

      if (!(0, _webgl.isWebGL)(this.gl)) {
        throw new Error('AnimationLoop.onCreateContext - illegal context returned');
      }

      (0, _webgl.resetParameters)(this.gl);

      this._createInfoDiv();
    }
  }, {
    key: "_createInfoDiv",
    value: function _createInfoDiv() {
      if (this.gl.canvas && this.props.onAddHTML) {
        var wrapperDiv = document.createElement('div');
        document.body.appendChild(wrapperDiv);
        wrapperDiv.style.position = 'relative';
        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = '10px';
        div.style.bottom = '10px';
        div.style.width = '300px';
        div.style.background = 'white';
        wrapperDiv.appendChild(this.gl.canvas);
        wrapperDiv.appendChild(div);
        var html = this.props.onAddHTML(div);

        if (html) {
          div.innerHTML = html;
        }
      }
    }
  }, {
    key: "_getSizeAndAspect",
    value: function _getSizeAndAspect() {
      var width = this.gl.drawingBufferWidth;
      var height = this.gl.drawingBufferHeight;
      var aspect = 1;
      var _this$gl$canvas = this.gl.canvas,
          clientWidth = _this$gl$canvas.clientWidth,
          clientHeight = _this$gl$canvas.clientHeight;

      if (clientWidth > 0 && clientHeight > 0) {
        aspect = clientWidth / clientHeight;
      } else if (width > 0 && height > 0) {
        aspect = width / height;
      }

      return {
        width: width,
        height: height,
        aspect: aspect
      };
    }
  }, {
    key: "_resizeViewport",
    value: function _resizeViewport() {
      if (this.autoResizeViewport) {
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
      }
    }
  }, {
    key: "_resizeCanvasDrawingBuffer",
    value: function _resizeCanvasDrawingBuffer() {
      if (this.autoResizeDrawingBuffer) {
        (0, _webgl.resizeGLContext)(this.gl, {
          useDevicePixels: this.useDevicePixels
        });
      }
    }
  }, {
    key: "_createFramebuffer",
    value: function _createFramebuffer() {
      if (this.props.createFramebuffer) {
        this.framebuffer = new _webgl.Framebuffer(this.gl);
      }
    }
  }, {
    key: "_resizeFramebuffer",
    value: function _resizeFramebuffer() {
      if (this.framebuffer) {
        this.framebuffer.resize({
          width: this.gl.drawingBufferWidth,
          height: this.gl.drawingBufferHeight
        });
      }
    }
  }, {
    key: "_beginTimers",
    value: function _beginTimers() {
      this.frameRate.timeEnd();
      this.frameRate.timeStart();

      if (this._gpuTimeQuery && this._gpuTimeQuery.isResultAvailable() && !this._gpuTimeQuery.isTimerDisjoint()) {
        this.stats.get('GPU Time').addTime(this._gpuTimeQuery.getTimerMilliseconds());
      }

      if (this._gpuTimeQuery) {
        this._gpuTimeQuery.beginTimeElapsedQuery();
      }

      this.cpuTime.timeStart();
    }
  }, {
    key: "_endTimers",
    value: function _endTimers() {
      this.cpuTime.timeEnd();

      if (this._gpuTimeQuery) {
        this._gpuTimeQuery.end();
      }
    }
  }, {
    key: "_startEventHandling",
    value: function _startEventHandling() {
      this.gl.canvas.addEventListener('mousemove', this._onMousemove);
      this.gl.canvas.addEventListener('mouseleave', this._onMouseleave);
    }
  }, {
    key: "_onMousemove",
    value: function _onMousemove(e) {
      this.animationProps._mousePosition = [e.offsetX, e.offsetY];
    }
  }, {
    key: "_onMouseleave",
    value: function _onMouseleave(e) {
      this.animationProps._mousePosition = null;
    }
  }]);
  return AnimationLoop;
}();

exports["default"] = AnimationLoop;
//# sourceMappingURL=animation-loop.js.map
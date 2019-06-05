"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var channelHandles = 0;
var animationHandles = 0;

var Timeline = function () {
  function Timeline() {
    (0, _classCallCheck2["default"])(this, Timeline);
    this.time = 0;
    this.channels = new Map();
    this.animations = new Map();
    this.playing = false;
    this.lastEngineTime = -1;
  }

  (0, _createClass2["default"])(Timeline, [{
    key: "addChannel",
    value: function addChannel(props) {
      var _props$delay = props.delay,
          delay = _props$delay === void 0 ? 0 : _props$delay,
          _props$duration = props.duration,
          duration = _props$duration === void 0 ? Number.POSITIVE_INFINITY : _props$duration,
          _props$rate = props.rate,
          rate = _props$rate === void 0 ? 1 : _props$rate,
          _props$repeat = props.repeat,
          repeat = _props$repeat === void 0 ? 1 : _props$repeat;
      var handle = channelHandles++;
      var channel = {
        time: 0,
        delay: delay,
        duration: duration,
        rate: rate,
        repeat: repeat
      };

      this._setChannelTime(channel, this.time);

      this.channels.set(handle, channel);
      return handle;
    }
  }, {
    key: "removeChannel",
    value: function removeChannel(handle) {
      this.channels["delete"](handle);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
              animationHandle = _step$value[0],
              animation = _step$value[1];

          if (animation.channel === handle) {
            this.detachAnimation(animationHandle);
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
    }
  }, {
    key: "getTime",
    value: function getTime(handle) {
      if (handle === undefined) {
        return this.time;
      }

      var channel = this.channels.get(handle);

      if (channel === undefined) {
        return -1;
      }

      return channel.time;
    }
  }, {
    key: "setTime",
    value: function setTime(time) {
      this.time = Math.max(0, time);
      var channels = this.channels.values();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = channels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var channel = _step2.value;

          this._setChannelTime(channel, this.time);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var animations = this.animations.values();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = animations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var animationData = _step3.value;
          var animation = animationData.animation,
              _channel = animationData.channel;
          animation.setTime(this.getTime(_channel));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.playing = true;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playing = false;
      this.lastEngineTime = -1;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setTime(0);
    }
  }, {
    key: "attachAnimation",
    value: function attachAnimation(animation, channelHandle) {
      var animationHandle = animationHandles++;
      this.animations.set(animationHandle, {
        animation: animation,
        channel: channelHandle
      });
      animation.setTime(this.getTime(channelHandle));
      return animationHandle;
    }
  }, {
    key: "detachAnimation",
    value: function detachAnimation(handle) {
      this.animations["delete"](handle);
    }
  }, {
    key: "update",
    value: function update(engineTime) {
      if (this.playing) {
        if (this.lastEngineTime === -1) {
          this.lastEngineTime = engineTime;
        }

        this.setTime(this.time + (engineTime - this.lastEngineTime));
        this.lastEngineTime = engineTime;
      }
    }
  }, {
    key: "_setChannelTime",
    value: function _setChannelTime(channel, time) {
      var offsetTime = time - channel.delay;
      var totalDuration = channel.duration * channel.repeat;

      if (offsetTime >= totalDuration) {
        channel.time = channel.duration * channel.rate;
      } else {
        channel.time = Math.max(0, offsetTime) % channel.duration;
        channel.time *= channel.rate;
      }
    }
  }]);
  return Timeline;
}();

exports.Timeline = Timeline;
//# sourceMappingURL=timeline.js.map
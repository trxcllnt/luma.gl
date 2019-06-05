import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
export var KeyFrames = function () {
  function KeyFrames(keyFrames) {
    _classCallCheck(this, KeyFrames);

    this._lastTime = -1;
    this.startIndex = -1;
    this.endIndex = -1;
    this.factor = 0;
    this.times = [];
    this.values = [];
    this.setKeyFrames(keyFrames);
    this.setTime(0);
  }

  _createClass(KeyFrames, [{
    key: "setKeyFrames",
    value: function setKeyFrames(keyFrames) {
      var numKeys = keyFrames.length;
      this.times.length = numKeys;
      this.values.length = numKeys;

      for (var i = 0; i < numKeys; ++i) {
        this.times[i] = keyFrames[i][0];
        this.values[i] = keyFrames[i][1];
      }

      this._calculateKeys(this._lastTime);
    }
  }, {
    key: "setTime",
    value: function setTime(time) {
      time = Math.max(0, time);

      if (time !== this._lastTime) {
        this._calculateKeys(time);

        this._lastTime = time;
      }
    }
  }, {
    key: "getStartTime",
    value: function getStartTime() {
      return this.times[this.startIndex];
    }
  }, {
    key: "getEndTime",
    value: function getEndTime() {
      return this.times[this.endIndex];
    }
  }, {
    key: "getStartData",
    value: function getStartData() {
      return this.values[this.startIndex];
    }
  }, {
    key: "getEndData",
    value: function getEndData() {
      return this.values[this.endIndex];
    }
  }, {
    key: "_calculateKeys",
    value: function _calculateKeys(time) {
      var index = 0;
      var numKeys = this.times.length;

      for (index = 0; index < numKeys - 2; ++index) {
        if (this.times[index + 1] > time) {
          break;
        }
      }

      this.startIndex = index;
      this.endIndex = index + 1;
      var startTime = this.times[this.startIndex];
      var endTime = this.times[this.endIndex];
      this.factor = Math.min(Math.max(0, (time - startTime) / (endTime - startTime)), 1);
    }
  }]);

  return KeyFrames;
}();
//# sourceMappingURL=key-frames.js.map
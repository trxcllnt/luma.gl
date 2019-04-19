import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _drawModel from './draw-model';

var DebugContext = function () {
  function DebugContext(sourceCanvas) {
    _classCallCheck(this, DebugContext);

    this.sourceCanvas = sourceCanvas;
    var container = sourceCanvas.offsetParent;
    var containerStyle = window.getComputedStyle(container);

    if (containerStyle.position === 'static') {
      container.style.position = 'relative';
    }

    this.canvas = this._createCanvas(container);
    this.context = this.canvas.getContext('2d');
    this._draw = this._draw.bind(this);
  }

  _createClass(DebugContext, [{
    key: "clear",
    value: function clear() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var canvas = this.canvas,
          context = this.context;
      var _this$sourceCanvas = this.sourceCanvas,
          width = _this$sourceCanvas.clientWidth,
          height = _this$sourceCanvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      context.clearRect(0, 0, width, height);

      for (var name in opts) {
        context[name] = opts[name];
      }
    }
  }, {
    key: "drawModel",
    value: function drawModel(model, opts) {
      _drawModel(Object.assign({}, opts, {
        model: model,
        draw: this._draw
      }));
    }
  }, {
    key: "_draw",
    value: function _draw(_ref) {
      var drawMode = _ref.drawMode,
          indices = _ref.indices,
          positions = _ref.positions,
          colors = _ref.colors;
      this.positions = positions.map(this._clipspaceToScreen, this);
      this.colors = colors.map(this._rgbaToColor, this);

      switch (drawMode) {
        case 0:
          {
            for (var i = 0; i < indices.length; i++) {
              this._drawPoint(indices[i]);
            }

            break;
          }

        case 1:
          {
            for (var _i = 0; _i < indices.length - 1; _i += 2) {
              this._drawLine(indices[_i], indices[_i] + 1);
            }

            break;
          }

        case 3:
          {
            for (var _i2 = 0; _i2 < indices.length - 1; _i2++) {
              this._drawLine(indices[_i2], indices[_i2 + 1]);
            }

            break;
          }

        case 2:
          {
            for (var _i3 = 0; _i3 < indices.length; _i3++) {
              this._drawLine(_i3 === 0 ? indices[indices.length - 1] : indices[_i3 - 1], indices[_i3]);
            }

            break;
          }

        case 4:
          {
            for (var _i4 = 0; _i4 < indices.length - 2; _i4 += 3) {
              this._drawTriangle(indices[_i4], indices[_i4 + 1], indices[_i4 + 2]);
            }

            break;
          }

        case 5:
          {
            for (var _i5 = 0; _i5 < indices.length - 2; _i5++) {
              this._drawTriangle(indices[_i5], indices[_i5 + 1], indices[_i5 + 2]);
            }

            break;
          }

        case 6:
          {
            for (var _i6 = 1; _i6 < indices.length - 1; _i6++) {
              this._drawTriangle(indices[0], indices[_i6], indices[_i6 + 1]);
            }

            break;
          }

        default:
          throw new Error('unknown draw mode');
      }
    }
  }, {
    key: "_createCanvas",
    value: function _createCanvas(container) {
      var canvas = document.createElement('canvas');
      container.append(canvas);
      Object.assign(canvas.style, {
        position: 'absolute',
        left: '0px',
        top: '0px',
        pointerEvents: 'none'
      });
      return canvas;
    }
  }, {
    key: "_clipspaceToScreen",
    value: function _clipspaceToScreen(position) {
      var _this$canvas = this.canvas,
          width = _this$canvas.width,
          height = _this$canvas.height;

      var _position = _slicedToArray(position, 4),
          x = _position[0],
          y = _position[1],
          z = _position[2],
          w = _position[3];

      var depth = z / w;

      if (depth < -1 || depth > 1) {
        return null;
      }

      return [(x / w + 1) * width / 2, (1 - y / w) * height / 2];
    }
  }, {
    key: "_rgbaToColor",
    value: function _rgbaToColor(color) {
      if (Array.isArray(color)) {
        var rgb = color.slice(0, 3).map(function (x) {
          return x * 255 | 0;
        });
        var a = Number.isFinite(color[3]) ? color[3] : 1;
        return "rgba(".concat(rgb.join(','), ",").concat(a.toFixed(2), ")");
      }

      return color;
    }
  }, {
    key: "_drawPoint",
    value: function _drawPoint(i) {
      var context = this.context,
          positions = this.positions,
          colors = this.colors;
      var p = positions[i];
      var color = colors[i];

      if (!p) {
        return;
      }

      if (color) {
        context.fillStyle = color;
      }

      context.fillRect(p[0] - 0.5, p[1] - 0.5, 1, 1);
    }
  }, {
    key: "_drawLine",
    value: function _drawLine(i0, i1) {
      var context = this.context,
          positions = this.positions,
          colors = this.colors;
      var p0 = positions[i0];
      var p1 = positions[i1];
      var color0 = colors[i0];
      var color1 = colors[i1];

      if (!p0 || !p1) {
        return;
      }

      context.beginPath();

      if (color0 !== color1) {
        var gradient = context.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
        gradient.addColorStop(0, color0);
        gradient.addColorStop(1, color1);
        context.strokeStyle = gradient;
      } else if (color0) {
        context.strokeStyle = color0;
      }

      context.moveTo(p0[0], p0[1]);
      context.lineTo(p1[0], p1[1]);
      context.stroke();
    }
  }, {
    key: "_drawTriangle",
    value: function _drawTriangle(i0, i1, i2) {
      this._drawLine(i0, i1);

      this._drawLine(i1, i2);

      this._drawLine(i2, i0);
    }
  }]);

  return DebugContext;
}();

export { DebugContext as default };
//# sourceMappingURL=debug-context.js.map
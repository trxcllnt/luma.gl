import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import drawModel from './draw-model';
export default class DebugContext {
  constructor(sourceCanvas) {
    this.sourceCanvas = sourceCanvas;
    const container = sourceCanvas.offsetParent;
    const containerStyle = window.getComputedStyle(container);

    if (containerStyle.position === 'static') {
      container.style.position = 'relative';
    }

    this.canvas = this._createCanvas(container);
    this.context = this.canvas.getContext('2d');
    this._draw = this._draw.bind(this);
  }

  clear() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const canvas = this.canvas,
          context = this.context;
    const _this$sourceCanvas = this.sourceCanvas,
          width = _this$sourceCanvas.clientWidth,
          height = _this$sourceCanvas.clientHeight;
    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);

    for (const name in opts) {
      context[name] = opts[name];
    }
  }

  drawModel(model, opts) {
    drawModel(Object.assign({}, opts, {
      model,
      draw: this._draw
    }));
  }

  _draw(_ref) {
    let drawMode = _ref.drawMode,
        indices = _ref.indices,
        positions = _ref.positions,
        colors = _ref.colors;
    this.positions = positions.map(this._clipspaceToScreen, this);
    this.colors = colors.map(this._rgbaToColor, this);

    switch (drawMode) {
      case 0:
        {
          for (let i = 0; i < indices.length; i++) {
            this._drawPoint(indices[i]);
          }

          break;
        }

      case 1:
        {
          for (let i = 0; i < indices.length - 1; i += 2) {
            this._drawLine(indices[i], indices[i] + 1);
          }

          break;
        }

      case 3:
        {
          for (let i = 0; i < indices.length - 1; i++) {
            this._drawLine(indices[i], indices[i + 1]);
          }

          break;
        }

      case 2:
        {
          for (let i = 0; i < indices.length; i++) {
            this._drawLine(i === 0 ? indices[indices.length - 1] : indices[i - 1], indices[i]);
          }

          break;
        }

      case 4:
        {
          for (let i = 0; i < indices.length - 2; i += 3) {
            this._drawTriangle(indices[i], indices[i + 1], indices[i + 2]);
          }

          break;
        }

      case 5:
        {
          for (let i = 0; i < indices.length - 2; i++) {
            this._drawTriangle(indices[i], indices[i + 1], indices[i + 2]);
          }

          break;
        }

      case 6:
        {
          for (let i = 1; i < indices.length - 1; i++) {
            this._drawTriangle(indices[0], indices[i], indices[i + 1]);
          }

          break;
        }

      default:
        throw new Error('unknown draw mode');
    }
  }

  _createCanvas(container) {
    const canvas = document.createElement('canvas');
    container.append(canvas);
    Object.assign(canvas.style, {
      position: 'absolute',
      left: '0px',
      top: '0px',
      pointerEvents: 'none'
    });
    return canvas;
  }

  _clipspaceToScreen(position) {
    const _this$canvas = this.canvas,
          width = _this$canvas.width,
          height = _this$canvas.height;

    const _position = _slicedToArray(position, 4),
          x = _position[0],
          y = _position[1],
          z = _position[2],
          w = _position[3];

    const depth = z / w;

    if (depth < -1 || depth > 1) {
      return null;
    }

    return [(x / w + 1) * width / 2, (1 - y / w) * height / 2];
  }

  _rgbaToColor(color) {
    if (Array.isArray(color)) {
      const rgb = color.slice(0, 3).map(x => x * 255 | 0);
      const a = Number.isFinite(color[3]) ? color[3] : 1;
      return "rgba(".concat(rgb.join(','), ",").concat(a.toFixed(2), ")");
    }

    return color;
  }

  _drawPoint(i) {
    const context = this.context,
          positions = this.positions,
          colors = this.colors;
    const p = positions[i];
    const color = colors[i];

    if (!p) {
      return;
    }

    if (color) {
      context.fillStyle = color;
    }

    context.fillRect(p[0] - 0.5, p[1] - 0.5, 1, 1);
  }

  _drawLine(i0, i1) {
    const context = this.context,
          positions = this.positions,
          colors = this.colors;
    const p0 = positions[i0];
    const p1 = positions[i1];
    const color0 = colors[i0];
    const color1 = colors[i1];

    if (!p0 || !p1) {
      return;
    }

    context.beginPath();

    if (color0 !== color1) {
      const gradient = context.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
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

  _drawTriangle(i0, i1, i2) {
    this._drawLine(i0, i1);

    this._drawLine(i1, i2);

    this._drawLine(i2, i0);
  }

}
//# sourceMappingURL=debug-context.js.map
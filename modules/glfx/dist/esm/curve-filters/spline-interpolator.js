import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var SplineInterpolator = function () {
  function SplineInterpolator(points) {
    _classCallCheck(this, SplineInterpolator);

    var n = points.length;
    this.xa = [];
    this.ya = [];
    this.u = [];
    this.y2 = [];
    points.sort(function (a, b) {
      return a[0] - b[0];
    });

    for (var i = 0; i < n; i++) {
      this.xa.push(points[i][0]);
      this.ya.push(points[i][1]);
    }

    this.u[0] = 0;
    this.y2[0] = 0;

    for (var _i = 1; _i < n - 1; ++_i) {
      var wx = this.xa[_i + 1] - this.xa[_i - 1];
      var sig = (this.xa[_i] - this.xa[_i - 1]) / wx;
      var p = sig * this.y2[_i - 1] + 2.0;
      this.y2[_i] = (sig - 1.0) / p;
      var ddydx = (this.ya[_i + 1] - this.ya[_i]) / (this.xa[_i + 1] - this.xa[_i]) - (this.ya[_i] - this.ya[_i - 1]) / (this.xa[_i] - this.xa[_i - 1]);
      this.u[_i] = (6.0 * ddydx / wx - sig * this.u[_i - 1]) / p;
    }

    this.y2[n - 1] = 0;

    for (var _i2 = n - 2; _i2 >= 0; --_i2) {
      this.y2[_i2] = this.y2[_i2] * this.y2[_i2 + 1] + this.u[_i2];
    }
  }

  _createClass(SplineInterpolator, [{
    key: "interpolate",
    value: function interpolate(x) {
      var n = this.ya.length;
      var klo = 0;
      var khi = n - 1;

      while (khi - klo > 1) {
        var k = khi + klo >> 1;

        if (this.xa[k] > x) {
          khi = k;
        } else {
          klo = k;
        }
      }

      var h = this.xa[khi] - this.xa[klo];
      var a = (this.xa[khi] - x) / h;
      var b = (x - this.xa[klo]) / h;
      return a * this.ya[klo] + b * this.ya[khi] + ((a * a * a - a) * this.y2[klo] + (b * b * b - b) * this.y2[khi]) * (h * h) / 6.0;
    }
  }]);

  return SplineInterpolator;
}();

export { SplineInterpolator as default };
//# sourceMappingURL=spline-interpolator.js.map
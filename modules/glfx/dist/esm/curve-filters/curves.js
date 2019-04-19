import SplineInterpolator from './spline-interpolator';
var fs = "uniform sampler2D red;\nuniform sampler2D green;\nuniform sampler2D blue;\n\nvec4 curves_filterColor(vec4 color) {\n  color.r = texture2D(red, vec2(color.r)).r;\n  color.g = texture2D(green, vec2(color.g)).g;\n  color.b = texture2D(blue, vec2(color.b)).b;\n  return color;\n}\n";
var uniforms = {
  map: {
    type: 'sampler2D'
  }
};
export default {
  name: 'curves',
  uniforms: uniforms,
  fs: fs,
  passes: [{
    filter: true
  }],
  getCurvesArray: getCurvesArray
};

var clamp = function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
};

export function splineInterpolate(points) {
  var interpolator = new SplineInterpolator(points);
  var array = [];

  for (var i = 0; i < 256; i++) {
    array.push(clamp(Math.floor(interpolator.interpolate(i / 255) * 256), 0, 55));
    array.push(clamp(Math.floor(interpolator.interpolate(i / 255) * 256), 0, 55));
  }

  return array;
}
export function getCurvesArray() {
  var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[0, 0], [1, 1]];
  var green = arguments.length > 1 ? arguments[1] : undefined;
  var blue = arguments.length > 2 ? arguments[2] : undefined;
  red = splineInterpolate(red);

  if (arguments.length === 1) {
    green = blue = red;
  } else {
    green = splineInterpolate(green);
    blue = splineInterpolate(blue);
  }

  var array = [];

  for (var i = 0; i < 256; i++) {
    array.splice(array.length, 0, red[i], green[i], blue[i], 255);
  }

  return new Uint8Array(array);
}
//# sourceMappingURL=curves.js.map
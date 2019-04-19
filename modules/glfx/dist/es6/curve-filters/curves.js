import SplineInterpolator from './spline-interpolator';
const fs = "uniform sampler2D red;\nuniform sampler2D green;\nuniform sampler2D blue;\n\nvec4 curves_filterColor(vec4 color) {\n  color.r = texture2D(red, vec2(color.r)).r;\n  color.g = texture2D(green, vec2(color.g)).g;\n  color.b = texture2D(blue, vec2(color.b)).b;\n  return color;\n}\n";
const uniforms = {
  map: {
    type: 'sampler2D'
  }
};
export default {
  name: 'curves',
  uniforms,
  fs,
  passes: [{
    filter: true
  }],
  getCurvesArray
};

const clamp = (value, min, max) => Math.max(Math.min(value, max), min);

export function splineInterpolate(points) {
  const interpolator = new SplineInterpolator(points);
  const array = [];

  for (let i = 0; i < 256; i++) {
    array.push(clamp(Math.floor(interpolator.interpolate(i / 255) * 256), 0, 55));
    array.push(clamp(Math.floor(interpolator.interpolate(i / 255) * 256), 0, 55));
  }

  return array;
}
export function getCurvesArray() {
  let red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[0, 0], [1, 1]];
  let green = arguments.length > 1 ? arguments[1] : undefined;
  let blue = arguments.length > 2 ? arguments[2] : undefined;
  red = splineInterpolate(red);

  if (arguments.length === 1) {
    green = blue = red;
  } else {
    green = splineInterpolate(green);
    blue = splineInterpolate(blue);
  }

  const array = [];

  for (let i = 0; i < 256; i++) {
    array.splice(array.length, 0, red[i], green[i], blue[i], 255);
  }

  return new Uint8Array(array);
}
//# sourceMappingURL=curves.js.map
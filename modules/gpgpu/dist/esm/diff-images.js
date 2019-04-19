var DEFAULT_THRESHOLD = 255 * 0.05;

var getY = function getY(r, g, b) {
  return r * 0.29889531 + g * 0.58662247 + b * 0.11448223;
};

var getI = function getI(r, g, b) {
  return r * 0.59597799 - g * 0.2741761 - b * 0.32180189;
};

var getQ = function getQ(r, g, b) {
  return r * 0.21147017 - g * 0.52261711 + b * 0.31114694;
};

var getESq = function getESq(dY, dI, dQ) {
  return 0.5053 * dY * dY + 0.299 * dI * dI + 0.1957 * dQ * dQ;
};

var applyAlpha = function applyAlpha(c, a) {
  return 255 + (c - 255) * a / 255;
};

export function colorDelta(img1, img2, index) {
  return Math.sqrt(colorDeltaSq(img1, img2, index));
}
export function colorDeltaSq(img1, img2, index) {
  var i = index * 4;
  var a1 = img1[i + 3];
  var a2 = img2[i + 3];
  var r1 = applyAlpha(img1[i + 0], a1);
  var g1 = applyAlpha(img1[i + 1], a1);
  var b1 = applyAlpha(img1[i + 2], a1);
  var r2 = applyAlpha(img2[i + 0], a2);
  var g2 = applyAlpha(img2[i + 1], a2);
  var b2 = applyAlpha(img2[i + 2], a2);
  return getESq(getY(r1, g1, b1) - getY(r2, g2, b2), getI(r1, g1, b1) - getI(r2, g2, b2), getQ(r1, g1, b1) - getQ(r2, g2, b2));
}
export function diffImagePixels(data1, data2) {
  var colorDeltaThreshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_THRESHOLD;
  var pixelCount = data1.data.length / 4;
  var maxDeltaSq = colorDeltaThreshold * colorDeltaThreshold;
  var badPixels = 0;

  for (var i = 0; i < pixelCount; i++) {
    var delta = colorDeltaSq(data1.data, data2.data, i);

    if (delta > maxDeltaSq) {
      badPixels++;
    }
  }

  var percentage = 1 - badPixels / pixelCount;
  return percentage;
}
//# sourceMappingURL=diff-images.js.map
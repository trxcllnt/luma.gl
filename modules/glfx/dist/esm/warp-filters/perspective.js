function perspective(before, after) {
  var a = getSquareToQuad(after);
  var b = getSquareToQuad(before);
  var c = multiply(getInverse(a), b);
  return this.matrixWarp(c);
}
//# sourceMappingURL=perspective.js.map
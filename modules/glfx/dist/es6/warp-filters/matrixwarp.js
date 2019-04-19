import warp from './warp';
const fs = "uniform mat3 matrix;\nuniform bool useTextureSpace;\n\nvec2 matrixWarp_warp(vec2 coord) {\n  if (useTextureSpace) {\n    coord = coord / texSize * 2.0 - 1.0;\n  }\n  vec3 warp = matrix * vec3(coord, 1.0);\n  coord = warp.xy / warp.z;\n  if (useTextureSpace) {\n    coord = (coord * 0.5 + 0.5) * texSize;\n  }\n  return coord;\n}\n";
const uniforms = {
  matrix: inverse ? getInverse(matrix) : matrix,
  useTextureSpace: false
};

function getMatrix(matrix, inverse, useTextureSpace) {
  matrix = Array.prototype.concat.apply([], matrix);

  if (matrix.length == 4) {
    matrix = [matrix[0], matrix[1], 0, matrix[2], matrix[3], 0, 0, 0, 1];
  } else if (matrix.length != 9) {
    throw 'can only warp with 2x2 or 3x3 matrix';
  }

  return this;
}

export default {
  name: 'matrixWarp',
  uniforms,
  fs,
  dependencies: [warp],
  passes: [{
    sampler: true
  }]
};
//# sourceMappingURL=matrixwarp.js.map
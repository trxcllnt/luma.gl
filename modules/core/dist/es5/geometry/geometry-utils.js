"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpackIndexedGeometry = unpackIndexedGeometry;

function unpackIndexedGeometry(geometry) {
  var indices = geometry.indices,
      attributes = geometry.attributes;

  if (!indices) {
    return geometry;
  }

  var POSITION = attributes.POSITION,
      NORMAL = attributes.NORMAL,
      TEXCOORD_0 = attributes.TEXCOORD_0;
  var unpackedPositions = new Float32Array(indices.length * 3);
  var unpackedNormals = new Float32Array(indices.length * 3);
  var unpackedTexCoords = new Float32Array(indices.length * 2);

  for (var x = 0; x < indices.length; ++x) {
    var index = indices[x];
    unpackedPositions[x * 3 + 0] = POSITION[index * 3 + 0];
    unpackedPositions[x * 3 + 1] = POSITION[index * 3 + 1];
    unpackedPositions[x * 3 + 2] = POSITION[index * 3 + 2];
    unpackedNormals[x * 3 + 0] = NORMAL[index * 3 + 0];
    unpackedNormals[x * 3 + 1] = NORMAL[index * 3 + 1];
    unpackedNormals[x * 3 + 2] = NORMAL[index * 3 + 2];
    unpackedTexCoords[x * 2 + 0] = TEXCOORD_0[index * 2 + 0];
    unpackedTexCoords[x * 2 + 1] = TEXCOORD_0[index * 2 + 1];
  }

  return {
    attributes: {
      POSITION: unpackedPositions,
      NORMAL: unpackedNormals,
      TEXCOORD_0: unpackedTexCoords
    }
  };
}
//# sourceMappingURL=geometry-utils.js.map
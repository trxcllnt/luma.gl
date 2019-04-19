"use strict";module.export({default:()=>Geometry});module.export({DRAW_MODE:()=>DRAW_MODE},true);var uid,assert;module.link('../utils',{uid(v){uid=v},assert(v){assert=v}},0);

// Rendering primitives - specify how to extract primitives from vertices.
// NOTE: These are numerically identical to the corresponding WebGL/OpenGL constants
const DRAW_MODE = {
  POINTS: 0x0000, // draw single points.
  LINES: 0x0001, // draw lines. Each vertex connects to the one after it.
  LINE_LOOP: 0x0002, // draw lines. Each set of two vertices is treated as a separate line segment.
  LINE_STRIP: 0x0003, // draw a connected group of line segments from the first vertex to the last
  TRIANGLES: 0x0004, // draw triangles. Each set of three vertices creates a separate triangle.
  TRIANGLE_STRIP: 0x0005, // draw a connected group of triangles.
  TRIANGLE_FAN: 0x0006 // draw a connected group of triangles.
  // Each vertex connects to the previous and the first vertex in the fan.
};

class Geometry {
  static get DRAW_MODE() {
    return DRAW_MODE;
  }

  constructor(props = {}) {
    const {
      id = uid('geometry'),
      drawMode = DRAW_MODE.TRIANGLES,
      mode,
      attributes = {},
      indices = null,
      vertexCount = null
    } = props;

    this.id = id;
    this.drawMode = drawMode | 0 || mode | 0;
    this.attributes = {};
    this.userData = {};

    this._setAttributes(attributes, indices);

    this.vertexCount = vertexCount || this._calculateVertexCount(this.attributes, this.indices);

    // stubRemovedMethods(this, [
    //   'setNeedsRedraw', 'needsRedraw', 'setAttributes'
    // ], 'Immutable');

    // stubRemovedMethods(this, [
    //   'hasAttribute', 'getAttribute', 'getArray'
    // ], 'Use geometry.attributes and geometry.indices');

    // deprecateMethods(this, ['getAttributes'])
  }

  get mode() {
    return this.drawMode;
  }

  getVertexCount() {
    return this.vertexCount;
  }

  // Return an object with all attributes plus indices added as a field.
  getAttributes() {
    return this.indices ? {indices: this.indices, ...this.attributes} : this.attributes;
  }

  // PRIVATE

  _print(attributeName) {
    return `Geometry ${this.id} attribute ${attributeName}`;
  }

  // Attribute
  // value: typed array
  // type: indices, vertices, uvs
  // size: elements per vertex
  // target: WebGL buffer type (string or constant)
  _setAttributes(attributes, indices) {
    if (indices) {
      this.indices = ArrayBuffer.isView(indices) ? {value: indices, size: 1} : indices;
    }

    for (const attributeName in attributes) {
      let attribute = attributes[attributeName];

      // Wrap "unwrapped" arrays and try to autodetect their type
      attribute = ArrayBuffer.isView(attribute) ? {value: attribute} : attribute;

      assert(
        ArrayBuffer.isView(attribute.value),
        `${this._print(attributeName)}: must be typed array or object with value as typed array`
      );

      // Move indices to separate field
      if (attributeName === 'indices') {
        assert(!this.indices);
        this.indices = attribute;
        if (this.indices.isIndexed !== undefined) {
          this.indices = Object.assign({}, this.indices);
          delete this.indices.isIndexed;
        }
      } else {
        this.attributes[attributeName] = attribute;
      }
    }
    return this;
  }

  _calculateVertexCount(attributes, indices) {
    if (indices) {
      return indices.value.length;
    }
    let vertexCount = Infinity;
    for (const attributeName in attributes) {
      const attribute = attributes[attributeName];
      const {value, size, constant} = attribute;
      if (!constant && value && size >= 1) {
        vertexCount = Math.min(vertexCount, value.length / size);
      }
    }

    // TODO - Magic, should this be removed?
    if (!Number.isFinite(vertexCount)) {
      const attribute = attributes.POSITION || attributes.positions;
      if (attribute) {
        vertexCount = attribute.value && attribute.value.length / (attribute.size || 3);
      }
    }

    assert(Number.isFinite(vertexCount));
    return vertexCount;
  }
}
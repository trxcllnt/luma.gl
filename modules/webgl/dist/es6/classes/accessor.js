import { getTypedArrayFromGLType } from '../webgl-utils';
import { checkProps, assert } from '../utils';
const DEFAULT_ACCESSOR_VALUES = {
  offset: 0,
  stride: 0,
  type: 5126,
  size: 1,
  divisor: 0,
  normalized: false,
  integer: false
};
const PROP_CHECKS = {
  deprecatedProps: {
    instanced: 'divisor',
    isInstanced: 'divisor'
  }
};
export default class Accessor {
  static getBytesPerElement(accessor) {
    const ArrayType = getTypedArrayFromGLType(accessor.type || 5126);
    return ArrayType.BYTES_PER_ELEMENT;
  }

  static getBytesPerVertex(accessor) {
    assert(accessor.size);
    const ArrayType = getTypedArrayFromGLType(accessor.type || 5126);
    return ArrayType.BYTES_PER_ELEMENT * accessor.size;
  }

  static resolve() {
    for (var _len = arguments.length, accessors = new Array(_len), _key = 0; _key < _len; _key++) {
      accessors[_key] = arguments[_key];
    }

    return new Accessor(...[DEFAULT_ACCESSOR_VALUES, ...accessors]);
  }

  constructor() {
    for (var _len2 = arguments.length, accessors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      accessors[_key2] = arguments[_key2];
    }

    accessors.forEach(accessor => this._assign(accessor));
    Object.freeze(this);
  }

  toString() {
    return JSON.stringify(this);
  }

  get BYTES_PER_ELEMENT() {
    return Accessor.getBytesPerElement(this);
  }

  get BYTES_PER_VERTEX() {
    return Accessor.getBytesPerVertex(this);
  }

  _assign() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    props = checkProps('Accessor', props, PROP_CHECKS);

    if (props.type !== undefined) {
      this.type = props.type;

      if (props.type === 5124 || props.type === 5125) {
        this.integer = true;
      }
    }

    if (props.size !== undefined) {
      this.size = props.size;
    }

    if (props.offset !== undefined) {
      this.offset = props.offset;
    }

    if (props.stride !== undefined) {
      this.stride = props.stride;
    }

    if (props.normalized !== undefined) {
      this.normalized = props.normalized;
    }

    if (props.integer !== undefined) {
      this.integer = props.integer;
    }

    if (props.divisor !== undefined) {
      this.divisor = props.divisor;
    }

    if (props.buffer !== undefined) {
      this.buffer = props.buffer;
    }

    if (props.index !== undefined) {
      if (typeof index === 'boolean') {
        this.index = props.index ? 1 : 0;
      } else {
        this.index = props.index;
      }
    }

    if (props.instanced !== undefined) {
      this.divisor = props.instanced ? 1 : 0;
    }

    if (props.isInstanced !== undefined) {
      this.divisor = props.isInstanced ? 1 : 0;
    }

    return this;
  }

}
export { DEFAULT_ACCESSOR_VALUES };
//# sourceMappingURL=accessor.js.map
import Texture from './texture';
import { assertWebGLContext } from '../webgl-utils';
import { loadImage } from '../utils/load-file';
export default class Texture2D extends Texture {
  static isSupported(gl, opts) {
    return Texture.isSupported(gl, opts);
  }

  constructor(gl) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    assertWebGLContext(gl);

    if (props instanceof Promise || typeof props === 'string') {
      props = {
        data: props
      };
    }

    if (typeof props.data === 'string') {
      props = Object.assign({}, props, {
        data: loadImage(props.data)
      });
    }

    super(gl, Object.assign({}, props, {
      target: 3553
    }));
    this.initialize(props);
    Object.seal(this);
  }

}
//# sourceMappingURL=texture-2d.js.map
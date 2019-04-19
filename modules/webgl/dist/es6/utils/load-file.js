import { assert } from '../utils';
let pathPrefix = '';
export function setPathPrefix(prefix) {
  pathPrefix = prefix;
}
export function loadFile(url) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  assert(typeof url === 'string');
  url = pathPrefix + url;
  const dataType = options.dataType || 'text';
  return fetch(url, options).then(res => res[dataType]());
}
export function loadImage(url, opts) {
  assert(typeof url === 'string');
  url = pathPrefix + url;
  return new Promise((resolve, reject) => {
    try {
      const image = new Image();

      image.onload = () => resolve(image);

      image.onerror = () => reject(new Error("Could not load image ".concat(url, ".")));

      image.crossOrigin = opts && opts.crossOrigin || 'anonymous';
      image.src = url;
    } catch (error) {
      reject(error);
    }
  });
}
//# sourceMappingURL=load-file.js.map
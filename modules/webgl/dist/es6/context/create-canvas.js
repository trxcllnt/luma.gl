import { isBrowser } from '../utils';
const isPage = isBrowser && typeof document !== 'undefined';
let isPageLoaded = isPage && document.readyState === 'complete';
let pageLoadPromise;
export function getPageLoadPromise() {
  if (!pageLoadPromise) {
    pageLoadPromise = isPage ? new Promise((resolve, reject) => {
      if (isPage && document.readyState === 'complete') {
        isPageLoaded = true;
        resolve(document);
        return;
      }

      window.onload = () => {
        isPageLoaded = true;
        resolve(document);
      };
    }) : Promise.resolve({});
  }

  return pageLoadPromise;
}
export function createCanvas(_ref) {
  let _ref$width = _ref.width,
      width = _ref$width === void 0 ? 800 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 600 : _ref$height,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'gl-canvas' : _ref$id,
      _ref$insert = _ref.insert,
      insert = _ref$insert === void 0 ? true : _ref$insert;
  const canvas = document.createElement('canvas');
  canvas.id = id;
  canvas.style.width = Number.isFinite(width) ? "".concat(width, "px") : '100%';
  canvas.style.height = Number.isFinite(height) ? "".concat(height, "px") : '100%';

  if (insert) {
    const body = document.body;
    body.insertBefore(canvas, body.firstChild);
  }

  return canvas;
}
export function getCanvas(_ref2) {
  let canvas = _ref2.canvas,
      width = _ref2.width,
      height = _ref2.height,
      _ref2$onError = _ref2.onError,
      onError = _ref2$onError === void 0 ? () => {} : _ref2$onError;
  let targetCanvas;

  if (typeof canvas === 'string') {
    if (!isPageLoaded) {
      onError("createGLContext called on canvas '".concat(canvas, "' before page was loaded"));
    }

    targetCanvas = document.getElementById(canvas);
  } else if (canvas) {
    targetCanvas = canvas;
  } else {
    targetCanvas = createCanvas({
      id: 'lumagl-canvas',
      width,
      height,
      onError
    });
  }

  return targetCanvas;
}
//# sourceMappingURL=create-canvas.js.map
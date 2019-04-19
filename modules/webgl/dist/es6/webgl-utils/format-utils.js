import { assert } from '../utils';
export function glFormatToComponents(format) {
  switch (format) {
    case 6406:
    case 33326:
    case 6403:
      return 1;

    case 33328:
    case 33319:
      return 2;

    case 6407:
    case 34837:
      return 3;

    case 6408:
    case 34836:
      return 4;

    default:
      assert(false);
      return 0;
  }
}
export function glTypeToBytes(type) {
  switch (type) {
    case 5121:
      return 1;

    case 33635:
    case 32819:
    case 32820:
      return 2;

    case 5126:
      return 4;

    default:
      assert(false);
      return 0;
  }
}
//# sourceMappingURL=format-utils.js.map
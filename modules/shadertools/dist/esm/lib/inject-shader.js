import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _MODULE_INJECTORS;

import { MODULE_INJECTORS_VS, MODULE_INJECTORS_FS } from '../modules/module-injectors';
import { VERTEX_SHADER, FRAGMENT_SHADER } from './constants';
import { assert } from '../utils';
var MODULE_INJECTORS = (_MODULE_INJECTORS = {}, _defineProperty(_MODULE_INJECTORS, VERTEX_SHADER, MODULE_INJECTORS_VS), _defineProperty(_MODULE_INJECTORS, FRAGMENT_SHADER, MODULE_INJECTORS_FS), _MODULE_INJECTORS);
var REGEX_START_OF_MAIN = /void main\s*\([^)]*\)\s*\{\n?/;
var REGEX_END_OF_MAIN = /}\n?[^{}]*$/;
export default function injectShader(source, type, inject, injectStandardStubs) {
  var isVertex = type === VERTEX_SHADER;

  var _loop = function _loop(key) {
    var fragment = inject[key];

    switch (key) {
      case 'vs:#decl':
        if (isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, function (match) {
            return "".concat(fragment, "\n").concat(match);
          });
        }

        break;

      case 'vs:#main-start':
        if (isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, function (match) {
            return match + fragment;
          });
        }

        break;

      case 'vs:#main-end':
        if (isVertex) {
          source = source.replace(REGEX_END_OF_MAIN, function (match) {
            return fragment + match;
          });
        }

        break;

      case 'fs:#decl':
        if (!isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, function (match) {
            return "".concat(fragment, "\n").concat(match);
          });
        }

        break;

      case 'fs:#main-start':
        if (!isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, function (match) {
            return match + fragment;
          });
        }

        break;

      case 'fs:#main-end':
        if (!isVertex) {
          source = source.replace(REGEX_END_OF_MAIN, function (match) {
            return fragment + match;
          });
        }

        break;

      default:
        source = source.replace(key, function (match) {
          return match + fragment;
        });
    }
  };

  for (var key in inject) {
    _loop(key);
  }

  if (injectStandardStubs) {
    source = source.replace('}s*$', function (match) {
      return match + MODULE_INJECTORS[type];
    });
  }

  return source;
}
export function combineInjects(injects) {
  var result = {};
  assert(Array.isArray(injects) && injects.length > 1);
  injects.forEach(function (inject) {
    for (var key in inject) {
      result[key] = result[key] ? "".concat(result[key], "\n").concat(inject[key]) : inject[key];
    }
  });
  return result;
}
//# sourceMappingURL=inject-shader.js.map
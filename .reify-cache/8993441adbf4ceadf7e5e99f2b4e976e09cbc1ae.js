"use strict";var module1=module;module1.export({default:()=>injectShader,combineInjects:()=>combineInjects});var MODULE_INJECTORS_VS,MODULE_INJECTORS_FS;module1.link('../modules/module-injectors',{MODULE_INJECTORS_VS(v){MODULE_INJECTORS_VS=v},MODULE_INJECTORS_FS(v){MODULE_INJECTORS_FS=v}},0);var VERTEX_SHADER,FRAGMENT_SHADER;module1.link('./constants',{VERTEX_SHADER(v){VERTEX_SHADER=v},FRAGMENT_SHADER(v){FRAGMENT_SHADER=v}},1);var assert;module1.link('../utils',{assert(v){assert=v}},2);



// TODO - experimental
const MODULE_INJECTORS = {
  [VERTEX_SHADER]: MODULE_INJECTORS_VS,
  [FRAGMENT_SHADER]: MODULE_INJECTORS_FS
};

const REGEX_START_OF_MAIN = /void main\s*\([^)]*\)\s*\{\n?/; // Beginning of main
const REGEX_END_OF_MAIN = /}\n?[^{}]*$/; // End of main, assumes main is last function

// A minimal shader injection/templating system.
// RFC: https://github.com/uber/luma.gl/blob/master/dev-docs/RFCs/v6.0/shader-injection-rfc.md
/* eslint-disable complexity */
function injectShader(source, type, inject, injectStandardStubs) {
  const isVertex = type === VERTEX_SHADER;

  for (const key in inject) {
    const fragment = inject[key];
    switch (key) {
      // declarations are injected before the main function
      case 'vs:#decl':
        if (isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => `${fragment}\n${match}`);
        }
        break;
      // main code is injected at the end of main function
      case 'vs:#main-start':
        if (isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => match + fragment);
        }
        break;
      case 'vs:#main-end':
        if (isVertex) {
          source = source.replace(REGEX_END_OF_MAIN, match => fragment + match);
        }
        break;
      case 'fs:#decl':
        if (!isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => `${fragment}\n${match}`);
        }
        break;
      case 'fs:#main-start':
        if (!isVertex) {
          source = source.replace(REGEX_START_OF_MAIN, match => match + fragment);
        }
        break;
      case 'fs:#main-end':
        if (!isVertex) {
          source = source.replace(REGEX_END_OF_MAIN, match => fragment + match);
        }
        break;
      default:
        // inject code after key, leaving key in place
        source = source.replace(key, match => match + fragment);
    }
  }

  // Finally, if requested, insert an automatic module injector chunk
  if (injectStandardStubs) {
    source = source.replace('}s*$', match => match + MODULE_INJECTORS[type]);
  }

  return source;
}
/* eslint-enable complexity */

// Takes an array of inject objects and combines them into one
function combineInjects(injects) {
  const result = {};
  assert(Array.isArray(injects) && injects.length > 1);
  injects.forEach(inject => {
    for (const key in inject) {
      result[key] = result[key] ? `${result[key]}\n${inject[key]}` : inject[key];
    }
  });
  return result;
}

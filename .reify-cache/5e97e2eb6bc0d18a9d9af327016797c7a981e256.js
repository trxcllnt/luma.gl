"use strict";module.export({isObjectEmpty:()=>isObjectEmpty,isWebGL2:()=>isWebGL2});// Returns true if given object is empty, false otherwise.
function isObjectEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

// Returns true if WebGL2 context (Heuristic)
function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

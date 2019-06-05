"use strict";module.export({default:()=>assert});// Recommendation is to ignore message but current test suite checks agains the
// message so keep it for now.
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'luma.gl: assertion failed.');
  }
}

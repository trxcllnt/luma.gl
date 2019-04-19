"use strict";var module1=module;module1.export({default:()=>assert});// Avoid bundling assert polyfill module
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'luma.gl: assertion failed.');
  }
}

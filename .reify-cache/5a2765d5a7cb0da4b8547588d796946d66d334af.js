"use strict";module.export({requestAnimationFrame:()=>requestAnimationFrame,cancelAnimationFrame:()=>cancelAnimationFrame});// Node.js polyfills for requestAnimationFrame and cancelAnimationFrame
/* global window, setTimeout, clearTimeout */

function requestAnimationFrame(callback) {
  return typeof window !== 'undefined' && window.requestAnimationFrame
    ? window.requestAnimationFrame(callback)
    : setTimeout(callback, 1000 / 60);
}

function cancelAnimationFrame(timerId) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame
    ? window.cancelAnimationFrame(timerId)
    : clearTimeout(timerId);
}

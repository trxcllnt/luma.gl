"use strict";module.export({setPathPrefix:()=>setPathPrefix,loadFile:()=>loadFile,loadImage:()=>loadImage});var assert;module.link('../utils',{assert(v){assert=v}},0);/* global fetch, Image */


let pathPrefix = '';

/*
 * Set a relative path prefix
 */
function setPathPrefix(prefix) {
  pathPrefix = prefix;
}

// Reads raw file data from:
function loadFile(url, options = {}) {
  assert(typeof url === 'string');
  url = pathPrefix + url;
  const dataType = options.dataType || 'text';
  return fetch(url, options).then(res => res[dataType]());
}

/*
 * Loads images asynchronously
 * image.crossOrigin can be set via opts.crossOrigin, default to 'anonymous'
 * returns a promise tracking the load
 */
function loadImage(url, opts) {
  assert(typeof url === 'string');
  url = pathPrefix + url;
  return new Promise((resolve, reject) => {
    try {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Could not load image ${url}.`));
      image.crossOrigin = (opts && opts.crossOrigin) || 'anonymous';
      image.src = url;
    } catch (error) {
      reject(error);
    }
  });
}

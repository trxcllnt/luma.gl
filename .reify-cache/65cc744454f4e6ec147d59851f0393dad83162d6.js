"use strict";module.export({isBrowserMainThread:()=>isBrowserMainThread},true);var isElectron;module.link('./is-electron',{default(v){isElectron=v}},0);// This function is needed in initialization stages,
// make sure it can be imported in isolation
/* global process */



const isNode =
  typeof process === 'object' && String(process) === '[object process]' && !process.browser;

const isBrowser = !isNode || isElectron;

// document does not exist on worker thread
const isBrowserMainThread = isBrowser && typeof document !== 'undefined';

module.exportDefault(isBrowser);

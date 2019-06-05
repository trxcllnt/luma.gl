"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var addEvents;module.link('@luma.gl/addons',{addEvents(v){addEvents=v}},1);


test('@luma.gl/addons#addEvents', t => {
  t.equal(typeof addEvents, 'function', 'addEvents is an object');
  t.end();
});

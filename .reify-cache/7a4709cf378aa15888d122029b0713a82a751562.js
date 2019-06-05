"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var main;module.link('luma.gl',{"*"(v){main=v}},1);var core;module.link('@luma.gl/core',{"*"(v){core=v}},2);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},3);





// Check that specific imports still work

test('luma.gl/constants (DEPRECATED)', t => {
  t.comment('Intentionally triggering deprecation warning!');
  const GL_DEPRECATED = require('luma.gl/constants');
  t.equal(GL_DEPRECATED, GL, 'luma.gl/constants still correctly importing constants');
  t.end();
});

test('luma.gl#core exports', t => {
  for (const exportedKey in core) {
    t.ok(
      main[exportedKey] === core[exportedKey],
      `${exportedKey} is reexported properly by luma.gl`
    );
  }
  t.end();
});

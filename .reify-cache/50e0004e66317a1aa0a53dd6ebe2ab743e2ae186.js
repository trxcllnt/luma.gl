"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},1);var Accessor;module.link('@luma.gl/webgl',{Accessor(v){Accessor=v}},2);var DEFAULT_ACCESSOR_VALUES;module.link('@luma.gl/webgl/classes/accessor',{DEFAULT_ACCESSOR_VALUES(v){DEFAULT_ACCESSOR_VALUES=v}},3);




const TEST_CASES_FOR_CONSTRUCTOR = [
  {
    accessors: [{divisor: 1}],
    result: {divisor: 1}
  },
  {
    accessors: [{divisor: 1}, {divisor: 0}],
    result: {divisor: 0}
  }
];

const TEST_CASES_FOR_RESOLVE = [
  {
    accessors: [{size: 2, type: GL.FLOAT}, {divisor: 1}],
    result: Object.assign({}, DEFAULT_ACCESSOR_VALUES, {
      size: 2,
      type: GL.FLOAT,
      divisor: 1
    })
  }
];

test('Accessor#import', t => {
  t.ok(Accessor, 'Accessor import successful');
  t.end();
});

test('Accessor#construct', t => {
  for (const tc of TEST_CASES_FOR_CONSTRUCTOR) {
    const accessor = new Accessor(...tc.accessors);
    t.deepEquals(accessor, tc.result, 'Accessor constructed correctly');
  }

  t.end();
});

test('Accessor#resolve', t => {
  for (const tc of TEST_CASES_FOR_RESOLVE) {
    const accessor = Accessor.resolve(...tc.accessors);
    t.deepEquals(accessor, tc.result, 'Accessor resolved correctly');
  }

  t.end();
});

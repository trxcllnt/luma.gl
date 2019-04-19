"use strict";var _AnimationLoopProxy;module.link('@luma.gl/core',{_AnimationLoopProxy(v){_AnimationLoopProxy=v}},0);var test;module.link('tape-catch',{default(v){test=v}},1);

// import {fixture} from 'test/setup';

test('core#AnimationLoopProxy', t => {
  // const {gl} = fixture;
  t.ok(_AnimationLoopProxy);

  // const animationLoop = new _AnimationLoopProxy(gl).start().stop();
  // animationLoop.delete();
  t.end();
});

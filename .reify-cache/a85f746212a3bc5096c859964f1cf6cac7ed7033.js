"use strict";module.export({fp64ify:()=>fp64ify,fp64LowPart:()=>fp64LowPart,fp64ifyMatrix4:()=>fp64ifyMatrix4});module.export({fp64arithmetic:()=>fp64arithmetic,fp64fs:()=>fp64fs},true);var fp64ify,fp64LowPart,fp64ifyMatrix4;module.link('./fp64-utils',{fp64ify(v){fp64ify=v},fp64LowPart(v){fp64LowPart=v},fp64ifyMatrix4(v){fp64ifyMatrix4=v}},0);var fp64arithmeticShader;module.link('./fp64-arithmetic.glsl',{default(v){fp64arithmeticShader=v}},1);var fp64functionShader;module.link('./fp64-functions.glsl',{default(v){fp64functionShader=v}},2);// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.






const fp64shader = `${fp64arithmeticShader}\n${fp64functionShader}`;
const CONST_UNIFORMS = {
  // Used in LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  ONE: 1.0
};


function getUniforms() {
  return Object.assign({}, CONST_UNIFORMS);
}

module.exportDefault({
  name: 'fp64',
  vs: fp64shader,
  fs: null,
  fp64ify,
  fp64LowPart,
  fp64ifyMatrix4,
  getUniforms
});

// Arithmetic only
const fp64arithmetic = {
  name: 'fp64-arithmetic',
  vs: `${fp64arithmeticShader}`,
  fs: null
};

// Fragment shader fp64
const fp64fs = {
  name: 'fp64-fs',
  vs: null,
  fs: fp64shader
};

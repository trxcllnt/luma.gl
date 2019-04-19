"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var setParameters,getParameter,getParameters,resetParameters;module.link('@luma.gl/webgl-state-tracker',{setParameters(v){setParameters=v},getParameter(v){getParameter=v},getParameters(v){getParameters=v},resetParameters(v){resetParameters=v}},1);var GL;module.link('@luma.gl/constants',{default(v){GL=v}},2);var Framebuffer,getKey;module.link('@luma.gl/core',{Framebuffer(v){Framebuffer=v},getKey(v){getKey=v}},3);var createTestContext;module.link('test/setup',{createTestContext(v){createTestContext=v}},4);var GL_PARAMETER_DEFAULTS;module.link('@luma.gl/webgl-state-tracker/unified-parameter-api/webgl-parameter-tables',{GL_PARAMETER_DEFAULTS(v){GL_PARAMETER_DEFAULTS=v}},5);var ENUM_STYLE_SETTINGS_SET1_PRIMITIVE;module.link('../data/sample-enum-settings',{ENUM_STYLE_SETTINGS_SET1_PRIMITIVE(v){ENUM_STYLE_SETTINGS_SET1_PRIMITIVE=v}},6);
















// Settings test, don't reuse a context
const fixture = {
  gl: createTestContext({debug: true}),
  gl2: createTestContext({debug: true, webgl2: true, webgl1: false})
};

function stringifyTypedArray(v) {
  v = ArrayBuffer.isView(v) ? Array.apply([], v) : v;
  return JSON.stringify(v);
}

test('WebGL#set and get', t => {
  const {gl} = fixture;
  const values = {
    [GL.CULL_FACE]: true
  };
  resetParameters(gl);

  let value = getParameter(gl, GL.CULL_FACE);
  t.deepEqual(value, false, `got expected value ${stringifyTypedArray(value)}`);
  setParameters(gl, values, {});
  value = getParameter(gl, GL.CULL_FACE);
  t.deepEqual(value, true, `got expected value ${stringifyTypedArray(value)}`);

  t.end();
});

test('WebGL#composite setter', t => {
  const {gl} = fixture;
  const compositeStateKeys = [GL.STENCIL_FUNC, GL.STENCIL_REF, GL.STENCIL_VALUE_MASK];
  const partialCompositeStateValues = {
    [GL.STENCIL_FUNC]: GL.NEVER,
    [GL.STENCIL_REF]: 0.5
  };

  resetParameters(gl);

  // Verify default values.
  for (const key of compositeStateKeys) {
    const value = getParameter(gl, key);
    t.deepEqual(
      value,
      GL_PARAMETER_DEFAULTS[key],
      `got expected default value ${stringifyTypedArray(value)}`
    );
  }

  // Update only two states out of three.
  setParameters(gl, partialCompositeStateValues, GL_PARAMETER_DEFAULTS);

  let value = getParameter(gl, GL.STENCIL_FUNC);
  t.deepEqual(
    value,
    partialCompositeStateValues[GL.STENCIL_FUNC],
    `got expected updated value ${stringifyTypedArray(value)}`
  );
  value = getParameter(gl, GL.STENCIL_REF);
  t.deepEqual(
    value,
    partialCompositeStateValues[GL.STENCIL_REF],
    `got expected updated value ${stringifyTypedArray(value)}`
  );
  value = getParameter(gl, GL.STENCIL_VALUE_MASK);
  t.deepEqual(
    value,
    GL_PARAMETER_DEFAULTS[GL.STENCIL_VALUE_MASK],
    `got expected updated defuault value ${stringifyTypedArray(value)}`
  );

  t.end();
});

test('WebGLState#get all parameters', t => {
  const {gl} = fixture;

  resetParameters(gl);

  // Set custom values.
  setParameters(gl, ENUM_STYLE_SETTINGS_SET1_PRIMITIVE, {});
  for (const key in ENUM_STYLE_SETTINGS_SET1_PRIMITIVE) {
    const value = getParameter(gl, key);
    t.deepEqual(
      value,
      ENUM_STYLE_SETTINGS_SET1_PRIMITIVE[key],
      `got expected value ${stringifyTypedArray(value)} after setParameters for ${getKey(GL, key)}`
    );
  }

  const copy = getParameters(gl);
  for (const key in ENUM_STYLE_SETTINGS_SET1_PRIMITIVE) {
    const value = copy[key];
    t.deepEqual(
      value,
      ENUM_STYLE_SETTINGS_SET1_PRIMITIVE[key],
      `got expected value ${stringifyTypedArray(value)} after getParameters for ${getKey(GL, key)}`
    );
  }

  t.end();
});

test('WebGL#reset', t => {
  const {gl} = fixture;

  // Set custom values and verify.
  setParameters(gl, ENUM_STYLE_SETTINGS_SET1_PRIMITIVE);
  for (const key in ENUM_STYLE_SETTINGS_SET1_PRIMITIVE) {
    const value = getParameter(gl, key);
    t.deepEqual(
      value,
      ENUM_STYLE_SETTINGS_SET1_PRIMITIVE[key],
      `got expected value ${stringifyTypedArray(value)} after setParameters for ${getKey(GL, key)}`
    );
  }

  // reset
  resetParameters(gl);

  // Verify default values.
  for (const key in ENUM_STYLE_SETTINGS_SET1_PRIMITIVE) {
    const value = getParameter(gl, key);
    t.deepEqual(
      value,
      GL_PARAMETER_DEFAULTS[key],
      `got expected value ${stringifyTypedArray(value)} after resetParameters for ${getKey(
        GL,
        key
      )}`
    );
  }

  t.end();
});

test('WebGLState#setParameters framebuffer', t => {
  const {gl} = fixture;

  resetParameters(gl);

  let fbHandle = getParameter(gl, gl.FRAMEBUFFER_BINDING);
  // t.equal(fbHandle, null, 'Initial frambuffer binding should be null');
  const framebuffer = new Framebuffer(gl);

  setParameters(gl, {
    [GL.FRAMEBUFFER_BINDING]: framebuffer.handle
  });
  fbHandle = getParameter(gl, gl.FRAMEBUFFER_BINDING);
  t.equal(fbHandle, framebuffer.handle, 'setParameters should set framebuffer binding');

  // verify setting null value
  setParameters(gl, {
    [GL.FRAMEBUFFER_BINDING]: null
  });
  fbHandle = getParameter(gl, gl.FRAMEBUFFER_BINDING);
  t.equal(fbHandle, null, 'setParameters should set framebuffer binding');

  t.end();
});

test('WebGLState#setParameters read-framebuffer (WebGL2 only)', t => {
  const {gl2} = fixture;
  // const gl2 = createTestContext({webgl2: true, webgl1: false});
  if (gl2) {
    resetParameters(gl2);

    let fbHandle = getParameter(gl2, gl2.READ_FRAMEBUFFER_BINDING);
    // t.equal(fbHandle, null, 'Initial read-frambuffer binding should be null');
    const framebuffer = new Framebuffer(gl2);

    setParameters(gl2, {
      [GL.READ_FRAMEBUFFER_BINDING]: framebuffer.handle
    });
    fbHandle = getParameter(gl2, gl2.READ_FRAMEBUFFER_BINDING);
    t.equal(fbHandle, framebuffer.handle, 'setParameters should set read-framebuffer binding');

    // verify setting null value
    setParameters(gl2, {
      [GL.READ_FRAMEBUFFER_BINDING]: null
    });
    fbHandle = getParameter(gl2, gl2.READ_FRAMEBUFFER_BINDING);
    t.equal(fbHandle, null, 'setParameters should set read-framebuffer binding');
  } else {
    t.comment('WebGL2 not available, skipping tests');
  }
  t.end();
});

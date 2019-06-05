"use strict";var module1=module;module1.link('../modules/shadertools/test');module1.link('../modules/core/test/webgl-independent-tests');module1.link('@luma.gl/debug');module1.link('../modules/constants/test');module1.link('../modules/webgl2-polyfill/test');module1.link('../modules/webgl-state-tracker/test');module1.link('../modules/debug/test/');module1.link('../modules/webgl/test');module1.link('../modules/core/test/webgl-dependent-tests');module1.link('../modules/addons/test/');module1.link('../modules/gpgpu/test/');module1.link('../modules/effects/test');module1.link('../modules/glfx/test/');module1.link('../modules/main//test');// WEBGL-INDEPENDENT TESTS
// Imports tests for all modules that do not depend on WebGL

// Shadertools is a GLSL textual processing library, no actual WebGL dependencies

// luma.gl core module: Test webgl-independent code, ensure webgl dependencies don't creep in


// WEBGL-DEPENDENT TESTS

// Import luma debug module to assist with debugging test failures


// Generic webgl helper modules





// Main webgl classes


// luma.gl core module: Test webgl-dependent code now


// luma.gl sub modules





// DEPRECATED: The classic "unscoped" luma.gl module (Supported for backwards compatibility)


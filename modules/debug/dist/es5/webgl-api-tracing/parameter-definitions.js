"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installParameterDefinitions = installParameterDefinitions;
exports.TEXTURE_PARAMETERS = exports.SAMPLER_PARAMETERS = exports.RENDERBUFFER_PARAMETERS = exports.PROGRAM_PARAMETERS = exports.FRAMEBUFFER_STATUS = exports.FRAMEBUFFER_ATTACHMENT_PARAMETERS = exports.FENCE_SYNC_PARAMETERS = exports.BUFFER_PARAMETERS = exports.GLboolean = exports.GLuint = exports.GLint = exports.GLfloat = exports.GLenum = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _BUFFER_PARAMETERS, _FRAMEBUFFER_STATUS, _PROGRAM_PARAMETERS, _RENDERBUFFER_PARAMET, _SAMPLER_PARAMETERS, _TEXTURE_PARAMETERS;

var GLenum = 'GLenum';
exports.GLenum = GLenum;
var GLfloat = 'GLfloat';
exports.GLfloat = GLfloat;
var GLint = 'GLint';
exports.GLint = GLint;
var GLuint = 'GLint';
exports.GLuint = GLuint;
var GLboolean = 'GLboolean';
exports.GLboolean = GLboolean;
var BUFFER_PARAMETERS = (_BUFFER_PARAMETERS = {}, (0, _defineProperty2["default"])(_BUFFER_PARAMETERS, 34660, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_BUFFER_PARAMETERS, 34661, {
  webgl1: 0
}), _BUFFER_PARAMETERS);
exports.BUFFER_PARAMETERS = BUFFER_PARAMETERS;
var FENCE_SYNC_PARAMETERS = [37138, 37140, 37139, 37141];
exports.FENCE_SYNC_PARAMETERS = FENCE_SYNC_PARAMETERS;
var FRAMEBUFFER_ATTACHMENT_PARAMETERS = [36049, 36048, 36051, 36050, 33296, 36052, 33298, 33299, 33300, 33301, 33302, 33303, 33297];
exports.FRAMEBUFFER_ATTACHMENT_PARAMETERS = FRAMEBUFFER_ATTACHMENT_PARAMETERS;
var FRAMEBUFFER_STATUS = (_FRAMEBUFFER_STATUS = {}, (0, _defineProperty2["default"])(_FRAMEBUFFER_STATUS, 36053, 'Success. Framebuffer is correctly set up'), (0, _defineProperty2["default"])(_FRAMEBUFFER_STATUS, 36054, 'Framebuffer attachment types mismatched or some attachment point not attachment complete'), (0, _defineProperty2["default"])(_FRAMEBUFFER_STATUS, 36055, 'Framebuffer has no attachment'), (0, _defineProperty2["default"])(_FRAMEBUFFER_STATUS, 36057, 'Framebuffer attachments do not have the same size'), (0, _defineProperty2["default"])(_FRAMEBUFFER_STATUS, 36061, 'Framebuffer attachment format not supported or depth and stencil attachments are not same'), (0, _defineProperty2["default"])(_FRAMEBUFFER_STATUS, 36182, 'Framebuffer attachement SAMPLES differs among renderbuffers, or are mixed with textures'), _FRAMEBUFFER_STATUS);
exports.FRAMEBUFFER_STATUS = FRAMEBUFFER_STATUS;
var PROGRAM_PARAMETERS = (_PROGRAM_PARAMETERS = {}, (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35712, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35714, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35715, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35717, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35721, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35718, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35967, {
  webgl2: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35971, {
  webgl2: 0
}), (0, _defineProperty2["default"])(_PROGRAM_PARAMETERS, 35382, {
  webgl2: 0
}), _PROGRAM_PARAMETERS);
exports.PROGRAM_PARAMETERS = PROGRAM_PARAMETERS;
var RENDERBUFFER_PARAMETERS = (_RENDERBUFFER_PARAMET = {}, (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36162, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36163, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36164, {
  type: 'GLenum',
  webgl1: 32854
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36177, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36178, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36176, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36179, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36180, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36181, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_RENDERBUFFER_PARAMET, 36011, {
  webgl2: 1
}), _RENDERBUFFER_PARAMET);
exports.RENDERBUFFER_PARAMETERS = RENDERBUFFER_PARAMETERS;
var SAMPLER_PARAMETERS = (_SAMPLER_PARAMETERS = {}, (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 10240, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 10241, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 10242, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 10243, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 32882, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 33084, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 33085, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 34893, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 34892, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 33082, {
  webgl2: true
}), (0, _defineProperty2["default"])(_SAMPLER_PARAMETERS, 33083, {
  webgl2: true
}), _SAMPLER_PARAMETERS);
exports.SAMPLER_PARAMETERS = SAMPLER_PARAMETERS;
var TEXTURE_PARAMETERS = (_TEXTURE_PARAMETERS = {}, (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 10240, {
  type: 'GLenum',
  webgl1: 9729
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 10241, {
  type: 'GLenum',
  webgl1: 9986
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 10242, {
  type: 'GLenum',
  webgl1: 10497
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 10243, {
  type: 'GLenum',
  webgl1: 10497
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 32882, {
  type: 'GLenum',
  webgl2: 10497
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 33084, {
  webgl2: 0
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 33085, {
  webgl2: 1000
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 34893, {
  type: 'GLenum',
  webgl2: 515
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 34892, {
  type: 'GLenum',
  webgl2: 0
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 33082, {
  webgl2: -1000
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 33083, {
  webgl2: 1000
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 4096, {
  webgl1: 0
}), (0, _defineProperty2["default"])(_TEXTURE_PARAMETERS, 4097, {
  webgl1: 0
}), _TEXTURE_PARAMETERS);
exports.TEXTURE_PARAMETERS = TEXTURE_PARAMETERS;

function installParameterDefinitions() {}
//# sourceMappingURL=parameter-definitions.js.map
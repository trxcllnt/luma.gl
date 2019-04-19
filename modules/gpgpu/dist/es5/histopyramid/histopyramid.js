"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildHistopyramidBaseLevel = buildHistopyramidBaseLevel;
exports.getHistoPyramid = getHistoPyramid;
exports.histoPyramidGenerateIndices = histoPyramidGenerateIndices;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@luma.gl/core");

var _histopyramidShaders = require("./histopyramid-shaders");

var _channelToIndexMap;

function nextPowerOfTwo(x) {
  var p = Math.ceil(Math.log2(x));
  return Math.pow(2, p);
}

var channelToIndexMap = (_channelToIndexMap = {}, (0, _defineProperty2["default"])(_channelToIndexMap, 'r', 0), (0, _defineProperty2["default"])(_channelToIndexMap, 'x', 0), (0, _defineProperty2["default"])(_channelToIndexMap, 'g', 1), (0, _defineProperty2["default"])(_channelToIndexMap, 'y', 1), (0, _defineProperty2["default"])(_channelToIndexMap, 'b', 2), (0, _defineProperty2["default"])(_channelToIndexMap, 'z', 2), (0, _defineProperty2["default"])(_channelToIndexMap, 'a', 3), (0, _defineProperty2["default"])(_channelToIndexMap, 'w', 3), _channelToIndexMap);

function buildHistopyramidBaseLevel(gl, opts) {
  var _parameters;

  var texture = opts.texture,
      _opts$channel = opts.channel,
      channel = _opts$channel === void 0 ? 'r' : _opts$channel,
      _opts$_readData = opts._readData,
      _readData = _opts$_readData === void 0 ? false : _opts$_readData;

  var width = texture.width,
      height = texture.height;
  width = nextPowerOfTwo(width);
  height = nextPowerOfTwo(height);
  var size = (width > height ? width : height) / 2;
  var baseTexture = (0, _core.cloneTextureFrom)(texture, {
    width: size,
    height: size
  });
  var transform = new _core.Transform(gl, {
    _sourceTextures: {
      inTexture: texture
    },
    _targetTexture: baseTexture,
    _targetTextureVarying: 'outTexture',
    vs: "".concat(_histopyramidShaders.HISTOPYRAMID_BUILD_VS_UTILS).concat(_histopyramidShaders.HISTOPYRAMID_BASE_BUILD_VS),
    elementCount: baseTexture.width * baseTexture.height
  });
  transform.run({
    uniforms: {
      channel: channelToIndexMap[channel] || 0,
      padingPixelValue: [0, 0, 0, 0]
    }
  });
  var textureData;

  if (_readData || size === 1) {
    textureData = transform.getData({
      packed: true
    });
  }

  var flatPyramidSize = size * 2;
  var flatPyramidTexture = (0, _core.cloneTextureFrom)(texture, {
    width: flatPyramidSize,
    height: flatPyramidSize,
    parameters: (_parameters = {}, (0, _defineProperty2["default"])(_parameters, 10240, 9728), (0, _defineProperty2["default"])(_parameters, 10241, 9728), _parameters)
  });
  var framebuffer = transform.getFramebuffer();
  (0, _core.copyToTexture)(framebuffer, flatPyramidTexture, {
    targetX: 0,
    width: size,
    height: size
  });
  return {
    textureData: textureData,
    baseTexture: baseTexture,
    flatPyramidTexture: flatPyramidTexture
  };
}

function getHistoPyramid(gl, opts) {
  var _buildHistopyramidBas = buildHistopyramidBaseLevel(gl, opts),
      textureData = _buildHistopyramidBas.textureData,
      baseTexture = _buildHistopyramidBas.baseTexture,
      flatPyramidTexture = _buildHistopyramidBas.flatPyramidTexture;

  var width = baseTexture.width;
  var levelCount = Math.log2(width) + 1;
  var pyramidTextures = [baseTexture];
  var topLevelData = textureData;

  if (levelCount > 1) {
    for (var i = 1; i < levelCount; i++) {
      var size = width / Math.pow(2, i);
      pyramidTextures.push((0, _core.cloneTextureFrom)(baseTexture, {
        width: size,
        height: size
      }));
    }

    var transform = new _core.Transform(gl, {
      _sourceTextures: {
        inTexture: pyramidTextures[0]
      },
      _targetTexture: pyramidTextures[1],
      _targetTextureVarying: 'outTexture',
      vs: "".concat(_histopyramidShaders.HISTOPYRAMID_BUILD_VS_UTILS).concat(_histopyramidShaders.HISTOPYRAMID_BUILD_VS),
      elementCount: pyramidTextures[1].width * pyramidTextures[1].height
    });
    var flatOffset = width;

    for (var _i = 1; _i < levelCount; _i++) {
      var outSize = [pyramidTextures[_i].width, pyramidTextures[_i].height];
      transform.update({
        _sourceTextures: {
          inTexture: pyramidTextures[_i - 1]
        },
        _targetTexture: pyramidTextures[_i],
        elementCount: pyramidTextures[_i].width * pyramidTextures[_i].height
      });
      transform.run();
      var framebuffer = transform.getFramebuffer();
      (0, _core.copyToTexture)(framebuffer, flatPyramidTexture, {
        targetX: flatOffset,
        width: outSize[0],
        height: outSize[1]
      });
      flatOffset += outSize[0];
    }

    topLevelData = transform.getData();
  }

  return {
    pyramidTextures: pyramidTextures,
    flatPyramidTexture: flatPyramidTexture,
    levelCount: levelCount,
    topLevelData: topLevelData
  };
}

function histoPyramidGenerateIndices(gl, opts) {
  var _getHistoPyramid = getHistoPyramid(gl, opts),
      flatPyramidTexture = _getHistoPyramid.flatPyramidTexture,
      levelCount = _getHistoPyramid.levelCount,
      topLevelData = _getHistoPyramid.topLevelData;

  var keyIndexCount = topLevelData[0] + topLevelData[1] + topLevelData[2] + topLevelData[3];
  var keyIndex = new _core.Buffer(gl, new Float32Array(keyIndexCount).map(function (_, index) {
    return index;
  }));
  var locationAndIndex = new _core.Buffer(gl, keyIndexCount * 4 * 4);
  var transform = new _core.Transform(gl, {
    sourceBuffers: {
      keyIndex: keyIndex
    },
    _sourceTextures: {
      flatPyramidTexture: flatPyramidTexture
    },
    feedbackBuffers: {
      locationAndIndex: locationAndIndex
    },
    varyings: ['locationAndIndex'],
    vs: "".concat(_histopyramidShaders.HISTOPYRAMID_TRAVERSAL_UTILS).concat(_histopyramidShaders.HISTOPYRAMID_TRAVERSAL_VS),
    elementCount: keyIndexCount
  });
  transform.run({
    uniforms: {
      numLevels: levelCount
    }
  });
  return {
    locationAndIndexBuffer: locationAndIndex
  };
}
//# sourceMappingURL=histopyramid.js.map
import { Transform, Buffer, copyToTexture, cloneTextureFrom } from '@luma.gl/core';
import { HISTOPYRAMID_BUILD_VS_UTILS, HISTOPYRAMID_TRAVERSAL_UTILS, HISTOPYRAMID_BASE_BUILD_VS, HISTOPYRAMID_BUILD_VS, HISTOPYRAMID_TRAVERSAL_VS } from './histopyramid-shaders';

function nextPowerOfTwo(x) {
  const p = Math.ceil(Math.log2(x));
  return Math.pow(2, p);
}

const channelToIndexMap = {
  ['r']: 0,
  ['x']: 0,
  ['g']: 1,
  ['y']: 1,
  ['b']: 2,
  ['z']: 2,
  ['a']: 3,
  ['w']: 3
};
export function buildHistopyramidBaseLevel(gl, opts) {
  const texture = opts.texture,
        _opts$channel = opts.channel,
        channel = _opts$channel === void 0 ? 'r' : _opts$channel,
        _opts$_readData = opts._readData,
        _readData = _opts$_readData === void 0 ? false : _opts$_readData;

  let width = texture.width,
      height = texture.height;
  width = nextPowerOfTwo(width);
  height = nextPowerOfTwo(height);
  const size = (width > height ? width : height) / 2;
  const baseTexture = cloneTextureFrom(texture, {
    width: size,
    height: size
  });
  const transform = new Transform(gl, {
    _sourceTextures: {
      inTexture: texture
    },
    _targetTexture: baseTexture,
    _targetTextureVarying: 'outTexture',
    vs: "".concat(HISTOPYRAMID_BUILD_VS_UTILS).concat(HISTOPYRAMID_BASE_BUILD_VS),
    elementCount: baseTexture.width * baseTexture.height
  });
  transform.run({
    uniforms: {
      channel: channelToIndexMap[channel] || 0,
      padingPixelValue: [0, 0, 0, 0]
    }
  });
  let textureData;

  if (_readData || size === 1) {
    textureData = transform.getData({
      packed: true
    });
  }

  const flatPyramidSize = size * 2;
  const flatPyramidTexture = cloneTextureFrom(texture, {
    width: flatPyramidSize,
    height: flatPyramidSize,
    parameters: {
      [10240]: 9728,
      [10241]: 9728
    }
  });
  const framebuffer = transform.getFramebuffer();
  copyToTexture(framebuffer, flatPyramidTexture, {
    targetX: 0,
    width: size,
    height: size
  });
  return {
    textureData,
    baseTexture,
    flatPyramidTexture
  };
}
export function getHistoPyramid(gl, opts) {
  const _buildHistopyramidBas = buildHistopyramidBaseLevel(gl, opts),
        textureData = _buildHistopyramidBas.textureData,
        baseTexture = _buildHistopyramidBas.baseTexture,
        flatPyramidTexture = _buildHistopyramidBas.flatPyramidTexture;

  const width = baseTexture.width;
  const levelCount = Math.log2(width) + 1;
  const pyramidTextures = [baseTexture];
  let topLevelData = textureData;

  if (levelCount > 1) {
    for (let i = 1; i < levelCount; i++) {
      const size = width / Math.pow(2, i);
      pyramidTextures.push(cloneTextureFrom(baseTexture, {
        width: size,
        height: size
      }));
    }

    const transform = new Transform(gl, {
      _sourceTextures: {
        inTexture: pyramidTextures[0]
      },
      _targetTexture: pyramidTextures[1],
      _targetTextureVarying: 'outTexture',
      vs: "".concat(HISTOPYRAMID_BUILD_VS_UTILS).concat(HISTOPYRAMID_BUILD_VS),
      elementCount: pyramidTextures[1].width * pyramidTextures[1].height
    });
    let flatOffset = width;

    for (let i = 1; i < levelCount; i++) {
      const outSize = [pyramidTextures[i].width, pyramidTextures[i].height];
      transform.update({
        _sourceTextures: {
          inTexture: pyramidTextures[i - 1]
        },
        _targetTexture: pyramidTextures[i],
        elementCount: pyramidTextures[i].width * pyramidTextures[i].height
      });
      transform.run();
      const framebuffer = transform.getFramebuffer();
      copyToTexture(framebuffer, flatPyramidTexture, {
        targetX: flatOffset,
        width: outSize[0],
        height: outSize[1]
      });
      flatOffset += outSize[0];
    }

    topLevelData = transform.getData();
  }

  return {
    pyramidTextures,
    flatPyramidTexture,
    levelCount,
    topLevelData
  };
}
export function histoPyramidGenerateIndices(gl, opts) {
  const _getHistoPyramid = getHistoPyramid(gl, opts),
        flatPyramidTexture = _getHistoPyramid.flatPyramidTexture,
        levelCount = _getHistoPyramid.levelCount,
        topLevelData = _getHistoPyramid.topLevelData;

  const keyIndexCount = topLevelData[0] + topLevelData[1] + topLevelData[2] + topLevelData[3];
  const keyIndex = new Buffer(gl, new Float32Array(keyIndexCount).map((_, index) => index));
  const locationAndIndex = new Buffer(gl, keyIndexCount * 4 * 4);
  const transform = new Transform(gl, {
    sourceBuffers: {
      keyIndex
    },
    _sourceTextures: {
      flatPyramidTexture
    },
    feedbackBuffers: {
      locationAndIndex
    },
    varyings: ['locationAndIndex'],
    vs: "".concat(HISTOPYRAMID_TRAVERSAL_UTILS).concat(HISTOPYRAMID_TRAVERSAL_VS),
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
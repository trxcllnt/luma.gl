import { compileVertexShader, compileFragmentShader } from './compile-shader';
import { clamp, lerp } from 'math.gl';
const shaderCache = {};
export const COLOR_MODE = {
  NONE: 0,
  DEPTH: 1,
  FRAGMENT: 2
};
const MIN_DEPTH_COLOR = [1, 1, 0, 1];
const MAX_DEPTH_COLOR = [0, 0, 1, 1];
const DISCARDED_FRAG_COLOR = [1, 0, 0, 1];
export default ((_ref) => {
  let model = _ref.model,
      draw = _ref.draw,
      _ref$colorMode = _ref.colorMode,
      colorMode = _ref$colorMode === void 0 ? COLOR_MODE.NONE : _ref$colorMode;
  const shaders = getShaders(model);
  const uniforms = model.program.uniforms;

  const _sortAttributes = sortAttributes(model._attributes),
        instancedAttributes = _sortAttributes.instancedAttributes,
        vertexAttributes = _sortAttributes.vertexAttributes,
        indices = _sortAttributes.indices,
        attributeValues = _sortAttributes.attributeValues,
        vertexCount = _sortAttributes.vertexCount;

  const drawMode = model.getDrawMode();
  const instanceCount = model.instanceCount || 1;

  for (let i = 0; i < instanceCount; i++) {
    const ai = getAttributeAtIndex(instancedAttributes, i, attributeValues);
    const positions = [];
    const colors = [];

    for (let j = 0; j < vertexCount; j++) {
      const aj = Object.assign({}, ai, getAttributeAtIndex(vertexAttributes, j, attributeValues));

      const _renderVertex = renderVertex(shaders, uniforms, aj, colorMode),
            position = _renderVertex.position,
            color = _renderVertex.color;

      positions[j] = position;
      colors[j] = color;
    }

    draw({
      indices,
      drawMode,
      positions,
      colors
    });
  }
});

function getShaders(model) {
  const id = model.id,
        program = model.program;
  let vs = shaderCache[program.vs.source];

  if (!vs) {
    vs = compileVertexShader("".concat(id, "-vs"), program.vs.source);
    shaderCache[program.vs.source] = vs;
  }

  let fs = shaderCache[program.fs.source];

  if (!fs) {
    fs = compileFragmentShader("".concat(id, "-fs"), program.fs.source);
    shaderCache[program.fs.source] = fs;
  }

  return {
    vs,
    fs
  };
}

function sortAttributes(attributes) {
  const attributeValues = {};
  const instancedAttributes = {};
  const vertexAttributes = {};
  let indexAttribute = null;
  let vertexCount = 1;

  for (const attributeName in attributes) {
    const attribute = attributes[attributeName];

    if (attribute.isIndexed) {
      indexAttribute = attribute;
    } else if (attribute.divisor) {
      instancedAttributes[attributeName] = attribute;
    } else {
      vertexAttributes[attributeName] = attribute;

      if (!attribute.constant) {
        vertexCount = attribute.getBuffer().getElementCount() / attribute.size;
      }
    }

    attributeValues[attributeName] = !attribute.constant && attribute.getBuffer().getData();
  }

  let indices;

  if (indexAttribute) {
    indices = attributeValues[indexAttribute.id];
  } else {
    indices = Array.from({
      length: vertexCount
    }, (d, i) => i);
  }

  return {
    instancedAttributes,
    vertexAttributes,
    indices,
    attributeValues,
    vertexCount
  };
}

function getAttributeAtIndex(attributes, i, values) {
  const result = {};

  for (const attributeName in attributes) {
    const attribute = attributes[attributeName];

    if (attribute.constant) {
      result[attributeName] = attribute.value;
    } else {
      const size = attribute.size;
      const value = values[attributeName].subarray(i * size, (i + 1) * size);
      result[attributeName] = Array.from(value);
    }
  }

  return result;
}

function renderVertex(shaders, uniforms, attributes, colorMode) {
  const _shaders$vs = shaders.vs(uniforms, attributes),
        gl_Position = _shaders$vs.gl_Position,
        varyings = _shaders$vs.varyings;

  let color;

  switch (colorMode) {
    case COLOR_MODE.DEPTH:
      {
        const depth = clamp(gl_Position[2] / gl_Position[3], -1, 1);
        color = lerp(MIN_DEPTH_COLOR, MAX_DEPTH_COLOR, (depth + 1) / 2);
        break;
      }

    case COLOR_MODE.FRAGMENT:
      {
        const _shaders$fs = shaders.fs(uniforms, varyings),
              gl_FragColor = _shaders$fs.gl_FragColor,
              isDiscarded = _shaders$fs.isDiscarded;

        color = isDiscarded ? DISCARDED_FRAG_COLOR : gl_FragColor;
        break;
      }

    default:
  }

  return {
    position: gl_Position,
    color
  };
}
//# sourceMappingURL=draw-model.js.map
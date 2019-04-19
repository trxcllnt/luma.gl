"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _math = require("math.gl");

var _core = require("@luma.gl/core");

var _gltfAnimator = _interopRequireDefault(require("./gltf-animator"));

var _createGltfModel = _interopRequireDefault(require("./create-gltf-model"));

var ATTRIBUTE_TYPE_TO_COMPONENTS = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
var DEFAULT_OPTIONS = {
  modelOptions: {},
  pbrDebug: false,
  imageBasedLightingEnvironment: null,
  lights: true
};

var GLTFInstantiator = function () {
  function GLTFInstantiator(gl) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, GLTFInstantiator);
    this.gl = gl;
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }

  (0, _createClass2["default"])(GLTFInstantiator, [{
    key: "instantiate",
    value: function instantiate(gltf) {
      var _this = this;

      this.gltf = gltf;
      var scenes = (gltf.scenes || []).map(function (scene) {
        return _this.createScene(scene);
      });
      return scenes;
    }
  }, {
    key: "createAnimator",
    value: function createAnimator() {
      if (Array.isArray(this.gltf.animations)) {
        return new _gltfAnimator["default"](this.gltf);
      }

      return null;
    }
  }, {
    key: "createScene",
    value: function createScene(gltfScene) {
      var _this2 = this;

      var gltfNodes = gltfScene.nodes || [];
      var nodes = gltfNodes.map(function (node) {
        return _this2.createNode(node);
      });
      var scene = new _core.GroupNode({
        id: gltfScene.name || gltfScene.id,
        children: nodes
      });
      return scene;
    }
  }, {
    key: "createNode",
    value: function createNode(gltfNode) {
      var _this3 = this;

      if (!gltfNode._node) {
        var gltfChildren = gltfNode.children || [];
        var children = gltfChildren.map(function (child) {
          return _this3.createNode(child);
        });

        if (gltfNode.mesh) {
          children.push(this.createMesh(gltfNode.mesh));
        }

        var node = new _core.GroupNode({
          id: gltfNode.name || gltfNode.id,
          children: children
        });

        if (gltfNode.matrix) {
          node.setMatrix(gltfNode.matrix);
        } else {
          node.matrix.identity();

          if (gltfNode.translation) {
            node.matrix.translate(gltfNode.translation);
          }

          if (gltfNode.rotation) {
            var rotationMatrix = new _math.Matrix4().fromQuaternion(gltfNode.rotation);
            node.matrix.multiplyRight(rotationMatrix);
          }

          if (gltfNode.scale) {
            node.matrix.scale(gltfNode.scale);
          }
        }

        gltfNode._node = node;
      }

      return gltfNode._node;
    }
  }, {
    key: "createMesh",
    value: function createMesh(gltfMesh) {
      var _this4 = this;

      if (!gltfMesh._mesh) {
        var gltfPrimitives = gltfMesh.primitives || [];
        var primitives = gltfPrimitives.map(function (gltfPrimitive, i) {
          return _this4.createPrimitive(gltfPrimitive, i, gltfMesh);
        });
        var mesh = new _core.GroupNode({
          id: gltfMesh.name || gltfMesh.id,
          children: primitives
        });
        gltfMesh._mesh = mesh;
      }

      return gltfMesh._mesh;
    }
  }, {
    key: "getVertexCount",
    value: function getVertexCount(attributes) {
      _core.log.warn('getVertexCount() not found')();
    }
  }, {
    key: "createPrimitive",
    value: function createPrimitive(gltfPrimitive, i, gltfMesh) {
      return (0, _createGltfModel["default"])(this.gl, Object.assign({
        id: gltfPrimitive.name || "".concat(gltfMesh.name || gltfMesh.id, "-primitive-").concat(i),
        drawMode: gltfPrimitive.mode || 4,
        vertexCount: gltfPrimitive.indices ? gltfPrimitive.indices.count : this.getVertexCount(gltfPrimitive.attributes),
        attributes: this.createAttributes(gltfPrimitive.attributes, gltfPrimitive.indices),
        material: gltfPrimitive.material
      }, this.options));
    }
  }, {
    key: "createAttributes",
    value: function createAttributes(attributes, indices) {
      var _this5 = this;

      var loadedAttributes = {};
      Object.keys(attributes).forEach(function (attrName) {
        loadedAttributes[attrName] = _this5.createAccessor(attributes[attrName], _this5.createBuffer(attributes[attrName], _this5.gl.ARRAY_BUFFER));
      });

      if (indices) {
        loadedAttributes.indices = this.createAccessor(indices, this.createBuffer(indices, this.gl.ELEMENT_ARRAY_BUFFER));
      }

      _core.log.info(4, 'glTF Attributes', {
        attributes: attributes,
        indices: indices,
        generated: loadedAttributes
      })();

      return loadedAttributes;
    }
  }, {
    key: "createBuffer",
    value: function createBuffer(attribute, target) {
      if (!attribute.bufferView) {
        attribute.bufferView = {};
      }

      var bufferView = attribute.bufferView;

      if (!bufferView.lumaBuffers) {
        bufferView.lumaBuffers = {};
      }

      if (!bufferView.lumaBuffers[target]) {
        bufferView.lumaBuffers[target] = new _core.Buffer(this.gl, {
          id: "from-".concat(bufferView.id),
          data: bufferView.data || attribute.value,
          target: target
        });
      }

      return bufferView.lumaBuffers[target];
    }
  }, {
    key: "createAccessor",
    value: function createAccessor(accessor, buffer) {
      return new _core._Accessor({
        buffer: buffer,
        offset: accessor.byteOffset || 0,
        stride: accessor.bufferView.byteStride || 0,
        type: accessor.componentType,
        size: ATTRIBUTE_TYPE_TO_COMPONENTS[accessor.type]
      });
    }
  }, {
    key: "createSampler",
    value: function createSampler(gltfSampler) {
      return gltfSampler;
    }
  }, {
    key: "needsPOT",
    value: function needsPOT() {
      return false;
    }
  }]);
  return GLTFInstantiator;
}();

exports["default"] = GLTFInstantiator;
//# sourceMappingURL=gltf-instantiator.js.map
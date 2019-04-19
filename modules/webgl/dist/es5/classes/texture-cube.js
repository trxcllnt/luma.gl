"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _texture = _interopRequireDefault(require("./texture"));

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

var FACES = [34069, 34070, 34071, 34072, 34073, 34074];

var TextureCube = function (_Texture) {
  (0, _inherits2["default"])(TextureCube, _Texture);

  function TextureCube(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, TextureCube);
    (0, _webglUtils.assertWebGLContext)(gl);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TextureCube).call(this, gl, Object.assign({}, props, {
      target: 34067
    })));

    _this.initialize(props);

    Object.seal((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(TextureCube, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _props$mipmaps = props.mipmaps,
          mipmaps = _props$mipmaps === void 0 ? true : _props$mipmaps,
          _props$parameters = props.parameters,
          parameters = _props$parameters === void 0 ? {} : _props$parameters;
      this.opts = props;
      this.setCubeMapImageData(props).then(function () {
        _this2.loaded = true;

        if (mipmaps) {
          _this2.generateMipmap(props);
        }

        _this2.setParameters(parameters);
      });
    }
  }, {
    key: "subImage",
    value: function subImage(_ref) {
      var face = _ref.face,
          data = _ref.data,
          _ref$x = _ref.x,
          x = _ref$x === void 0 ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? 0 : _ref$y,
          _ref$mipmapLevel = _ref.mipmapLevel,
          mipmapLevel = _ref$mipmapLevel === void 0 ? 0 : _ref$mipmapLevel;
      return this._subImage({
        target: face,
        data: data,
        x: x,
        y: y,
        mipmapLevel: mipmapLevel
      });
    }
  }, {
    key: "setCubeMapImageData",
    value: function () {
      var _setCubeMapImageData = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref2) {
        var _this3 = this;

        var width, height, pixels, data, _ref2$border, border, _ref2$format, format, _ref2$type, type, gl, imageDataMap, resolvedFaces;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                width = _ref2.width, height = _ref2.height, pixels = _ref2.pixels, data = _ref2.data, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? 0 : _ref2$border, _ref2$format = _ref2.format, format = _ref2$format === void 0 ? 6408 : _ref2$format, _ref2$type = _ref2.type, type = _ref2$type === void 0 ? 5121 : _ref2$type;
                gl = this.gl;
                imageDataMap = pixels || data;
                _context.next = 5;
                return Promise.all(FACES.map(function (face) {
                  var facePixels = imageDataMap[face];
                  return Promise.all(Array.isArray(facePixels) ? facePixels : [facePixels]);
                }));

              case 5:
                resolvedFaces = _context.sent;
                this.bind();
                FACES.forEach(function (face, index) {
                  if (resolvedFaces[index].length > 1 && _this3.opts.mipmaps !== false) {
                    _utils.log.warn("".concat(_this3.id, " has mipmap and multiple LODs."))();
                  }

                  resolvedFaces[index].forEach(function (image, lodLevel) {
                    if (width && height) {
                      gl.texImage2D(face, lodLevel, format, width, height, border, format, type, image);
                    } else {
                      gl.texImage2D(face, lodLevel, format, format, type, image);
                    }
                  });
                });
                this.unbind();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setCubeMapImageData(_x) {
        return _setCubeMapImageData.apply(this, arguments);
      }

      return setCubeMapImageData;
    }()
  }, {
    key: "setImageDataForFace",
    value: function setImageDataForFace(options) {
      var _this4 = this;

      var face = options.face,
          width = options.width,
          height = options.height,
          pixels = options.pixels,
          data = options.data,
          _options$border = options.border,
          border = _options$border === void 0 ? 0 : _options$border,
          _options$format = options.format,
          format = _options$format === void 0 ? 6408 : _options$format,
          _options$type = options.type,
          type = _options$type === void 0 ? 5121 : _options$type;
      var gl = this.gl;
      var imageData = pixels || data;
      this.bind();

      if (imageData instanceof Promise) {
        imageData.then(function (resolvedImageData) {
          return _this4.setImageDataForFace(Object.assign({}, options, {
            face: face,
            data: resolvedImageData,
            pixels: resolvedImageData
          }));
        });
      } else if (this.width || this.height) {
        gl.texImage2D(face, 0, format, width, height, border, format, type, imageData);
      } else {
        gl.texImage2D(face, 0, format, format, type, imageData);
      }

      return this;
    }
  }]);
  return TextureCube;
}(_texture["default"]);

exports["default"] = TextureCube;
TextureCube.FACES = FACES;
//# sourceMappingURL=texture-cube.js.map
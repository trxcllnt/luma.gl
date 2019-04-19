import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import Accessor from './accessor';
import { isWebGL2 } from '../webgl-utils';
import { decomposeCompositeGLType } from '../webgl-utils/attribute-utils';

var ProgramConfiguration = function () {
  function ProgramConfiguration(program) {
    _classCallCheck(this, ProgramConfiguration);

    this.id = program.id;
    this.attributeInfos = [];
    this.attributeInfosByName = {};
    this.attributeInfosByLocation = [];
    this.varyingInfos = [];
    this.varyingInfosByName = {};
    Object.seal(this);

    this._readAttributesFromProgram(program);

    this._readVaryingsFromProgram(program);
  }

  _createClass(ProgramConfiguration, [{
    key: "getAttributeInfo",
    value: function getAttributeInfo(locationOrName) {
      var location = Number(locationOrName);

      if (Number.isFinite(location)) {
        return this.attributeInfosByLocation[location];
      }

      return this.attributeInfosByName[locationOrName] || null;
    }
  }, {
    key: "getAttributeLocation",
    value: function getAttributeLocation(locationOrName) {
      var attributeInfo = this.getAttributeInfo(locationOrName);
      return attributeInfo ? attributeInfo.location : -1;
    }
  }, {
    key: "getAttributeAccessor",
    value: function getAttributeAccessor(locationOrName) {
      var attributeInfo = this.getAttributeInfo(locationOrName);
      return attributeInfo ? attributeInfo.accessor : null;
    }
  }, {
    key: "getVaryingInfo",
    value: function getVaryingInfo(locationOrName) {
      var location = Number(locationOrName);

      if (Number.isFinite(location)) {
        return this.varyingInfos[location];
      }

      return this.varyingInfosByName[locationOrName] || null;
    }
  }, {
    key: "getVaryingIndex",
    value: function getVaryingIndex(locationOrName) {
      var varying = this.getVaryingInfo();
      return varying ? varying.location : -1;
    }
  }, {
    key: "getVaryingAccessor",
    value: function getVaryingAccessor(locationOrName) {
      var varying = this.getVaryingInfo();
      return varying ? varying.accessor : null;
    }
  }, {
    key: "_readAttributesFromProgram",
    value: function _readAttributesFromProgram(program) {
      var gl = program.gl;
      var count = gl.getProgramParameter(program.handle, 35721);

      for (var index = 0; index < count; index++) {
        var _gl$getActiveAttrib = gl.getActiveAttrib(program.handle, index),
            name = _gl$getActiveAttrib.name,
            type = _gl$getActiveAttrib.type,
            size = _gl$getActiveAttrib.size;

        var location = gl.getAttribLocation(program.handle, name);

        if (location >= 0) {
          this._addAttribute(location, name, type, size);
        }
      }

      this.attributeInfos.sort(function (a, b) {
        return a.location - b.location;
      });
    }
  }, {
    key: "_readVaryingsFromProgram",
    value: function _readVaryingsFromProgram(program) {
      var gl = program.gl;

      if (!isWebGL2(gl)) {
        return;
      }

      var count = gl.getProgramParameter(program.handle, 35971);

      for (var location = 0; location < count; location++) {
        var _gl$getTransformFeedb = gl.getTransformFeedbackVarying(program.handle, location),
            name = _gl$getTransformFeedb.name,
            type = _gl$getTransformFeedb.type,
            size = _gl$getTransformFeedb.size;

        this._addVarying(location, name, type, size);
      }

      this.varyingInfos.sort(function (a, b) {
        return a.location - b.location;
      });
    }
  }, {
    key: "_addAttribute",
    value: function _addAttribute(location, name, compositeType, size) {
      var _decomposeCompositeGL = decomposeCompositeGLType(compositeType),
          type = _decomposeCompositeGL.type,
          components = _decomposeCompositeGL.components;

      var accessor = {
        type: type,
        size: size * components
      };

      this._inferProperties(location, name, accessor);

      var attributeInfo = {
        location: location,
        name: name,
        accessor: new Accessor(accessor)
      };
      this.attributeInfos.push(attributeInfo);
      this.attributeInfosByLocation[location] = attributeInfo;
      this.attributeInfosByName[attributeInfo.name] = attributeInfo;
    }
  }, {
    key: "_inferProperties",
    value: function _inferProperties(location, name, accessor) {
      if (/instance/i.test(name)) {
        accessor.divisor = 1;
      }
    }
  }, {
    key: "_addVarying",
    value: function _addVarying(location, name, compositeType, size) {
      var _decomposeCompositeGL2 = decomposeCompositeGLType(compositeType),
          type = _decomposeCompositeGL2.type,
          components = _decomposeCompositeGL2.components;

      var accessor = new Accessor({
        type: type,
        size: size * components
      });
      var varying = {
        location: location,
        name: name,
        accessor: accessor
      };
      this.varyingInfos.push(varying);
      this.varyingInfosByName[varying.name] = varying;
    }
  }]);

  return ProgramConfiguration;
}();

export { ProgramConfiguration as default };
//# sourceMappingURL=program-configuration.js.map
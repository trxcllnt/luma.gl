"use strict";module.export({default:()=>CylinderGeometry});var TruncatedConeGeometry;module.link('./truncated-cone-geometry',{default(v){TruncatedConeGeometry=v}},0);var uid;module.link('../utils',{uid(v){uid=v}},1);


class CylinderGeometry extends TruncatedConeGeometry {
  constructor(props = {}) {
    const {id = uid('cylinder-geometry'), radius = 1} = props;
    super({
      ...props,
      id,
      bottomRadius: radius,
      topRadius: radius
    });
  }
}

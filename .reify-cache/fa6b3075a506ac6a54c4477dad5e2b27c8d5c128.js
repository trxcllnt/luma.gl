"use strict";module.export({default:()=>ConeGeometry});var TruncatedConeGeometry;module.link('./truncated-cone-geometry',{default(v){TruncatedConeGeometry=v}},0);var uid;module.link('../utils',{uid(v){uid=v}},1);


class ConeGeometry extends TruncatedConeGeometry {
  constructor(props = {}) {
    const {id = uid('cone-geometry'), radius = 1, cap = true} = props;
    super({
      ...props,
      id,
      topRadius: 0,
      topCap: Boolean(cap),
      bottomCap: Boolean(cap),
      bottomRadius: radius
    });
  }
}

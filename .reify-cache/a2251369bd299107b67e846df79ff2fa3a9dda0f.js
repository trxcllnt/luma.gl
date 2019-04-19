"use strict";module.export({default:()=>PhongMaterial});var Material;module.link('./material',{default(v){Material=v}},0);

const defaultProps = {
  ambient: 0.35,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [30, 30, 30]
};

class PhongMaterial extends Material {
  constructor(props) {
    super(props);
    props = Object.assign({}, defaultProps, props);
    Object.assign(this, props);
  }
}

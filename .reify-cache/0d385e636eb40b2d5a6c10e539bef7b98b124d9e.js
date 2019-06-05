"use strict";module.export({default:()=>CameraNode});var ScenegraphNode;module.link('./scenegraph-node',{default(v){ScenegraphNode=v}},0);

class CameraNode extends ScenegraphNode {
  constructor(props = {}) {
    super(props);
    this.projectionMatrix = props.projectionMatrix;
  }
}

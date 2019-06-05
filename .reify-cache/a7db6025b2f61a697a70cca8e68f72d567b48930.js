"use strict";module.export({default:()=>GroupNode});var Matrix4;module.link('math.gl',{Matrix4(v){Matrix4=v}},0);var log,assert;module.link('../../utils',{log(v){log=v},assert(v){assert=v}},1);var ScenegraphNode;module.link('./scenegraph-node',{default(v){ScenegraphNode=v}},2);



class GroupNode extends ScenegraphNode {
  constructor(props = {}) {
    props = Array.isArray(props) ? {children: props} : props;
    const {children = []} = props;
    children.every(child => assert(child instanceof ScenegraphNode));
    super(props);
    this.children = children;
  }

  // Unpacks arrays and nested arrays of children
  add(...children) {
    for (const child of children) {
      if (Array.isArray(child)) {
        this.add(...child);
      } else {
        this.children.push(child);
      }
    }
    return this;
  }

  remove(child) {
    const children = this.children;
    const indexOf = children.indexOf(child);
    if (indexOf > -1) {
      children.splice(indexOf, 1);
    }
    return this;
  }

  removeAll() {
    this.children = [];
    return this;
  }

  delete() {
    this.children.forEach(child => child.delete());
    this.removeAll();
    super.delete();
  }

  traverse(visitor, {worldMatrix = new Matrix4()} = {}) {
    const modelMatrix = new Matrix4(worldMatrix).multiplyRight(this.matrix);

    for (const child of this.children) {
      if (child instanceof GroupNode) {
        child.traverse(visitor, {worldMatrix: modelMatrix});
      } else {
        visitor(child, {worldMatrix: modelMatrix});
      }
    }
  }

  traverseReverse(visitor, opts) {
    log.warn('traverseReverse is not reverse')();
    return this.traverse(visitor, opts);
  }
}

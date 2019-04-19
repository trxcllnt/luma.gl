"use strict";module.export({default:()=>createGLTFObjects});var GLTFInstantiator;module.link('./gltf-instantiator',{default(v){GLTFInstantiator=v}},0);

function createGLTFObjects(gl, gltf, options) {
  const instantiator = new GLTFInstantiator(gl, options);
  const scenes = instantiator.instantiate(gltf);
  const animator = instantiator.createAnimator();

  return {scenes, animator};
}

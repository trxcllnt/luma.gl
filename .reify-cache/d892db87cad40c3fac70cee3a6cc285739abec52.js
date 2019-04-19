"use strict";var project2;module.link('../project2/project2',{default(v){project2=v}},0);var lights;module.link('../lights/lights',{default(v){lights=v}},1);var vs;module.link('./pbr-vertex.glsl',{default(v){vs=v}},2);var fs;module.link('./pbr-fragment.glsl',{default(v){fs=v}},3);





module.exportDefault({
  name: 'pbr',
  vs,
  fs,
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  dependencies: [project2, lights]
});

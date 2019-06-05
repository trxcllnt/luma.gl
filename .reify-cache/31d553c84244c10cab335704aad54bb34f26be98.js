"use strict";var module1=module;module1.export({MODULAR_SHADERS:()=>MODULAR_SHADERS},true);var MODULAR_VS;module1.link('./shaders/modular-vertex.glsl',{default(v){MODULAR_VS=v}},0);var MODULAR_FS;module1.link('./shaders/modular-fragment.glsl',{default(v){MODULAR_FS=v}},1);module1.link('./lib/resolve-modules',{registerShaderModules:"registerShaderModules",setDefaultShaderModules:"setDefaultShaderModules"},2);module1.link('./lib/assemble-shaders',{assembleShaders:"assembleShaders",createShaderHook:"createShaderHook",createModuleInjection:"createModuleInjection"},3);module1.link('./lib/inject-shader',{combineInjects:"combineInjects"},4);module1.link('./lib/filters/normalize-module',{normalizeShaderModule:"normalizeShaderModule"},5);module1.link('./utils/shader-utils',{getQualifierDetails:"getQualifierDetails",getPassthroughFS:"getPassthroughFS",typeToChannelSuffix:"typeToChannelSuffix",typeToChannelCount:"typeToChannelCount",convertToVec4:"convertToVec4"},6);module1.link('./modules/fp32/fp32',{default:"fp32"},7);module1.link('./modules/fp64/fp64',{default:"fp64"},8);module1.link('./modules/project/project',{default:"project"},9);module1.link('./modules/lights/lights',{default:"lights"},10);module1.link('./modules/dirlight/dirlight',{default:"dirlight"},11);module1.link('./modules/picking/picking',{default:"picking"},12);module1.link('./modules/diffuse/diffuse',{default:"diffuse"},13);module1.link('./modules/phong-lighting/phong-lighting',{gouraudlighting:"gouraudlighting",phonglighting:"phonglighting"},14);module1.link('./modules/pbr/pbr',{default:"pbr"},15);module1.link('./modules/transform/transform',{default:"_transform"},16);// shadertools exports

// DEFAULT SHADERS
// A set of base shaders that leverage the shader module system,
// dynamically enabling features depending on which modules are included



// DOCUMENTED APIS



// HELPERS



// UTILS








// SHADER MODULES










// experimental


const MODULAR_SHADERS = {
  vs: MODULAR_VS,
  fs: MODULAR_FS,
  defaultUniforms: {}
};

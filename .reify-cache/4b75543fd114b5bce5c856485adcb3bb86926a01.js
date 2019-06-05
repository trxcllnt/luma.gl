"use strict";var module1=module;module1.link('@luma.gl/webgl',{isWebGL:"isWebGL",isWebGL2:"isWebGL2",lumaStats:"lumaStats",createGLContext:"createGLContext",destroyGLContext:"destroyGLContext",resizeGLContext:"resizeGLContext",setGLContextDefaults:["setGLContextDefaults","setContextDefaults"],getContextInfo:"getContextInfo",getGLContextInfo:"getGLContextInfo",getContextLimits:"getContextLimits",FEATURES:"FEATURES",hasFeature:"hasFeature",hasFeatures:"hasFeatures",getFeatures:"getFeatures",canCompileGLGSExtension:"canCompileGLGSExtension",cloneTextureFrom:"cloneTextureFrom",getKeyValue:"getKeyValue",getKey:"getKey",getContextDebugInfo:"glGetDebugInfo"},0);module1.link('@luma.gl/webgl-state-tracker',{trackContextState:"trackContextState",resetParameters:"resetParameters",getParameter:"getParameter",getParameters:"getParameters",setParameter:"setParameter",setParameters:"setParameters",withParameters:"withParameters",getModifiedParameters:"getModifiedParameters"},1);module1.link('@luma.gl/webgl',{Buffer:"Buffer",Shader:"Shader",VertexShader:"VertexShader",FragmentShader:"FragmentShader",Program:"Program",Framebuffer:"Framebuffer",Renderbuffer:"Renderbuffer",Texture2D:"Texture2D",TextureCube:"TextureCube",clear:"clear",clearBuffer:"clearBuffer",readPixelsToArray:"readPixelsToArray",readPixelsToBuffer:"readPixelsToBuffer",copyToDataUrl:"copyToDataUrl",copyToImage:"copyToImage",copyToTexture:"copyToTexture",blit:"blit"},2);module1.link('@luma.gl/webgl',{Query:"Query",Texture3D:"Texture3D",TransformFeedback:"TransformFeedback",VertexArrayObject:"VertexArrayObject",VertexArray:"VertexArray",UniformBufferLayout:"UniformBufferLayout",setPathPrefix:"setPathPrefix",loadFile:"loadFile",loadImage:"loadImage",Accessor:"_Accessor",clearBuffer:"_clearBuffer"},3);module1.link('./geometry/geometry',{default:"Geometry"},4);module1.link('./materials/material',{default:"Material"},5);module1.link('./lighting/light-source',{AmbientLight:"AmbientLight",DirectionalLight:"DirectionalLight",PointLight:"PointLight"},6);module1.link('./lib/animation-loop',{default:"AnimationLoop"},7);module1.link('./lib/picking-colors',{encodePickingColor:"encodePickingColor",decodePickingColor:"decodePickingColor",getNullPickingColor:"getNullPickingColor"},8);module1.link('./lib/model',{default:"Model"},9);module1.link('./lib/transform',{default:"Transform"},10);module1.link('./lib/clip-space',{default:"ClipSpace"},11);module1.link('./lib/shader-cache',{default:"_ShaderCache"},12);module1.link('./lib/animation-loop-proxy',{default:"_AnimationLoopProxy"},13);module1.link('./multipass/multi-pass-renderer',{default:"_MultiPassRenderer"},14);module1.link('./multipass/render-state',{default:"_RenderState"},15);module1.link('./multipass/pass',{default:"_Pass"},16);module1.link('./multipass/composite-pass',{default:"_CompositePass"},17);module1.link('./multipass/clear-pass',{default:"_ClearPass"},18);module1.link('./multipass/render-pass',{default:"_RenderPass"},19);module1.link('./multipass/copy-pass',{default:"_CopyPass"},20);module1.link('./multipass/texture-pass',{default:"_TexturePass"},21);module1.link('./multipass/shader-module-pass',{default:"_ShaderModulePass"},22);module1.link('./geometries/cone-geometry',{default:"ConeGeometry"},23);module1.link('./geometries/cube-geometry',{default:"CubeGeometry"},24);module1.link('./geometries/cylinder-geometry',{default:"CylinderGeometry"},25);module1.link('./geometries/ico-sphere-geometry',{default:"IcoSphereGeometry"},26);module1.link('./geometries/plane-geometry',{default:"PlaneGeometry"},27);module1.link('./geometries/sphere-geometry',{default:"SphereGeometry"},28);module1.link('./geometries/truncated-cone-geometry',{default:"TruncatedConeGeometry"},29);module1.link('./materials/phong-material',{default:"PhongMaterial"},30);module1.link('./materials/pbr-material',{default:"PBRMaterial"},31);module1.link('./scenegraph/nodes/scenegraph-node',{default:"ScenegraphNode"},32);module1.link('./scenegraph/nodes/group-node',{default:"GroupNode"},33);module1.link('./scenegraph/nodes/model-node',{default:"ModelNode"},34);module1.link('./scenegraph/nodes/camera-node',{default:"CameraNode"},35);module1.link('@luma.gl/shadertools',{registerShaderModules:"registerShaderModules",setDefaultShaderModules:"setDefaultShaderModules",assembleShaders:"assembleShaders",setShaderHook:"setShaderHook",setModuleInjection:"setModuleInjection",combineInjects:"combineInjects",normalizeShaderModule:"normalizeShaderModule",fp32:"fp32",fp64:"fp64",project:"project",lights:"lights",dirlight:"dirlight",picking:"picking",diffuse:"diffuse",gouraudlighting:"gouraudlighting",phonglighting:"phonglighting",pbr:"pbr",_transform:"_transform",MODULAR_SHADERS:"MODULAR_SHADERS",getQualifierDetails:"getQualifierDetails",getPassthroughFS:"getPassthroughFS",typeToChannelSuffix:"typeToChannelSuffix",typeToChannelCount:"typeToChannelCount",convertToVec4:"convertToVec4"},36);module1.link('@luma.gl/webgl',{log:"log",assert:"assert",uid:"uid",self:"self",window:"window",global:"global",document:"document"},37);// CORE MODULE EXPORTS FOR LUMA.GL

// WEBGL CONTEXT



































// WEBGL1 OBJECTS/FUNCTIONS





































// CORE - WEBGL INDEPENDENT




// LIB






// Experimental core exports



// Multipass Rendering








// export {default as _MaskPass} from './multipass/mask-pass';
// export {default as _ClearMaskPass} from './multipass/clearmask-pass';


// export {default as _Canvas} from './multipass/canvas';

// Geometries








// Materials



// SCENEGRAPH

// Core nodes





// TODO/CLEAN UP FOR V7
//  We should have a minimal set of forwarding exports from shadertools (ideally none)
//  Analyze risk of breaking apps






























// UTILS: undocumented API for other luma.gl modules


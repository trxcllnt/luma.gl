"use strict";module.export({stubRemovedMethods:()=>stubRemovedMethods});var log;module.link('./log',{default(v){log=v}},0);

// Install stubs for removed methods
function stubRemovedMethods(instance, className, version, methodNames) {
  const upgradeMessage = `See luma.gl ${version} Upgrade Guide at \
http://uber.github.io/luma.gl/#/documentation/overview/upgrade-guide`;

  const prototype = Object.getPrototypeOf(instance);

  methodNames.forEach(methodName => {
    if (prototype.methodName) {
      return;
    }

    prototype[methodName] = () => {
      log.removed(`Calling removed method ${className}.${methodName}: `, upgradeMessage)();
      throw new Error(methodName);
    };
  });
}

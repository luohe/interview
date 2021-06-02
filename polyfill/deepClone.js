function isObject(value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}


function clone(target, map = new WeakMap) {
  if (target === null || typeof target !== "object") return target;

  if (map.has(target)) return map.get(target);

  const cloneTarget = Array.isArray(target) ? [] : {};
  map.set(target, cloneTarget);
  for (let key in target) {
    cloneTarget[key] = clone(target[key], map);
  }
  return cloneTarget;
}
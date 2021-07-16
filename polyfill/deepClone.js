function isObject(value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}

function clone(target, map = new WeakMap) {
  if (!isObject(target)) return target;
  if (map.has(target)) return map.get(target);

  var cloneTarget = Array.isArray(target) ? [] : {};
  map.set(target, cloneTarget);

  for(var key in target) {
    cloneTarget[key] = clone(target[key], map);
  }

  return cloneTarget;
}
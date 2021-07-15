function isObject(value) {
  return value !== null && typeof value === "object";
}

function clone(target, map = new WeakMap()) {
  if (!isObject) return target;
  const cloneTarget = Array.isArray(target) ? [] : {};

  map.set(target, cloneTarget);

  for(let key in target) {
    cloneTarget = clone(target[key], map);
  }

  return cloneTarget;
}
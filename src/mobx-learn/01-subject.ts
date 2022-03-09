import { watcher } from "./index"

// 观察：实现observable
export function observable(target: any) {
  const _target = {...target}
  let proxy = {};

  Object.keys(target).forEach(key => {
    Object.defineProperty(proxy, key, {
      get() {
        const value = _target[key]
        console.log(`read ${key} = ${value}`);
        return value
      },

      set(value) {
        console.log(`set ${key} = ${value}`);
        _target[key] = value
        return value;
      }
    })
  });

  return proxy
}

export default observable








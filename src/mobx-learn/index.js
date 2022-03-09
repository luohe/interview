// 依赖收集与反应：从实现autorun开始

// 接收一个函数作为参数，并且： 会立即执行参数 fn
// autorun:(fn:Function)=>void
let watcher = null;

function autorun(fn) {
    watcher = fn;
    fn()
}

// 观察：实现observable
function observable(target) {
    const _target = {...target}
    let proxy = {};
    let subs = new Map()

    Object.keys(target).forEach(key => {
        Object.defineProperty(proxy, key, {
            get() {
                if (watcher) {
                    const watchers = subs.get(key)
                    if (!watchers) {
                        subs.set(key, new Set([watcher]))
                    } else {
                        watchers.add(watcher)
                    }
                }
                const value = _target[key]
                return value
            },
            set(value) {
                _target[key] = value
                const watchers = subs.get(key)
                if (watcher) {
                    watchers.forEach((watcher) => {
                        watcher()
                    })
                }
                return value;
            }
        })
    });

    return proxy
}

const data = observable({ age: 10, name: 'Zchary' })


autorun(() => { console.log(`autorun: is  years old`) })
autorun(() => { console.log(`autorun1: is years old`) })
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        data.age ++;
    }, 1000 * (i+1))
}
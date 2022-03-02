// 依赖收集与反应：从实现autorun开始

// 接收一个函数作为参数，并且： 会立即执行参数 fn
// autorun:(fn:Function)=>void
let watcher = null;
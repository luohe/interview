// 在一个事件发生一定时间之后，才执行特定动作。
// 先注册，延迟执行。如果触发重新开始。
// 没有执行，立即执行。延迟重制。如果触发，重新开始计算重制
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  }
}

function debounce(fn, wait, imm) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    if (timeout) clearTimeout(timeout);

    if (imm) {
      var callNow = !timeout;

      if (callNow) fn.apply(context, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
    } else {
      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  }
}
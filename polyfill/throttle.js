// 如果持续触发事件，每隔一段事件，只执行一次。
function throttle(func, wait) {
  var timeout;
  return function () {
    context = this; args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  }
}
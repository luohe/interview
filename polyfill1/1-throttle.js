function throttle(fn, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(context, args);
        timeout = null;
      }, wait);
    }
  }
}
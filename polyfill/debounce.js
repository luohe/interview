function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var ctx = context, args = arguments;
    clearTimeout(timmeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(ctx, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(ctx, args);
      }, wait);
    }
  }
}
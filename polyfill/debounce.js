function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var cxt = this, args = arguments;
    clearTimeout(timeout);
    if (immediate) {
      let calledNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (calledNow) func.apply(cxt, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(cxt, args);
      }, wait);
    }
  }
}
Array.prototype.flat = function(depth = 1) {
  var res = [].concat(this);
  while(depth--) {
    for(var i = res.length - 1; i >= 0; i--) {
      if (!Array.isArray(res[i])) continue;
      res[i].splice(i, 1, ...res[i]);
    }
  }
  return res;
}





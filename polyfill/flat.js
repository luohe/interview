Array.prototype.flat = function(depth = 1) {
  const flatArr = [].concat(this);
  while(depth--) {
    const len = flatArr.length;
    for(let i = len; i > 0; i--) {
      if (!Array.isArray(flatArr[i])) continue;
      flatArr.splice(i, 1, ...flatArr[i]);
    }
  }
  return flatArr;
}
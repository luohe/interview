function unique(arr, isSort) {
  var res = [], seen;
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    if (isSort) {
      if (seen !== value) res.push(value);
      seen = value;
    } else if (arr.indexOf(value) === i) {
      res.push(value);
    }
  }

  return res;
}
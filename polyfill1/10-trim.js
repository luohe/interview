String.prototype.trim = function() {
  var str = this,
  str = str.replace(/^\s*/, ""),
  n = str.length;
  while(n >= 0 && str.charAt(--n) === " ");
  return str.slice(0, n+1);
}
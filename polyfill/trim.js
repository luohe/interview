String.prototype.trim = function() {
  var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
  while(ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}
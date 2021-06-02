Function.prototype.bind = Function.prototype.bind || function(context) {
  if (typeof this !== 'function') {
    throw Error("only called by function");
  }
  var self = this;
  var params = Array.prototype.slice.call(arguments, 1);
  
  const FNOP = function() {};

  const f = function() {
    const sParams = Array.prototype.slice.call(arguments, 0);
    return self.apply(this instanceof FNOP ? this : context, sParams.concat(params));
  }

  // 防止被绑定函数的prototype被修改
  FNOP.prototype = self.prototype;
  f.prototype = new FNOP();
  return f;
}
Function.prototype.bind = Function.prototype.bind || function(context) {
  const self = this;
  if (typeof self !== 'function') {
    throw Error("called only is function");
  }
  const args = Array.prototype.slice.call(arguments, 1);

  const FNOP = function() {};

  const fBind = function() {
    const _args = Array.prototype.slice.call(arguments, 0);
    return self.call(this instanceof FNOP ? this : context, ...args, ..._args);
  }

  FNOP.prototype = self.prototype;
  fBind.prototype = new FNOP();
  return fBind;
}

Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}

Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
      result = context.fn();
  }
  else {
      var args = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          args.push('arr[' + i + ']');
      }
      result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result;
}
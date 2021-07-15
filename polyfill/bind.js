Function.prototype.bind = Function.prototype.bind || function(context) {
  if (typeof this !== 'function') {
    throw Error("called by function");
  }

  const self = this;
  const params = Array.prototype.slice.call(arguments, 1);
  const FNOP = function() {};

  const FBound = function() {
    const _params = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof FNOP ? this : context, params.concat(_params));
  }

  FNOP.ptototype = self.prototype;
  FBound.prototype = new FNOP();
  return FBound;
}


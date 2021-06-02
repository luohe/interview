const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
  self = this;
  self.status = PENDING;
  self.fulfilledCallback = [];
  self.rejectedCallback = [];

  function resolve(value) {
    if (value instanceof Promise) {
      value,then(resolve, reject);
      return;
    }
    setTimeout(() => {
      if (self.status === PENDING) {
        self.status = FULFILLED;
        self.data = value;
        for (var i = 0; i < self.fulfilledCallback.length; i++) {
          self.fulfilledCallback[i](this.data);
        } 
      }
    });
  }

  function reject(reason) {
    setTimeout(() => {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.data = reason;
        for (var i = 0; i < self.rejectedCallback.length; i++) {
          self.rejectedCallback[i](reason);
        } 
      }
    });
  }

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}


Promise.prototype.then = function(onResolve, onReject) {
  var self = this, promise2;
  onResolve = typeof onResolve === 'function' ? onResolve : function(value) { return value };
  onReject = typeof onReject === 'function' ? onReject : function(error) { throw Error(error) };

  if (self.status === FULFILLED) {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(() => {
        try {
          const x = onResolve(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    })
  }
  if (self.status === REJECTED) {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(() => {
        try {
          const x = onReject(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      })
    })
  }
  if (self.status === PENDING) {
    return promise2 = new Promise(function(resolve, reject) {
      self.fulfilledCallback.push(function(value) {
        try {
          const x = onResolve(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        } 
      })
      self.fulfilledCallback.push(function(value) {
        try {
          const x = onReject(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        } 
      })
    })
  }
}

/**
 * x: promise2
 * x: Promise pending fulfilled/reject
 * x: thenable
*/
function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new Error('cycle called'));
  }

  if (x instanceof Promise) {
    if (x.status === PENDING) {
      x.then((v) => resolvePromise(promise2, v, resolve, reject), reject);
    } else {
      x.then(resolve, reject);
    }
    return;
  }

  if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
    var then = x.then, thenCallbackOrThrow = false;
    if (typeof then === 'function') {
      try {
        then.call(x, function(v) {
          if (thenCallbackOrThrow) return;
          thenCallbackOrThrow = true;
          resolvePromise(promise2, v, resove, reject);
        }, function(r) {
          if (thenCallbackOrThrow) return;
          thenCallbackOrThrow = true;
          reject(r);
        });
      } catch (error) {
        if (thenCallbackOrThrow) return;
        thenCallbackOrThrow = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

Promise.prototype.catch = function() {
  return this.then(null, onReject);
}

// 不管成功还是失败，都会走到finally中,并且finally之后，还可以继续then。并且会将值原封不动的传递给后面的then.
Promise.prototype.finally = function(callback) {
  return this.then(function(value) {
    return Promise.resolve(callback()).then(() => {
      return value;
    }, function(err) {
      return Promise.resolve(callback()).then(() => {
        throw err;
      })
    })
  })
}

Promise.resolve = function(p) {
  if (p instanceof Promise) return p;

  return new Promise(function(resolve, reject) {
    if (p !== null && (typeof p === 'object' || typeof p === 'function')) {
      const then = p.then;
      if (typeof then === 'function') {
        setTimeout(() => {
          then(resolve, reject);
        });
      } else {
        resolve(p)
      }
    } else {
      resolve(p)
    }
  })
}

Promise.reject = function(p) {
  return new Promise(function(resolve, reject) {
    reject(p);
  })
}


Promise.all = function(promises) {
  let counter = 0; const vList = [];
  return new Promise(function(resolve, reject){
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function(v) {
        vList[i] = v;
        counter += 1;
        if (counter === promises.length) {
          resolve(vList);
        }
      }).catch(function(reason) {
        reject(reason);
      })
    }
  })
}

Promise.any = function(promises) {
  let counter = 0; const vList = [];
  return new Promise(function(resolve, reject){
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function(v) {
        resolve(v);
      }).catch(function(reason) {
        vList[i] = reason;
        counter += 1;
        if (counter === promises.length) {
          reject(new AggregateError(vList));
        }
      })
    }
  })
}

Promise.race = function(promises) {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function(v) {
        resolve(v);
      }).catch(function(reason) {
        reject(reason);
      })
    }
  })
}
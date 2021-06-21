const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';
const PENDING = 'pending';

function Promise(executer) {
  self = this;
  self.status = PENDING;
  self.rejectedCallback = [];
  self.fulfilledCallback = [];

  function resolve(value) {
    if (value instanceof Promise) {
      value.then(resolve, reject);
      return;
    }

    setTimeout(() => {
       if (self.status === PENDING) {
         self.status = FULFILLED;
         self.data = value;
         for(var i = 0; i < self.fulfilledCallback.length; i++) {
           self.fulfilledCallback[i](value);
         }
       }
    });
  }
  function reject(reason) {
    setTimeout(() => {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.data = reason;
        for(var i = 0; i < self.rejectedCallback.length; i++) {
          self.rejectedCallback[i](reason);
        }
      } 
    });
  }

  try {
    executer(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

Promise.prototype.then = function(onResolve, onReject) {
  var self = this, promise2;
  onResolve = typeof onResolve === 'function' ? onResolve : function(value) { return value };
  onReject = typeof onResolve === 'function' ? onReject : function(reason) { throw Error(reason) };

  if (self.status === FULFILLED) {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(() => {
       try {
         const x = onResolve(self.data);
         resolvePromise(promise2, x, resolve, reject);
       } catch (error) {
         reject(error);
       } 
      });
    })
  }
  if (self.status === REJECTED) {
    return promise2 = new Pomise(function(resolve, reject) {
      setTimeout(() => {
       try {
         const x = onReject(self.data);
         resolvePromise(promise2, x, resolve, reject);
       } catch (error) {
         reject(error);
       } 
      });
    });
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
      });
      self.rejectedCallback.push(function(value) {
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

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new Error('cycled called'));
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
        })
      } catch (error) {
        if (thenCallbackOrThrow) return;
        thenCallbackOrThrow = true;
        reject(error);
      }
    } else {
      resolve(x)
    }
  } else {
    resolve(x);
  }
}
function EventEmit() {
  this.events = {};
}

EventEmit.prototype.on = function(event, handle, once = false) {
  if (!this.events[event]) this.events[event] = [];

  const listeners = this.events[event];
  if (!listeners.includes(handle)) {
    listeners.push(handle);
    handle.once = once;
  }
}

EventEmit.prototype.off = function(event, handle) {
  const listeners = this.events[event];
  if (listeners) {
    if (!handle) {
      this.events[event] = [];
    } else {
      listeners.filter(function(listener) { return listener !== handle })
    }
  }
}

EventEmit.prototype.emit = function(event) {
  const args = Array.prototype.slice.call(arguments, 1),
  self = this;

  const listeners = this.events[event];
  if (listeners) {
    listeners.forEach(function(listener) {
      listener.apply(self, args);
      if (listener.once) this.off(event, listener);
    });
    return true;
  }
  return false;
}

EventEmit.prototype.once = function(event, handle) {
  this.on(event, handle, true);
} 
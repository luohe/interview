export default class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop()
  }

  peak() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
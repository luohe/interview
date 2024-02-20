interface QueueI {
  items: any[];
}

export class Queue implements QueueI {
  items: any[] = []

  // 将元素添加到队列的尾部
  enqueue(element: any) {
    this.items.push(element)
  }

  // 移除队列的头部元素，并返回该元素
  dequeue() {
    if (this.items.length === 0) return null
    return this.items.shift()
  }

  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列中元素的个数
  size() {
    return this.items.length;
  }

  // 获取队列的头部元素，不移除
  front() {
    if (this.items.length === 0) return null;
    return this.items[0]
  }

  // 返回队列的尾部元素，不移除
  rear() {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }
}

interface DequeI {
  items: any[];
}


export class Deque implements DequeI {
  items: any[] = []

  // 队首添加
  addFront(element: any) {
    this.items.unshift(element)
  }

  // 队首移除
  removeFront() {
    if (this.items.length === 0) return null;
    return this.items.shift()
  }

  // 队尾添加
  addRear(element: any) {
    this.items.push(element)
  }

  // 队尾移除
  removeRear() {
    if (this.items.length === 0) return null;
    return this.items.pop()
  }

  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列中元素的个数
  size() {
    return this.items.length;
  }

  // 获取队列的头部元素，不移除
  front() {
    if (this.items.length === 0) return null;
    return this.items[0]
  }

  // 返回队列的尾部元素，不移除
  rear() {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }
}
interface StackI {
  items: any[];
}

export class Stack implements StackI {
  items: any[] = []

  push(element: any) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  // 在栈顶中搜索element, 找到了返回相对于栈顶的偏移量。没找到返回-1
  search(element: any) {
    const idx = this.items.indexOf(element)
    return  idx < 0 ? idx : this.items.length - idx - 1
  }
}
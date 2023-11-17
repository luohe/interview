class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }

    this.length++
  }

  // 在第index个的节点后面增加一个节点
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw Error('index out of range')
    }
    const newNode = new Node(value);

    // 插入
    if (index === 0) {
      // this.length > 0 || === 0
      newNode.next = this.head
      this.head = newNode
      // this.lenght === 0
      if (!this.tail) {
        this.tail = newNode
      }
    } if (index === this.length) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      let curIdx = 1;
      let curNode = this.head;

      while(curIdx < index) {
        if (curIdx === index) break;
        curNode = curNode.next;
        curIdx++
      }

      newNode.next = curNode.next
      curNode.next = newNode;
    }

    // 更新length
    this.length++
  }

  getAt(index) {
    if (index < 0 || index <= this.length) {
      throw new Error('index out of range')
    }
    let curNode = this.head;
    let curIdx = 0;
    while(curIdx <= index) {
      if (curIdx === index) break;
      curNode = curNode.next;
      curIdx++
    }
    return curNode.value;
  }

  removeAt(index) {}

  toArray() {
    let arr = []
    let curNode = this.head

    while(curNode) {
      arr.push(curNode.value);
      curNode = curNode.next
    }

    return arr;
  }
}

const nodeList = new LinkedList()

nodeList.append(1)
nodeList.append(2)
nodeList.append(3)
nodeList.append(4)
nodeList.append(5)
nodeList.append(7)
nodeList.insertAt(6, 5)
console.log(nodeList)
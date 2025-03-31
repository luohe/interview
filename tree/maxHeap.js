class MaxHeap {
  constructor(data = []) {
    if (!Array.isArray(data)) {
      throw Error('不是数组');
    }
    this.heap = data;
    // 最后一个节点的父节点就是最后一个非叶子结点
    // ～～((n-1 -1) /2) = ~~((n-2) / 2) = ~~(n/2) - 1
    const startIndex = Math.floor(this.heap.length / 2) - 1;
    for (let i = startIndex; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  swap(i, j) {
    const iV = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = iV;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2*index + 1
  }

  getRightChildIndex(index) {
    return 2*index + 2
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  // 插入一个元素
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1)
  }

  // 上浮操作：: 前提，所以父节点都已经堆化
  siftUp(index) {
    while(index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // 删除堆顶元素
  // 插入元素
  extractMax() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return max;
  }
  
  // 下沉操作: 前提，所以子节点都已经堆化
  // 构建堆\删除堆顶元素
  siftDown(index) {
    const size = this.size();
    while(true) {
      let maxIndex = index;
      const leftIndex = this.getLeftChildIndex(index);
      const rightIndex = this.getRightChildIndex(index);
      if (leftIndex < size && this.heap[leftIndex] > this.heap[maxIndex]) {
        maxIndex = leftIndex
      }
      if (rightIndex < size && this.heap[rightIndex] > this.heap[maxIndex]) {
        maxIndex = rightIndex
      }
      if (index === maxIndex) break;
      this.swap(index, maxIndex);
      index = maxIndex
    }
  }
}
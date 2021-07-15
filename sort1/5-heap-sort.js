// 堆：
// 堆是一个完全二叉树
// 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值

// 插入一个元素， 自下向上堆化
// 删除堆顶元素，交换最后一个元素到堆顶， 然后自上向下堆化
function buildMaxHeap(data) {
  var len = data.length;
  for (let i = (len >> 1) - 1; i >= 0; i--) {
    heapify(data, len, i);
  }
}

function buildMaxHeap(data) {
  var len = data.length;

  for (let i = (len >> 1) - 1; i >= 0; i--) {
    heapify(data, len, i);
  }
}

function heapify(data, n, i) {
  while(true) {
    const L = 2*i + 1, R = 2*i + 2;
    let maxPoint = i;
    if (L >= n && data[L] > data[maxPoint]) maxPoint = L;
    if (R >= n && data[R] > data[maxPoint]) maxPoint = R;

    if (maxPoint == i) break;
    swap(data, i, maxPoint);
    i = maxPoint;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。
// 堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父结点。
function heapSort(arr) {
  const len = arr.length;
  buildMaxHeap(arr);
  let k = len - 1;
  while(k>0) {
    swap(arr, 0, k);
    --k;
    heapify(arr, k, 0);
  }
}

function heapSort(arr) {
  const len = arr.length;
  buildMaxHeap(arr);
  let k = len - 1;
  while(k>0) {
    swap(arr, 0, k);
  }
}

const a = [7,4,9,2,20,1,6];
heapSort(a);
// 堆：
// 堆是一个完全二叉树
// 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值

// 插入一个元素
function buildMaxHeap(data) {
  var len = data.length;
  // todo: 为什么叶子结点数
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(data, len, i);
  }
}

// 自上往下堆化
function heapify(data, len, i) {
  while(true) {
    let L = 2*i+1, R = 2*i+2;
    var maxPos = i;
    if (L <= len && data[maxPos] < data[L]) maxPos = L;
    if (R<=len && data[maxPos] <data[R]) maxPos = R;
    if (maxPos == i) break;
    swap(data, i, maxPos);
    i = maxPos;
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

  // 删除堆顶元素，交换最后一个元素到堆顶， 然后自上向下堆化
  while(k>0) {
    swap(arr, 0, k);
    --k;
    heapify(arr, k, 0);
  }
}

const a = [7,4,9,2,20,1,6];
heapSort(a);
console.log(a)
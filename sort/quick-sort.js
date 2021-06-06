function quickSortRecursive(arr, start, end) {
  if (start >= end) return;
  var pivot = arr[end];

  let empty = end; cur = start;
  while(empty != cur) {
    const isSwap = empty > cur ? arr[cur] > pivot : arr[cur] < pivot;
    if (isSwap) {
      // 交换数据
      arr[empty] = arr[cur];
      // 交换空置的数据位点
      const temp = cur; cur = empty; empty = temp;
    }
    // 移动数组下标
    cur += cur > empty ? -1 : 1;
  }

  arr[empty] = pivot;
  quickSortRecursive(arr, start, empty - 1);
  quickSortRecursive(arr, empty + 1, end);
}

/**
 * 快速排序
 * 如果要排序的数组中下标从p到r之间的一组数据，我们选择p到r之间的任意一个数据作为分区点，
 * 并划分数据到分区点两边。然后对两边的数据依次递归。到区间为1，所有的数据就都有序了。
 */
function quickSort(arr) {
  quickSortRecursive(arr, 0, arr.length - 1);
}

const a = [7,4,9,2,20,1,6];
quickSort(a);
console.log(a);
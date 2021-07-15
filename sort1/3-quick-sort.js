function quickSortRecursive(arr, start, end) {
  let pivot = arr[end];

  let empty = end, cur = start;

  while(empty != cur) {
    const isSwap = empty > cur ? arr[cur] > pivot : arr[cur] < pivot;

    if (isSwap) {
      arr[empty] = arr[cur];
      const temp = cur;
      cur = empty;
      empty = temp;
    }
    cur += cur > empty ? -1 : 1;
  }

  arr[empty] = pivot;
  quickSortRecursive(arr, start, empty - 1);
  quickSortRecursive(arr, empty + 1, end);
}

function quickSort(arr) {

}

const a = [7,4,9,2,20,1,6];
quickSort(a);
console.log(a);
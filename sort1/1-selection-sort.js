/**
 * 最直观的排序
 * 在一个长度为 N 的无序数组中，第一次遍历 n-1 个数找到最小的和第一个数交换
 * 第二次从下一个数开始遍历 n-2 个数，找到最小的数和第二个数交换。
 * 重复以上操作直到第 n-1 次遍历最小的数和第 n-1 个数交换，排序完成。
 */
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minI = i;
    for (let j = i+1; j < len; j++) {
      if (arr[minI] > arr[j]) minI = j;
    }
    if (minI === i) continue;
    const temp = arr[i];
    arr[i] = arr[minI];
    arr[minI] = temp;
  }
  return arr;
}

const a = [7,4,9,2,20,1,6];
selectionSort(a);
console.log(a);
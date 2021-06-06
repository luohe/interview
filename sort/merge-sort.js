/**
 * 如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，
 * 再将排好序的两部分合并在一起，这样整个数组就都有序了。
 */
function mergeSort(nums) {
  const len = nums.length;

  function mergeSortRecursive(arr, result, start, end) {
    if (start >= end) return;

    const mid = start + ((end - start) >> 1);

    let start1 = start, end1 = mid;
    let start2 = mid + 1, end2 = end;
    mergeSortRecursive(arr, result, start, mid);
    mergeSortRecursive(arr, result, mid + 1, end);

    var k = start;
    while(start1 <= end1 && start2 <= end2) {
      result[k++] = arr[start1] <= arr[start2] ? arr[start1++] : arr[start2++];
    }

    while(start1 <= end1) {
      result[k++] = arr[start1++];
    }
  
    while(start2 <= end2) {
      result[k++] = arr[start2++];
    }

    for(let i = start; i <= end; i++) 
      arr[i] = result[i];
  }

  mergeSortRecursive(nums, new Array(len).fill(0), 0, nums.length - 1);
}

const a = [7,4,9,2,20,1,6];
mergeSort(a);
console.log(a);
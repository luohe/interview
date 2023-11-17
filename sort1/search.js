// 二分查找
// 双指针； mid === target
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (array[mid] === target) {
      return mid; // 找到目标元素，返回索引
    } else if (array[mid] < target) {
      left = mid + 1; // 目标元素在右侧，调整左边界
    } else {
      right = mid - 1; // 目标元素在左侧，调整右边界
    }
  }

  return -1; // 未找到目标元素
}

const nums = [3,4]
console.log(binarySearch(nums, 4));


// 插值查找
// 在二分的基础上，替换了mid值的计算：pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]))
function interpolationSearch(array, target) {
  let left = 0, right = array.lenght;

  while(left <= right ) {}
}
/**
 * 首先，我们将数组中的数据分为两个区间，已排序区间和未排序区间。 初始已排序区间只有一个元素，就是数组的第一个元素。
 * 插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，
 * 并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空，算法结束。
 */
function insertSort(nums) {
  const len = nums.length;
  if (len < 2) return nums;

  for (let i = 1; i < len; i++) {
    const curV = nums[i];
    let j = i - 1;
  
    for (; j >= 0; j--) {
      if (nums[j]> curV) {
        nums[j+1] = nums[j];
      } else {
        break;
      }
    }
    nums[j+1] = curV;
  }
}

const a = [7,4,9,2,20,1,6];
insertSort(a);
console.log(a);
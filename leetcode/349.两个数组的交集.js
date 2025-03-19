/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
<<<<<<< Updated upstream
=======
const set_intersection = (set1, set2) => {
  if (set1.size > set2.size) {
    return set_intersection(set2, set1);
  }

  const intersection = new Set();
  for (const num of set1) {
    if (set2.has(num)) {
      intersection.add(num)
    }
  }
  return [...intersection];
}

>>>>>>> Stashed changes
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
<<<<<<< Updated upstream
  // 排序后，利用双指针查看值是否一样
  nums1.sort((a,b) => a - b)
  nums2.sort((a,b) => a - b)
  const length1 = nums1.length, length2 = nums2.length;

  let index1 = 0, index2 = 0;
  const intersection = [];
  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[index1], num2 = nums2[index2];

    if (num1 === num2) {
      if (!intersection.length || intersection[intersection.length - 1] !== num1) {
        intersection.push(num1);
      }

      index1++
      index2++
    } else if (num1 > num2) {
      index2++
    } else {
      index1++
    }
  }

  return intersection;
=======
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return set_intersection(set1, set2);
>>>>>>> Stashed changes
};
// @lc code=end


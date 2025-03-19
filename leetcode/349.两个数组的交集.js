/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return set_intersection(set1, set2);
};
// @lc code=end


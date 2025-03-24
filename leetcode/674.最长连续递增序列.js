/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 1) return 1;
  let res = 1;
  let currentCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentCount++
    } else {
      res = Math.max(currentCount, res);
      currentCount = 1;
    }
  }

  return Math.max(currentCount, res);
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let a = -Number.MAX_VALUE, b = -Number.MAX_VALUE, c = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > a) {
      c = b;
      b = a;
      a = nums[i]
      continue;
    } else if (nums[i] > b) {
      c = b;
      b = nums[i]
      continue
    } else if (nums[i] > c) {
      c = nums[i]
    }
  }
  return b === -Number.MAX_VALUE ? a : (c === -Number.MAX_VALUE ? b : c);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = thirdMax;
// @after-stub-for-debug-end
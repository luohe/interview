/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const prevNums = {};

  for (let i = 0; i < nums.length; i++) {
    const curV = nums[i];
    const targetNum = target - curV;
    if (prevNums[targetNum] !== undefined) {
      return [prevNums[targetNum], i];
    } else {
      prevNums[curV] = i;
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表统计法： 遍历数组 nums ，用 HashMap 统计各数字的数量，即可找出 众数 。此方法时间和空间复杂度均为 O(N) 。
// 数组排序法： 将数组 nums 排序，数组中点的元素 一定为众数。
// 摩尔投票法： 核心理念为 票数正负抵消 。此方法时间和空间复杂度分别为 O(N) 和 O(1) ，为本题的最佳解法。
var majorityElement = function(nums) {
  let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }

    if (nums[i] === majority) {
      count++
    } else {
      count--
    }
  }
  return majority;
};
// @lc code=end


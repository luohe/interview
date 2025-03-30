/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    let index1 = 0, index2 = len - 1;
    while(index1 <= index2) {
      const mid = ~~((index2 - index1) / 2) + index1;
      if (nums[mid] === target) {
        return mid
      }
      if (nums[mid] < target) {
        index1 = mid + 1;
      } else {
        index2 = mid - 1;
      }
    }
    return -1;
};
// @lc code=end


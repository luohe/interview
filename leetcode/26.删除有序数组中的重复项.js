/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums;

    let fast = 1, slow = 0;

    const swap = (nums, i, j) => {
      const iNum = nums[i];
      nums[i] = nums[j];
      nums[j] = nums[i];
    }


    while (fast < nums.length) {
      if (nums[fast] === nums[fast-1]) {
        fast++
      } else {
        slow++
        swap(nums, slow, fast);
        fast++
      }
    }

    return slow + 1;
};
// @lc code=end


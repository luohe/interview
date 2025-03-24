/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 双指针，大于目标值，则右指针左移；小于目标值，则左指针右移。
  let left = 0, right = numbers.length - 1;

  while(left < right) {
    const curV = numbers[left] + numbers[right];
    if (curV === target) {
      return [left + 1, right + 1];
    } 

    if (curV > target) {
      right--
    } else {
      left++
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
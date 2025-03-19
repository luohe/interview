/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 利用数组和数组下标组成hash表
var findDuplicates = function(nums) {
  const swap = (nums, idx1, idx2) => {
    const idx1V = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = idx1V;
  }

  let j = 0;
  while(j < nums.length) {
    if (nums[j] !== nums[nums[j] - 1]) {
      swap(nums, j, nums[j] - 1)
    } else {
      j++
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   // 当前位置的值应该放在下标为 值-1 的位置
  //   // 如果下标为 值-1 的位置已经有值了，则往后看。

  //   // 包含了两种情况的判断
  //   // 1. 当前的下标i放的数据是对的
  //   // 2. 当前下标i放的数据和数据应该放的下标上的数据重复了
  //   while(nums[i] !== nums[nums[i] - 1]) {
  //     swap(nums, i, nums[i] - 1)
  //   }
  // }

  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      res.push(nums[i])
    }
  }

  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDuplicates;
// @after-stub-for-debug-end
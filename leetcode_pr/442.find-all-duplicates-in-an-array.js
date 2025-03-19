/*
 * @lc app=leetcode.cn id=442 lang=javascript
 * @lcpr version=30204
 *
 * [442] 数组中重复的数据
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const res = []
  // 利用值的真负性，来表示值出现的次数
  for (let i = 0; i < nums.length; i++) {
    const x = Math.abs(nums[i])
    if (nums[x - 1] > 0) {
      nums[x - 1] = -nums[x - 1]
    } else {
      res.push(x)
    }
  }

  return res;
};
// @lc code=end



/*
// @lcpr case=start
// [4,3,2,7,8,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */


// @after-stub-for-debug-begin
module.exports = findDuplicates;
// @after-stub-for-debug-end
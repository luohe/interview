/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */


// @lcpr-template-start

// @lcpr-template-end
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
        const targetIndex = prevNums[targetNum];

        if (targetIndex !== undefined) {
            return [targetIndex, i];
        } else {
            prevNums[curV] = i;
        }
    }
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
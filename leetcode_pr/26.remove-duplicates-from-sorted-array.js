/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30204
 *
 * [26] 删除有序数组中的重复项
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    function swap(nums, i, j) {
      const iV = nums[i];
      nums[i] = nums[j]
      nums[j] = nums[i]
    }

    let slow = 0, fast = 1;

    while(fast < nums.length) {
      if (nums[fast] === nums[fast - 1]) {
        fast++
      } else {
        slow++;
        swap(nums, slow, fast);
        fast++
      }
    }

    return slow+1;
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */


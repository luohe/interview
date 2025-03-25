/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function swap(nums, i, j) {
  const iV = nums[i];
  nums[i] = nums[j];
  nums[j] = iV;
}

var reverseString = function(s) {
    let i = 0, j = s.length - 1;

    while(i < j) {
      swap(s, i, j);
      i++;
      j--;
    }
    return s;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30204
 *
 * [9] 回文数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x % 10 === 0 || x < 0) return false;
  var x2 = x, res = 0;
  while (x2) {
    res = res*10 + (x2 % 10);
    x2 = ~~(x2 / 10)
  }
  return x === res;
};
// @lc code=end



/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */


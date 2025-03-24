/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
    let p = 1, p1 = 2;
    for (let i = 2; i < n; i++) {
      const cur = p + p1;
      p = p1;
      p1 = cur;
    }
    return p1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end
/*
 * @lc app=leetcode.cn id=LCR 126 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 126] 斐波那契数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let r = 0, p = 0, q = 1;
  for (let i = 2; i <= n; i++) {
    r = p;
    p = q;
    q = (r + p) % 1000000007;
  }

  return q;
};
// @lc code=end


// @lcpr-div-debug-arg-start
// funName=81
// paramTypes= ["number"]
// @lcpr-div-debug-arg-end




/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = fib;
// @lcpr-after-debug-end
// @lcpr-after-debug-begin
module.exports = 81;
// @lcpr-after-debug-end
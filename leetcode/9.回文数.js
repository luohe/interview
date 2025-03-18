/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 负数和10的倍数不是回文
  // 反转后和原值进行比较
  // !(x % 10) && x) 

  // x小于0，且是10的倍数（>0）
  if ((x !== 0 && x % 10 === 0) || x < 0) return false;
  var x2 = x, res = 0;
  while (x2) {
    res = res*10 + (x2 % 10);
    x2 = ~~(x2 / 10)
  }
  return x === res;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const maxLen = Math.max(a.length, b.length);
  const a1 = a.padStart(maxLen, '0')
  const b1 = b.padStart(maxLen, '0')

  let ans = '', p = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    const curV = Number(a1[i]) + Number(b1[i]) + p;
    p = 0;
    if (curV > 1) {
      ans = String(curV % 2) + ans;
      p = 1;     
    } else {
      ans = String(curV) + ans;
    }
  }
  return p > 0 ? String(p) + ans : ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addBinary;
// @after-stub-for-debug-end
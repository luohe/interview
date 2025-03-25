/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const maxL = Math.max(num1.length, num2.length);
    const padNum1 = num1.padStart(maxL, 0);
    const padNum2 = num2.padStart(maxL, 0);

    let res = '', p = 0;
    for (let index = maxL - 1; index >= 0; index--) {
      const curV = Number(padNum1.charAt(index)) + Number(padNum2.charAt(index)) + p;
      p = ~~(curV/10);
      res = String((curV % 10)) + res;
    }

    return p > 0 ? String(p) + res : res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addStrings;
// @after-stub-for-debug-end
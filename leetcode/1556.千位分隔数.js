/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let res = '', nS = String(n);

    let p = 0;
    for (let i = nS.length - 1; i >= 0; i--) {
      if (p !== 0 && p % 3 === 0) {
        res = nS.charAt(i) + '.' + res;
        p=0;
      } else {
        res = nS.charAt(i) + res;
      }

      p++
    }

    return res;
};
// @lc code=end


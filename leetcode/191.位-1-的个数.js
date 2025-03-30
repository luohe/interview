/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let p = n, res = 0;
    while(p > 0) {
      if (p % 2 === 1) res++;
      p = ~~(p / 2);
    }
    return res;
};
// @lc code=end


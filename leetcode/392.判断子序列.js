/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence1 = function(s, t) {
  let index1 = 0, index2 = 0, sLen = s.length, tLen = t.length;
  if (sLen <= 0) return true

  while(index2 < tLen && index1 < sLen) {
    if (s[index1] !== t[index2]) {
      index2++;
    } else {
      index1++;
      index2++;

      if (index1 === sLen) {
        return true;
      }
    }
  }

  return false
};

var isSubsequence1 = function(s, t) {
  // 
};
// @lc code=end


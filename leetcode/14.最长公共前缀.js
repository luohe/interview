/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ""

  let ans = strs[0];


  // 第i个字符串；第j个字母。
  for (let i = 0; i < strs.length; i++) {
    let j = 0
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) break;
    }
    ans = ans.slice(0, j)
    if (ans === '') return ans;
  }

  return ans
};
// @lc code=end


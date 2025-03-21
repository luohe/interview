/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30204
 *
 * [14] 最长公共前缀
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''

    let ans = strs[0];

    for (let i = 1; i < strs.length; i++) {
      let j = 0
      for (; j < ans.length && j < strs[i].length; j++) {
        if (ans[j] !== strs[i][j]) break
      }
      ans = ans.slice(0, j);
      if (ans.length === 0) return ans;
    }

    return ans;
};
// @lc code=end



/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */


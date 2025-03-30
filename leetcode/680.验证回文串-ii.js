/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0, j = s.length - 1;
    const isCheck = (i, j) => {
      while(i < j) {
        if (s[i] === s[j]) {
          i++;
          j--;
          continue
        }
        return false;
      }
      return true;
    }

    while(i < j) {
      if (s[i] === s[j]) {
        i++;
        j--;
        continue
      }
      return isCheck(i+1, j) || isCheck(i, j-1);
    }

    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = validPalindrome;
// @after-stub-for-debug-end
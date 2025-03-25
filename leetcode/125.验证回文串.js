/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
const isValid = (c) => {
  return /[a-z0-9]/.test(c);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();

  let index1 = 0, index2 = s.length - 1;

  while(index1 < index2) {
    let index1IsV = isValid(s[index1]);
    let index2IsV = isValid(s[index2]);

    if (!index1IsV) {
      index1++;
      continue
    }

    if (!index2IsV) {
      index2--;
      continue
    }

    if (index1IsV === index2IsV) {
      if (s.charAt(index1) === s.charAt(index2)) {
        index1++;
        index2--;
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
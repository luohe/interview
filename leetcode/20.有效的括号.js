/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    const curV = s.charAt(i);
    if (curV === '(' || curV === '[' || curV === '{') {
      res.push(curV)
      continue;
    }

    switch(curV) {
      case ')':
        if (res.pop() !== '(') return false;
        break
      case ']':
        if (res.pop() !== '[') return false;
        break
      case '}':
        if (res.pop() !== '{') return false;
        break
    }
  }

  return res.length === 0
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
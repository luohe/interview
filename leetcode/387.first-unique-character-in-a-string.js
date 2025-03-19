/*
 * @lc app=leetcode.cn id=387 lang=javascript
 * @lcpr version=30204
 *
 * [387] 字符串中的第一个唯一字符
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const sMap = new Map()
  for (let i = 0; i < s.length; i++) {
    const curChar = s.charAt(i);
    if (sMap.has(curChar)) {
      sMap.set(curChar, sMap.get(curChar) + 1);
    } else {
      sMap.set(curChar, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s.charAt(i)) === 1) {
      return i
    }
  }

  return -1
};
// @lc code=end



/*
// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

// @lcpr case=start
// "loveleetcode"\n
// @lcpr case=end

// @lcpr case=start
// "aabb"\n
// @lcpr case=end

 */


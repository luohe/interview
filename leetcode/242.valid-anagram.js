/*
 * @lc app=leetcode.cn id=242 lang=javascript
 * @lcpr version=30204
 *
 * [242] 有效的字母异位词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const table = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    table[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < t.length; i++) {
    const idx = t.charCodeAt(i) - 'a'.charCodeAt(0)
    table[idx]-=1;
    if (table[idx] < 0) return false
  }

  return true;
};
// @lc code=end



/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */


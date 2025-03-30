/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const swap = (s, i, j) => {
  const iV = s[i], jV = s[j];
  return s.slice(0, i) + jV + s.slice(i+1, j) + iV +s.slice(j+1);
}

var reverseWords = function(s) {
    let i = 0, j = 0;
    let wordR = []

    const revertWord = (i, j) => {
      let a = ''

      while(j >= i) {
       a = a + s[j];
       j--;
      }
    
      wordR.push(a);
    }

    while(j <= s.length) {
      if (s[j] === ' ' || j === s.length) {
        revertWord(i, j - 1);
        i = j = j+1;
        continue;
      }
      j++
    }

    return wordR.join(' ');
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end
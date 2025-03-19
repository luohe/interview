/*
 * @lc app=leetcode.cn id=13 lang=javascript
 * @lcpr version=30204
 *
 * [13] 罗马数字转整数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000],
    ])

    let res = 0;
    for (let i = 0; i < s.length; i++) {
      const curV = numMap.get(s[i]);
      if (i < s.length - 1 && curV < numMap.get(s[i + 1])) {
        res -= curV
      } else {
        res += curV;
      }
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end
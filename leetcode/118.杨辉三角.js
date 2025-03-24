/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1]];
    if (numRows == 1) return res;

    for (let i = 1; i < numRows; i++) {
      const prev = res[i - 1];
      const last = []

      for (let j = 0; j <= i; j++) {
        if (j === 0) {
          last.push(prev[0])
        } else if (j === i) {
          last.push(prev[j - 1])
        } else {
          last.push(prev[j - 1] + prev[j])
        }
      }

      res.push(last)
    }

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generate;
// @after-stub-for-debug-end
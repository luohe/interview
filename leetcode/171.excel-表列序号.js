/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;

    for (let i = columnTitle.length - 1; i >= 0; i--) {
      const curV = columnTitle.charCodeAt(i) - 64;
      res += curV * Math.pow(26, columnTitle.length - i - 1);
    }

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = titleToNumber;
// @after-stub-for-debug-end
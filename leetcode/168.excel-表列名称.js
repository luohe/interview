/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel 表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = ''

    let c = columnNumber;
    while(c > 0) {
      const curV = c % 26;
      c = ~~(c / 26);

      if (curV === 0) {
        res = 'Z' + res;
        c--
      } else {
        res = String.fromCharCode(curV + 64) + res;
      }
    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = convertToTitle;
// @after-stub-for-debug-end
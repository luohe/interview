/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const arr = new Array(rowIndex + 1).fill(1);
  arr[0] = 1;

  let p = 0;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = 0; j <= i; j++) {
      let p1 = p;
      p = arr[j];
      if (j !== 0 && j !== i) {
        arr[j] = p1 + arr[j]
      }
    }
  }
  
  return arr;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getRow;
// @after-stub-for-debug-end
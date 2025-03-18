/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0;
  while(x){
      // 翻转数据
      res = res * 10 + x % 10;
      // 翻转后判断大小
      if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
      // 
      x = ~~(x / 10);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end
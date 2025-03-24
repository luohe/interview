/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0;
  const isPrimes = new Array(n).fill(true);
  isPrimes[0] = false;
  isPrimes[1] = false;
  
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      // 标记i的所有倍数为非质数
      for (let j = i * i; j < n; j += i) {
        isPrimes[j] = false
      }
    }
  }

  return isPrimes.filter(item => item).length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = countPrimes;
// @after-stub-for-debug-end
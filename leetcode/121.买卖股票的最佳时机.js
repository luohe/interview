/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  // 只要知道最低的价格，和当前盈利
    let min = prices[0], profit = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] > min) {
        profit = Math.max(profit, prices[i] - min)
      }
      if (prices[i] < min) {
        min = prices[i];
      }
    }
    return profit
};
// @lc code=end


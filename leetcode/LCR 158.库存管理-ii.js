/*
 * @lc app=leetcode.cn id=LCR 158 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 158] 库存管理 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} stock
 * @return {number}
 */
// 哈希表统计法： 遍历数组 stock ，用 HashMap 统计各数字的数量，即可找出 众数 。此方法时间和空间复杂度均为 O(N) 。
// 数组排序法： 将数组 stock 排序，数组中点的元素 一定为众数。
// 摩尔投票法： 核心理念为 票数正负抵消 。此方法时间和空间复杂度分别为 O(N) 和 O(1) ，为本题的最佳解法。

var inventoryManagement = function(stock) {
    let res , count = 0;

    for (let i = 0; i < stock.length; i++) {
      if (count === 0) {
        res = stock[i];
        count = 1;
        continue;
      }

      if (stock[i] === res) {
        count++;
      } else {
        count--;
      }
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [6, 1, 3, 1, 1, 1]\n
// @lcpr case=end

 */


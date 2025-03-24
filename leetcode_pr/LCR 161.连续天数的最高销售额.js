/*
 * @lc app=leetcode.cn id=LCR 161 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 161] 连续天数的最高销售额
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function(sales) {
   // f(i) 是第i天未结尾的连续天数的最高销售额。
    let pre = 0, maxAns = sales[0];
    sales.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
// @lc code=end



/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */


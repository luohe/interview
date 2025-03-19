/*
 * @lc app=leetcode.cn id=7 lang=javascript
 * @lcpr version=30204
 *
 * [7] 整数反转
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    while (x) {
      res = res * 10 + (x % 10);
      if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
      x = ~~(x / 10);
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 123\n
// @lcpr case=end

// @lcpr case=start
// -123\n
// @lcpr case=end

// @lcpr case=start
// 120\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */


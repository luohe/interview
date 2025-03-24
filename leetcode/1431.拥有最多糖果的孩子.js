/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);

    const res = []
    for (let i = 0; i < candies.length; i++) {
      res.push(candies[i] + extraCandies >= max);
    }

    return res;
};
// @lc code=end


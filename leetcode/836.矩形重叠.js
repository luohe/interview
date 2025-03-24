/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // 两条线段的起点中的较大者小于等于两条线段终点中的较小者，等于两个线段有交点
    return Math.max(rec1[0], rec2[0]) < Math.min(rec1[2], rec2[2]) && 
    Math.max(rec1[1], rec2[1]) < Math.min(rec1[3], rec2[3])
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isRectangleOverlap;
// @after-stub-for-debug-end
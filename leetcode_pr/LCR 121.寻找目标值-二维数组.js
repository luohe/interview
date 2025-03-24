/*
 * @lc app=leetcode.cn id=LCR 121 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 121] 寻找目标值 - 二维数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function(plants, target) {
  if (plants.length === 0) return false;

  let m = 0, n = plants[0].length - 1; // 从右上角开始
  while(m < plants.length && n >= 0) { // 还有元素
    const curV = plants[m][n];

    if (target === curV) {
      return true;
    }
    if (target > curV) {
      m++
    } else {
      n--
    }
  }

  return false
};
// @lc code=end


// @lcpr-div-debug-arg-start
// funName=[[2,3,6,8],[4,5,8,9],[5,9,10,12]]\n8
// paramTypes= ["number[][]","number"]
// @lcpr-div-debug-arg-end




/*
// @lcpr case=start
// [[2,3,6,8],[4,5,8,9],[5,9,10,12]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5],[2,5,7]]\n4\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = [[2,3,6,8],[4,5,8,9],[5,9,10,12]]
8;
// @lcpr-after-debug-end
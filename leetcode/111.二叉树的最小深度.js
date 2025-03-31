/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  let res = Number.MAX_SAFE_INTEGER;
    const getDepth = (node, parentD) => {
      const currentD = parentD + 1;
      if (currentD >= res) return currentD;
      if (!node.left && !node.right) {
        return res = Math.min(res, currentD);
      }
      if (!node.left) {
        return getDepth(node.right, currentD);
      }

      if (!node.right) {
        return getDepth(node.left, currentD); 
      }
      return Math.min(getDepth(node.left, currentD), getDepth(node.right, currentD))
    }
    getDepth(root, 0)
    return res;
};
// @lc code=end


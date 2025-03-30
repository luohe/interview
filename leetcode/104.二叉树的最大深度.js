/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (root === null) return 0;
  const getDepth = (node, depth) => {
    return Math.max(
      node.left ? getDepth(node.left, depth + 1) : depth,
      node.right ? getDepth(node.right, depth + 1) : depth
    );
  }
  return getDepth(root, 1)
};
// @lc code=end


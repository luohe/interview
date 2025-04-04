/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];
  const getAllPath = (node, parentPath) => {
    const currentPath = (parentPath ? parentPath + '->' : '') + node.val;
    if (node.left) getAllPath(node.left, currentPath);
    if (node.right) getAllPath(node.right, currentPath);
    if (!node.left && !node.right) {
      res.push(currentPath);
    }
  }
  getAllPath(root, '');
  return res;
};
// @lc code=end


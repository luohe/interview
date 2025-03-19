/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inOrderTraversal = function(root) {
    const res = []

    const inOrder = (root) => {
      if (!root) return;

      inOrder(root.left);
      res.push(root.val);
      inOrder(root.right);
    }
    inOrder(root);
    return res;
};
// @lc code=end


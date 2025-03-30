/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const symmetric = (left, right) => {
      if (left === null && right === null) return true;
      if (left && right) {
        if (left.val === right.val) {
          return symmetric(left.left, right.right) && symmetric(left.right, right.left);
        } else {
          return false;
        }
      }
      return false;
    }
    return symmetric(root.left, root.right);
};
// @lc code=end


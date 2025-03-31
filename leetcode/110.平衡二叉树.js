/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
    let res = true;
    const childHeight = (node) => {
      if (!res) return;
      const leftChildHeight = node.left ? childHeight(node.left) : 0;
      const rightChildHeight = node.right ? childHeight(node.right) : 0;
      if (Math.abs(leftChildHeight - rightChildHeight) > 1) {
        res = false;
      }
      return Math.max(leftChildHeight, rightChildHeight) + 1;
    }
    root && childHeight(root);
    return res;
};
// @lc code=end


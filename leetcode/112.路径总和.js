/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    let res = false;
    const pathSum = (node, parentSum) => {
      const curSum = node.val + parentSum;
      if (!node.left && !node.right && curSum === targetSum) {
        res = true;
      }
      if (res === true) return;
      if (node.left) pathSum(node.left, curSum);
      if (node.right) pathSum(node.right, curSum);
    }

    pathSum(root, 0);
    return res;
};
// @lc code=end


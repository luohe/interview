/*
 * @lc app=leetcode.cn id=94 lang=javascript
 * @lcpr version=30204
 *
 * [94] 二叉树的中序遍历
 */


// @lcpr-template-start

// @lcpr-template-end
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
var inorderTraversal = function(root) {
    const res = [];

    const inOrder = (root) => {
      if (!root) return;

      inOrder(root.left);
      res.push(root.val);
      inOrder(root.right);
    }

    inOrder(root)

    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */


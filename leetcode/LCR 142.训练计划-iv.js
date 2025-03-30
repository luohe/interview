/*
 * @lc app=leetcode.cn id=LCR 142 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 142] 训练计划 IV
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var trainningPlan = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
  
    let head = {};
    let a = l1, b = l2, res = head;

    while(a !== null || b !== null) {
      if (a === null) {
        res.next = b;
        return head.next;
      }

      if (b === null) {
        res.next = a;
        return head.next;
      }

      if (a.val > b.val) {
        res.next = b;
        b = b.next;
      } else {
        res.next = a;
        a = a.next;
      }
      res = res.next;
    }
    return head.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) return head
  let n = head, nextN = head.next;
  while(nextN !== null) {
    const nnN = nextN.next;
    nextN.next = n;
    n = nextN;
    nextN = nnN;
  }

  head.next = null;
  return n;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let sNode = head, qNode = head;

  while(qNode !== null && qNode.next !== null) {
    sNode = sNode.next;
    qNode = qNode.next.next;
    if (sNode === qNode) return true;
  }
  return false;
};
// @lc code=end


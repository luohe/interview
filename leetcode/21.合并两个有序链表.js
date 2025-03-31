/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let head = { next: null }, prev = head;
  let index1 = list1, index2 = list2;
  while(index1 !== null || index2 !== null) {
    if (index1 === null) {
      prev.next = index2;
      break;
    }
    if (index2 === null) {
      prev.next = index1;
      break;
    }

    if (index1.val > index2.val) {
      prev.next = index2;
      prev = index2;
      index2 = index2.next;
      continue;
    } else {
      prev.next = index1;
      prev = index1;
      index1 = index1.next;
    }
  }
  return head.next;
};
// @lc code=end


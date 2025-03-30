/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const getHalfNode = (head) => {
    // 找到中间节点
    let i = head, j = head.next;
    while(j !== null && j.next !== null) {
      i = i.next;
      j = j.next.next;
    }
    return i;
}

const revertListNode = (node) => {
  let n = node, nextN = node.next;
  while(nextN !== null) {
    const nnN = nextN.next;
    nextN.next = n;
    n = nextN;
    nextN = nnN;
  }

  node.next = null;
  return n;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head.next === null) return true;
  const halfNode = getHalfNode(head);
  const endNode = revertListNode(halfNode.next);

  let i = head, j = endNode, res = true;
  while(j !== null) {
    if (i.val === j.val) {
      i = i.next;
      j = j.next;
      continue
    } else {
      res = false
      break;
    }
  }

  halfNode.next = revertListNode(endNode)

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
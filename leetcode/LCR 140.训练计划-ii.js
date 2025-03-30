/*
 * @lc app=leetcode.cn id=LCR 140 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 140] 训练计划 II
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
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    let prevN = head, lastN = head, s = 0;

    while(lastN !== null) {
      if (s < cnt) {
        lastN = lastN.next;
        s++;
        continue
      }

      prevN=prevN.next;
      lastN=lastN.next;
    }

    return prevN
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,7,8]\n1\n
// @lcpr case=end

 */


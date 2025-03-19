/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   const sort1 = []

   let index1 = 0, index2 = 0;
   while(index1 < m || index2 < n) {
      if (index1 >= m) {
        sort1.push(nums2[index2])
        index2++
        continue;
      }

      if (index2 >= n) {
        sort1.push(nums1[index1])
        index1++
        continue;
      }
      
    
      if (nums1[index1] <= nums2[index2]) {
        sort1.push(nums1[index1]);
        index1++
      } else {
        sort1.push(nums2[index2])
        index2++
      }
   }

   for (let i = 0; i < sort1.length; i++) {
    nums1[i] = sort1[i]
   }
};
// @lc code=end


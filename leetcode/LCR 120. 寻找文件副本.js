/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function(documents) {
  const swap = (nums, i, j) => {
      const iV = nums[i];
      nums[i] = nums[j];
      nums[j] = iV;
  }

  let i = 0;
  while(i < documents.length) {
    if (documents[i] === i) {
        i++;
        continue;
    }

    if (documents[i] === documents[documents[i]]) {
        return documents[i];
    }

    swap(documents, i, documents[i]);
  }
};
// @lc code=end


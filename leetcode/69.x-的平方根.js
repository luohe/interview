/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x, ans = -1;

    while(l <= r) {
      const mid = l + ~~((r - l) /2);

      if (mid * mid <= x) {
        ans = mid;
        l = mid + 1;
      } else {
        r = mid - 1
      }
    }

    return ans;
};
// @lc code=end



// // 精确到个位
// func mySqrt(x int) int {
//   l, r := 1, x
//   for l <= r {
//       mid := (l + r) >> 1
//       if x < mid * mid {
//           r = mid - 1
//       } else {
//           l = mid + 1
//       }
//   }
//   return r
// }

// // 精确到3位小数
// func mySqrt(x float64) float64 {
// l, r := 0.0, x
// for l <= r {
//   mid := (l + r) >> 1
//   if x < mid*mid {
//     r = mid - 1e-3
//   } else {
//     l = mid + 1e-3
//   }
// }
// return r
// }
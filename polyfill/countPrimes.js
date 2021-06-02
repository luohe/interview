// 埃氏筛
// 一个数没有被他之前数的倍数筛掉，那他就是质数
function countPrimes(n) {
  const prime = new Array(n).fill(1);
  const ans = 0;

  for (var i = 2; i < n; i++) {
    if (prime[i]) {
      ans+=1;

      for (var j = i * i; j < n; j+=i) {
        prime[j] = 0;
      }
    }
  }
  return ans;
}
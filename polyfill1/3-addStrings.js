function addStrings(s1, s2) {
  const maxLen = Math.max(s1.length, s2.length);
  s1 = s1.padStart(maxLen, 0);
  s2 = s2.padStart(maxLen, 0);

  let ans = "", j = false;
  for (let i = maxLen - 1; i >= 0; i--) {
    let cur = Number(s1.charAt(i)) + Number(s2.charAt(i)) + (j ? 1 : 0);
    j = cur >= 10;
    cur = j ? cur - 10 : cur;
    ans = cur + ans;
  }
  if (j) ans = "1" + ans;
  return ans;
}

console.log(addStrings("123", "348"));
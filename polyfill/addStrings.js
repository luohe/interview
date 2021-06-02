function addStrings(num1, num2) {
  var maxL = Math.max(num1.length, num2.length);
  var ans = "";
  num1 = num1.padStart(maxL, "0"), num2 = num2.padStart(maxL, "0");
  let isP = false;
  for (let i = maxL - 1; i >= 0; i--) {
    let curV = Number(num1.charAt(i)) + Number(num2.charAt(i)) + isP ? 1 : 0;
    if (curV >= 10) {
      isP = true;
      curV = curV - 10;
    }
    ans = curV + ans;
  }
  ans = isP ? "1" + ans : ans;
  return ans;
}

addStrings()
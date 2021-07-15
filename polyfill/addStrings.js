function addString(num1, num2) {
  const maxL = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxL, "0"), num2 = num2.padStart(maxL, "0");
  let ans = "";
  let isP = false;
  for(let i = maxL - 1; i >= 0; i--) {
    let curV = Number(num1.charAt(i)) + Number(num2.charAt(i)) + (isP ? 1 : 0);
    if (curV >= 10) {
      isP = true;
      curV -= 10;
    } else { isP = false}
    ans = curV + ans;
  }
  ans = (isP ? "1" : "") + ans;
  return ans;
}

let a = "9007199254740991";
let b = "1234567899999999999";

console.log(addString(a, b));

import { Stack } from "./index";

function revertString(charts: string[]) {
  const stringStack = new Stack<string>()
  for (let char of charts) {
    stringStack.push(char)
  }

  let str = []
  while(stringStack.peek()) {
    str.push(stringStack.pop())
  }
  return str;
}

const chars = ["h","e","l","l","o"] 
// console.log(revertString(chars))

function nextGreateElement(nums1: number[], nums2: number[]) {
  let stack = new Stack(); // 用来保存尚未找到下一个更大元素的元素
  const nextGreater = new Map(); // 保存元素的下一个更大元素的关系
  let result = [];

  for (let num of nums2) {
    // 如果栈不为空且当前元素大于栈顶元素：则栈顶元素的下一个更大元素就是当前元素
    while (!stack.isEmpty() && num > stack.peek()) {
      nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  // 遍历栈中的剩余元素，将他们下一个更大元素设置为-1
  while(!stack.isEmpty()) {
    nextGreater.set(stack.pop(), -1)
  }

  for (let num of nums1) {
    result.push(nextGreater.get(num));
  }

  return result;
}

const nums1 = [4,1,2], nums2 = [2,1,3,4] 
// console.log(nextGreateElement(nums1, nums2))

// 字符'('，')'，'{'，'}'，'['和']'
function isMatch(left: string, right: string) {
  return (
    (left === '(' && right === ')') ||
    (left === '{' && right === '}') ||
    (left === '[' && right === ']')
  )
}

function isValid(str: string) {
  const stack = new Stack()

  for (let char of str){
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
      continue;
    }

    if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || !isMatch(stack.pop(), char)) {
        return false;
      }
    }
  }

  return stack.isEmpty()
}


function evaluateReversePolishNotation(tokens: string) {
  let stack = new Stack()

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(token)
    } else {
      const right = Number(stack.pop());
      const left = Number(stack.pop());
      let result;

      switch(token) {
        case '+':
          result = left + right;
          break;
        case '-':
          result = left - right;
          break;
        case '*':
          result = left * right;
          break;
        case '/':
          result = left / right;
          break;
      }
      stack.push(result)
    }
  }
  return stack.pop();
}

// 删除字符串中的所有相邻重复项
function removeDuplicates(str: string) {
  const stack = new Stack()

  for (let char of str) {
    if (char === stack.peek()) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  let result = ''
  while(!stack.isEmpty()) {
    result = stack.pop() + result;
  }

  return result;
}

// 移除最外层的括号
function removeOuterParentheses(S: string) {
  let stack = new Stack();
  let result = '';

  for (let char of S) {
    if (char === ')') {
      stack.pop()
    }

    // ) 进栈之前，（出栈之后。判断括号的深度
    if (!stack.isEmpty()) {
      result += char
    }

    if (char === '(') {
      stack.push(char)
    }
  }

  return result;
}

const S = "(()())(())(()(()))"
// console.log(removeOuterParentheses(S))


// 移除重复字母，保证字典序最小（不同字符的最小子序列）
function removeDuplicatesLetters(str: string) {
  const stack = new Stack()

  for (let char of str) {
    if (!stack.isEmpty() && stack.peek() === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
}
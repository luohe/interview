import { Queue } from './index'
import { Deque } from './index'

function maxSlidingWindow(nums: number[], k: number) {
  const result = [];
  const queue = new Deque();

  for (let i = 0; i < nums.length; i++) {
    // 检查队列头部元素是否超出滑动窗口范围
    if (!queue.isEmpty() && queue.front() <= i - k) {
      queue.removeRear();
    }

    // 比较新元素与队列尾部元素所对应的数组元素的大小
    while (!queue.isEmpty() && nums[i] >= nums[queue.items[queue.items.length - 1]]) {
      queue.removeRear();
    }

    // 添加新元素的索引到队列尾部
    queue.addRear(i);

    // 当窗口达到大小 k 时，将队列头部元素所对应的数组元素作为当前窗口的最大值
    if (i >= k - 1) {
      result.push(nums[queue.front()]);
    }
  }

  return result;
}

const nums = [1,3,-1,-3,5,3,6,7]
console.log(maxSlidingWindow(nums, 3));


let array = [64, 25, 12, 22, 11];

// 冒泡排序
// 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 2.对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
// 3.针对所有的元素重复以上的步骤，除了最后一个。
// 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let temp = arr[j + 1];
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = temp
      }
    }
  }
}

// bubbleSort(array)


// 选择排序
// 在未排序序列中找到最小（或最大）的元素，将其放到已排序序列的末尾
function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i;

    for (let j = i+1; j <= arr.length - 1; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      let temp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = temp
    }
  }
}

// selectionSort(array)

// 插入排序
// 将数组分为已排序和未排序两部分，初始时已排序不分只包含第一个元素，然后依次将未排序部分的元素插入到已排序部分的正确位置。直接结束
function insertingSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let j = i - 1;

    while (j >= 0 && arr[j] > cur) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = cur
  }
}
// insertingSort(array)


// 归并排序
// 将待排序的序列不断划分为两个子序列，直到每个子序列只剩下一个元素。然后再将这些子序列两两合并，直到最终得到有序的序列
// 步骤1：将待排序序列分成两个子序列，分别进行递归排序；
// 步骤2：将两个已排序的子序列合并成一个有序序列。
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeChild(left, right)
}


function mergeChild(left, right) {
  let i = 0, j = 0, arr = [];

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]); i++
    } else {
      arr.push(right[j]); j++ 
    }
  }

  return arr.concat(left.slice(i).concat(right.slice(j)))
}

// const arr1 = mergeSort(array)


// 快速排序
// 快速排序首先将一个大数组分成两个较小的子数组：比某个数小（基点）的元素和比某个数（基点）大的元素。然后快速排序可以递归地对子数组进行排序。
// 基点：从数组中选择一个元素，称为基点
// 分区：对数组重新排序，小于基点的在左边，大于基点的在右边
// 递归：递归将上述步骤应用与左边和右边
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)]

  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

// console.log(quickSort(array))

// 堆排序
// 构建初始堆：自低向上构建，从最后一个非叶子节点开始
// 下沉操作：让尾部元素与堆顶元素交换，最大值被放数组末尾
// 调整：从上到下，从左到右。调整大顶堆
function buildMaxHeap(nums) {
  const len = nums.length;
  for (let i = len / 2 - 1; i > 0; i--) {
    heapify(nums, len, i)
  }
}

// 从上到下堆化
function heapify(nums, k, i) {
  while(true) {
    let l = 2*i+1, r = 2*i+2;
    let maxPos = i
    if (l <= k && nums[maxPos] < nums[l]) maxPos = l;
    if (r <= k && nums[maxPos] < nums[r]) maxPos = r;
    if (maxPos === i) break;
    swap(nums, maxPos, i);
    i = maxPos;
  }
}

function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

function heapSort(nums) {
  const len = nums.length;
  buildMaxHeap(nums)
  let k = len - 1;
  while(k > 0) {
    swap(nums, 0, k);
    k--;
    heapify(nums, k, 0);
  }
}

heapSort(array)
console.log(array)

// 桶排序

// 基数排序

// 计数排序

// 希尔排序
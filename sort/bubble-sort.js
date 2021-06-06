/**
 * 理解：每次通过队头开始比较交换，将最大的数放到队尾
 * 
 * 
 * 冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。
 * 如果不满足就让它俩互换。一次冒泡会让至少一个元素移动到它应该在的位置，
 * 重复 n 次，就完成了 n 个数据的排序工作。
 */
function bubbleSort(arr) {
  var len = arr.length;
  if(len < 2) return arr;

  for (let i = 0; i < len; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j+1]) continue;
      var temp = arr[j+1];
      arr[j+1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

const a = [8,3,4,6,1,2,199];
console.log(bubbleSort(a));
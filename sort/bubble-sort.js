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
}

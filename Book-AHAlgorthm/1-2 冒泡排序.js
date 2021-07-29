let arr = [12, 4, 231, 31, 88, 6];
//let temp = arr[0];
for(let i = 0; i < arr.length; i++) { 
  for(let j = 0; j < arr.length - i; j++) {
    if(arr[j+1] - arr[j] > 0) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      // i=0 j=0 4-12<0，不操作 [ 12, 4, ...]
      //     j=1 231-4>0,换位置 [ 12, 231, 4, ...] 
      //     j=2 31-4>0,换位置 [ 12, 231, 31, 4, ...]
      //     以此类推，第一轮把4排到最后 [ 12, 231, 31, 88, 6, 4 ]
      // i=1 j=0 231-12>0,换位置 [ 231, 12, 31, 88, 6, 4 ]
      //     以此类推，因为第一轮已经确定最小的在末尾了，所以这次j少比一次，因此 j < arr.length - i
      // 时间复杂度 O(N^2) 空间复杂度就为数组长度
      console.log(arr)
    }
  }
}
console.log(arr)
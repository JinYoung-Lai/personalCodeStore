let arr = [6,1,2,7,9,3,4,5,10,8]
let len = arr.length-1;
console.log(len)
function quickSort(arr, left, right) {
  if(left > right) {
    return
  }
  let temp = arr[left];
  let i = left;
  let j = right;
  while( i != j) {
    while(arr[j] >= temp && i < j) {
      j--;
    }
    while(arr[i] <= temp && i < j) {
      i++;   
    }
    if(i < j) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t
    } 
  }
  arr[left] = arr[i];
  arr[i] = temp;
  arguments.callee(arr, left, i-1);
  arguments.callee(arr, i+1, right)
}
quickSort(arr, 0, len)

// 模拟indexOf
function indexOf(arr, item) {
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (item == arr[i]) {
      console.log(arr[i])
      index = i;
    }
  }
  return index;
}

// 数组求和
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
}

// 去除指定项
function removeWithoutCopy(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item == arr[i]) {
      arr.splice(i, 1)
      i -= 1;
    }
  }
  return arr
}

// 找出指定项
function findAllOccurrences(arr, target) {
  var temp = [];
  arr.forEach(function (val, index) {
    //val !== target ||  temp.push(index);
    if (val == target) {
      temp.push(index)
    }
  });
  return temp;
}
let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 2, 3, 4, 2, 2];
let arr3 = [0, 6];
let tar = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'];
console.log(indexOf(arr, 3));
console.log(sum(arr));
console.log(removeWithoutCopy(arr2, 2));
console.log(findAllOccurrences(tar, 'a'))

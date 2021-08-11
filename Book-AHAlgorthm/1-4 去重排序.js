let arr = [20, 30, 300, 400, 20, 32, 67, 89, 40]
let len = arr.length, newArr = [];

let tong = []
for(let i = 0; i < 1000; i++) {
  tong[i] = 0;
}
for(let j = 0; j < len; j++) {
    tong[arr[j]] += 1
}
for(let k = 0; k < 1000; k++){
  if(tong[k] > 0) {
    newArr.push(k);
  } 
  
}
console.log(newArr)

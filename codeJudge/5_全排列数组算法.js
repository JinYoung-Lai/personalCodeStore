
let arr = [1, 2, 3, 4]

function permute(arr) {
  let res = [], cur = [];
  function main(arr) {
    let i, ch;
    for (i = 0; i < arr.length; i++) {
      // 获取数组的每一个元素
      ch = arr.splice(i, 1)[0]
      cur.push(ch);
      
      if (arr.length == 0) {
        res.push(cur.slice())
      }
      main(arr);
      arr.splice(i, 0, ch);
      cur.pop();
    }
    return res
  }
  return main(arr);
}

console.log(permute(arr))

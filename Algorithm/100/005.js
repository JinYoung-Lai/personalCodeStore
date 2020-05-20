//输入三个整数x,y,z，请把这三个数由小到大输出。
function sort(...arr){
  function compare(i, j){
    if(i - j < 0){
      return -1
    }else if(i - j > 0){
      return 1
    }else{
      return 0
    }
  }
  let sortArr = [...arr].sort(compare)
  console.log(sortArr)
}
sort(12, 4, 8, 10)

function sort2(x, y, z){
  let t
  if(x - y > 0){
    t = x; x = y; y = t;
  }
  if(x - z > 0){
    t = x; x = z; z = t;
  }
  if(y - z > 0){
    t = y; y = z; z = t;
  }
  console.log(x, y, z)
}
sort2(12, 8, 15)
// 判断1到100之间的素数。
// 判断101到200之间的素数。
function isPrime(m, n){
  let i, j, arr = []; 
  for( i = m; i <= n; i++){
    for( j = 2; j < i; j++){
      if(i%j == 0 ){
        break;
      }
    }
    if(j >= i){
      // console.log(i)
      arr.push(i)
    }
  }
  console.log(arr)
  return arr
}
isPrime(1, 200)
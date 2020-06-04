// 题目：倒序输出字符串/数组
function reverseStr(str){
  let i, j, t, len = str.length;
  let str2 = str.split('')
  for(i = 0; i < len; i++){
    j = len - i - 1;
    if (j < i){
      break
    }
    t = str2[i]
    str2[i] = str2[j];
    str2[j] = t;
  }
  return str2.join('')
}
let str = 'xcvbnm'
let res = reverseStr(str)
console.log('res', res)

// 转成数组后直接用数组的reverse方法，join('')
function reverseStr2(str){
  let strcopy = str.split('')
  return strcopy.reverse().join('')
}
let res2 = reverseStr2(str)
console.log('res2', res2)


function reverseStr3(str){
  let strcopy = ''
  let len = str.length
  for(let i = len; i > 0; i--){
    strcopy += str.charAt(i - 1)
  }
  return strcopy
}
let res3 = reverseStr3(str)
console.log('res3', res3)
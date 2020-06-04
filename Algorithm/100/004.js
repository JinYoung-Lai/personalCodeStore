/*
输入某年某月某日，判断这一天是这一年的第几天？
格式为2020-05-20
*/
function today(day){
  let y = day.split('-')[0]
  let M = day.split('-')[1]
  let d = parseInt(day.split('-')[2]) 
  let sum = 0  
  switch(M){
    case '1': sum = 0; break;
    case '2': sum = 31; break;
    case '3': sum = 59; break;
    case '4': sum = 90; break;
    case '5': sum = 120; break;
    case '6': sum = 151; break;
    case '7': sum = 181; break;
    case '8': sum = 212; break;
    case '9': sum = 243; break;
    case '10': sum = 273; break;
    case '11': sum = 304; break;
    case '12': sum = 334; break; 
  }
  if((y%4 == 0 && y%100 != 0) || y%400 == 0){
    if(M >= 3){
      return sum + d + 1;
    }
  }
  return sum + d


}
let c = today('2015-10-1')
console.log(c)
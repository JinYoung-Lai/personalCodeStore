interface LabelLedValue {
  label: string;
}

function printLable(labelObj: LabelLedValue){
  console.log(labelObj.label)
}

let myObj = {size: 10, label: "size 10 object"}
printLable( myObj );

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

// 只读属性
/*
  readonly vs const
  最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
  做为变量使用的话用 const，若做为属性则使用readonly。
*/
interface Point {
  readonly x: number;
  readonly y: number;
}
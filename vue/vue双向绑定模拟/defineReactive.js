
function observe(data){
  
}


function defineReactive (obj,key,val) {
  let dep = new Dep();
  Object.defineProperty(obj, key, {
      get(){
          dep.depend();
          console.log(`${key}属性被读取了`);
          return val;
      },
      set(newVal){
          val = newVal;
          console.log(`${key}属性被修改了`);
          dep.notify()                    //数据变化通知所有订阅者
      }
  })
}
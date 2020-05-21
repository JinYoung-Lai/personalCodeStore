const debounce = (func, wait = 0) => {
  let timeout = null
  let args
  function debounced(...arg) {
    args = arg
    if(timeout){
      clearTimeout(timeout)
      timeout = null
    }
    return new Promise((res, rej) => {
      timeout = setTimeout(async () => {
        try{
          const result = await func.apply(this, args)
          res(result)
        }catch(e){
          rej(e)
        }
      },wait)
    })
  }
  // 取消
  function cancel() {
    clearTimeout(timeout)
    timeout = null
  }

  // 立即执行
  function flush() {
    cancel()
    return func.apply(this, args)
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced
}
function ajax(type, url) {
  const res = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, true)
    xhr.send();
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolve(JSON.parse(xhr.responseText))
        }else if(xhr.status === 404){
          reject(new Error('404 not found'))
        }
      }
    }
  })
  return res
}
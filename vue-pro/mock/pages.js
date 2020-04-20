import Mock from 'mockjs'

const Random = Mock.Random

let dataList = [] 

for (let i = 0; i < 50; i++){
  const template = {
    // 'Boolean': Random.Boolean,
    //'Natural': Random.natural(1, 10),
    //'Integer': Random.integer(1, 100),
    //'Float': Random.float(0, 100, 0, 5),
    //'Character': Random.character(),
    //'String': Random.string(2, 10),
    //'Range': Random.range(0, 10, 2),
    //'Date': Random.date(),
    //'Image': Random.image(Random.size, '#02adea', 'Hello'),
    'Color': Random.color(),
    //'Paragraph': Random.paragraph(2, 5),
    'Name': Random.name(),
    //'Url': Random.url(),
    'Address': Random.province(),
    'Count': Random.integer(1, 20),
    'Price': Random.float(0, 100, 0, 2),
    'quantity': 0,
    'id': i
  }
  dataList.push(template)
}

Mock.mock('http://localhost:8080/api/list', 'post', (params) => {
  let info = JSON.parse(params.body);
  let [index, size, total] = [info.pageIndex, info.pageSize, dataList.length];//解构赋值
  let len = total / size;
  let totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
  let newDataList = dataList.slice(index * size, (index + 1) * size);
  return {
    'code': '0',
    'message': 'success',
    'data': {
      'pageIndex': index,
      'pageSize': size,
      'rows': newDataList,
      'total': total,
      'totalPages': totalPages   
    }    
  }
})

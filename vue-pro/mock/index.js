import Mock from 'mockjs'



Mock.mock('url', 'post', (params) => {
  let info = JSON.parse(params.body);
})
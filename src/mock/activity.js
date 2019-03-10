import Mock from 'mockjs'

const List = []
const count = 20

const imgUrl = 'http://element-cn.eleme.io/static/resource.a72b8f8.png'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    title: '@title(2, 5)',
    contentShort: '活动介绍...',
    content: '活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍...',
    imgUrl
  }))
}

export default {
  getList: config => {
    return List
  }
}

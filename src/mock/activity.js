import Mock from 'mockjs'

const imgUrl = 'http://element-cn.eleme.io/static/resource.a72b8f8.png'
const List = [
  Mock.mock({
    id: '0',
    author: 'admin',
    title: '活动1',
    content: '活动内容',
    amount: '@integer(0, 500)',
    startDate: '@datetime',
    closingDate: '@datetime',
    imgUrl
  })
]
const TableData = []
const count = 5

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    author: '@first',
    title: '@title(1, 2)',
    content: '@paragraph()',
    amount: '@integer(0, 500)',
    startDate: '@datetime',
    closingDate: '@datetime',
    imgUrl
  }))
  TableData.push(Mock.mock({
    id: '@increment',
    name: '@first',
    date: '@datetime',
    address: '@city(true)'
  }))
}

export default {
  getList: config => {
    return List
  },

  getTableList: () => {
    return TableData
  },

  deleteActivityById: (id) => {
    List.shift()
  },

  createActivity() {
    List.push(Mock.mock({
      id: '@increment',
      author: 'admin',
      title: '@title(1, 2)',
      content: '@paragraph()',
      amount: '@integer(0, 500)',
      startDate: '@datetime',
      closingDate: '@datetime',
      imgUrl
    }))
  },

  fetchActivitiesByTitle(title) {
    console.log('mock')
    return List.filter(item => item.title === title)
  }
}

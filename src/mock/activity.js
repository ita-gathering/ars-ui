import Mock from 'mockjs'

const List = []
const TableData = []
const count = 20
const imgUrl = 'http://element-cn.eleme.io/static/resource.a72b8f8.png'

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
  }
}

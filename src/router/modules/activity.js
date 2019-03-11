/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const activityRouter = [{
  path: '/activity/all',
  component: Layout,
  name: '所有活动',
  meta: {
    title: '所有活动',
    icon: 'table'
  },
  children: [
    {
      path: 'all-activity',
      component: () => import('@/views/table/dynamicTable/index'),
      name: 'DynamicTable',
      meta: { title: '所有活动' }
    },
    {
      path: 'my-activity',
      component: () => import('@/views/table/dragTable'),
      name: 'DragTable',
      meta: { title: '发起的活动' }
    },
    {
      path: 'attend-activity',
      component: () => import('@/views/table/inlineEditTable'),
      name: 'InlineEditTable',
      meta: { title: '参加的活动' }
    }
  ]
}]
export default activityRouter

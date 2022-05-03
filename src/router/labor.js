import Layout from '@/layout'

// 个人中心
// const userCenterRouter = {
//   path: '/user',
//   redirect: '/user/list',
//   component: Layout,
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/labor/user/list'),
//       redirect: '/user/list',
//       name: 'userCenter',
//       meta: { title: '个人' },
//       hidden: true
//     }
//   ]
// }

const userCenterRouter = {
  path: '/labor',
  redirect: '/labor/user/list',
  component: Layout,
  children: [
    {
      path: 'user/list',
      component: () => import('@/views/labor/user/list'),
      name: 'userCenter',
      meta: {
        title: '实名制'
      }
    }
  ]
}

export default {
  userCenterRouter
}

import Home from '@/components/home'
import test from '@/components/test'
import Login from '@/components/login'
import Web from '@/pages/web'
import Server from '@/pages/server'
import List from '@/components/list'

const routers = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    // 小类的二级目录
    children: [
      {
        path: '/', name: 'Web', component: Web,//默认加载前端
        // 试题列表
        children: [
          { path: '/', name: 'List', component: List, }
        ]
      },
      // 前端
      {
        path: '/web', name: 'Web', component: Web,
        children: [
          { path: '/', name: 'List', component: List, }
        ]
      },
      // 后端
      {
        path: '/server',
        name: 'Server',
        component: Server,
      },
    ]
  },

  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

export default routers

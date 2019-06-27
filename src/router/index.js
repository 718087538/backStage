import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import test from '@/components/test'
import Login from '@/components/login'


const routers = [

  {
    path: '/',
   redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:Home
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
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

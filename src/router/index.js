import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import test from '@/components/test'


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
]

export default routers

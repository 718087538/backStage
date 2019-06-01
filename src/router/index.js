import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'


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
]

export default routers

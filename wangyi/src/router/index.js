import Vue from 'vue'
import Router from 'vue-router'
/*
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Swiper from '@/components/swiper/swiper'
import Home from '@/components/home/home'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import SingerDetail from '@/components/singerdetail/singerdetail'
*/

Vue.use(Router)
/**
 * 路由懒加载
 */
const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}
const Swiper = (resolve) => {
  import('@/components/swiper/swiper').then((module) => {
    resolve(module)
  })
}
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const Recommend = (resolve) => {
  import('@/components/recommend/recommend').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('@/components/singer/singer').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('@/components/rank/rank').then((module) => {
    resolve(module)
  })
}
const SingerDetail = (resolve) => {
  import('@/components/singerdetail/singerdetail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: 'recommend',
        component: Recommend
      },
      {
        path: '/singer',
        component: Singer
      },
      {
        path: '/rank',
        component: Rank
      }
      ]
    },

    {
      path: '/singerdetail/:id',
      name: 'singerdetail',
      component: SingerDetail
    }
  ]
})

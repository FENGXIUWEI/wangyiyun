import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Swiper from '@/components/swiper/swiper'
import Home from '@/components/home/home'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import SingerDetail from '@/components/singerdetail/singerdetail'

Vue.use(Router)

export default new Router({
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

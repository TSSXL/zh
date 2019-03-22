import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import estimate from '@/components/estimate'
import news from '@/components/news'
import mine from '@/components/mine'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path:'/es',
      name:'Estimate',
      component:estimate
    },
    {
      path:'/news',
      name:'News',
      component:news
    },
    {
      path:'/mine',
      name:'Mine',
      component:mine
    },
    {
      path:'/info',
      name:'Info',
      component:info
    }
  ]
})

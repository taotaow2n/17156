import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/Home'
import Order from '@/pages/order/Order'
import Detail from '@/pages/detail/Detail'
import Travel from '@/pages/travel/Travel'
import City from '@/pages/city/City'
import Rank from '@/pages/rank/Rank'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/list',
      name: 'list',
      component: List
    },
     {
    	path:'/order',
    	name:'order',
    	component:Order
    },
     {
    	path:'/detail',
    	name:'detail',
    	component:Detail
    },
     {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
     {
    	path: '/city',
    	name: 'city',
    	component: City
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }
  ]
})

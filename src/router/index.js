import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Order from '@/pages/order/Order'
import City from '@/pages/city/City'
import Travel from '@/pages/travel/Travel'
import Detail from '@/pages/detail/Detail'
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
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/city',
        name: 'City',
        component: City
    },{
        path: '/detail',
        name: 'Detail',
        component: Detail
    },{
        path: '/travel',
        name: 'Travel',
        component: Travel
    },{
        path: '/rank',
        name: 'Rank',
        component: Rank
    }]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'
import Travel from '@/pages/travel/Travel'
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
    	path:'/detail',
    	name:'detail',
    	component:Detail
    },
     {
      path: '/travel',
      name: 'travel',
      component: Travel
    }
  ]
})

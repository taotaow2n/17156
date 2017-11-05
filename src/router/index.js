import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
<<<<<<< HEAD
import Detail from '@/pages/detail/Detail'
=======
import Travel from '@/pages/travel/Travel'
<<<<<<< HEAD
=======
>>>>>>> fd9fa36d4696c748756bf2e107230dce7b5b9e58

>>>>>>> 4f46fc1989ffaa58d40706e1fa0ffa88ba2a07ff


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
<<<<<<< HEAD
    {
    	path:'/detail',
    	name:'detail',
    	component:Detail
=======
<<<<<<< HEAD
     {
      path: '/travel',
      name: 'travel',
      component: Travel
>>>>>>> fd9fa36d4696c748756bf2e107230dce7b5b9e58
    }
 

=======
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    }
>>>>>>> 4f46fc1989ffaa58d40706e1fa0ffa88ba2a07ff
  ]
})

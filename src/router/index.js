import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Travel from '@/pages/travel/Travel'
<<<<<<< HEAD
=======

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
      path: '/travel',
      name: 'travel',
      component: Travel
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

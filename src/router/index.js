import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
<<<<<<< HEAD
=======


>>>>>>> 6f8e8bf6140da39e0ee892488835cde7514e261e
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
<<<<<<< HEAD
    },
     {
      path: '/list',
      name: 'list',
      component: List
    }
    
=======
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
   
>>>>>>> 6f8e8bf6140da39e0ee892488835cde7514e261e
  ]
})

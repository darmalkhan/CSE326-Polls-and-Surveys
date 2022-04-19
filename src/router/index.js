import { createRouter, createWebHistory  } from 'vue-router'
import Home from '../components/home.vue'
import { h, resolveComponent } from 'vue'  // import `resolveComponent` too


 const routes = [
  {  
    path: '/',
    component: {
      render() {
        return h(resolveComponent('router-view'))
              }
    },
    children: [
    // {
    //   path: '',
    //   name: 'All',
    //   component: Home
    // },
     {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
      path: '/survey',
      name: 'Survey',
      component: () => import(/* webpackChunkName: "about" */ '../components/survey.vue')
    },
      {
      path: '/polling',
      name: 'Polling',
      component: () => import(/* webpackChunkName: "about" */ '../components/polling.vue')
    },
     {
      path: '/success',
      name: 'Success',
      component: () => import(/* webpackChunkName: "about" */ '../components/success.vue')
    },
    ]
}
]


const router = createRouter({ history: createWebHistory(), routes })
export default router

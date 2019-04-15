import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav.vue'
import Comprehensive from '@/components/Comprehensive.vue'
import Login from '@/components/Login.vue'
import ThisWeek from '@/components/ThisWeek.vue'
import History from '@/components/History.vue'
import Laboratory from '@/components/Laboratory.vue'
import Mask from '@/components/Mask.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/',
    //   // path:'/comprehensive',
    //   name:'Nav',
    //   component:Nav,
    //   // meta:{auth:true}
    // },
    {
      path:'/comprehensive',
      name:'Comprehensive',
      component:Comprehensive,
      meta:{auth:true}
    },
    {
      path:'/thisweek',
      name:'ThisWeek',
      component:ThisWeek,
      meta:{auth:true}
    },
    {
      path:'/history',
      name:'History',
      component:History,
      meta:{auth:true}
    },
    {
      path:'/laboratory',
      name:'Laboratory',
      component:Laboratory,
      meta:{auth:true}
    },
    {
      path:'/mask',
      name:'Mask',
      component:Mask,
      meta:{auth:true}
    }
  ]
})

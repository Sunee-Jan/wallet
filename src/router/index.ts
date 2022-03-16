import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import index from '../views/pages/index/index.vue'
import userHome from '../views/pages/user/userHome.vue'
import chart from '../views/pages/chart/chart.vue'
import keepAccount from '../views/pages/keepAccounts/keepAccounts.vue'
import calculator from '../views/pages/keepAccounts/calculator.vue'
import mood from '../views/pages/mood/mood.vue'
import write from '../views/pages/mood/write.vue'
import writing from '../views/pages/mood/writing.vue'
import page404 from '../views/pages/404.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
    path: '/',
    name: 'index',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'list',
    component: index
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/keepAccount',
    name: 'keepAccount',
    component: keepAccount
  },
  {
    path: '/mood',
    name: 'mood',
    component: mood,
    props(route){
      return{hasData:route.query.hasData}
    }
  },
  {
     path:'/write',
     name:'PickDate',
     component:write
  },
  {
    path:'/writing',
    name:'ToWrite',
    component:writing,
    props(route){
      return {baseInfo:route.params}
    }
 },
  {
    path: '/userHome',
    name: 'userHome',
    component: userHome
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: calculator
  },
  {
    path: '/*',
    name: 'page404',
    component: page404
  }
]

const router = new VueRouter({
  routes
})

export default router

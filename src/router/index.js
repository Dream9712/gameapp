import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/xoc-ida',
    name: 'xocIda',
    component: () => import(/* webpackChunkName: "xocIda" */ '../views/xocIda/index.vue')
  },
  {
    path: '/bau-cua',
    name: 'bauCua',
    component: () => import(/* webpackChunkName: "bauCua" */ '../views/bauCua/index.vue')
  },
  {
    path: '/tai-xiu',
    name: 'taiXiu',
    component: () => import(/* webpackChunkName: "taiXiu" */ '../views/taiXiu/index.vue')
  },
  {
    path: '/rong-hu',
    name: 'rongHu',
    component: () => import(/* webpackChunkName: "rongHu" */ '../views/rongHu/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Top',
    component: () => import('../views/Top.vue')
  },
  {
    path: '/registerMatch',
    name: 'RegisterMatch',
    component: () => import('../views/RegisterMatch.vue')
  },
  {
    path: '/registerPlayer',
    name: 'RegisterPlayer',
    component: () => import('../views/RegisterPlayer.vue')
  },
  {
    path: '/showMatchList',
    name: 'ShowMatchList',
    component: () => import('../views/ShowMatchList.vue')
  },
  {
    path: '/showPlayerDetail',
    name: 'ShowPlayerDetail',
    component: () => import('../views/ShowPlayerDetail.vue')
  },
  {
    path: '/showPlayerList',
    name: 'ShowPlayerList',
    component: () => import('../views/ShowPlayerList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

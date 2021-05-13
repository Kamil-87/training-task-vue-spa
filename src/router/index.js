import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Profile from '../views/Profile.vue'
// import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {layout: 'auth'},
  //   component: () => import('./views/Login.vue')
  // },
  {
    path: '/auth',
    name: 'Auth',
    meta: {layout: 'auth'},
    // component: Auth
    component: () => import('../views/Auth.vue')
  },

  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    meta: {layout: 'main'},
    component: Articles
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

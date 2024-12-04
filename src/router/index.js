import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFoundView.vue'
import OpinionView from '@/views/OpinionView.vue'
import AdminView from '@/views/AdminView.vue'
import ProfileView from '@/views/ProfileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/opiniones/:slug',
    name: 'Opinones',
    component: OpinionView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
  {
    path: '/admin/profile',
    name: 'Profile',
    component: ProfileView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

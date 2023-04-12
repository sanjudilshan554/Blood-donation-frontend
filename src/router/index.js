import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userReg from '../views/userRegistration/userReg.vue'
import userLog from '../views/userLogin/userLogin.vue'
import test from '../views/Test/test.vue'
import userProfile from '../views/userProfile/userProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
    {
      path: '/userRegistraion',
      name: 'userReg',
      component:userReg
    },

    {
      path: '/Login',
      name: 'userLogin',
      component:userLog
    },

    {
      path: '/test',
      name: 'test',
      component:test
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component:userProfile
    },
  ]
})

export default router

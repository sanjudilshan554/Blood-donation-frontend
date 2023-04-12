import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userReg from '../views/userRegistration/userReg.vue'
import userLog from '../views/userLogin/userLogin.vue'

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
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import {firebase} from '../services/firebase'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta:{
      requiresAuth:true
    },
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  },
  {
    path: '/crud',
    name: 'CRUD',
    meta:{
      requiresAuth:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CRUD" */ '../views/Crud.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to,from,next)=>{

  const requireAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requireAuth && !(await firebase.getCurrentUser())){
    next('/')
  }else{
    next();
  }
})

export default router

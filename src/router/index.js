import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase';
import { onAuthStateChanged } from "firebase/auth";
const routes = [
  {
    path: '/',
    name: 'about',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next({ name: 'login' });
    } else {
      next();
    }
  });
});
export default router

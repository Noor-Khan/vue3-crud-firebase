import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/register',
      component: () => import('../pages/Register.vue'),
    },
    {
      path: '/sign-in',
      component: () => import('../pages/Login.vue'),
    },
  ],
});
export default router;

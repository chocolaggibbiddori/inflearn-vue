import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/main'
  },
  {
    path: '*',
    component: () => import('@/views/404View.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupView.vue')
  },
  {
    path: '/main',
    name: 'main',
    meta: { auth: true },
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/add',
    name: 'add',
    meta: { auth: true },
    component: () => import('@/views/PostAddView.vue')
  },
  {
    path: '/posts/:id',
    meta: { auth: true },
    component: () => import('@/views/PostEditView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['common/isLogin']) {
    next('/login');
    return;
  }

  next();
});

export default router;

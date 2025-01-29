import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/news',
    component: NewsView
  },
  {
    path: '/jobs',
    component: JobsView
  },
  {
    path: '/ask',
    component: AskView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

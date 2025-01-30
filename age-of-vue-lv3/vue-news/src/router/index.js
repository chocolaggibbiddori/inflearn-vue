import Vue from 'vue';
import VueRouter from 'vue-router';
import createListView from '@/views/CreateListView';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'NewsView',
    component: createListView('news')
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: createListView('jobs')
  },
  {
    path: '/ask',
    name: 'AskView',
    component: createListView('ask')
  },
  {
    path: '/user/:id',
    component: UserView
  },
  {
    path: '/item',
    component: ItemView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

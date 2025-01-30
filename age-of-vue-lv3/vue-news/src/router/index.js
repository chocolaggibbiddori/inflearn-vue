import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
import bus from '@/utils/bus';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');
      setTimeout(() => {
        store.dispatch('fetchItemList', to.name).then(() => next());
      }, 500);
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');
      setTimeout(() => {
        store.dispatch('fetchItemList', to.name).then(() => next());
      }, 500);
    }
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');
      setTimeout(() => {
        store.dispatch('fetchItemList', to.name).then(() => next());
      }, 500);
    }
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

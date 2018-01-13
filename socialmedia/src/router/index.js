import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/components/homePage/homePage';
import categories from '@/components/categories/categories';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/categories',
      name: 'categories',
      component: categories
    }
  ]
});

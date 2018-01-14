import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/components/homePage/homePage';
import Categories from '@/components/categories/categories';
import ContentTypes from '@/components/contentTypes/contentTypes';

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
      component: Categories
    },
    {
      path: '/content-types',
      name: 'contentTypes',
      component: ContentTypes
    }
  ]
});

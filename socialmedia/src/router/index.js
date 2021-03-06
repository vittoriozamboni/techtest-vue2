import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/components/homePage/homePage';
import Categories from '@/components/categories/categories';
import ContentTypes from '@/components/contentTypes/contentTypes';
import Posts from '@/components/posts/posts';
import SocialMedia from '@/components/socialMedia/socialMedia';
import SocialMediaOwners from '@/components/socialMediaOwners/socialMediaOwners';
import Users from '@/components/users/users';

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
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/social-media',
      name: 'socialMedia',
      component: SocialMedia
    },
    {
      path: '/social-media-owners',
      name: 'socialMediaOwners',
      component: SocialMediaOwners
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
});

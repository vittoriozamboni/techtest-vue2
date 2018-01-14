// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';

import axios from 'axios';

/* Styles */
import 'bulma/css/bulma.css';
import './assets/styles/socialmedia.scss';

import App from './components/App';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:8000/social-media/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

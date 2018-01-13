// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router';
import store from './store';

/* Styles */
import 'bulma/css/bulma.css';
import './assets/styles/bulmaCustomizations.scss';
import './assets/styles/socialmedia.scss';

import App from './components/App';

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.http.options.root = 'http://localhost:8000/social-media/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});


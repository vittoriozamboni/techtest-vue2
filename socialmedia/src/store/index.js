import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getters';
import mutations from './mutations';

const store = new Vuex.Store({
  state: {
    applicationStatus: 'not-loaded', // not-loaded, loading, loaded
    categories: [
      { id: 1, 'name': 'Photography' }
    ],
  },
  getters,
  mutations,
});

export default store;

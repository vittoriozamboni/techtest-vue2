import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = new Vuex.Store({
  state: {
    applicationStatus: 'not-loaded', // not-loaded, loading, loaded
    categories: null,
    contentTypes: null,
    posts: null,
    socialMedia: null,
    socialMediaOwners: null,
    users: null,
  },
  getters,
  mutations,
  actions,
});

export default store;

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    applicationStatus: 'not-loaded', // not-loaded, loading, loaded
  },
  mutations: {
    setApplicationStatus (state, status) {
      state.applicationStatus = status;
    }
  }
});

export default store;

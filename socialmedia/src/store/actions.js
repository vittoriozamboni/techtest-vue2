import * as actionTypes from './actionTypes';
import * as mutationTypes from './mutationTypes';


export default {
  [actionTypes.APPLICATION_SET_STATUS]: function ({ commit }, payload) {
    commit(mutationTypes.APPLICATION_SET_STATUS, payload);
  },
  [actionTypes.DATA_SET_CATEGORIES]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_CATEGORIES, payload);
  }
};

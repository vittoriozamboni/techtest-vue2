import * as actionTypes from './actionTypes';
import * as mutationTypes from './mutationTypes';


export default {
  [actionTypes.APPLICATION_SET_STATUS]: function ({ commit }, payload) {
    commit(mutationTypes.APPLICATION_SET_STATUS, payload);
  },
  [actionTypes.DATA_SET_CATEGORIES]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_CATEGORIES, payload);
  },
  [actionTypes.DATA_SET_CONTENT_TYPES]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_CONTENT_TYPES, payload);
  },
  [actionTypes.DATA_SET_POSTS]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_POSTS, payload);
  },
  [actionTypes.DATA_SET_SOCIAL_MEDIA]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_SOCIAL_MEDIA, payload);
  },
  [actionTypes.DATA_SET_SOCIAL_MEDIA_OWNERS]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_SOCIAL_MEDIA_OWNERS, payload);
  },
  [actionTypes.DATA_SET_USERS]: function ({ commit }, payload) {
    commit(mutationTypes.DATA_SET_USERS, payload);
  }
};

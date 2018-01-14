import * as mutationTypes from './mutationTypes';

export default {
  [mutationTypes.APPLICATION_SET_STATUS]: function (state, payload) {
    state.applicationStatus = payload.status;
  },
  [mutationTypes.DATA_SET_CATEGORIES]: function (state, payload) {
    state.categories = payload.data;
  },
  [mutationTypes.DATA_SET_CONTENT_TYPES]: function (state, payload) {
    state.contentTypes = payload.data;
  }
};

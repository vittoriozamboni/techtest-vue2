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
  },
  [mutationTypes.DATA_SET_SOCIAL_MEDIA]: function (state, payload) {
    state.socialMedia = payload.data.map(sm => {
      sm.ownerDisplay = state.socialMediaOwners.filter(smo => smo.id === sm.owner)[0].name;
      return sm;
    });
  },
  [mutationTypes.DATA_SET_SOCIAL_MEDIA_OWNERS]: function (state, payload) {
    state.socialMediaOwners = payload.data;
  }
};

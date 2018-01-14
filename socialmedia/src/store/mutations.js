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
  [mutationTypes.DATA_SET_POSTS]: function (state, payload) {
    state.posts = payload.data;
    state.posts = payload.data.map(p => {
      p._display = {
        category: state.categories.filter(c => c.id === p.category)[0].name,
        content_types: state.contentTypes.filter(ct => p.content_types.indexOf(ct.id) >= 0).map(ct => ct.name),
        created_by: state.users.filter(u => u.id === p.created_by)[0].full_name,
        social_media: state.socialMedia.filter(smo => smo.id === p.social_media)[0].name,
      };
      return p;
    });
  },
  [mutationTypes.DATA_SET_SOCIAL_MEDIA]: function (state, payload) {
    state.socialMedia = payload.data.map(sm => {
      sm._display = { owner: state.socialMediaOwners.filter(smo => smo.id === sm.owner)[0].name };
      return sm;
    });
  },
  [mutationTypes.DATA_SET_SOCIAL_MEDIA_OWNERS]: function (state, payload) {
    state.socialMediaOwners = payload.data;
  },
  [mutationTypes.DATA_SET_USERS]: function (state, payload) {
    state.users = payload.data;
  }
};

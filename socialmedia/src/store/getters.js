import { createFilters } from '@/utils/filters';

export default {
  categoriesCount: state => { return state.categories === null ? 0 : state.categories.length },
  contentTypesCount: state => { return state.contentTypes === null ? 0 : state.contentTypes.length },
  postsCount: state => { return state.posts === null ? 0 : state.posts.length },
  socialMediaCount: state => { return state.socialMedia === null ? 0 : state.socialMedia.length },
  socialMediaOwnersCount: state => { return state.socialMediaOwners === null ? 0 : state.socialMediaOwners.length },
  usersCount: state => { return state.users === null ? 0 : state.users.length },

  getPosts: (state) => (filters) => {
    if (!filters) return state.posts;

    return createFilters(filters)(state.posts);
  }
};

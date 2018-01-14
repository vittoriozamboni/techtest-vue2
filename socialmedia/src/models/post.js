import store from '@/store';
import { DATA_SET_POSTS } from '@/store/actionTypes';

import BaseEntity from './base';

import { CategoryEntity } from './category';
import { ContentTypeEntity } from './contentType';
import { SocialMediaEntity } from './socialMedia';
import { UserEntity } from './user';

export class PostEntity extends BaseEntity {

  constructor (properties) {
    super('post', {
      baseUrl: `post/`,
      ...properties
    });
  }

  static emptyEntry () {
    return {
      id: null,
      title: '',
      content: '',
      category: null,
      social_media: null,
      created_by: null,
      content_types: [],
      tags: []
    };
  }

  fetchData (options) {
    return super.fetch({
      actionSet: DATA_SET_POSTS,
      ...options
    });
  }

  fetch (options) {
    const dependencies = [];
    if (store.state.categories === null) {
      const category = new CategoryEntity({ vm: this.vm });
      dependencies.push(category.fetch({ keepLoading: true, ...options }));
    }
    if (store.state.contentTypes === null) {
      const contentType = new ContentTypeEntity({ vm: this.vm });
      dependencies.push(contentType.fetch({ keepLoading: true, ...options }));
    }
    if (store.state.socialMedia === null) {
      const socialMedia = new SocialMediaEntity({ vm: this.vm });
      dependencies.push(socialMedia.fetch({ keepLoading: true, ...options }));
    }
    if (store.state.users === null) {
      const user = new UserEntity({ vm: this.vm });
      dependencies.push(user.fetch({ keepLoading: true, ...options }));
    }
    return Promise.all(dependencies).then(response => {
      this.fetchData(options);
    });
  }

};

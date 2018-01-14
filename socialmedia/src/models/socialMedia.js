import store from '@/store';
import { DATA_SET_SOCIAL_MEDIA } from '@/store/actionTypes';

import BaseEntity from './base';

import { SocialMediaOwnerEntity } from './socialMediaOwner';

export class SocialMediaEntity extends BaseEntity {

  constructor (properties) {
    super('socialMedia', {
      baseUrl: `social-media/`,
      ...properties
    });
  }

  static emptyEntry () {
    return {
      id: null,
      name: '',
      website: '',
      owner: null
    };
  }

  fetchData (options) {
    return super.fetch({
      actionSet: DATA_SET_SOCIAL_MEDIA,
      ...options
    });
  }

  fetch (options) {
    if (store.state.socialMediaOwners === null) {
      const socialMediaOwners = new SocialMediaOwnerEntity({ vm: this.vm });
      return socialMediaOwners.fetch(options).then(() => this.fetchData(options));
    } else {
      return this.fetchData(options);
    }
  }

};

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

  fetchData (options, resolve, reject) {
    super.fetch({
      actionSet: DATA_SET_SOCIAL_MEDIA,
      ...options
    }, resolve, reject);
  }

  fetch (options, resolve, reject) {
    if (store.state.socialMediaOwners === null) {
      const socialMediaOwners = new SocialMediaOwnerEntity({ vm: this.vm });
      socialMediaOwners.fetch(options, () => this.fetchData(options, resolve, reject), reject);
    } else {
      this.fetchData(options, resolve, reject);
    }
  }

};

import { DATA_SET_SOCIAL_MEDIA_OWNERS } from '@/store/actionTypes';

import BaseEntity from './base';

export class SocialMediaOwnerEntity extends BaseEntity {

  constructor (properties) {
    super('socialMediaOwner', {
      baseUrl: `owner/`,
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

  fetch (options) {
    return super.fetch({
      actionSet: DATA_SET_SOCIAL_MEDIA_OWNERS,
      ...options
    });
  }

};

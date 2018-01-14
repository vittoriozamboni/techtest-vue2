import { DATA_SET_CONTENT_TYPES } from '@/store/actionTypes';

import BaseEntity from './base';

export class ContentTypeEntity extends BaseEntity {

  constructor (properties) {
    super('contentType', {
      baseUrl: `content-type/`,
      ...properties
    });
  }

  static emptyEntry () {
    return {
      id: null,
      name: '',
    };
  }

  fetch (options, resolve, reject) {
    super.fetch({
      actionSet: DATA_SET_CONTENT_TYPES,
      ...options
    }, resolve, reject);
  }

};

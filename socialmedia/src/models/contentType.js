import { DATA_SET_CONTENT_TYPES } from '@/store/actionTypes';

import BaseEntity from './base';

export default class CategoryEntity extends BaseEntity {

  constructor (properties) {
    super('contentType', {
      baseUrl: `content-type/`,
      ...properties
    });
  }

  fetch (options, resolve, reject) {
    super.fetch({
      actionSet: DATA_SET_CONTENT_TYPES,
      ...options
    }, resolve, reject);
  }

  save (entry, resolve, reject) {
    super.save(entry, resolve, reject);
  }

  delete (id, resolve, reject) {
    super.delete(id, resolve, reject);
  }

};

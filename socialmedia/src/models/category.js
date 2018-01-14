import { DATA_SET_CATEGORIES } from '@/store/actionTypes';

import BaseEntity from './base';

export default class CategoryEntity extends BaseEntity {

  constructor (properties) {
    super('category', {
      baseUrl: `category/`,
      ...properties
    });
  }

  fetch (options, resolve, reject) {
    super.fetch({
      actionSet: DATA_SET_CATEGORIES,
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

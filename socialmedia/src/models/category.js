import { DATA_SET_CATEGORIES } from '@/store/actionTypes';

import BaseEntity from './base';

export class CategoryEntity extends BaseEntity {

  constructor (properties) {
    super('category', {
      baseUrl: `category/`,
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
      actionSet: DATA_SET_CATEGORIES,
      ...options
    }, resolve, reject);
  }

};

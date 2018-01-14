import { DATA_SET_USERS } from '@/store/actionTypes';

import BaseEntity from './base';

export class UserEntity extends BaseEntity {

  constructor (properties) {
    super('user', {
      baseUrl: `user/`,
      ...properties
    });
  }

  static emptyEntry () {
    return {
      id: null,
      username: '',
      first_name: '',
      last_name: '',
      full_name: '',
    };
  }

  fetch (options) {
    return super.fetch({
      actionSet: DATA_SET_USERS,
      ...options
    });
  }

};

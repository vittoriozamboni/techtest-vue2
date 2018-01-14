import store from '@/store';

import { APPLICATION_SET_STATUS } from '@/store/actionTypes';

export default {
  setStatus: function (status) {
    store.dispatch(APPLICATION_SET_STATUS, { status });
  }
};

import store from '@/store';
import Application from '@/utils/application';
import axios from 'axios';

export default class BaseEntity {

  constructor (name, properties) {
    this.name = name;
    this.baseUrl = properties.baseUrl || '';
    this.vm = properties.vm;
  }

  getUrl (urlType, id) {
    switch (urlType) {
      case 'detail':
      case 'edit':
      case 'delete':
        return `${this.baseUrl}${id}/`;
      case 'getAll':
      case 'add':
        return this.baseUrl;
    };
  }

  fetch (options) {
    Application.setStatus('loading');
    return axios.get(this.getUrl('getAll'), { timeout: 5000 }).then(response => {
      store.dispatch(options.actionSet, { data: response.data });
      if (!options.keepLoading) {
        Application.setStatus('loaded');
      }
    }).catch(response => {
      if (response.response === undefined) {
        // assuming timeout
      }
      Application.setStatus('not-loaded');
      console.error('Impossible to load data: ', response);
      throw response.response;
    });
  }

  delete (id) {
    Application.setStatus('loading');
    return axios.delete(this.getUrl('delete', id)).then(response => {
      Application.setStatus('loaded');
    }).catch(response => {
      Application.setStatus('not-loaded');
      throw response.response;
    });
  }

  save (entry) {
    Application.setStatus('loading');
    if (entry.id) {
      // EDIT
      return axios.put(this.getUrl('edit', entry.id), entry).then(response => {
        Application.setStatus('loaded');
      }).catch(response => {
        Application.setStatus('not-loaded');
        throw response.response;
      });
    } else {
      // ADD
      return axios.post(this.getUrl('add'), entry).then(response => {
        Application.setStatus('loaded');
      }).catch(response => {
        Application.setStatus('not-loaded');
        throw response.response;
      });
    }
  }

  vmError () {
    console.error(`Trying to access to vm from ${this.name} instance.`);
  }
};

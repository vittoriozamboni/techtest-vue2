import Application from '@/utils/application';

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

  fetch (options, resolve, reject) {
    if (!this.vm) return this.vmError();
    const vm = this.vm;

    Application.setStatus('loading');
    vm.$http.get(this.getUrl('getAll'), { timeout: 5000 }).then(response => {
      vm.$store.dispatch(options.actionSet, { data: response.body });
      Application.setStatus('loaded');
      resolve && resolve(response);
    }, response => {
      if (response.ok === false && response.body === '') {
        // assuming timeout
      }
      Application.setStatus('not-loaded');
      reject && reject(response);
      console.error('Impossible to load data: ', response);
    });
  }

  delete (id, resolve, reject) {
    if (!this.vm) return this.vmError();
    const vm = this.vm;

    Application.setStatus('loading');
    vm.$http.delete(this.getUrl('delete', id)).then(response => {
      Application.setStatus('loaded');
      resolve && resolve(response);
    }, response => {
      Application.setStatus('not-loaded');
      reject && reject(response);
    });
  }

  save (entry, resolve, reject) {
    if (!this.vm) return this.vmError();
    const vm = this.vm;

    Application.setStatus('loading');
    if (entry.id) {
      // EDIT
      vm.$http.put(this.getUrl('edit', entry.id), entry).then(response => {
        Application.setStatus('loaded');
        resolve && resolve(response);
      }, response => {
        Application.setStatus('not-loaded');
        reject && reject(response);
      });
    } else {
      // ADD
      vm.$http.post(this.getUrl('add'), entry).then(response => {
        Application.setStatus('loaded');
        resolve && resolve(response);
      }, response => {
        Application.setStatus('not-loaded');
        reject && reject(response);
      });
    }
  }

  vmError () {
    console.error(`Trying to access to vm from ${this.name} instance.`);
  }
};

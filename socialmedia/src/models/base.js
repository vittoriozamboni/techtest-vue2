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

  fetch (options) {
    if (!this.vm) return this.vmError();
    const vm = this.vm;

    Application.setStatus('loading');
    return vm.$http.get(this.getUrl('getAll'), { timeout: 5000 }).then(response => {
      vm.$store.dispatch(options.actionSet, { data: response.body });
      Application.setStatus('loaded');
    }, response => {
      if (response.ok === false && response.body === '') {
        // assuming timeout
      }
      Application.setStatus('not-loaded');
      console.error('Impossible to load data: ', response);
    });
  }

  delete (id) {
    if (!this.vm) return this.vmError();
    const vm = this.vm;

    Application.setStatus('loading');
    return vm.$http.delete(this.getUrl('delete', id)).then(response => {
      Application.setStatus('loaded');
    }, response => {
      Application.setStatus('not-loaded');
    });
  }

  save (entry) {
    if (!this.vm) return this.vmError();
    const vm = this.vm;

    Application.setStatus('loading');
    if (entry.id) {
      // EDIT
      return vm.$http.put(this.getUrl('edit', entry.id), entry).then(response => {
        Application.setStatus('loaded');
      }, response => {
        Application.setStatus('not-loaded');
      });
    } else {
      // ADD
      return vm.$http.post(this.getUrl('add'), entry).then(response => {
        Application.setStatus('loaded');
      }, response => {
        Application.setStatus('not-loaded');
      });
    }
  }

  vmError () {
    console.error(`Trying to access to vm from ${this.name} instance.`);
  }
};

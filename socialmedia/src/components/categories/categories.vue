<template>
  <div class="container">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">Categories</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-small is-success">Add category</a>
        </div>
      </div>
    </nav>

    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td><a class="button is-small is-primary is-outlined"><i class="fa fa-edit"></i></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { APPLICATION_SET_STATUS, DATA_SET_CATEGORIES } from '@/store/actionTypes';

export default {
  name: 'categories',
  components: {
  },
  created () {
    this.fetchData();
  },
  computed: {
    categories: function () { return this.$store.state.categories },
    categoriesCount: function () { return this.$store.getters.categoriesCount },
  },
  methods: {
    fetchData () {
      const store = this.$store;

      store.dispatch(APPLICATION_SET_STATUS, { status: 'loading' });
      this.$http.get('category/', { timeout: 5000 }).then(response => {
        console.log(response);
        store.dispatch(DATA_SET_CATEGORIES, { data: response.body });
        store.dispatch(APPLICATION_SET_STATUS, { status: 'loaded' });
      }, response => {
        if (response.ok === false && response.body === '') {
          // assuming timeout
          store.dispatch(APPLICATION_SET_STATUS, { status: 'not-loaded' });
        }
        console.error('Impossible to load data: ', response);
      });
    }
  }
};
</script>

<style lang="scss">
.table {
  thead {
    th:first-of-type {
      width: 50px;
    }
    th:last-of-type {
      width: 50px;
    }
  }
  tbody {
    tr {
      td:first-of-type {
        text-align: right;
      }
    }
  }
}
</style>
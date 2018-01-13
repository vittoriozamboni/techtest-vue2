<template>
  <div class="homepage">
    <h1 class="title welcome-title">Welcome to Social Media Manager!</h1>

    <section class="section">
      <div class="container">
        <h3>There {{ categoriesCount === 1 ? 'is' : 'are' }} {{ categoriesCount }} categor{{ categoriesCount === 1 ? 'y' : 'ies' }} loaded.</h3>
        <categories/>
      </div>
    </section>
  </div>
</template>

<script>

import { APPLICATION_SET_STATUS, DATA_SET_CATEGORIES } from '@/store/actionTypes';

import categories from './categories';

export default {
  name: 'home-page',
  components: {
    categories
  },
  created () {
    this.fetchData();
  },
  computed: {
    categoriesCount: function () { return this.$store.getters.categoriesCount },
  },
  methods: {
    fetchData () {
      const store = this.$store;

      store.dispatch(APPLICATION_SET_STATUS, { status: 'loading' });
      this.$http.get('category/').then(response => {
        console.log(response);
        store.dispatch(DATA_SET_CATEGORIES, { data: response.body });
      }, response => {

      }).finally(() => {
        store.dispatch(APPLICATION_SET_STATUS, { status: 'loaded' });
      });
    }
  }
};
</script>

<style lang="scss">
.homepage {
  .welcome-title {
    text-align: center;
  }
}
</style>
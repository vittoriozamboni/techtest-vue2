<template>
  <div class="homepage">
    <h1 class="title welcome-title">Welcome to Social Media Manager!</h1>

    <section class="section">
      <div class="container">
        <h3>There {{ categoriesCount === 1 ? 'is' : 'are' }} {{ categoriesCount }} categor{{ categoriesCount === 1 ? 'y' : 'ies' }} loaded.</h3>
        <home-page-categories/>
      </div>
    </section>
  </div>
</template>

<script>

import { APPLICATION_SET_STATUS, DATA_SET_CATEGORIES } from '@/store/actionTypes';

import homePageCategories from './homePageCategories';

export default {
  name: 'home-page',
  components: {
    homePageCategories
  },
  created () {
    if (this.$store.state.categories === null) {
      this.fetchData();
    }
  },
  computed: {
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
.homepage {
  .welcome-title {
    text-align: center;
  }
}
</style>
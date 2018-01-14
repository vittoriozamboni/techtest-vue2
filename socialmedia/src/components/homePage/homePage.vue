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

import { CategoryEntity } from '@/models/category';

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
      const Category = new CategoryEntity({ vm: this });
      Category.fetch();
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
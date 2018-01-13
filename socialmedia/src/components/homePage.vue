<template>
  <div class="homepage">
    <h2 class="welcome-title">Welcome to Social Media Manager!</h2>

    <section class="section">
      <div class="container">
        <h3>There {{ categoriesCount === 1 ? 'is' : 'are' }} {{ categoriesCount }} categor{{ categoriesCount === 1 ? 'y' : 'ies' }} loaded.</h3>
        <categories/>
      </div>
    </section>
  </div>
</template>

<script>

import categories from './categories/categories';

export default {
  name: 'home-page',
  components: {
    categories
  },
  computed: {
    categoriesCount: function () { return this.$store.getters.categoriesCount },
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
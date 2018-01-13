<template>
  <div class="homepage">
    <h2 class="welcome-title">{{ msg }}</h2>
    There {{ categoriesCount === 1 ? 'is' : 'are' }} {{ categoriesCount }} categor{{ categoriesCount === 1 ? 'y' : 'ies' }} loaded.
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
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
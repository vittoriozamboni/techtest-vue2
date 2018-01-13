<template>
  <div class="tile is-ancestor">
    <home-page-category v-for="category in categories" :category="category" :key="category.id"></home-page-category>
  </div>
</template>

<script>
import homePageCategory from './homePageCategory';

export default {
  name: 'home-page-categories',
  components: {
    homePageCategory
  },
  computed: {
    categories: function () {
      return this.$store.state.categories;
    }
  }
};

</script>
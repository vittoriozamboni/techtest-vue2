<template>
  <div class="tile is-ancestor">
    <category v-for="category in categories" :category="category" :key="category.id"></category>
  </div>
</template>

<script>
import category from './category';

export default {
  name: 'categories',
  components: {
    category
  },
  computed: {
    categories: function () {
      return this.$store.state.categories;
    }
  }
};

</script>
<template>
  <div class="container-fluid field is-grouped is-grouped-multiline">
    <div class="control">
      <div class="tags has-addons"
        @click="setCategory(null);"
      >
        <span class="tag is-primary"><i class="fa fa-times"></i></span>
        <span class="tag">Remove</span>
      </div>
    </div>

    <div class="control">
      <span class="tag is-primary is-medium"
        v-for="category in categories" :category="category" :key="category.id"
        @click="setCategory(category.id);"
      >
        {{ category.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page-categories',
  components: {
  },
  computed: {
    categories: function () {
      return this.$store.state.categories;
    }
  },
  methods: {
    setCategory: function (categoryId) {
      this.$emit('homeFilterPosts', categoryId);
    }
  }
};

</script>

<style lang="scss">
.tag {
  margin-right: 1em;
  cursor: pointer;
}
</style>
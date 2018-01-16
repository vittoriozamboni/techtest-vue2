<template>
  <div class="homepage">
    <h1 class="title welcome-title">Welcome to Social Media Manager!</h1>

    <section class="section">
      <div class="container-fluid">
        <h3>There {{ categoriesCount === 1 ? 'is' : 'are' }} {{ categoriesCount }} categor{{ categoriesCount === 1 ? 'y' : 'ies' }} loaded.</h3>
        <home-page-categories class="section" v-on:homeFilterPosts="filterPosts" />
        <home-page-posts :posts="getPosts" />
      </div>
    </section>
  </div>
</template>

<script>

import { PostEntity } from '@/models/post';

import homePageCategories from './homePageCategories';
import homePagePosts from './homePagePosts';

export default {
  name: 'home-page',
  components: {
    homePageCategories,
    homePagePosts
  },
  data () {
    return {
      filterCategory: null,
      posts: []
    };
  },
  created () {
    if (this.$store.state.posts === null) {
      this.fetchData();
    }
  },
  computed: {
    categoriesCount: function () { return this.$store.getters.categoriesCount },
    getPosts: function () { return this.filterCategory ? this.posts : this.$store.getters.getPosts() }
  },
  methods: {
    fetchData () {
      const Post = new PostEntity();
      return Post.fetch();
    },
    filterPosts: function (categoryId) {
      this.filterCategory = categoryId;
    },
  },
  watch: {
    filterCategory: function () {
      if (!this.filterCategory) this.posts = this.$store.state.posts;

      this.posts = this.$store.getters.getPosts({ category: this.filterCategory });
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
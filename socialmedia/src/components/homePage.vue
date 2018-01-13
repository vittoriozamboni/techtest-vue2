<template>
  <div class="homepage">
    <h2 class="welcome-title">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
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
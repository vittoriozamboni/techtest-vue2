<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import appNavbar from './appNavbar.vue';

export default {
  name: 'app',
  components: { appNavbar },
  data () {
    return {};
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

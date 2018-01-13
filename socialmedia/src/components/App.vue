<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

import appNavbar from './scaffold/appNavbar.vue';
import appFooter from './scaffold/appFooter.vue';

export default {
  name: 'app',
  components: { appNavbar, appFooter },
  data () {
    return {};
  }
};
</script>

<style>
</style>

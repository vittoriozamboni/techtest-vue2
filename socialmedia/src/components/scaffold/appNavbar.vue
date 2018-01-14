<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../../assets/images/logo.png" alt="Social Media Manager made with VUE" width="112" height="28">
      </router-link>
      <div class="navbar-burger burger" data-target="navbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Administration
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/categories">Categories</router-link>
            <router-link class="navbar-item" to="/content-types">Content Types</router-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Docs
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/">
              Overview
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-navbar',
  data () {
    return {};
  }
};
</script>

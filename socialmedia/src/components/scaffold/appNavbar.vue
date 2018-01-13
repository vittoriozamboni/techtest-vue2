<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../../assets/images/logo.png" alt="Social Media Manager made with VUE" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Sections
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/categories">Categories</router-link>
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

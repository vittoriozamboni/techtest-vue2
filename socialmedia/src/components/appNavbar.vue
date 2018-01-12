<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo.png" alt="Social Media Manager made with VUE" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarTransparent">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navbarTransparent" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
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
  name: 'appNavbar',
  data () {
    return {};
  }
};
</script>
</style>

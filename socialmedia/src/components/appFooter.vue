<template>
  <nav class="navbar is-fixed-bottom is-dark">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="tags has-addons">
          <span class="tag">Application Status</span>
          <span class="tag application-status-label" :class="applicationStatusClass">{{ applicationStatusLabel }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {};
  },
  computed: {
    applicationStatus () {
      return this.$store.state.applicationStatus;
    },
    applicationStatusLabel () {
      return this.$store.state.applicationStatus.replace('-', ' ');
    },
    applicationStatusClass () {
      return {
        'is-success': this.applicationStatus === 'loaded',
        'is-warning': this.applicationStatus === 'loading',
        'is-danger': this.applicationStatus === 'not-loaded',
      };
    }
  }

};
</script>

<style lang="scss">
.application-status-label {
  text-transform: capitalize;
}
</style>

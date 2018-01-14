<template>
  <div class="modal" v-if="show" :class="{'is-active': show}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"><slot name="title">Modal title</slot></p>
        <button v-if="showClose" class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <slot name="body">
          Modal body
        </slot>
      </section>
      <footer v-if="showFooter" class="modal-card-foot">
        <slot name="footer">
          Modal footer
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default: function () {}
    }
  },
  data () {
    return {};
  },
  methods: {
    closeModal: function () {
      this.$emit('closeModal');
      this.onClose();
    }
  }
};
</script>

<style lang="scss">
  footer.modal-card-foot {
    justify-content: flex-end;
  }
</style>
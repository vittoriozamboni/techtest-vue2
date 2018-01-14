<template>
  <modal class="modal category-delete-confirm"
    v-bind:show="showCategoryDeleteConfirmModal"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage category</h1>
    <div slot="body">
      <p class="title is-5">Are you sure to delete the category "{{ categoryEdit.name }}"?</p>
      <p class="subtitle is-6">This operation can't be undone.</p>
    </div>
    <div slot="footer">
      <button class="button is-danger" @click="deleteCategoryConfirm">Delete</button>
      <button class="button" @click="hideModal">Cancel</button>
    </div>
  </modal>
</template>

<script>
import { APPLICATION_SET_STATUS } from '@/store/actionTypes';

import Modal from '@/components/modal';

export default {
  name: 'category-delete-modal',
  props: ['showCategoryDeleteConfirmModal', 'categoryEdit'],
  components: {
    Modal,
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideCategoryDeleteConfirmModal', { fetchData });
    },
    deleteCategoryConfirm: function () {
      const category = Object.assign({}, this.categoryEdit);
      const store = this.$store;

      store.dispatch(APPLICATION_SET_STATUS, { status: 'loading' });

      this.$http.delete(`category/${category.id}/`).then(response => {
        store.dispatch(APPLICATION_SET_STATUS, { status: 'loaded' });
        this.hideModal(true);
      }, response => {
        store.dispatch(APPLICATION_SET_STATUS, { status: 'not-loaded' });
        this.hideModal();
      });
    },
  }
};
</script>

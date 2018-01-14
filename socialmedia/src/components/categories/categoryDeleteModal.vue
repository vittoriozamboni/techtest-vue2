<template>
  <modal class="modal category-delete-confirm"
    v-bind:show="showCategoryDeleteConfirmModal"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Category</h1>
    <div slot="body">
      <p class="title is-5">Are you sure to delete the category "{{ formEntry.name }}"?</p>
      <p class="subtitle is-6">This operation can't be undone.</p>
    </div>
    <div slot="footer">
      <button class="button is-danger" @click="deleteCategoryConfirm">Delete</button>
      <button class="button" @click="hideModal()">Cancel</button>
    </div>
  </modal>
</template>

<script>

import { CategoryEntity as EntityClass } from '@/models/category';
import Modal from '@/components/modal';

export default {
  name: 'category-delete-modal',
  props: ['showCategoryDeleteConfirmModal', 'formEntry'],
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
      const entity = new EntityClass({ vm: this });

      entity.delete(this.formEntry.id, response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },
  }
};
</script>

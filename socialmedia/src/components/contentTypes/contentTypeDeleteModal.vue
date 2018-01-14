<template>
  <modal class="modal content-type-delete-confirm"
    v-bind:show="showContentTypeDeleteConfirmModal"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Content Type</h1>
    <div slot="body">
      <p class="title is-5">Are you sure to delete the content type "{{ formEntry.name }}"?</p>
      <p class="subtitle is-6">This operation can't be undone.</p>
    </div>
    <div slot="footer">
      <button class="button is-danger" @click="deleteContentTypeConfirm">Delete</button>
      <button class="button" @click="hideModal()">Cancel</button>
    </div>
  </modal>
</template>

<script>

import { ContentTypeEntity as EntityClass } from '@/models/contentType';
import Modal from '@/components/modal';

export default {
  name: 'content-type-delete-modal',
  props: ['showContentTypeDeleteConfirmModal', 'formEntry'],
  components: {
    Modal,
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideContentTypeDeleteConfirmModal', { fetchData });
    },
    deleteContentTypeConfirm: function () {
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

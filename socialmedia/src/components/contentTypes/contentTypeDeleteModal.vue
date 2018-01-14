<template>
  <modal class="modal content-type-delete-confirm"
    v-bind:show="entryModalDeleteConfirmVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Delete Content Type</h1>
    <div slot="body">
      <article class="message is-danger">
        <div class="message-body">
          <p>Are you sure to delete the content type "{{ formEntry.name }}"?</p>
          <p class="is-size-7">This operation can't be undone.</p>
        </div>
      </article>
    </div>
    <div slot="footer">
      <button class="button is-danger" @click="deleteEntryConfirm">Delete</button>
      <button class="button" @click="hideModal()">Cancel</button>
    </div>
  </modal>
</template>

<script>

import { ContentTypeEntity as EntityClass } from '@/models/contentType';
import Modal from '@/components/modal';

export default {
  name: 'content-type-delete-modal',
  props: ['entryModalDeleteConfirmVisible', 'formEntry'],
  components: {
    Modal,
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideEntryDeleteConfirmModal', { fetchData });
    },
    deleteEntryConfirm: function () {
      const entity = new EntityClass({ vm: this });

      return entity.delete(this.formEntry.id).then(response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },
  }
};
</script>

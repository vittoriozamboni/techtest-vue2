<template>
  <modal class="modal post-delete-confirm"
    v-bind:show="entryModalDeleteConfirmVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Delete Post</h1>
    <div slot="body">
      <article class="message is-danger">
        <div class="message-body">
          <p>Are you sure to delete the post "{{ formEntry.title }}"?</p>
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

import { PostEntity as EntityClass } from '@/models/post';
import Modal from '@/components/modal';

export default {
  name: 'post-delete-modal',
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
      const entity = new EntityClass();

      return entity.delete(this.formEntry.id).then(response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },
  }
};
</script>

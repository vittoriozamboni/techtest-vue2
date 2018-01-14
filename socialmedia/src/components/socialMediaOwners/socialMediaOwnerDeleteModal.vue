<template>
  <modal class="modal social-media-owner-delete-confirm"
    v-bind:show="entryModalDeleteConfirmVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Delete Social Media Owner</h1>
    <div slot="body">
      <article class="message is-danger">
        <div class="message-body">
          <p>Are you sure to delete the social media owner "{{ formEntry.name }}"?</p>
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

import { SocialMediaOwnerEntity as EntityClass } from '@/models/socialMediaOwner';
import Modal from '@/components/modal';

export default {
  name: 'social-media-owner-delete-modal',
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

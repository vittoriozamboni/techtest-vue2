<template>
  <modal class="modal user-delete-confirm"
    v-bind:show="entryModalDeleteConfirmVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Delete User</h1>
    <div slot="body">
      <article class="message is-danger">
        <div class="message-body">
          <p>Are you sure to delete the user "{{ formEntry.full_name }}"?</p>
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

import { UserEntity as EntityClass } from '@/models/user';
import Modal from '@/components/modal';

export default {
  name: 'user-delete-modal',
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

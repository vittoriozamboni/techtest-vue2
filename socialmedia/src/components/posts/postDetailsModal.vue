<template>
  <modal class="modal post-delete-confirm"
    v-bind:show="entryModalDetailsVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Post Details</h1>
    <div slot="body">
      <post-details :post="detailsEntry"></post-details>
    </div>
    <div slot="footer">
      <button class="button is-primary" @click="hideModal()">Close</button>
    </div>
  </modal>
</template>

<script>

import Modal from '@/components/modal';
import PostDetails from '@/components/posts/postDetails';

export default {
  name: 'post-detail-modal',
  props: ['entryModalDetailsVisible', 'detailsEntry'],
  components: {
    Modal,
    PostDetails
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideEntryDetailsModal');
    }
  }
};
</script>

<template>
  <modal class="modal content-type-form"
    v-bind:show="showContentTypeModal"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Content Type</h1>
    <div slot="body">

      <div v-if="formEntry.id" class="title is-5" >Edit Content Type (id: {{ formEntry.id }})</div>
      <div v-else class="title is-5" >Add Content Type</div>

      <div class="field is-horizontal">

        <div class="field-label is-small">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-small" v-model="formEntry.name" type="text" placeholder="Content Type name">
            </div>
          </div>
        </div>

      </div>

    </div>
    <div slot="footer">
      <button class="button is-success" @click="saveEntry">Save changes</button>
      <button class="button" @click="hideModal()">Cancel</button>
    </div>
  </modal>
</template>

<script>

import { ContentTypeEntity as EntityClass } from '@/models/contentType';
import Modal from '@/components/modal';


export default {
  name: 'content-type-edit-modal',
  props: ['showContentTypeModal', 'formEntry'],
  components: {
    Modal,
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideContentTypeModal', { fetchData });
    },
    saveEntry: function () {
      const entity = new EntityClass({ vm: this });

      entity.save(this.formEntry, response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },

  }
};
</script>

